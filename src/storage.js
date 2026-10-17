// Tiny localStorage persistence layer for the GM's data.
// Players never read/write storage — they receive state over the BroadcastChannel.

import { SRD_UPDATES } from './srdUpdates';
import { canon } from './transfer';
import { migrateEncounter } from './constants';

const KEY = 'daggerheart-tracker-v1';

function applySrdUpdates(adversaries, updates) {
  const byName = new Map(updates.map(u => [u.name, u.fields]));
  return adversaries.map(a => {
    const fields = byName.get(a.name);
    if (!fields) return a;
    const next = { ...a };
    for (const [key, [from, to]] of Object.entries(fields)) {
      if (canon(a[key]) === canon(from)) next[key] = to;
    }
    return next;
  });
}

// Seed version of the stored library, or undefined for a fresh / unreadable store.
export function storedSeedVersion() {
  try {
    return JSON.parse(localStorage.getItem(KEY))?.seedVersion;
  } catch {
    return undefined;
  }
}

export function loadState(fallback) {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return fallback;        // fresh GM — fallback already carries the SRD seed
    const parsed = JSON.parse(raw);
    const merged = { ...fallback, ...parsed };

    // Board data from an older schema can't be reused (e.g. pixel coordinates
    // before the switch to metres) — clear the board, keep libraries/encounters.
    if (parsed.schemaVersion !== fallback.schemaVersion) {
      merged.tokens = [];
      merged.schemaVersion = fallback.schemaVersion;
    }

    // Roster encounters (entries) → placements. Idempotent, so no version bump.
    merged.encounters = (merged.encounters || []).map(migrateEncounter);

    // Seed (or top up) the SRD adversary library when the stored seed version is
    // behind. SRD entries are updated field by field, but only where they still
    // hold the old SRD value; then entries the user doesn't have (matched by name)
    // are added — so a returning GM keeps their own edits/additions.
    if (parsed.seedVersion !== fallback.seedVersion) {
      for (let v = (parsed.seedVersion || 0) + 1; v <= fallback.seedVersion; v++) {
        merged.adversaries = applySrdUpdates(merged.adversaries || [], SRD_UPDATES[v] || []);
      }
      const existing = new Set((merged.adversaries || []).map(a => a.name));
      let nextId = merged.nextId || 1;
      const added = (fallback.adversaries || [])
        .filter(a => !existing.has(a.name))
        .map(a => ({ ...a, id: nextId++ }));
      merged.adversaries = [...(merged.adversaries || []), ...added];
      merged.nextId = nextId;
      merged.seedVersion = fallback.seedVersion;
    }
    return merged;
  } catch {
    return fallback;
  }
}

export function saveState(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage full / unavailable — ignore, state still lives in memory.
  }
}
