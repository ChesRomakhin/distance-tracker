import { useState } from 'react';
import Dialog from './Dialog';
import { encounterFromBoard } from '../scene';

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

// Board → encounter: the map, adversaries with their positions, spawn points.
export default function SaveBoardDialog({ state, map, onSave, onClose }) {
  const { encounters } = state;
  const [mode,     setMode]     = useState('new');   // 'new' | 'overwrite'
  const [name,     setName]     = useState(map?.name ?? '');
  const [targetId, setTargetId] = useState(encounters[0]?.id ?? null);
  const [pcSpawns, setPcSpawns] = useState(true);
  const [tried,    setTried]    = useState(false);

  const pcs = state.tokens.filter(t => t.type === 'PC').length;
  const askPcSpawns = !state.spawnPoints.length && pcs > 0;
  const existing = mode === 'overwrite' ? encounters.find(e => e.id === targetId) : null;
  const { encounter, skipped } = encounterFromBoard(state, {
    name: name.trim(), existing, pcSpawns: askPcSpawns && pcSpawns,
  });
  const nameMissing = mode === 'new' && !name.trim();

  const save = () => {
    setTried(true);
    if (nameMissing || (mode === 'overwrite' && !existing)) return;
    onSave(encounter, mode === 'new');
  };

  return (
    <Dialog title="Save board to encounter" onClose={onClose} wide>
      <p className="data-hint">
        {map ? <>Map <b>{map.name}</b></> : 'No map'} · {plural(encounter.placements.length, 'adversary', 'adversaries')}
        {' '}· {plural(encounter.spawnPoints.length, 'spawn point')}.
        {' '}HP and Stress are not saved — the encounter starts fresh every time.
      </p>
      {skipped > 0 && (
        <p className="data-error">
          {plural(skipped, 'custom NPC token is', 'custom NPC tokens are')} not saved — they have no stat block.
        </p>
      )}

      <label className="pick-item">
        <input type="radio" name="save-mode" checked={mode === 'new'} onChange={() => setMode('new')} />
        New encounter
      </label>
      {mode === 'new' && (
        <label className="field save-field">
          <span>Name</span>
          <input
            autoFocus
            className={tried && nameMissing ? 'invalid' : undefined}
            placeholder="Encounter name…"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') save(); }}
          />
          {tried && nameMissing && <em className="field-error">Name is required.</em>}
        </label>
      )}

      <label className="pick-item">
        <input
          type="radio" name="save-mode" checked={mode === 'overwrite'}
          onChange={() => setMode('overwrite')} disabled={!encounters.length}
        />
        Replace an existing encounter
      </label>
      {mode === 'overwrite' && (
        <label className="field save-field">
          <span>Encounter</span>
          <select value={targetId ?? ''} onChange={e => setTargetId(Number(e.target.value))}>
            {encounters.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
          </select>
          <em className="data-hint">Its adversaries, map and spawn points are replaced; the name stays.</em>
        </label>
      )}

      {askPcSpawns && (
        <label className="pick-item save-pcs">
          <input type="checkbox" checked={pcSpawns} onChange={e => setPcSpawns(e.target.checked)} />
          No spawn points marked — use the positions of the {plural(pcs, 'PC')} on the board
        </label>
      )}

      <div className="modal-btns">
        <button className="btn btn-clr" onClick={onClose}>Cancel</button>
        <button className="btn btn-pc" onClick={save}>{mode === 'new' ? 'Save' : 'Replace'}</button>
      </div>
    </Dialog>
  );
}
