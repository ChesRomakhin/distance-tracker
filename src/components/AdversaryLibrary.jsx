import { useState } from 'react';
import EntityForm from './EntityForm';
import { makeAdversary, ADVERSARY_TYPES } from '../constants';

const FIELDS = [
  { key: 'name',              label: 'Name' },
  { key: 'type',             label: 'Type',       type: 'select', options: ADVERSARY_TYPES },
  { key: 'tier',             label: 'Tier',       type: 'number' },
  { key: 'difficulty',       label: 'Difficulty', type: 'number' },
  { key: 'hpMax',            label: 'HP',         type: 'number' },
  { key: 'stressMax',        label: 'Stress',     type: 'number' },
  { key: 'thresholds.major', label: 'Major thr.', type: 'number' },
  { key: 'thresholds.severe',label: 'Severe thr.',type: 'number' },
  { key: 'atk',              label: 'ATK mod' },
  { key: 'attack.name',      label: 'Attack' },
  { key: 'attack.range',     label: 'Range' },
  { key: 'attack.damage',    label: 'Damage' },
  { key: 'experience',       label: 'Experience', full: true },
  { key: 'description',      label: 'Description', type: 'textarea' },
  { key: 'motives',          label: 'Motives & Tactics', type: 'textarea' },
  { key: 'features',         label: 'Features', type: 'features' },
  { key: 'notes',            label: 'Notes', type: 'textarea' },
];

const thr = t => (t && (t.major || t.severe) ? `${t.major}/${t.severe}` : 'None');

export default function AdversaryLibrary({ adversaries, onAdd, onEdit, onRemove }) {
  const [editing, setEditing] = useState(null);
  const [query,   setQuery]   = useState('');

  const save = entry => {
    if (entry.id == null) onAdd(entry); else onEdit(entry);
    setEditing(null);
  };

  const q = query.trim().toLowerCase();
  const shown = q
    ? adversaries.filter(a =>
        a.name.toLowerCase().includes(q) ||
        (a.type || '').toLowerCase().includes(q) ||
        String(a.tier).includes(q))
    : adversaries;

  return (
    <div className="library">
      <div className="library-head">
        <h2>Adversaries <span className="lib-count">{adversaries.length}</span></h2>
        <div className="library-tools">
          <input
            className="lib-search"
            placeholder="Search name / type / tier…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="btn btn-npc" onClick={() => setEditing(makeAdversary())}>+ New Adversary</button>
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="library-empty">
          {adversaries.length === 0 ? 'No adversaries yet.' : 'No matches.'}
        </p>
      ) : (
        <div className="card-grid">
          {shown.map(a => (
            <div key={a.id} className="entity-card adv-card">
              <div className="entity-card-head">
                <span className="entity-name">{a.name}</span>
                <span className="entity-tag">Tier {a.tier} {a.type}</span>
              </div>
              {a.description && <div className="entity-line entity-flavor">{a.description}</div>}
              <div className="stat-row">
                <span className="stat-pill">Diff <b>{a.difficulty}</b></span>
                <span className="stat-pill">Thr <b>{thr(a.thresholds)}</b></span>
                <span className="stat-pill">HP <b>{a.hpMax}</b></span>
                <span className="stat-pill">Stress <b>{a.stressMax}</b></span>
              </div>
              {a.attack?.name && (
                <div className="entity-line">
                  <b>ATK {a.atk}</b> · {a.attack.name}
                  {a.attack.range ? ` (${a.attack.range})` : ''}
                  {a.attack.damage ? ` · ${a.attack.damage}` : ''}
                </div>
              )}
              {a.experience && <div className="entity-line"><b>Experience:</b> {a.experience}</div>}
              {a.motives && <div className="entity-line entity-notes"><b>Motives:</b> {a.motives}</div>}
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
                <button className="btn btn-clr btn-sm" onClick={() => setEditing(a)}>Edit</button>
                <button className="btn btn-clr btn-sm" onClick={() => onRemove(a.id)}>Delete</button>
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
