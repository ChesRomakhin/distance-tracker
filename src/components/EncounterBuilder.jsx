import { useState } from 'react';
import Dialog from './Dialog';
import LibraryHeader from './LibraryHeader';
import { useConfirm } from './Feedback';
import { makeEncounter, findEncounterAdversary } from '../constants';

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

// "T1 ×3 · T4 ×1" — how many units of each tier the encounter fields.
export function tierSummary(enc, library) {
  const byTier = {};
  enc.entries.forEach(e => {
    const a = findEncounterAdversary(enc, e.adversaryId, library);
    if (a) byTier[a.tier] = (byTier[a.tier] || 0) + e.count;
  });
  return Object.keys(byTier).sort().map(t => `T${t} ×${byTier[t]}`).join(' · ');
}

function AdversaryPicker({ adversaries, onPick }) {
  const [q, setQ] = useState('');
  const needle = q.trim().toLowerCase();
  const matches = needle
    ? adversaries.filter(a =>
        a.name.toLowerCase().includes(needle) ||
        (a.type || '').toLowerCase().includes(needle) ||
        `t${a.tier}` === needle).slice(0, 8)
    : [];

  return (
    <div className="enc-picker">
      <input
        type="search"
        placeholder={adversaries.length ? 'Find an adversary to add (name, type or t2)…' : 'No adversaries — create some first'}
        aria-label="Find an adversary"
        disabled={!adversaries.length}
        value={q}
        onChange={e => setQ(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter' && matches[0]) { onPick(matches[0].id); setQ(''); } }}
      />
      {needle && (
        <div className="enc-results">
          {matches.length === 0 && <p className="sp-empty">No matches.</p>}
          {matches.map(a => (
            <button key={a.id} className="sp-add-row" onClick={() => onPick(a.id)}>
              <span className="sp-add-name">{a.name}</span>
              <span className="sp-add-tier">T{a.tier} {a.type}</span>
              <span className="sp-add-plus">+</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function EncounterEditor({ draft: initial, adversaries, onSave, onCancel }) {
  const [draft, setDraft] = useState(initial);
  const [tried, setTried] = useState(false);
  const confirm = useConfirm();

  const addEntry = id => setDraft(d => {
    const existing = d.entries.find(e => e.adversaryId === id);
    if (existing) {
      return { ...d, entries: d.entries.map(e => e.adversaryId === id ? { ...e, count: e.count + 1 } : e) };
    }
    return { ...d, entries: [...d.entries, { adversaryId: id, count: 1 }] };
  });

  const setCount = (id, count) =>
    setDraft(d => ({ ...d, entries: d.entries.map(e => e.adversaryId === id ? { ...e, count } : e) }));

  const removeEntry = id =>
    setDraft(d => ({ ...d, entries: d.entries.filter(e => e.adversaryId !== id) }));

  const nameOf = id => findEncounterAdversary(draft, id, adversaries)?.name ?? '(deleted)';
  const isLocal = id => draft.adversaries?.some(a => a.id === id);
  const nameMissing = !draft.name.trim();

  // Drop local adversaries that no entry uses any more.
  const save = () => {
    setTried(true);
    if (nameMissing) return;
    const used = new Set(draft.entries.map(e => e.adversaryId));
    onSave({ ...draft, adversaries: (draft.adversaries ?? []).filter(a => used.has(a.id)) });
  };
  const close = () => {
    if (JSON.stringify(draft) === JSON.stringify(initial)) { onCancel(); return; }
    confirm({ title: 'Discard changes?', message: 'Your edits to this encounter will be lost.', confirmLabel: 'Discard', onConfirm: onCancel });
  };
  const totalUnits = draft.entries.reduce((n, e) => n + e.count, 0);

  return (
    <Dialog title={initial.id == null ? 'New Encounter' : 'Edit Encounter'} onClose={close} wide>
      <label className="field">
        <span>Name</span>
        <input
          autoFocus
          className={tried && nameMissing ? 'invalid' : undefined}
          placeholder="Encounter name…"
          value={draft.name}
          onChange={e => setDraft(d => ({ ...d, name: e.target.value }))}
        />
        {tried && nameMissing && <em className="field-error">Name is required.</em>}
      </label>

      <AdversaryPicker adversaries={adversaries} onPick={addEntry} />

      {draft.entries.length === 0 ? (
        <p className="library-empty">No adversaries in this encounter yet.</p>
      ) : (
        <div className="enc-rows">
          {draft.entries.map(e => (
            <div key={e.adversaryId} className="enc-row">
              <span className="enc-row-name">
                {nameOf(e.adversaryId)}
                {isLocal(e.adversaryId) && <span className="stat-pill enc-local" title="Came with an imported file; not in the library">local</span>}
              </span>
              <div className="enc-count">
                <button className="stepper-btn" aria-label="One less" onClick={() => setCount(e.adversaryId, Math.max(1, e.count - 1))} disabled={e.count <= 1}>−</button>
                <span className="stepper-value">{e.count}</span>
                <button className="stepper-btn" aria-label="One more" onClick={() => setCount(e.adversaryId, e.count + 1)}>+</button>
              </div>
              <button className="icon-btn" aria-label={`Remove ${nameOf(e.adversaryId)}`} title="Remove" onClick={() => removeEntry(e.adversaryId)}>✕</button>
            </div>
          ))}
          <div className="enc-total">{plural(totalUnits, 'unit')} · {tierSummary(draft, adversaries)}</div>
        </div>
      )}

      <div className="modal-btns modal-foot">
        <button className="btn btn-clr" onClick={close}>Cancel</button>
        <button className="btn btn-pc" onClick={save}>Save</button>
      </div>
    </Dialog>
  );
}

export default function EncounterBuilder({ encounters, adversaries, onAdd, onEdit, onRemove, onDeploy, onExport }) {
  const [editing, setEditing] = useState(null);
  const confirm = useConfirm();

  const save = entry => {
    if (entry.id == null) onAdd(entry);
    else onEdit(entry);
    setEditing(null);
  };

  const summary = enc => {
    const units = enc.entries.reduce((n, e) => n + e.count, 0);
    return `${plural(enc.entries.length, 'type')} · ${plural(units, 'unit')}`;
  };

  return (
    <div className="library">
      <LibraryHeader
        title="Encounters" count={encounters.length}
        action={<button className="btn btn-pc" onClick={() => setEditing(makeEncounter())}>+ New Encounter</button>}
      />

      {encounters.length === 0 ? (
        <p className="library-empty">No encounters yet. Build a roster of adversaries to deploy together.</p>
      ) : (
        <div className="card-grid">
          {encounters.map(enc => (
            <div key={enc.id} className="entity-card enc-card">
              <div className="entity-card-head">
                <span className="entity-name">{enc.name}</span>
                <span className="entity-tag">{summary(enc)}</span>
              </div>
              {enc.entries.length > 0 && <div className="stat-row"><span className="stat-pill">{tierSummary(enc, adversaries)}</span></div>}
              <div className="entity-line entity-notes">
                {enc.entries.length === 0
                  ? '(empty)'
                  : enc.entries.map(e => {
                      const a = findEncounterAdversary(enc, e.adversaryId, adversaries);
                      return `${a?.name ?? '(deleted)'} ×${e.count}`;
                    }).join(', ')}
              </div>
              <div className="entity-card-btns">
                <button className="btn btn-npc btn-sm" onClick={() => onDeploy(enc)} disabled={!enc.entries.length}>Deploy to map</button>
                <button className="btn btn-clr btn-sm" onClick={() => setEditing(enc)}>Edit</button>
                <button className="btn btn-clr btn-sm" onClick={() => onExport(enc)} title="Download as a file with its adversaries">Export</button>
                <button
                  className="btn btn-ghost-danger btn-sm card-delete"
                  aria-label={`Delete ${enc.name}`}
                  title="Delete encounter"
                  onClick={() => confirm({ title: `Delete ${enc.name}?`, message: 'The encounter is removed. Its adversaries stay in the library.', onConfirm: () => onRemove(enc.id) })}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editing && (
        <EncounterEditor
          draft={editing}
          adversaries={adversaries}
          onSave={save}
          onCancel={() => setEditing(null)}
        />
      )}
    </div>
  );
}
