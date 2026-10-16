import { useState } from 'react';
import EntityForm from './EntityForm';
import LibraryHeader from './LibraryHeader';
import { useConfirm } from './Feedback';
import { makeCharacter } from '../constants';

const FIELDS = [
  { key: 'name',              label: 'Name',        group: 'Basics', full: true },
  { key: 'evasion',          label: 'Evasion',     group: 'Defense', type: 'number' },
  { key: 'armorMax',         label: 'Armor slots', group: 'Defense', type: 'number' },
  { key: 'thresholds.major', label: 'Major thr.',  group: 'Defense', type: 'number' },
  { key: 'thresholds.severe',label: 'Severe thr.', group: 'Defense', type: 'number' },
  { key: 'hpMax',            label: 'HP',          group: 'Resources', type: 'number' },
  { key: 'stressMax',        label: 'Stress',      group: 'Resources', type: 'number' },
  { key: 'hopeMax',          label: 'Hope',        group: 'Resources', type: 'number' },
  { key: 'notes',            label: 'Notes',       group: 'Resources', type: 'textarea' },
];

export default function CharacterLibrary({ characters, tokens, onAdd, onEdit, onRemove, onAddToMap }) {
  const [editing, setEditing] = useState(null);
  const [query,   setQuery]   = useState('');
  const confirm = useConfirm();

  const save = entry => {
    if (entry.id == null) onAdd(entry);
    else onEdit(entry);
    setEditing(null);
  };

  const onMap = new Set(tokens.filter(t => t.refKind === 'character').map(t => t.refId));
  const q = query.trim().toLowerCase();
  const shown = q ? characters.filter(c => c.name.toLowerCase().includes(q)) : characters;

  return (
    <div className="library">
      <LibraryHeader
        title="Characters" count={characters.length} shown={shown.length}
        query={query} onQuery={characters.length > 6 ? setQuery : null}
        action={<button className="btn btn-pc" onClick={() => setEditing(makeCharacter())}>+ New Character</button>}
      />

      {shown.length === 0 ? (
        <p className="library-empty">
          {characters.length === 0 ? 'No characters yet. Create your party here to add them to the map.' : 'No matches.'}
        </p>
      ) : (
        <div className="card-grid">
          {shown.map(c => (
            <div key={c.id} className="entity-card pc-card">
              <div className="entity-card-head">
                <span className="entity-name">{c.name}</span>
                {onMap.has(c.id) && <span className="entity-tag on-map-tag">on map</span>}
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
                <button className="btn btn-pc btn-sm" onClick={() => onAddToMap(c)}>+ Map</button>
                <button className="btn btn-clr btn-sm" onClick={() => setEditing(c)}>Edit</button>
                <button
                  className="btn btn-ghost-danger btn-sm"
                  onClick={() => confirm({
                    title: `Delete ${c.name}?`,
                    message: 'This removes the character from your library. Tokens already on the map stay.',
                    onConfirm: () => onRemove(c.id),
                  })}
                >
                  Delete
                </button>
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
