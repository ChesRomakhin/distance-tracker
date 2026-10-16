// JSON export / import of the GM's data. Pure functions — no React here.
//
// File ids are the source device's ids. They only link records inside the
// file and are always renumbered on import.

import { makeAdversary, makeCharacter, makeEncounter, findEncounterAdversary } from './constants';

const APP_ID = 'dh-tracker';
export const EXPORT_VERSION = 1;

// MIGRATIONS[v] turns a version-v file into a version-(v + 1) file.
const MIGRATIONS = {};

// ── Helpers ───────────────────────────────────────────────────────────────────

export const normName = s => (s || '').trim().toLowerCase();

// "Name (2)", "Name (3)"… — first one not in `taken` (a Set of normName values).
export function uniqueName(name, taken) {
  let n = 2;
  while (taken.has(normName(`${name} (${n})`))) n++;
  return `${name} (${n})`;
}

// JSON with sorted keys, so key order doesn't affect comparison.
export function canon(v) {
  if (Array.isArray(v)) return `[${v.map(canon).join(',')}]`;
  if (v && typeof v === 'object') {
    return `{${Object.keys(v).sort().map(k => `${JSON.stringify(k)}:${canon(v[k])}`).join(',')}}`;
  }
  return JSON.stringify(v ?? null);
}

const sameContent = (a, b, make) =>
  canon(make({ ...a, id: null })) === canon(make({ ...b, id: null }));

const today = () => new Date().toISOString().slice(0, 10);

// ── Export ────────────────────────────────────────────────────────────────────

const envelope = (kind, data) => ({
  app: APP_ID,
  version: EXPORT_VERSION,
  kind,
  exportedAt: new Date().toISOString(),
  adversaries: [], characters: [], encounters: [],
  maps: [], propTemplates: [],   // reserved for phases 3–4
  ...data,
});

// Everything. Encounters keep referencing library adversaries in the same file.
export function buildBackup(state) {
  return envelope('backup', {
    adversaries: state.adversaries,
    characters:  state.characters,
    encounters:  state.encounters.map(e => ({ ...e, adversaries: e.adversaries ?? [] })),
  });
}

// An encounter that carries copies of every adversary it uses.
function selfContained(enc, library) {
  const entries = enc.entries.filter(en => findEncounterAdversary(enc, en.adversaryId, library));
  const ids = [...new Set(entries.map(en => en.adversaryId))];
  return { ...enc, entries, adversaries: ids.map(id => findEncounterAdversary(enc, id, library)) };
}

export function buildSelection(state, { adversaryIds = [], characterIds = [], encounterIds = [] }) {
  const pick = (list, ids) => list.filter(x => ids.includes(x.id));
  return envelope('selection', {
    adversaries: pick(state.adversaries, adversaryIds),
    characters:  pick(state.characters, characterIds),
    encounters:  pick(state.encounters, encounterIds).map(e => selfContained(e, state.adversaries)),
  });
}

export const backupFileName    = () => `dh-backup-${today()}.json`;
export const selectionFileName = () => `dh-export-${today()}.json`;
export const encounterFileName = enc => {
  const slug = enc.name.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
  return `dh-encounter-${slug || 'encounter'}.json`;
};

export function downloadJson(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
}

// ── Import: parse ─────────────────────────────────────────────────────────────

const list = v => (Array.isArray(v) ? v.filter(x => x && typeof x === 'object') : []);

// Records without an id get a temporary negative one so they can still be linked.
const withIds = (items, make) => items.map((x, i) => make({ ...x, id: x.id ?? -(i + 1) }));

function normalize(data) {
  return {
    ...data,
    adversaries: withIds(list(data.adversaries), makeAdversary),
    characters:  withIds(list(data.characters), makeCharacter),
    encounters:  withIds(list(data.encounters), makeEncounter).map(e => ({
      ...e,
      name: e.name || 'Imported encounter',
      adversaries: withIds(list(e.adversaries), makeAdversary),
      entries: list(e.entries).map(en => ({
        adversaryId: en.adversaryId,
        count: Math.max(1, Math.floor(Number(en.count)) || 1),
      })),
    })),
  };
}

// → { file } or { error }
export function parseImport(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return { error: 'This file is not valid JSON.' };
  }
  if (!data || typeof data !== 'object' || data.app !== APP_ID) {
    return { error: 'This is not a DH Tracker export file.' };
  }
  let v = data.version;
  if (!Number.isInteger(v) || v < 1) return { error: 'The file has no valid version.' };
  if (v > EXPORT_VERSION) {
    return { error: 'This file comes from a newer version of DH Tracker. Update the app and try again.' };
  }
  while (v < EXPORT_VERSION) data = MIGRATIONS[v++](data);
  return { file: normalize(data) };
}

// ── Import: conflicts ─────────────────────────────────────────────────────────

// Library kinds that can clash by name. Phases 3–4 add maps and prop templates.
const LIBRARIES = [
  { kind: 'adversary', fileKey: 'adversaries', stateKey: 'adversaries', make: makeAdversary },
  { kind: 'character', fileKey: 'characters',  stateKey: 'characters',  make: makeCharacter },
];

// Same name as an existing library record but different content.
// Identical records are not conflicts — they are treated as already present.
export function findConflicts(state, file) {
  return LIBRARIES.flatMap(({ kind, fileKey, stateKey, make }) =>
    file[fileKey].flatMap(incoming => {
      const existing = state[stateKey].find(x => normName(x.name) === normName(incoming.name));
      return existing && !sameContent(existing, incoming, make)
        ? [{ kind, incoming, existing }]
        : [];
    }),
  );
}

// ── Import: apply ─────────────────────────────────────────────────────────────

// resolutions[kind][fileId] = 'replace' | 'skip' | { rename: string }
// (unresolved conflicts are skipped). Returns { state, summary }.
export function applyImport(state, file, resolutions = {}) {
  let nextId = state.nextId;
  const summary = {
    added: { adversary: 0, character: 0, encounter: 0 },
    replaced: 0, renamed: 0, skipped: 0, unchanged: 0,
  };
  const next = { ...state };
  const idMaps = {};

  for (const { kind, fileKey, stateKey, make } of LIBRARIES) {
    const lib = state[stateKey];
    let out = [...lib];
    const idMap = idMaps[kind] = new Map();

    for (const inc of file[fileKey]) {
      const existing = lib.find(x => normName(x.name) === normName(inc.name));
      if (!existing) {
        const id = nextId++;
        out.push({ ...inc, id });
        idMap.set(inc.id, id);
        summary.added[kind]++;
        continue;
      }
      if (sameContent(existing, inc, make)) {
        idMap.set(inc.id, existing.id);
        summary.unchanged++;
        continue;
      }
      const res = resolutions[kind]?.[inc.id] ?? 'skip';
      if (res === 'replace') {
        // Keep the existing id so tokens and encounters stay linked.
        out = out.map(x => (x.id === existing.id ? { ...inc, id: existing.id } : x));
        idMap.set(inc.id, existing.id);
        summary.replaced++;
      } else if (res?.rename) {
        const id = nextId++;
        out.push({ ...inc, name: res.rename, id });
        idMap.set(inc.id, id);
        summary.renamed++;
      } else {
        idMap.set(inc.id, existing.id);   // links in the file fall back to the existing record
        summary.skipped++;
      }
    }
    next[stateKey] = out;
  }

  // Encounters are always added. Their own adversaries stay inside them.
  const encounters = file.encounters.map(enc => {
    const localIds = new Map();
    const adversaries = enc.adversaries.map(a => {
      const id = nextId++;
      localIds.set(a.id, id);
      return { ...a, id };
    });
    const entries = enc.entries
      .map(en => {
        const id = localIds.get(en.adversaryId) ?? idMaps.adversary.get(en.adversaryId);
        return id == null ? null : { ...en, adversaryId: id };
      })
      .filter(Boolean);
    const used = new Set(entries.map(en => en.adversaryId));
    summary.added.encounter++;
    return { ...enc, id: nextId++, entries, adversaries: adversaries.filter(a => used.has(a.id)) };
  });

  next.encounters = [...state.encounters, ...encounters];
  next.nextId = nextId;
  return { state: next, summary };
}
