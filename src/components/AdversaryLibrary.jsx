import { useState } from 'react';
import EntityForm from './EntityForm';
import LibraryHeader, { Chips } from './LibraryHeader';
import { useConfirm } from './Feedback';
import { makeAdversary, ADVERSARY_TYPES } from '../constants';

const FIELDS = [
  { key: 'name',              label: 'Name',        group: 'Basics', full: true },
  { key: 'type',             label: 'Type',        group: 'Basics', type: 'select', options: ADVERSARY_TYPES },
  { key: 'tier',             label: 'Tier',        group: 'Basics', type: 'number' },
  { key: 'size',             label: 'Token size',  group: 'Basics', type: 'size', full: true },
  { key: 'difficulty',       label: 'Difficulty',  group: 'Combat', type: 'number' },
  { key: 'hpMax',            label: 'HP',          group: 'Combat', type: 'number' },
  { key: 'thresholds.major', label: 'Major thr.',  group: 'Combat', type: 'number' },
  { key: 'thresholds.severe',label: 'Severe thr.', group: 'Combat', type: 'number' },
  { key: 'stressMax',        label: 'Stress',      group: 'Combat', type: 'number' },
  { key: 'experience',       label: 'Experience',  group: 'Combat' },
  { key: 'attack.name',      label: 'Attack',      group: 'Attack' },
  { key: 'atk',              label: 'ATK mod',     group: 'Attack' },
  { key: 'attack.range',     label: 'Range',       group: 'Attack' },
  { key: 'attack.damage',    label: 'Damage',      group: 'Attack' },
  { key: 'description',      label: 'Description', group: 'Text', type: 'textarea' },
  { key: 'motives',          label: 'Motives & Tactics', group: 'Text', type: 'textarea' },
  { key: 'notes',            label: 'Notes',       group: 'Text', type: 'textarea' },
  { key: 'features',         label: 'Features',    group: 'Features', type: 'features' },
];

const TIERS = [['all', 'All tiers'], [1, 'Tier 1'], [2, 'Tier 2'], [3, 'Tier 3'], [4, 'Tier 4']];

const thr = t => (t && (t.major || t.severe) ? `${t.major}/${t.severe}` : 'None');

export default function AdversaryLibrary({ adversaries, encounters, onAdd, onEdit, onRemove, onAddToMap }) {
  const [editing, setEditing] = useState(null);
  const [query,   setQuery]   = useState('');
  const [tier,    setTier]    = useState('all');
  const [type,    setType]    = useState('all');
  const confirm = useConfirm();

  const save = entry => {
    if (entry.id == null) onAdd(entry); else onEdit(entry);
    setEditing(null);
  };

  const askRemove = a => {
    const usedIn = encounters.filter(e => e.placements.some(p => p.ref.lib === a.id)).map(e => `“${e.name}”`);
    confirm({
      title: `Delete ${a.name}?`,
      message: usedIn.length
        ? `It will also be removed from ${usedIn.length === 1 ? 'the encounter' : 'these encounters'}: ${usedIn.join(', ')}.`
        : 'This removes it from your adversary library.',
      onConfirm: () => onRemove(a.id),
    });
  };

  const q = query.trim().toLowerCase();
  const shown = adversaries.filter(a =>
    (tier === 'all' || a.tier === tier) &&
    (type === 'all' || a.type === type) &&
    (!q || a.name.toLowerCase().includes(q) || (a.type || '').toLowerCase().includes(q)));

  return (
    <div className="library">
      <LibraryHeader
        title="Adversaries" count={adversaries.length} shown={shown.length}
        query={query} onQuery={setQuery} placeholder="Search name / type…"
        action={<button className="btn btn-npc" onClick={() => setEditing(makeAdversary())}>+ New Adversary</button>}
      >
        <Chips label="Tier" options={TIERS} value={tier} onChange={setTier} />
        <select className="lib-select" aria-label="Type" value={type} onChange={e => setType(e.target.value)}>
          <option value="all">All types</option>
          {ADVERSARY_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </LibraryHeader>

      {shown.length === 0 ? (
        <p className="library-empty">
          {adversaries.length === 0 ? 'No adversaries yet.' : 'No matches. Try another tier, type or search.'}
        </p>
      ) : (
        <div className="card-grid">
          {shown.map(a => (
            <div key={a.id} className="entity-card adv-card">
              <div className="entity-card-head">
                <span className="entity-name">{a.name}</span>
                <span className="entity-tag">Tier {a.tier} {a.type}</span>
              </div>
              {a.description && <div className="entity-line entity-flavor clamp-2" title={a.description}>{a.description}</div>}
              <div className="stat-row">
                <span className="stat-pill">Diff <b>{a.difficulty}</b></span>
                <span className="stat-pill">Thr <b>{thr(a.thresholds)}</b></span>
                <span className="stat-pill">HP <b>{a.hpMax}</b></span>
                <span className="stat-pill">Stress <b>{a.stressMax}</b></span>
                {(a.size || 1) !== 1 && <span className="stat-pill">Size <b>×{a.size}</b></span>}
              </div>
              {a.attack?.name && (
                <div className="entity-line">
                  <b>ATK {a.atk}</b> · {a.attack.name}
                  {a.attack.range ? ` (${a.attack.range})` : ''}
                  {a.attack.damage ? ` · ${a.attack.damage}` : ''}
                </div>
              )}
              {a.experience && <div className="entity-line"><b>Experience:</b> {a.experience}</div>}
              {a.motives && <div className="entity-line entity-notes clamp-2" title={a.motives}><b>Motives:</b> {a.motives}</div>}
              {a.features?.length > 0 && (
                <details className="entity-features">
                  <summary>{a.features.length} feature{a.features.length === 1 ? '' : 's'}</summary>
                  {a.features.map((f, i) => (
                    <div key={i} className="feature">
                      <b>{f.name}</b> <span className="feature-type">{f.type}</span>
                      <div className="feature-text">{f.text}</div>
                    </div>
                  ))}
                </details>
              )}
              {a.notes && <div className="entity-line entity-notes">{a.notes}</div>}
              <div className="entity-card-btns">
                <button className="btn btn-npc btn-sm" onClick={() => onAddToMap(a)}>+ Map</button>
                <button className="btn btn-clr btn-sm" onClick={() => setEditing(a)}>Edit</button>
                <button className="btn btn-ghost-danger btn-sm" onClick={() => askRemove(a)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <EntityForm
          title={editing.id == null ? 'New Adversary' : 'Edit Adversary'}
          fields={FIELDS}
          initial={editing}
          onSave={save}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}
