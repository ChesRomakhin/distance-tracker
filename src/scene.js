// Scenes: saving the board into an encounter and deploying it back.
// Pure functions — no React here.

import {
  makeEncounter, placementAdversary, refId, spawnPositions,
  tokenStatsFromAdversary, tokenStatsFromCharacter,
} from './constants';

// Library first, then adversaries that live inside encounters (imported ones).
export const findAnyAdversary = (state, id) =>
  state.adversaries.find(a => a.id === id) ??
  state.encounters.flatMap(e => e.adversaries ?? []).find(a => a.id === id);

// A scene has a map or positions: deploying it replaces the board.
// A plain roster is added to whatever is on the board.
export const isScene = enc =>
  enc.mapId != null || enc.spawnPoints.length > 0 || enc.placements.some(p => p.x != null);

export const canDeploy = enc => enc.placements.length > 0 || isScene(enc);

// Token specs for the encounter's adversaries: [{ name, tokenType, stats, x, y }],
// x / y null where the placement has no position.
export function adversarySpecs(enc, library) {
  const byRef = new Map();
  enc.placements.forEach(p => {
    const key = refId(p.ref);
    byRef.set(key, [...(byRef.get(key) ?? []), p]);
  });
  const specs = [];
  for (const list of byRef.values()) {
    list.forEach((p, i) => {
      const adv = placementAdversary(enc, p, library);
      if (!adv) return;
      specs.push({
        name: p.label ?? (list.length > 1 ? `${adv.name} ${i + 1}` : adv.name),
        tokenType: 'NPC',
        stats: { ...tokenStatsFromAdversary(adv), size: p.size ?? adv.size ?? 1 },
        x: p.x, y: p.y,
      });
    });
  }
  return specs;
}

// The board as an encounter. Adversaries not in the library are copied into the
// encounter with temporary negative ids (the reducer hands out real ones).
// → { encounter, skipped } — skipped = custom NPC tokens (no stat block to save).
export function encounterFromBoard(state, { name, existing, pcSpawns }) {
  const libIds = new Set(state.adversaries.map(a => a.id));
  const locals = new Map();   // source id → copy
  const placements = [];
  let skipped = 0;

  for (const t of state.tokens) {
    if (t.type === 'PC') continue;
    let ref = null;
    if (t.refKind === 'adversary' && libIds.has(t.refId)) {
      ref = { lib: t.refId };
    } else if (t.refKind === 'adversary') {
      const adv = findAnyAdversary(state, t.refId);
      if (adv) {
        if (!locals.has(adv.id)) locals.set(adv.id, { ...adv, id: -(locals.size + 1) });
        ref = { local: locals.get(adv.id).id };
      }
    }
    if (!ref) { skipped++; continue; }
    placements.push({ ref, label: t.name, x: t.x, y: t.y, size: t.size || 1 });
  }

  const pcs = state.tokens.filter(t => t.type === 'PC');
  const spawnPoints = state.spawnPoints.length
    ? state.spawnPoints
    : pcSpawns ? pcs.map(t => ({ x: t.x, y: t.y })) : [];

  return {
    encounter: {
      ...(existing ?? makeEncounter({ name })),
      mapId: state.sceneMapId,
      placements,
      spawnPoints,
      adversaries: [...locals.values()],
    },
    skipped,
  };
}

// Where to put adversaries that have no position: the middle of what the
// encounter already places, else the map, else the given fallback.
export function sceneCenter(enc, mapRect, fallback) {
  const pts = [...enc.placements.filter(p => p.x != null), ...enc.spawnPoints];
  if (pts.length) {
    return {
      x: pts.reduce((s, p) => s + p.x, 0) / pts.length,
      y: pts.reduce((s, p) => s + p.y, 0) / pts.length,
    };
  }
  if (mapRect) return { x: mapRect.x + mapRect.w / 2, y: mapRect.y + mapRect.h / 2 };
  return fallback;
}

// The board after deploying a scene.
// pcIds — characters at the session, in spawn order. PCs already on the board
// keep their token (and its HP, Stress, Hope, Armor) and just move.
// → { mapId, spawnPoints, keep: [token], add: [spec with x, y] }
export function planDeploy(enc, { library, characters, pcIds, tokens, center }) {
  const keep = [];
  const add  = [];
  const occupied = () => [...keep, ...add.map(s => ({ x: s.x, y: s.y, size: s.stats.size }))];

  const advs = adversarySpecs(enc, library);
  advs.filter(s => s.x != null).forEach(s => add.push(s));
  const loose = advs.filter(s => s.x == null);
  const spots = spawnPositions(loose.map(s => s.stats.size), occupied(), center);
  loose.forEach((s, i) => add.push({ ...s, ...spots[i] }));

  const pcs = pcIds
    .map(id => characters.find(c => c.id === id))
    .filter(Boolean)
    .map(c => {
      const prev = tokens.find(t => t.refKind === 'character' && t.refId === c.id);
      return prev ?? { name: c.name, tokenType: 'PC', stats: tokenStatsFromCharacter(c), isSpec: true };
    });
  const put = (pc, pos) => {
    if (pc.isSpec) { const { isSpec, ...spec } = pc; add.push({ ...spec, ...pos }); }
    else keep.push({ ...pc, ...pos });
  };

  const points = enc.spawnPoints;
  pcs.slice(0, points.length).forEach((pc, i) => put(pc, { x: points[i].x, y: points[i].y }));
  const extra = pcs.slice(points.length);
  const near  = points.length ? points[points.length - 1] : center;
  const extraSpots = spawnPositions(extra.map(pc => (pc.isSpec ? pc.stats.size : pc.size) || 1), occupied(), near);
  extra.forEach((pc, i) => put(pc, extraSpots[i]));

  return { mapId: enc.mapId, spawnPoints: points, keep, add };
}
