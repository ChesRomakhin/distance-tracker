import { useState } from 'react';
import { makeEncounter } from '../constants';

function EncounterEditor({ draft: initial, adversaries, onSave, onCancel }) {
  const [draft, setDraft] = useState(initial);
  const [pick, setPick]   = useState(adversaries[0]?.id ?? '');

  const set = patch => setDraft(d => ({ ...d, ...patch }));

  const addEntry = () => {
    const id = Number(pick);
    if (!id) return;
    setDraft(d => {
      const existing = d.entries.find(e => e.adversaryId === id);
      if (existing) {
        return { ...d, entries: d.entries.map(e => e.adversaryId === id ? { ...e, count: e.count + 1 } : e) };
      }
      return { ...d, entries: [...d.entries, { adversaryId: id, count: 1 }] };
    });
  };

  const setCount = (id, count) =>
    setDraft(d => ({ ...d, entries: d.entries.map(e => e.adversaryId === id ? { ...e, count } : e) }));

  const removeEntry = id =>
    setDraft(d => ({ ...d, entries: d.entries.filter(e => e.adversaryId !== id) }));

  const nameOf = id => adversaries.find(a => a.id === id)?.name ?? '(deleted)';
  const totalUnits = draft.entries.reduce((n, e) => n + e.count, 0);

  return (
    <div className="enc-editor">
      <div className="enc-editor-head">
        <input
          className="enc-name-input"
          placeholder="Encounter name…"
          value={draft.name}
          onChange={e => set({ name: e.target.value })}
        />
      </div>

      <div className="enc-picker">
        <select value={pick} onChange={e => setPick(e.target.value)}>
          {adversaries.length === 0 && <option value="">No adversaries — create some first</option>}
          {adversaries.map(a => <option key={a.id} value={a.id}>{a.name} (Tier {a.tier})</option>)}
        </select>
        <button className="btn btn-npc btn-sm" onClick={addEntry} disabled={!adversaries.length}>+ Add</button>
      </div>

      {draft.entries.length === 0 ? (
        <p className="library-empty">No adversaries in this encounter yet.</p>
      ) : (
        <div className="enc-rows">
          {draft.entries.map(e => (
            <div key={e.adversaryId} className="enc-row">
              <span className="enc-row-name">{nameOf(e.adversaryId)}</span>
              <div className="enc-count">
                <button className="stepper-btn" onClick={() => setCount(e.adversaryId, Math.max(1, e.count - 1))}>−</button>
                <span className="stepper-value">{e.count}</span>
                <button className="stepper-btn" onClick={() => setCount(e.adversaryId, e.count + 1)}>+</button>
              </div>
              <button className="btn btn-clr btn-sm" onClick={() => removeEntry(e.adversaryId)}>✕</button>
            </div>
          ))}
          <div className="enc-total">{totalUnits} unit{totalUnits === 1 ? '' : 's'} total</div>
        </div>
      )}

      <div className="modal-btns">
        <button className="btn btn-clr" onClick={onCancel}>Cancel</button>
        <button className="btn btn-pc" onClick={() => draft.name.trim() && onSave(draft)}>Save</button>
      </div>
    </div>
  );
}

export default function EncounterBuilder({ encounters, adversaries, onAdd, onEdit, onRemove, onDeploy }) {
  const [editing, setEditing] = useState(null);

  const save = entry => {
    if (entry.id == null) onAdd(entry);
    else onEdit(entry);
    setEditing(null);
  };

  const summary = enc => {
    const units = enc.entries.reduce((n, e) => n + e.count, 0);
    return `${enc.entries.length} type${enc.entries.length === 1 ? '' : 's'} · ${units} unit${units === 1 ? '' : 's'}`;
  };

  return (
    <div className="library">
      <div className="library-head">
        <h2>Encounter Builder</h2>
        <button className="btn btn-pc" onClick={() => setEditing(makeEncounter())}>+ New Encounter</button>
      </div>

      {editing && (
        <EncounterEditor
          draft={editing}
          adversaries={adversaries}
          onSave={save}
          onCancel={() => setEditing(null)}
        />
      )}

      {encounters.length === 0 ? (
        <p className="library-empty">No encounters yet. Build a roster of adversaries to deploy together.</p>
      ) : (
        <div className="card-grid">
          {encounters.map(enc => (
            <div key={enc.id} className="entity-card">
              <div className="entity-card-head">
                <span className="entity-name">{enc.name}</span>
                <span className="entity-tag">{summary(enc)}</span>
              </div>
              <div className="entity-line entity-notes">
                {enc.entries.length === 0
                  ? '(empty)'
                  : enc.entries.map(e => {
                      const a = adversaries.find(x => x.id === e.adversaryId);
                      return `${a?.name ?? '(deleted)'} ×${e.count}`;
                    }).join(', ')}
              </div>
              <div className="entity-card-btns">
                <button className="btn btn-npc btn-sm" onClick={() => onDeploy(enc)} disabled={!enc.entries.length}>Deploy to map</button>
                <button className="btn btn-clr btn-sm" onClick={() => setEditing(enc)}>Edit</button>
                <button className="btn btn-clr btn-sm" onClick={() => onRemove(enc.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
