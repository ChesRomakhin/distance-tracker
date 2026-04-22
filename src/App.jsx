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
    case 'SET_TOKENS':
      return { ...state, tokens: action.tokens };
    default:
      return state;
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [state,      dispatch]       = useReducer(reducer, initial);
  const [modal,      setModal]       = useState(null);
  const [focusedId,  setFocusedId]   = useState(null);
  const [ringAnchor, setRingAnchor]  = useState(null);   // { x, y } — where rings are pinned

  // Always-fresh ref for the REQUEST_STATE handler
  const latestRef = useRef({ tokens: state.tokens, focusedId, ringAnchor });
  useEffect(() => { latestRef.current = { tokens: state.tokens, focusedId, ringAnchor }; });

  // ── Focus helpers ──────────────────────────────────────────────────────────
  const handleFocusChange = id => {
    setFocusedId(id);
    if (id != null) {
      const tok = state.tokens.find(t => t.id === id);
      if (tok) setRingAnchor({ x: tok.x, y: tok.y });
    } else {
      setRingAnchor(null);
    }
  };

  // GM clicks the already-focused token → snap rings to its current position
  const handleConfirmPosition = id => {
    const tok = state.tokens.find(t => t.id === id);
    if (tok) setRingAnchor({ x: tok.x, y: tok.y });
  };

  // ── GM: broadcast state ────────────────────────────────────────────────────
  useEffect(() => {
    if (ROLE !== 'gm') return;
    CHANNEL.postMessage({ type: 'STATE_UPDATE', tokens: state.tokens, focusedId, ringAnchor });
  }, [state.tokens, focusedId, ringAnchor]);

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

  // ── Player: receive state ──────────────────────────────────────────────────
  useEffect(() => {
    if (ROLE !== 'player') return;
    const handler = e => {
      if (e.data.type !== 'STATE_UPDATE') return;
      dispatch({ type: 'SET_TOKENS', tokens: e.data.tokens });
      setFocusedId(e.data.focusedId);
      setRingAnchor(e.data.ringAnchor);
    };
    CHANNEL.addEventListener('message', handler);
    CHANNEL.postMessage({ type: 'REQUEST_STATE' });
    return () => CHANNEL.removeEventListener('message', handler);
  }, []);

  // ── Token spawn ────────────────────────────────────────────────────────────
  const handleAddToken = (name, type) => {
    dispatch({
      type: 'ADD_TOKEN', name, tokenType: type,
      x: 140 + Math.random() * Math.max(200, window.innerWidth  - 280),
      y: 100 + Math.random() * Math.max(200, window.innerHeight - 220),
    });
    setModal(null);
  };

  const handleRemoveToken = id => {
    dispatch({ type: 'REMOVE_TOKEN', id });
    if (focusedId === id) { setFocusedId(null); setRingAnchor(null); }
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
              <button className="btn btn-clr" onClick={() => { dispatch({ type: 'CLEAR' }); setFocusedId(null); setRingAnchor(null); }}>Clear</button>
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
          ringAnchor={ringAnchor}
          onFocusChange={handleFocusChange}
          onConfirmPosition={handleConfirmPosition}
          onMoveToken={(id, x, y) => dispatch({ type: 'MOVE_TOKEN', id, x, y })}
          onRemoveToken={handleRemoveToken}
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