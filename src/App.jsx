import { useReducer, useState, useEffect, useRef } from 'react';
import Graph from './components/Graph';
import Modal from './components/Modal';
import './App.css';

// ── Role & channel (determined once at load time) ─────────────────────────────
const ROLE    = new URLSearchParams(window.location.search).get('role') === 'player' ? 'player' : 'gm';
const CHANNEL = new BroadcastChannel('daggerheart-tracker');

// ── Reducer ───────────────────────────────────────────────────────────────────

const initial = { tokens: [], nextId: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        tokens: [...state.tokens, {
          id: state.nextId, name: action.name, type: action.tokenType,
          x: action.x, y: action.y,
        }],
        nextId: state.nextId + 1,
      };
    case 'REMOVE_TOKEN':
      return { ...state, tokens: state.tokens.filter(t => t.id !== action.id) };
    case 'MOVE_TOKEN':
      return {
        ...state,
        tokens: state.tokens.map(t =>
          t.id === action.id ? { ...t, x: action.x, y: action.y } : t
        ),
      };
    case 'CLEAR':
      return initial;
    // Player-side: overwrite tokens with received state
    case 'SET_TOKENS':
      return { ...state, tokens: action.tokens };
    default:
      return state;
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [state,     dispatch]      = useReducer(reducer, initial);
  const [modal,     setModal]      = useState(null);         // null | 'PC' | 'NPC'
  const [focusedId, setFocusedId]  = useState(null);

  // Always-fresh ref so the REQUEST_STATE handler never reads stale closure values
  const latestRef = useRef({ tokens: state.tokens, focusedId });
  useEffect(() => { latestRef.current = { tokens: state.tokens, focusedId }; });

  // ── GM: broadcast every state change to player tabs ──────────────────────
  useEffect(() => {
    if (ROLE !== 'gm') return;
    CHANNEL.postMessage({ type: 'STATE_UPDATE', tokens: state.tokens, focusedId });
  }, [state.tokens, focusedId]);

  // ── GM: respond when a player tab opens and requests current state ────────
  useEffect(() => {
    if (ROLE !== 'gm') return;
    const handler = e => {
      if (e.data.type === 'REQUEST_STATE') {
        CHANNEL.postMessage({ type: 'STATE_UPDATE', ...latestRef.current });
      }
    };
    CHANNEL.addEventListener('message', handler);
    return () => CHANNEL.removeEventListener('message', handler);
  }, []);

  // ── Player: receive state from GM ─────────────────────────────────────────
  useEffect(() => {
    if (ROLE !== 'player') return;
    const handler = e => {
      if (e.data.type !== 'STATE_UPDATE') return;
      dispatch({ type: 'SET_TOKENS', tokens: e.data.tokens });
      setFocusedId(e.data.focusedId);
    };
    CHANNEL.addEventListener('message', handler);
    // Ask the GM tab for the current state immediately on load
    CHANNEL.postMessage({ type: 'REQUEST_STATE' });
    return () => CHANNEL.removeEventListener('message', handler);
  }, []);

  // ── Token spawn ───────────────────────────────────────────────────────────
  const handleAddToken = (name, type) => {
    dispatch({
      type: 'ADD_TOKEN', name, tokenType: type,
      x: 140 + Math.random() * Math.max(200, window.innerWidth  - 280),
      y: 100 + Math.random() * Math.max(200, window.innerHeight - 220),
    });
    setModal(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <span className="title">⚔ Daggerheart Distance Tracker</span>

        {ROLE === 'gm' ? (
          <>
            <span className="role-badge role-gm">GM</span>
            <div className="toolbar">
              <button className="btn btn-pc"  onClick={() => setModal('PC')}>+ PC</button>
              <button className="btn btn-npc" onClick={() => setModal('NPC')}>+ NPC / Enemy</button>
              <button className="btn btn-clr" onClick={() => { dispatch({ type: 'CLEAR' }); setFocusedId(null); }}>Clear</button>
            </div>
          </>
        ) : (
          <span className="role-badge role-player">PLAYER VIEW</span>
        )}
      </header>

      <main className="app-main">
        <Graph
          tokens={state.tokens}
          focusedId={focusedId}
          onFocusChange={setFocusedId}
          onMoveToken={(id, x, y) => dispatch({ type: 'MOVE_TOKEN', id, x, y })}
          onRemoveToken={id => dispatch({ type: 'REMOVE_TOKEN', id })}
          role={ROLE}
        />
      </main>

      {modal && (
        <Modal
          type={modal}
          onConfirm={name => handleAddToken(name, modal)}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
