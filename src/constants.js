export const DISTANCES = ['Melee', 'Very Close', 'Close', 'Far', 'Very Far'];

export const DIST_COLOR = {
  'Melee':      '#e11d48',
  'Very Close': '#ef4444',
  'Close':      '#f97316',
  'Far':        '#3b82f6',
  'Very Far':   '#7c3aed',
};

// Full description labels shown on the rings
export const DIST_LABEL = {
  'Melee':      'Melee (touching)',
  'Very Close': 'Very Close  5–10 ft.',
  'Close':      'Close  10–30 ft.',
  'Far':        'Far  30–100 ft.',
  'Very Far':   'Very Far  100–300 ft.',
};

// Ring radii at zoom = 1 (roughly proportional; scroll to inspect small/large rings)
export const RING_RADII = {
  'Melee':      55,
  'Very Close': 120,
  'Close':      230,
  'Far':        420,
  'Very Far':   700,
};

export const TYPE_FILL = { PC: '#1e40af', NPC: '#991b1b' };
export const TYPE_RING = { PC: '#60a5fa', NPC: '#f87171' };

export const TOKEN_R = 26;

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

export function makeEncounter(over = {}) {
  return { id: null, name: '', entries: [], ...over };
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
  };
}

export function tokenStatsFromAdversary(a) {
  return {
    refKind: 'adversary', refId: a.id,
    hp: 0, hpMax: a.hpMax,
    stress: 0, stressMax: a.stressMax,
    thresholds: { ...a.thresholds },
    difficulty: a.difficulty,
  };
}
