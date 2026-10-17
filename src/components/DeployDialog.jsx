import { useState } from 'react';
import Dialog from './Dialog';
import { adversarySpecs } from '../scene';

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

// "Who's at the session?" before a scene replaces the board.
// Checked PCs take the spawn points in list order; extra ones stand near the last point.
export default function DeployDialog({ encounter: enc, map, library, characters, tokens, onDeploy, onClose }) {
  const [order, setOrder] = useState(() => {
    const onBoard = new Set(tokens.filter(t => t.refKind === 'character').map(t => t.refId));
    const here = characters.filter(c => onBoard.has(c.id));
    return (here.length ? here : characters).map(c => c.id);
  });

  const chosen = order.map(id => characters.find(c => c.id === id)).filter(Boolean);
  const rest   = characters.filter(c => !order.includes(c.id));
  const points = enc.spawnPoints.length;
  const foes   = adversarySpecs(enc, library).length;

  const toggle = id => setOrder(o => (o.includes(id) ? o.filter(x => x !== id) : [...o, id]));
  const move = (i, d) => setOrder(o => {
    const next = [...o];
    [next[i], next[i + d]] = [next[i + d], next[i]];
    return next;
  });

  const spot = i => (i < points ? `point ${i + 1}` : points ? `near point ${points}` : 'near the middle');

  return (
    <Dialog title={`Deploy “${enc.name}”`} onClose={onClose} wide>
      <p className="data-hint">
        {map ? <>Map <b>{map.name}</b> · </> : 'No map · '}
        {plural(foes, 'adversary', 'adversaries')} · {plural(points, 'spawn point')}.
        {tokens.length > 0 && <> The current board is replaced — <b>Ctrl+Z</b> brings it back.</>}
      </p>

      <h3>Who's at the session?</h3>
      {characters.length === 0 ? (
        <p className="data-hint">No characters yet — add your party in the Characters tab.</p>
      ) : (
        <div className="pick-list deploy-pcs">
          {chosen.map((c, i) => (
            <div key={c.id} className="pick-item">
              <input type="checkbox" checked onChange={() => toggle(c.id)} aria-label={`${c.name} is at the session`} />
              <span className="pick-name">{c.name}</span>
              <span className="pick-detail">{spot(i)}</span>
              <button className="icon-btn" onClick={() => move(i, -1)} disabled={i === 0} aria-label={`Move ${c.name} up`}>↑</button>
              <button className="icon-btn" onClick={() => move(i, 1)} disabled={i === chosen.length - 1} aria-label={`Move ${c.name} down`}>↓</button>
            </div>
          ))}
          {rest.map(c => (
            <label key={c.id} className="pick-item is-off">
              <input type="checkbox" checked={false} onChange={() => toggle(c.id)} />
              <span className="pick-name">{c.name}</span>
            </label>
          ))}
        </div>
      )}
      <p className="data-hint deploy-note">PCs already on the board keep their HP, Stress, Hope and Armor.</p>

      <div className="modal-btns">
        <button className="btn btn-clr" onClick={onClose}>Cancel</button>
        <button className="btn btn-npc" autoFocus onClick={() => onDeploy(chosen.map(c => c.id))}>Deploy</button>
      </div>
    </Dialog>
  );
}
