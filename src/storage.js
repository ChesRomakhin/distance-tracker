// Tiny localStorage persistence layer for the GM's data.
// Players never read/write storage — they receive state over the BroadcastChannel.

const KEY = 'daggerheart-tracker-v1';

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

    // Seed (or top up) the SRD adversary library when the stored seed version is
    // behind. Adds only entries the user doesn't already have (matched by name),
    // so a returning GM keeps their own edits/additions.
    if (parsed.seedVersion !== fallback.seedVersion) {
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
