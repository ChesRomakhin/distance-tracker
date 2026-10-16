import { useState } from 'react';
import Dialog from './Dialog';

export default function Modal({ type, onConfirm, onClose }) {
  const [name, setName] = useState('');
  const trimmed = name.trim();

  const confirm = () => { if (trimmed) onConfirm(trimmed); };

  return (
    <Dialog title={type === 'PC' ? 'Add PC' : 'Add NPC / Enemy'} onClose={onClose}>
      <input
        type="text"
        placeholder="Name…"
        aria-label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') confirm(); }}
      />
      {type === 'PC' && <p className="data-hint">The PC is also saved to your Characters.</p>}
      <div className="modal-btns">
        <button className="btn btn-clr" onClick={onClose}>Cancel</button>
        <button
          className={`btn ${type === 'PC' ? 'btn-pc' : 'btn-npc'}`}
          onClick={confirm}
          disabled={!trimmed}
        >
          Add
        </button>
      </div>
    </Dialog>
  );
}
