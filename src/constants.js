export const DISTANCES = ['Melee', 'Very Close', 'Close', 'Far', 'Very Far'];

export const DIST_COLOR = {
  'Melee':      '#e11d48',
  'Very Close': '#ef4444',
  'Close':      '#f97316',
  'Far':        '#3b82f6',
  'Very Far':   '#7c3aed',
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

// Ring radius around a token, measured from its edge to the edge of a
// standard-size target — so larger tokens push their rings outward.
export const ringRadiusM = (d, tok) =>
  DIST_METERS[d] + tokenRadiusM(tok) - TOKEN_DIAMETER_M / 2;

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
    features: [],   // [{ name, type: 'Passive'|'Action'|'Reaction', text }]
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

// entries: [{ adversaryId, count }]. `adversaries` holds encounter-local copies
// (from an imported file) that are not in the library.
export function makeEncounter(over = {}) {
  return { id: null, name: '', entries: [], adversaries: [], ...over };
}

// Entries look in the encounter's own adversaries first, then in the library.
// Ids come from one global counter, so the two never collide.
export const findEncounterAdversary = (enc, id, library) =>
  enc.adversaries?.find(a => a.id === id) ?? library.find(a => a.id === id);

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
