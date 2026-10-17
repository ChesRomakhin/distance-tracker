export const DISTANCES = ['Melee', 'Very Close', 'Close', 'Far', 'Very Far'];

// Hues step from hot to cold so neighbouring bands never look alike.
export const DIST_COLOR = {
  'Melee':      '#ef4444',
  'Very Close': '#f97316',
  'Close':      '#eab308',
  'Far':        '#3b82f6',
  'Very Far':   '#a855f7',
};

// Short tags for distance badges on the map
export const DIST_SHORT = {
  'Melee':      'M',
  'Very Close': 'VC',
  'Close':      'C',
  'Far':        'F',
  'Very Far':   'VF',
};

// ── World scale ─────────────────────────────────────────────────────────────
// World coordinates are in metres; PX_PER_M is used only when drawing.
export const PX_PER_M = 35;
export const toPx = m => m * PX_PER_M;

// Range bands in metres (1 SRD square = 5 ft ≈ 1.5 m). Very Far has no ring.
export const DIST_METERS = {
  'Melee':      1.5,
  'Very Close': 4.5,
  'Close':      9,
  'Far':        18,
};

// Labels shown on the rings and in the legend
export const DIST_LABEL = {
  'Melee':      `Melee  ${DIST_METERS['Melee']} m`,
  'Very Close': `Very Close  ${DIST_METERS['Very Close']} m`,
  'Close':      `Close  ${DIST_METERS['Close']} m`,
  'Far':        `Far  ${DIST_METERS['Far']} m`,
  'Very Far':   `Very Far  > ${DIST_METERS['Far']} m`,
};

export const TYPE_FILL = { PC: '#1e40af', NPC: '#991b1b' };
export const TYPE_RING = { PC: '#60a5fa', NPC: '#f87171' };

// A size-1 token is 1.5 m across; `size` is a multiplier.
export const TOKEN_DIAMETER_M = 1.5;
export const tokenRadiusM = tok => (TOKEN_DIAMETER_M / 2) * (tok.size || 1);

// Token size presets (multiplier; 1 = 1.5 m across)
export const SIZE_PRESETS = [[0.5, '½'], [1, '1'], [2, '2'], [3, '3'], [4, '4']];

// Ring radius around a token, measured from its edge to the edge of a
// standard-size target — so larger tokens push their rings outward.
export const ringRadiusM = (d, tok) =>
  DIST_METERS[d] + tokenRadiusM(tok) - TOKEN_DIAMETER_M / 2;

// Range between two tokens on the same scale as the rings: two standard-size
// tokens touching are 0 m apart; bigger tokens count as closer by their extra radius.
// `from` optionally overrides a's position (e.g. the pinned ring anchor).
export function rangeM(a, b, from = a) {
  const centre = Math.hypot(b.x - from.x, b.y - from.y);
  return Math.max(0, centre - tokenRadiusM(a) - tokenRadiusM(b) + TOKEN_DIAMETER_M);
}

// ── Areas of effect ─────────────────────────────────────────────────────────
// A circle fixed on the board (smoke, a burning patch). radius is in metres
// from the centre; originSize is the size of the token it was cast from (1 for a point).
export const AREA_COLORS = ['#94a3b8', '#fb7185', '#c084fc', '#4ade80', '#67e8f9'];

export function makeArea(over = {}) {
  return { id: null, name: 'Area', x: 0, y: 0, radius: 4.5, originSize: 1, color: AREA_COLORS[0], hidden: false, ...over };
}

// "Within <band> of the caster" — the same circle as the caster's ring for that band.
export const areaRadius = (band, originSize = 1) =>
  DIST_METERS[band] + (TOKEN_DIAMETER_M / 2) * ((originSize || 1) - 1);

// A token is inside on the same terms as the rings: a standard token by its
// centre, bigger ones as soon as their extra radius reaches in.
export const inArea = (area, tok) =>
  Math.hypot(tok.x - area.x, tok.y - area.y) <= area.radius + tokenRadiusM(tok) - TOKEN_DIAMETER_M / 2 + 1e-6;

// The range band a distance in metres falls into.
export function bandOf(m) {
  return DISTANCES.find(d => DIST_METERS[d] != null && m <= DIST_METERS[d] + 1e-6) ?? 'Very Far';
}

// Free spots for new tokens: grid points nearest `center` (metres) that don't
// overlap existing tokens or each other. `sizes` = one size multiplier per token.
export function spawnPositions(sizes, tokens, center) {
  const GAP  = 1.5;   // one square between neighbours
  const STEP = TOKEN_DIAMETER_M + GAP;
  const placed = tokens.map(t => ({ x: t.x, y: t.y, r: tokenRadiusM(t) }));
  const candidates = [];
  for (let i = -14; i <= 14; i++) {
    for (let j = -10; j <= 10; j++) {
      const x = center.x + i * STEP, y = center.y + j * STEP;
      candidates.push({ x, y, d: Math.hypot(i, j * 1.15) });
    }
  }
  candidates.sort((a, b) => a.d - b.d);

  return sizes.map(size => {
    const r = (TOKEN_DIAMETER_M / 2) * (size || 1);
    const spot = candidates.find(c => placed.every(p => Math.hypot(p.x - c.x, p.y - c.y) >= p.r + r + GAP))
      ?? { x: center.x + (Math.random() - 0.5) * 6, y: center.y + (Math.random() - 0.5) * 6 };
    placed.push({ x: spot.x, y: spot.y, r });
    return { x: spot.x, y: spot.y };
  });
}

// Copies deployed from an encounter are named "Name 2"; split off the number
// so it can be shown as a badge and survives truncation.
export function tokenLabel(name, maxLen = 14) {
  const m = name.trim().match(/^(.*\S)\s+(\d+)$/);
  const base = m ? m[1] : name.trim();
  const num  = m ? m[2] : null;
  const initials = base.split(/[\s:]+/).filter(Boolean).map(w => w[0]).join('').toUpperCase().slice(0, 2) || '?';
  const room  = maxLen - (num ? num.length + 1 : 0);
  const short = (base.length > room ? base.slice(0, room - 1).trimEnd() + '…' : base) + (num ? ` ${num}` : '');
  return { initials, num, short };
}

// ── Combat-tracker templates ────────────────────────────────────────────────
// Combat-relevant fields only (no full Daggerheart stat blocks).

export const DEFAULT_HOPE_MAX = 6;

export const ADVERSARY_TYPES = [
  'Standard', 'Skulk', 'Ranged', 'Support', 'Horde',
  'Minion', 'Leader', 'Bruiser', 'Solo', 'Social',
];

// Adversary library entry (always deployed as an NPC token).
// Full Daggerheart stat block — combat numbers plus flavour & features.
export function makeAdversary(over = {}) {
  return {
    id: null,
    name: '',
    tier: 1,
    type: 'Standard',
    description: '',
    motives: '',
    difficulty: 10,
    thresholds: { major: 5, severe: 10 },
    hpMax: 5,
    stressMax: 3,
    size: 1,        // token size multiplier (1 = 1.5 m across)
    atk: '+0',
    attack: { name: '', range: '', damage: '' },
    experience: '',
    features: [],   // [{ name, type: 'Passive'|'Action'|'Reaction'|'Evolution', text }]
    notes: '',
    ...over,
  };
}

// Character (PC) library entry.
export function makeCharacter(over = {}) {
  return {
    id: null,
    name: '',
    evasion: 10,
    armorMax: 0,
    hpMax: 6,
    stressMax: 6,
    thresholds: { major: 7, severe: 12 },
    hopeMax: DEFAULT_HOPE_MAX,
    notes: '',
    ...over,
  };
}

// ── Maps ────────────────────────────────────────────────────────────────────

// A common VTT export: 70 px per 5 ft square.
export const DEFAULT_PX_PER_M = 70 / TOKEN_DIAMETER_M;

// background: { url, pxPerMeter, offset: { x, y } } — offset is where the image's
// top-left corner sits, in metres. walls / rooms / props are filled in phase 4.
export function makeMap(over = {}) {
  return { id: null, name: '', background: null, walls: [], rooms: [], props: [], ...over };
}

// The background's rectangle in metres, once the image size is known.
export function backgroundRect(bg, img) {
  if (!bg || img?.status !== 'ok') return null;
  return { x: bg.offset.x, y: bg.offset.y, w: img.w / bg.pxPerMeter, h: img.h / bg.pxPerMeter };
}

// ── Encounters ──────────────────────────────────────────────────────────────

// placements: [{ ref: { lib: id } | { local: id }, label, x, y, size }] — one per unit.
//   label null → named at deploy ("Goblin 2"); x / y null → placed at deploy;
//   size null → the adversary's size.
// `adversaries` holds encounter-local copies (from an imported file) that are not
// in the library. spawnPoints: [{ x, y }] — where PCs stand, in order.
export function makeEncounter(over = {}) {
  return { id: null, name: '', mapId: null, adversaries: [], placements: [], spawnPoints: [], ...over };
}

// Ids come from one global counter, so local and library ids never collide.
export const refId = ref => ref.local ?? ref.lib;

export const placementAdversary = (enc, p, library) =>
  p.ref.local != null
    ? enc.adversaries?.find(a => a.id === p.ref.local)
    : library.find(a => a.id === p.ref.lib);

// Placements grouped by adversary: [{ ref, count, placed }] in first-seen order.
export function encounterGroups(enc) {
  const groups = new Map();
  enc.placements.forEach(p => {
    const key = refId(p.ref);
    const g = groups.get(key) ?? { ref: p.ref, count: 0, placed: 0 };
    g.count++;
    if (p.x != null) g.placed++;
    groups.set(key, g);
  });
  return [...groups.values()];
}

// Phase-2 roster encounters ({ entries: [{ adversaryId, count }] }) → placements
// without positions. Encounters that already have placements pass through.
export function migrateEncounter(enc) {
  if (Array.isArray(enc.placements)) return enc;
  const { entries, ...rest } = enc;
  const locals = new Set((enc.adversaries ?? []).map(a => a?.id));
  const placements = (Array.isArray(entries) ? entries : [])
    .filter(en => en && en.adversaryId != null)
    .flatMap(en => {
      const ref = locals.has(en.adversaryId) ? { local: en.adversaryId } : { lib: en.adversaryId };
      const count = Math.max(1, Math.floor(Number(en.count)) || 1);
      return Array.from({ length: count }, () => ({ ref, label: null, x: null, y: null, size: null }));
    });
  return { ...rest, mapId: enc.mapId ?? null, spawnPoints: enc.spawnPoints ?? [], placements };
}

// Build the live-stat fields for a battle-map token from a library template.
export function tokenStatsFromCharacter(c) {
  return {
    refKind: 'character', refId: c.id,
    hp: 0, hpMax: c.hpMax,
    stress: 0, stressMax: c.stressMax,
    thresholds: { ...c.thresholds },
    evasion: c.evasion,
    armorUsed: 0, armorMax: c.armorMax,
    hope: 0, hopeMax: c.hopeMax ?? DEFAULT_HOPE_MAX,
    size: 1,
  };
}

export function tokenStatsFromAdversary(a) {
  return {
    refKind: 'adversary', refId: a.id,
    hp: 0, hpMax: a.hpMax,
    stress: 0, stressMax: a.stressMax,
    thresholds: { ...a.thresholds },
    difficulty: a.difficulty,
    size: a.size || 1,
  };
}
