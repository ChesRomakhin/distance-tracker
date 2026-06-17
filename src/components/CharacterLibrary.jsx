import { useState } from 'react';
import EntityForm from './EntityForm';
import { makeCharacter } from '../constants';

const FIELDS = [
  { key: 'name',              label: 'Name' },
  { key: 'evasion',          label: 'Evasion',   type: 'number' },
  { key: 'armorMax',         label: 'Armor',     type: 'number' },
  { key: 'hpMax',            label: 'HP',        type: 'number' },
  { key: 'stressMax',        label: 'Stress',    type: 'number' },
  { key: 'hopeMax',          label: 'Hope',      type: 'number' },
  { key: 'thresholds.major', label: 'Major thr.', type: 'number' },
  { key: 'thresholds.severe',label: 'Severe thr.',type: 'number' },
  { key: 'notes',            label: 'Notes',      type: 'textarea' },
];

export default function CharacterLibrary({ characters, onAdd, onEdit, onRemove }) {
  const [editing, setEditing] = useState(null);

  const save = entry => {
    if (entry.id == null) onAdd(entry);
    else onEdit(entry);
    setEditing(null);
  };

  return (
    <div className="library">
      <div className="library-head">
        <h2>Characters</h2>
        <button className="btn btn-pc" onClick={() => setEditing(makeCharacter())}>+ New Character</button>
      </div>

      {characters.length === 0 ? (
        <p className="library-empty">No characters yet. Create your party here to add them to the map.</p>
      ) : (
        <div className="card-grid">
          {characters.map(c => (
            <div key={c.id} className="entity-card pc-card">
              <div className="entity-card-head">
                <span className="entity-name">{c.name}</span>
              </div>
              <div className="stat-row">
                <span className="stat-pill">Eva <b>{c.evasion}</b></span>
                <span className="stat-pill">HP <b>{c.hpMax}</b></span>
                <span className="stat-pill">Stress <b>{c.stressMax}</b></span>
                {c.armorMax > 0 && <span className="stat-pill">Armor <b>{c.armorMax}</b></span>}
                <span className="stat-pill">Hope <b>{c.hopeMax}</b></span>
                <span className="stat-pill">Thr <b>{c.thresholds.major}/{c.thresholds.severe}</b></span>
              </div>
              {c.notes && <div className="entity-line entity-notes">{c.notes}</div>}
              <div className="entity-card-btns">
                <button className="btn btn-clr btn-sm" onClick={() => setEditing(c)}>Edit</button>
                <button className="btn btn-clr btn-sm" onClick={() => onRemove(c.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <EntityForm
          title={editing.id == null ? 'New Character' : 'Edit Character'}
          fields={FIELDS}
          initial={editing}
          onSave={save}
          onClose={() => setEditing(null)}
        />
      )}
    </div>
  );
}
