import { useState } from 'react';
import StatStepper from './StatStepper';
import { tierSummary } from './EncounterBuilder';
import { canDeploy } from '../scene';
import {
  TYPE_FILL, DIST_COLOR, DIST_SHORT, SIZE_PRESETS, rangeM, bandOf, tokenLabel,
} from '../constants';

// Daggerheart damage → HP marked: below Major 1, Major 2, Severe 3.
function hpMarksFor(damage, { major, severe }) {
  if (damage <= 0) return 0;
  if (severe && damage >= severe) return 3;
  if (major && damage >= major) return 2;
  return 1;
}

function DamageInput({ token, onApply }) {
  const [value, setValue] = useState('');
  const [useArmor, setUseArmor] = useState(false);
  const [last, setLast] = useState(null);
  const canArmor = token.refKind === 'character' && (token.armorUsed ?? 0) < (token.armorMax ?? 0);

  const apply = () => {
    const dmg = Number(value);
    if (!value || !(dmg >= 0)) return;
    let marks = hpMarksFor(dmg, token.thresholds);
    const armor = canArmor && useArmor && marks > 0;
    if (armor) marks -= 1;
    onApply(marks, armor);
    setLast(`${dmg} dmg → ${marks} HP${armor ? ' (armor −1)' : ''}`);
    setValue('');
    setUseArmor(false);
  };

  return (
    <div className="sp-damage">
      <div className="sp-damage-row">
        <input
          type="number" min={0} inputMode="numeric"
          placeholder="Damage"
          aria-label="Damage taken"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') apply(); }}
        />
        <button className="btn btn-npc btn-sm" onClick={apply} disabled={value === ''}>Apply</button>
      </div>
      {canArmor && (
        <label className="pick-item sp-armor">
          <input type="checkbox" checked={useArmor} onChange={e => setUseArmor(e.target.checked)} />
          Mark an Armor Slot (−1 HP)
        </label>
      )}
      {last && <div className="sp-damage-last">{last}</div>}
    </div>
  );
}

function SelectedUnit({ token, source, moved, onUpdateStats, onRemoveToken, onDeselect, onConfirmMove, onRevertMove }) {
  const isPC  = token.refKind === 'character';
  const isAdv = token.refKind === 'adversary';
  const set = patch => onUpdateStats(token.id, patch);
  const attack   = source?.attack;
  const features = source?.features ?? [];
  const hasThr   = token.thresholds && (token.thresholds.major || token.thresholds.severe);
  const defeated = token.hpMax > 0 && token.hp >= token.hpMax;

  return (
    <section className="sp-selected" aria-label="Selected unit">
      <div className="sp-selected-head">
        <span className="sp-dot" style={{ background: TYPE_FILL[token.type] }} />
        <span className="sp-name" title={token.name}>{token.name}</span>
        <button className="icon-btn" onClick={onDeselect} title="Deselect (Esc)" aria-label="Deselect">✕</button>
      </div>

      {defeated && <div className="sp-defeated">Defeated</div>}

      {moved && (
        <div className="sp-moved">
          <span>
            Moved <b>{moved.m.toFixed(1)} m</b>{' '}
            <span className="dist-chip" style={{ background: DIST_COLOR[moved.band] }}>{moved.band}</span>
          </span>
          <div className="sp-moved-btns">
            <button className="btn btn-pc btn-sm" onClick={onConfirmMove} title="Pin the rings here (Enter)">Confirm move</button>
            <button className="btn btn-clr btn-sm" onClick={onRevertMove} title="Put the token back">Revert</button>
          </div>
        </div>
      )}

      {hasThr ? (
        <>
          <div className="sp-thresholds">
            Thresholds <b>{token.thresholds.major}</b> / <b>{token.thresholds.severe}</b>
            <span className="sp-thr-hint"> · Minor 1 · Major 2 · Severe 3 HP</span>
          </div>
          {token.hpMax > 0 && (
            <DamageInput
              token={token}
              onApply={(marks, armor) => set({
                hp: Math.min(token.hpMax, (token.hp ?? 0) + marks),
                ...(armor ? { armorUsed: (token.armorUsed ?? 0) + 1 } : {}),
              })}
            />
          )}
        </>
      ) : null}

      <div className="sp-steppers">
        <StatStepper
          label="HP marked" value={token.hp} max={token.hpMax} color="#f87171"
          hint={token.hpMax ? `${Math.max(0, token.hpMax - (token.hp ?? 0))} left` : undefined}
          onChange={v => set({ hp: v })}
        />
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
          <div className="stepper-controls" role="group" aria-label="Token size">
            {SIZE_PRESETS.map(([s, label]) => (
              <button
                key={s}
                className={`stepper-btn ${(token.size || 1) === s ? 'active' : ''}`}
                onClick={() => set({ size: s })}
                title={`${s * 1.5} m across`}
                aria-pressed={(token.size || 1) === s}
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
        <details className="sp-features" open>
          <summary className="sp-section-title">Features <span className="sp-count">{features.length}</span></summary>
          {features.map((f, i) => (
            <div key={i} className="feature">
              <b>{f.name}</b> <span className="feature-type">{f.type}</span>
              <div className="feature-text">{f.text}</div>
            </div>
          ))}
        </details>
      )}

      <button className="btn btn-ghost-danger btn-sm sp-remove" onClick={() => onRemoveToken(token.id)} title="Remove from map (Del)">
        Remove from map
      </button>
    </section>
  );
}

// Every token on the board; with a selection, sorted by range from it.
function OnBoard({ tokens, focusedToken, ringAnchor, onSelect }) {
  if (!tokens.length) return null;
  const rows = tokens.map(t => {
    const m = focusedToken && ringAnchor && t.id !== focusedToken.id ? rangeM(focusedToken, t, ringAnchor) : null;
    return { t, m, band: m == null ? null : bandOf(m) };
  });
  rows.sort((a, b) =>
    (a.m ?? -1) - (b.m ?? -1) ||
    a.t.type.localeCompare(b.t.type) ||
    a.t.name.localeCompare(b.t.name, undefined, { numeric: true }));

  return (
    <details className="sp-section" open>
      <summary className="sp-section-title">On board <span className="sp-count">{tokens.length}</span></summary>
      <div className="sp-list sp-board">
        {rows.map(({ t, m, band }) => {
          const defeated = t.hpMax > 0 && t.hp >= t.hpMax;
          // Keep the copy number visible when a long name gets cut.
          const { num } = tokenLabel(t.name);
          const base = num ? t.name.slice(0, -num.length).trimEnd() : t.name;
          return (
            <button
              key={t.id}
              className={`sp-add-row ${t.id === focusedToken?.id ? 'current' : ''} ${defeated ? 'is-defeated' : ''}`}
              onClick={() => onSelect(t.id)}
              title={t.name}
            >
              <span className="sp-dot" style={{ background: TYPE_FILL[t.type] }} />
              <span className="sp-add-name">{base}</span>
              {num && <span className="sp-add-num">{num}</span>}
              {t.hpMax > 0 && <span className="sp-add-tier">{t.hp ?? 0}/{t.hpMax}</span>}
              {band && (
                <span className="dist-chip" style={{ background: DIST_COLOR[band] }} title={`${m.toFixed(1)} m`}>
                  {DIST_SHORT[band]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </details>
  );
}

const ADD_TABS = [['characters', 'Characters'], ['adversaries', 'Adversaries'], ['encounters', 'Encounters']];

function AddUnits({ characters, adversaries, encounters, tokens, onAddCharacter, onAddAdversary, onDeployEncounter }) {
  const [tab, setTab] = useState(characters.length ? 'characters' : 'adversaries');
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();

  const onMap = new Set(tokens.filter(t => t.refKind === 'character').map(t => t.refId));
  const items = tab === 'characters' ? characters : tab === 'adversaries' ? adversaries : encounters;
  const shown = needle
    ? items.filter(it =>
        it.name.toLowerCase().includes(needle) ||
        (it.type || '').toLowerCase().includes(needle) ||
        (it.tier != null && `t${it.tier}` === needle))
    : items;

  const empty = {
    characters:  'No characters yet — create your party in the Characters tab.',
    adversaries: 'No adversaries in your library yet.',
    encounters:  'No encounters yet — build one in the Encounters tab.',
  }[tab];

  return (
    <section className="sp-section sp-add" aria-label="Add units">
      <h3 className="sp-section-title">Add to map</h3>
      <div className="sp-tabs" role="tablist">
        {ADD_TABS.map(([id, label]) => (
          <button
            key={id} role="tab" aria-selected={tab === id}
            className={`chip ${tab === id ? 'active' : ''}`}
            onClick={() => { setTab(id); setQ(''); }}
          >
            {label} <span className="sp-count">{{ characters, adversaries, encounters }[id].length}</span>
          </button>
        ))}
      </div>
      {items.length > 8 && (
        <input
          className="sp-search"
          type="search"
          placeholder={tab === 'adversaries' ? 'Filter by name, type or t2…' : 'Filter…'}
          aria-label="Filter list"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
      )}
      {items.length === 0 ? (
        <p className="sp-empty">{empty}</p>
      ) : (
        <div className="sp-list">
          {shown.length === 0 && <p className="sp-empty">No matches.</p>}
          {tab === 'encounters'
            ? shown.map(enc => (
                <button
                  key={enc.id} className="sp-add-row" disabled={!canDeploy(enc)}
                  onClick={() => onDeployEncounter(enc)} title={`Deploy ${enc.name}`}
                >
                  <span className="sp-add-name">{enc.name}</span>
                  <span className="sp-add-tier">{tierSummary(enc, adversaries) || 'empty'}</span>
                  <span className="sp-add-plus">Deploy</span>
                </button>
              ))
            : shown.map(it => (
                <button
                  key={it.id} className="sp-add-row"
                  onClick={() => (tab === 'characters' ? onAddCharacter : onAddAdversary)(it)}
                  title={`Add ${it.name}`}
                >
                  <span className="sp-dot" style={{ background: tab === 'characters' ? TYPE_FILL.PC : TYPE_FILL.NPC }} />
                  <span className="sp-add-name">{it.name}</span>
                  {it.tier != null && <span className="sp-add-tier">T{it.tier}</span>}
                  {tab === 'characters' && onMap.has(it.id) && <span className="sp-add-tier on-map-tag">on map</span>}
                  <span className="sp-add-plus">+</span>
                </button>
              ))}
        </div>
      )}
    </section>
  );
}

export default function BattleSidePanel({
  characters, adversaries, encounters, tokens, findAdversary, focusedToken, ringAnchor, open,
  onQuickAddCharacter, onQuickAddAdversary, onDeployEncounter,
  onUpdateStats, onRemoveToken, onDeselect, onSelect, onConfirmMove, onRevertMove,
}) {
  const source = focusedToken?.refKind === 'adversary'
    ? findAdversary(focusedToken.refId)
    : focusedToken?.refKind === 'character'
      ? characters.find(c => c.id === focusedToken.refId)
      : null;

  const movedM = focusedToken && ringAnchor
    ? Math.hypot(focusedToken.x - ringAnchor.x, focusedToken.y - ringAnchor.y)
    : 0;
  const moved = movedM > 0.03 ? { m: movedM, band: bandOf(movedM) } : null;

  return (
    <aside className={`side-panel ${open ? 'open' : ''}`} aria-label="Battle panel">
      {focusedToken ? (
        <SelectedUnit
          token={focusedToken}
          source={source}
          moved={moved}
          onUpdateStats={onUpdateStats}
          onRemoveToken={onRemoveToken}
          onDeselect={onDeselect}
          onConfirmMove={onConfirmMove}
          onRevertMove={onRevertMove}
        />
      ) : (
        tokens.length > 0 && <p className="sp-hint">Click a unit on the map or in the list to track its stats.</p>
      )}
      <OnBoard tokens={tokens} focusedToken={focusedToken} ringAnchor={ringAnchor} onSelect={onSelect} />
      <AddUnits
        characters={characters}
        adversaries={adversaries}
        encounters={encounters}
        tokens={tokens}
        onAddCharacter={onQuickAddCharacter}
        onAddAdversary={onQuickAddAdversary}
        onDeployEncounter={onDeployEncounter}
      />
    </aside>
  );
}
