import { useState, useEffect, useRef } from 'react';

export default function Modal({ type, onConfirm, onClose }) {
  const [name, setName] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const confirm = () => {
    const trimmed = name.trim();
    if (trimmed) onConfirm(trimmed);
  };

  return (
    <div
      className="overlay"
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal">
        <h2>{type === 'PC' ? 'Add PC' : 'Add NPC / Enemy'}</h2>
        <input
          ref={inputRef}
          type="text"
          placeholder="Name…"
          maxLength={20}
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter')  confirm();
            if (e.key === 'Escape') onClose();
          }}
        />
        <div className="modal-btns">
          <button className="btn btn-clr" onClick={onClose}>Cancel</button>
          <button
            className={`btn ${type === 'PC' ? 'btn-pc' : 'btn-npc'}`}
            onClick={confirm}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
