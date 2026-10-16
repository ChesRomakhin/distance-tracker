import { useState } from 'react';
import StatStepper from './StatStepper';
import { TYPE_FILL } from '../constants';

// Token size presets (multiplier; 1 = 1.5 m across)
const SIZE_PRESETS = [[0.5, '½'], [1, '1'], [2, '2'], [3, '3'], [4, '4']];

function SelectedUnit({ token, source, onUpdateStats, onRemoveToken, onDeselect }) {
  const isPC  = token.refKind === 'character';
  const isAdv = token.refKind === 'adversary';
  const set = patch => onUpdateStats(token.id, patch);
  const attack  = source?.attack;
  const features = source?.features ?? [];

  return (
    <div className="sp-selected">
      <div className="sp-selected-head">
        <span className="sp-dot" style={{ background: TYPE_FILL[token.type] }} />
        <span className="sp-name" title={token.name}>{token.name}</span>
        <button className="sp-close" onClick={onDeselect} title="Deselect">✕</button>
      </div>

      {token.thresholds && (token.thresholds.major || token.thresholds.severe) ? (
        <div className="sp-thresholds">
          Thresholds <b>{token.thresholds.major}</b> / <b>{token.thresholds.severe}</b>
        </div>
      ) : null}

      <div className="sp-steppers">
        <StatStepper label="HP"     value={token.hp}     max={token.hpMax}     color="#f87171" onChange={v => set({ hp: v })} />
        <StatStepper label="Stress" value={token.stress} max={token.stressMax} color="#fbbf24" onChange={v => set({ stress: v })} />

        {isPC && (
          <>
            <StatStepper label="Hope" value={token.hope ?? 0} max={token.hopeMax} color="#c9a84c" onChange={v => set({ hope: v })} />
            {token.armorMax > 0 && (
              <StatStepper label="Armor used" value={token.armorUsed ?? 0} max={token.armorMax} color="#60a5fa" onChange={v => set({ armorUsed: v })} />
            )}
          </>
        )}

        <div className="stepper">
          <span className="stepper-label">Size</span>
          <div className="stepper-controls">
            {SIZE_PRESETS.map(([s, label]) => (
              <button
                key={s}
                className={`stepper-btn ${(token.size || 1) === s ? 'active' : ''}`}
                onClick={() => set({ size: s })}
                title={`${s * 1.5} m across`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="sp-static">
        {isPC  && <span className="stat-pill">Evasion <b>{token.evasion}</b></span>}
        {isAdv && <span className="stat-pill">Difficulty <b>{token.difficulty}</b></span>}
      </div>

      {isAdv && attack?.name && (
        <div className="sp-attack">
          <b>ATK {source.atk}</b> · {attack.name}
          {attack.range ? ` (${attack.range})` : ''}
          {attack.damage ? ` · ${attack.damage}` : ''}
        </div>
      )}

      {isAdv && source?.motives && (
        <div className="sp-motives"><b>Motives:</b> {source.motives}</div>
      )}

      {isAdv && features.length > 0 && (
        <div className="sp-features">
          <h3 className="sp-section-title">Features</h3>
          {features.map((f, i) => (
            <div key={i} className="feature">
              <b>{f.name}</b> <span className="feature-type">{f.type}</span>
              <div className="feature-text">{f.text}</div>
            </div>
          ))}
        </div>
      )}

      <button className="btn btn-clr btn-sm sp-remove" onClick={() => onRemoveToken(token.id)}>
        Remove from map
      </button>
    </div>
  );
}

function QuickAddList({ title, items, color, onAdd, emptyHint }) {
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const shown = needle
    ? items.filter(it =>
        it.name.toLowerCase().includes(needle) ||
        (it.type || '').toLowerCase().includes(needle) ||
        String(it.tier ?? '').includes(needle))
    : items;

  return (
    <div className="sp-section">
      <h3 className="sp-section-title">{title} <span className="sp-count">{items.length}</span></h3>
      {items.length === 0 ? (
        <p className="sp-empty">{emptyHint}</p>
      ) : (
        <>
          {items.length > 8 && (
            <input
              className="sp-search"
              placeholder="Filter…"
              value={q}
              onChange={e => setQ(e.target.value)}
            />
          )}
          <div className="sp-list">
            {shown.map(it => (
              <button key={it.id} className="sp-add-row" onClick={() => onAdd(it)} title={it.name}>
                <span className="sp-dot" style={{ background: color }} />
                <span className="sp-add-name">{it.name}</span>
                {it.tier != null && <span className="sp-add-tier">T{it.tier}</span>}
                <span className="sp-add-plus">+</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function BattleSidePanel({
  characters, adversaries, findAdversary, focusedToken,
  onQuickAddCharacter, onQuickAddAdversary,
  onUpdateStats, onRemoveToken, onDeselect,
}) {
  const source = focusedToken?.refKind === 'adversary'
    ? findAdversary(focusedToken.refId)
    : focusedToken?.refKind === 'character'
      ? characters.find(c => c.id === focusedToken.refId)
      : null;

  return (
    <aside className="side-panel">
      {focusedToken ? (
        <SelectedUnit
          token={focusedToken}
          source={source}
          onUpdateStats={onUpdateStats}
          onRemoveToken={onRemoveToken}
          onDeselect={onDeselect}
        />
      ) : (
        <>
          <p className="sp-hint">Click a unit on the map to track its stats, or add one below.</p>
          <QuickAddList
            title="Characters"
            items={characters}
            color={TYPE_FILL.PC}
            onAdd={onQuickAddCharacter}
            emptyHint="No characters in your library yet."
          />
          <QuickAddList
            title="Adversaries"
            items={adversaries}
            color={TYPE_FILL.NPC}
            onAdd={onQuickAddAdversary}
            emptyHint="No adversaries in your library yet."
          />
        </>
      )}
    </aside>
  );
}
