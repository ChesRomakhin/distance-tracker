import { useState } from 'react';
import Dialog from './Dialog';
import LibraryHeader from './LibraryHeader';
import { useConfirm } from './Feedback';
import { makeEncounter, encounterGroups, placementAdversary, refId } from '../constants';
import { canDeploy } from '../scene';

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

const groupAdversary = (enc, g, library) => placementAdversary(enc, { ref: g.ref }, library);

// "T1 ×3 · T4 ×1" — how many units of each tier the encounter fields.
export function tierSummary(enc, library) {
  const byTier = {};
  enc.placements.forEach(p => {
    const a = placementAdversary(enc, p, library);
    if (a) byTier[a.tier] = (byTier[a.tier] || 0) + 1;
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

const unplaced = ref => ({ ref, label: null, x: null, y: null, size: null });

function EncounterEditor({ draft: initial, adversaries, maps, onSave, onCancel }) {
  const [draft, setDraft] = useState(initial);
  const [tried, setTried] = useState(false);
  const confirm = useConfirm();

  const sameRef = key => p => refId(p.ref) === key;

  // New units have no position — they are placed around the others at deploy.
  const addLib = id => setDraft(d => {
    const existing = d.placements.find(sameRef(id));
    return { ...d, placements: [...d.placements, unplaced(existing?.ref ?? { lib: id })] };
  });

  const addOne = g => setDraft(d => ({ ...d, placements: [...d.placements, unplaced(g.ref)] }));

  // Drop a unit without a position first, so the laid-out ones stay.
  const removeOne = key => setDraft(d => {
    const mine = d.placements.map((p, i) => [p, i]).filter(([p]) => sameRef(key)(p));
    const pick = [...mine].reverse().find(([p]) => p.x == null) ?? mine[mine.length - 1];
    return { ...d, placements: d.placements.filter((_, i) => i !== pick[1]) };
  });

  const removeGroup = key =>
    setDraft(d => ({ ...d, placements: d.placements.filter(p => !sameRef(key)(p)) }));

  const groups = encounterGroups(draft);
  const nameOf = g => groupAdversary(draft, g, adversaries)?.name ?? '(deleted)';
  const nameMissing = !draft.name.trim();

  // Drop local adversaries that no placement uses any more.
  const save = () => {
    setTried(true);
    if (nameMissing) return;
    const used = new Set(draft.placements.filter(p => p.ref.local != null).map(p => p.ref.local));
    onSave({ ...draft, adversaries: (draft.adversaries ?? []).filter(a => used.has(a.id)) });
  };
  const close = () => {
    if (JSON.stringify(draft) === JSON.stringify(initial)) { onCancel(); return; }
    confirm({ title: 'Discard changes?', message: 'Your edits to this encounter will be lost.', confirmLabel: 'Discard', onConfirm: onCancel });
  };
  const totalUnits = draft.placements.length;

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

      <div className="form-grid">
        <label className="field">
          <span>Map</span>
          <select
            value={draft.mapId ?? ''}
            onChange={e => setDraft(d => ({ ...d, mapId: e.target.value === '' ? null : Number(e.target.value) }))}
          >
            <option value="">No map</option>
            {maps.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
          </select>
        </label>
        <div className="field">
          <span>Spawn points</span>
          <p className="enc-spawn-info">
            {draft.spawnPoints.length || 'None'} · set on the board, then <b>Save to encounter</b>
          </p>
        </div>
      </div>

      <AdversaryPicker adversaries={adversaries} onPick={addLib} />

      {groups.length === 0 ? (
        <p className="library-empty">No adversaries in this encounter yet.</p>
      ) : (
        <div className="enc-rows">
          {groups.map(g => {
            const key = refId(g.ref);
            return (
              <div key={key} className="enc-row">
                <span className="enc-row-name">
                  {nameOf(g)}
                  {g.ref.local != null && <span className="stat-pill enc-local" title="Came with an imported file; not in the library">local</span>}
                  {g.placed > 0 && <span className="stat-pill enc-local" title="Units with a saved position on the map">{g.placed} on map</span>}
                </span>
                <div className="enc-count">
                  <button className="stepper-btn" aria-label="One less" onClick={() => removeOne(key)} disabled={g.count <= 1}>−</button>
                  <span className="stepper-value">{g.count}</span>
                  <button className="stepper-btn" aria-label="One more" onClick={() => addOne(g)}>+</button>
                </div>
                <button className="icon-btn" aria-label={`Remove ${nameOf(g)}`} title="Remove" onClick={() => removeGroup(key)}>✕</button>
              </div>
            );
          })}
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

export default function EncounterBuilder({ encounters, adversaries, maps, onAdd, onEdit, onRemove, onDeploy, onExport }) {
  const [editing, setEditing] = useState(null);
  const confirm = useConfirm();

  const save = entry => {
    if (entry.id == null) onAdd(entry);
    else onEdit(entry);
    setEditing(null);
  };

  const summary = enc =>
    `${plural(encounterGroups(enc).length, 'type')} · ${plural(enc.placements.length, 'unit')}`;
  const mapName = enc => maps.find(m => m.id === enc.mapId)?.name;

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
              {(enc.placements.length > 0 || mapName(enc) || enc.spawnPoints.length > 0) && (
                <div className="stat-row">
                  {enc.placements.length > 0 && <span className="stat-pill">{tierSummary(enc, adversaries)}</span>}
                  {mapName(enc) && <span className="stat-pill">Map <b>{mapName(enc)}</b></span>}
                  {enc.spawnPoints.length > 0 && <span className="stat-pill">{plural(enc.spawnPoints.length, 'spawn point')}</span>}
                </div>
              )}
              <div className="entity-line entity-notes">
                {enc.placements.length === 0
                  ? '(no adversaries)'
                  : encounterGroups(enc).map(g =>
                      `${groupAdversary(enc, g, adversaries)?.name ?? '(deleted)'} ×${g.count}`).join(', ')}
              </div>
              <div className="entity-card-btns">
                <button className="btn btn-npc btn-sm" onClick={() => onDeploy(enc)} disabled={!canDeploy(enc)}>Deploy to map</button>
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
          maps={maps}
          onSave={save}
          onCancel={() => setEditing(null)}
        />
      )}
    </div>
  );
}
