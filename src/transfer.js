// JSON export / import of the GM's data. Pure functions — no React here.
//
// File ids are the source device's ids. They only link records inside the
// file and are always renumbered on import.

import {
  makeAdversary, makeCharacter, makeEncounter, makeMap, migrateEncounter, placementAdversary,
  DEFAULT_PX_PER_M,
} from './constants';

const APP_ID = 'dh-tracker';
export const EXPORT_VERSION = 2;

// MIGRATIONS[v] turns a version-v file into a version-(v + 1) file.
const MIGRATIONS = {
  // 1 → 2: roster encounters (entries) become placements without positions.
  1: data => ({
    ...data,
    version: 2,
    encounters: list(data.encounters).map(migrateEncounter),
  }),
};

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
  adversaries: [], characters: [], encounters: [], maps: [],
  propTemplates: [],   // reserved for phase 4
  ...data,
});

// Everything. Encounters keep referencing library adversaries and maps in the same file.
export function buildBackup(state) {
  return envelope('backup', {
    adversaries: state.adversaries,
    characters:  state.characters,
    encounters:  state.encounters.map(e => ({ ...e, adversaries: e.adversaries ?? [] })),
    maps:        state.maps,
  });
}

// An encounter that carries copies of every adversary it uses (all become local).
function selfContained(enc, library) {
  const copies = new Map();
  const placements = enc.placements.flatMap(p => {
    const a = placementAdversary(enc, p, library);
    if (!a) return [];
    copies.set(a.id, a);
    return [{ ...p, ref: { local: a.id } }];
  });
  return { ...enc, placements, adversaries: [...copies.values()] };
}

// Selected encounters bring their map along.
export function buildSelection(state, { adversaryIds = [], characterIds = [], encounterIds = [], mapIds = [] }) {
  const pick = (list, ids) => list.filter(x => ids.includes(x.id));
  const encounters = pick(state.encounters, encounterIds);
  const maps = new Set([...mapIds, ...encounters.map(e => e.mapId).filter(id => id != null)]);
  return envelope('selection', {
    adversaries: pick(state.adversaries, adversaryIds),
    characters:  pick(state.characters, characterIds),
    encounters:  encounters.map(e => selfContained(e, state.adversaries)),
    maps:        pick(state.maps, [...maps]),
  });
}

export const backupFileName    = () => `dh-backup-${today()}.json`;
export const selectionFileName = () => `dh-export-${today()}.json`;
export const fileNameFor = (kind, name) => {
  const slug = name.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '');
  return `dh-${kind}-${slug || kind}.json`;
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

function list(v) {
  return Array.isArray(v) ? v.filter(x => x && typeof x === 'object') : [];
}

const num = v => (typeof v === 'number' && Number.isFinite(v) ? v : null);

// Records without an id get a temporary negative one so they can still be linked.
const withIds = (items, make) => items.map((x, i) => make({ ...x, id: x.id ?? -(i + 1) }));

function normPlacement(p) {
  const r = p.ref && typeof p.ref === 'object' ? p.ref : {};
  const ref = r.local != null ? { local: r.local } : r.lib != null ? { lib: r.lib } : null;
  if (!ref) return null;
  const x = num(p.x), y = num(p.y);
  const placed = x != null && y != null;
  return {
    ref,
    label: typeof p.label === 'string' && p.label.trim() ? p.label : null,
    x: placed ? x : null,
    y: placed ? y : null,
    size: num(p.size) > 0 ? p.size : null,
  };
}

const normPoints = pts => list(pts).filter(p => num(p.x) != null && num(p.y) != null).map(p => ({ x: p.x, y: p.y }));

function normBackground(b) {
  if (!b || typeof b.url !== 'string' || !b.url.trim()) return null;
  return {
    url: b.url.trim(),
    pxPerMeter: num(b.pxPerMeter) > 0 ? b.pxPerMeter : DEFAULT_PX_PER_M,
    offset: { x: num(b.offset?.x) ?? 0, y: num(b.offset?.y) ?? 0 },
  };
}

function normalize(data) {
  return {
    ...data,
    adversaries: withIds(list(data.adversaries), makeAdversary),
    characters:  withIds(list(data.characters), makeCharacter),
    encounters:  withIds(list(data.encounters), makeEncounter).map(e => ({
      ...e,
      name: e.name || 'Imported encounter',
      mapId: e.mapId ?? null,
      adversaries: withIds(list(e.adversaries), makeAdversary),
      placements: list(e.placements).map(normPlacement).filter(Boolean),
      spawnPoints: normPoints(e.spawnPoints),
    })),
    maps: withIds(list(data.maps), makeMap).map(m => ({
      ...m,
      name: m.name || 'Imported map',
      background: normBackground(m.background),
      walls: list(m.walls), rooms: list(m.rooms), props: list(m.props),
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

// Library kinds that can clash by name. Phase 4 adds prop templates.
const LIBRARIES = [
  { kind: 'adversary', fileKey: 'adversaries', stateKey: 'adversaries', make: makeAdversary },
  { kind: 'character', fileKey: 'characters',  stateKey: 'characters',  make: makeCharacter },
  { kind: 'map',       fileKey: 'maps',        stateKey: 'maps',        make: makeMap },
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
    added: { adversary: 0, character: 0, encounter: 0, map: 0 },
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

  // Encounters are always added. Their own adversaries stay inside them;
  // their map joins the map list above (or links to an identical one).
  const encounters = file.encounters.map(enc => {
    const localIds = new Map();
    const adversaries = enc.adversaries.map(a => {
      const id = nextId++;
      localIds.set(a.id, id);
      return { ...a, id };
    });
    const placements = enc.placements
      .map(p => {
        const local = p.ref.local != null;
        const id = local ? localIds.get(p.ref.local) : idMaps.adversary.get(p.ref.lib);
        return id == null ? null : { ...p, ref: local ? { local: id } : { lib: id } };
      })
      .filter(Boolean);
    const used = new Set(placements.filter(p => p.ref.local != null).map(p => p.ref.local));
    summary.added.encounter++;
    return {
      ...enc,
      id: nextId++,
      mapId: enc.mapId != null ? idMaps.map.get(enc.mapId) ?? null : null,
      placements,
      adversaries: adversaries.filter(a => used.has(a.id)),
    };
  });

  next.encounters = [...state.encounters, ...encounters];
  next.nextId = nextId;
  return { state: next, summary };
}
