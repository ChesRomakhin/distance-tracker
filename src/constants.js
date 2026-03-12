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
