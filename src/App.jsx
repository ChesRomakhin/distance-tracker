import { useReducer, useState, useEffect, useRef } from 'react';
import Graph from './components/Graph';
import Modal from './components/Modal';
import AdversaryLibrary from './components/AdversaryLibrary';
import CharacterLibrary from './components/CharacterLibrary';
import EncounterBuilder from './components/EncounterBuilder';
import BattleSidePanel from './components/BattleSidePanel';
import { tokenStatsFromCharacter, tokenStatsFromAdversary, makeCharacter } from './constants';
import { SRD_ADVERSARIES } from './adversaryData';
import { loadState, saveState } from './storage';
import './App.css';

// ── Role & channel (determined once at load time) ─────────────────────────────
const ROLE    = new URLSearchParams(window.location.search).get('role') === 'player' ? 'player' : 'gm';
const CHANNEL = new BroadcastChannel('daggerheart-tracker');

// ── Reducer ───────────────────────────────────────────────────────────────────

// Fresh GMs start with the full SRD adversary library pre-loaded.
const SEED_ADVERSARIES = SRD_ADVERSARIES.map((a, i) => ({ ...a, id: i + 1 }));

const SEED_VERSION = 1;   // bump to re-seed the SRD library for returning GMs

const initial = {
  tokens: [],
  adversaries: SEED_ADVERSARIES,
  characters: [],
  encounters: [],
  nextId: SEED_ADVERSARIES.length + 1,
  seedVersion: SEED_VERSION,
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        ...state,
        tokens: [...state.tokens, {
          id: state.nextId, name: action.name, type: action.tokenType,
          x: action.x, y: action.y,
          refKind: 'custom',
          ...(action.stats || {}),
        }],
        nextId: state.nextId + 1,
      };
    case 'ADD_PC': {
      // Adding a PC from the battle map also registers it in the Characters tab.
      const charId  = state.nextId;
      const character = { ...makeCharacter({ name: action.name }), id: charId };
      const token = {
        id: charId + 1, name: character.name, type: 'PC',
        x: action.x, y: action.y,
        ...tokenStatsFromCharacter(character),
      };
      return {
        ...state,
        characters: [...state.characters, character],
        tokens: [...state.tokens, token],
        nextId: charId + 2,
      };
    }
    case 'REMOVE_TOKEN':
      return { ...state, tokens: state.tokens.filter(t => t.id !== action.id) };
    case 'MOVE_TOKEN':
      return {
        ...state,
        tokens: state.tokens.map(t =>
          t.id === action.id ? { ...t, x: action.x, y: action.y } : t
        ),
      };
    case 'UPDATE_TOKEN_STATS':
      return {
        ...state,
        tokens: state.tokens.map(t =>
          t.id === action.id ? { ...t, ...action.patch } : t
        ),
      };
    case 'CLEAR':
      return { ...state, tokens: [] };   // board only — libraries persist
    case 'SET_TOKENS':
      return { ...state, tokens: action.tokens };

    // ── Library: adversaries ──
    case 'ADD_ADVERSARY':
      return {
        ...state,
        adversaries: [...state.adversaries, { ...action.entry, id: state.nextId }],
        nextId: state.nextId + 1,
      };
    case 'EDIT_ADVERSARY':
      return {
        ...state,
        adversaries: state.adversaries.map(a => a.id === action.entry.id ? action.entry : a),
      };
    case 'REMOVE_ADVERSARY':
      return {
        ...state,
        adversaries: state.adversaries.filter(a => a.id !== action.id),
        encounters: state.encounters.map(e => ({
          ...e,
          entries: e.entries.filter(en => en.adversaryId !== action.id),
        })),
      };

    // ── Library: characters ──
    case 'ADD_CHARACTER':
      return {
        ...state,
        characters: [...state.characters, { ...action.entry, id: state.nextId }],
        nextId: state.nextId + 1,
      };
    case 'EDIT_CHARACTER':
      return {
        ...state,
        characters: state.characters.map(c => c.id === action.entry.id ? action.entry : c),
      };
    case 'REMOVE_CHARACTER':
      return { ...state, characters: state.characters.filter(c => c.id !== action.id) };

    // ── Encounters ──
    case 'ADD_ENCOUNTER':
      return {
        ...state,
        encounters: [...state.encounters, { ...action.entry, id: state.nextId }],
        nextId: state.nextId + 1,
      };
    case 'EDIT_ENCOUNTER':
      return {
        ...state,
        encounters: state.encounters.map(e => e.id === action.entry.id ? action.entry : e),
      };
    case 'REMOVE_ENCOUNTER':
      return { ...state, encounters: state.encounters.filter(e => e.id !== action.id) };

    default:
      return state;
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initial,
    init => (ROLE === 'gm' ? loadState(init) : init),
  );
  const [view,       setView]       = useState('map');   // 'map'|'adversaries'|'characters'|'encounters'
  const [modal,      setModal]      = useState(null);
  const [focusedId,  setFocusedId]  = useState(null);
  const [ringAnchor, setRingAnchor] = useState(null);    // { x, y } — where rings are pinned

  // Always-fresh ref for the REQUEST_STATE handler
  const latestRef = useRef({ tokens: state.tokens, focusedId, ringAnchor });
  useEffect(() => { latestRef.current = { tokens: state.tokens, focusedId, ringAnchor }; });

  // ── Persistence (GM only) ────────────────────────────────────────────────
  useEffect(() => {
    if (ROLE === 'gm') saveState(state);
  }, [state]);

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
  const spawnXY = () => ({
    x: 140 + Math.random() * Math.max(200, window.innerWidth  - 280),
    y: 100 + Math.random() * Math.max(200, window.innerHeight - 220),
  });

  const handleAddToken = (name, type, stats) => {
    dispatch({ type: 'ADD_TOKEN', name, tokenType: type, ...spawnXY(), stats });
  };

  const handleAddCustomToken = (name, type) => {
    if (type === 'PC') {
      // A PC added from the master's screen is also saved to the Characters tab.
      dispatch({ type: 'ADD_PC', name, ...spawnXY() });
    } else {
      handleAddToken(name, type, { refKind: 'custom', hp: 0, stress: 0 });
    }
    setModal(null);
  };

  const handleQuickAddCharacter = c => handleAddToken(c.name, 'PC',  tokenStatsFromCharacter(c));
  const handleQuickAddAdversary = a => handleAddToken(a.name, 'NPC', tokenStatsFromAdversary(a));

  const handleDeployEncounter = enc => {
    enc.entries.forEach(({ adversaryId, count }) => {
      const adv = state.adversaries.find(a => a.id === adversaryId);
      if (!adv) return;
      for (let i = 0; i < count; i++) {
        const label = count > 1 ? `${adv.name} ${i + 1}` : adv.name;
        handleAddToken(label, 'NPC', tokenStatsFromAdversary(adv));
      }
    });
    setView('map');
  };

  const handleRemoveToken = id => {
    dispatch({ type: 'REMOVE_TOKEN', id });
    if (focusedId === id) { setFocusedId(null); setRingAnchor(null); }
  };

  const handleUpdateTokenStats = (id, patch) =>
    dispatch({ type: 'UPDATE_TOKEN_STATS', id, patch });

  const focusedToken = state.tokens.find(t => t.id === focusedId) ?? null;
  const isGM = ROLE === 'gm';

  const TABS = [
    ['map',         'Battle Map'],
    ['adversaries', 'Adversaries'],
    ['characters',  'Characters'],
    ['encounters',  'Encounters'],
  ];

  return (
    <div className="app">
      <header className="app-header">
        <span className="title">⚔ DH Tracker</span>

        {isGM ? (
          <>
            <span className="role-badge role-gm">GM</span>
            <nav className="tabs">
              {TABS.map(([id, label]) => (
                <button
                  key={id}
                  className={`tab ${view === id ? 'active' : ''}`}
                  onClick={() => setView(id)}
                >
                  {label}
                </button>
              ))}
            </nav>
            {view === 'map' && (
              <div className="toolbar">
                <button className="btn btn-pc"  onClick={() => setModal('PC')}>+ PC</button>
                <button className="btn btn-npc" onClick={() => setModal('NPC')}>+ NPC / Enemy</button>
                <button
                  className="btn btn-clr"
                  onClick={() => { dispatch({ type: 'CLEAR' }); setFocusedId(null); setRingAnchor(null); }}
                >
                  Clear
                </button>
              </div>
            )}
          </>
        ) : (
          <span className="role-badge role-player">PLAYER VIEW</span>
        )}
      </header>

      <main className="app-main">
        {(!isGM || view === 'map') && (
          <div className="map-view">
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
            {isGM && (
              <BattleSidePanel
                characters={state.characters}
                adversaries={state.adversaries}
                focusedToken={focusedToken}
                onQuickAddCharacter={handleQuickAddCharacter}
                onQuickAddAdversary={handleQuickAddAdversary}
                onUpdateStats={handleUpdateTokenStats}
                onRemoveToken={handleRemoveToken}
                onDeselect={() => handleFocusChange(null)}
              />
            )}
          </div>
        )}

        {isGM && view === 'adversaries' && (
          <AdversaryLibrary
            adversaries={state.adversaries}
            onAdd={entry => dispatch({ type: 'ADD_ADVERSARY', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_ADVERSARY', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_ADVERSARY', id })}
          />
        )}

        {isGM && view === 'characters' && (
          <CharacterLibrary
            characters={state.characters}
            onAdd={entry => dispatch({ type: 'ADD_CHARACTER', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_CHARACTER', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_CHARACTER', id })}
          />
        )}

        {isGM && view === 'encounters' && (
          <EncounterBuilder
            encounters={state.encounters}
            adversaries={state.adversaries}
            onAdd={entry => dispatch({ type: 'ADD_ENCOUNTER', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_ENCOUNTER', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_ENCOUNTER', id })}
            onDeploy={handleDeployEncounter}
          />
        )}
      </main>

      {modal && (
        <Modal
          type={modal}
          onConfirm={name => handleAddCustomToken(name, modal)}
          onClose={() => setModal(null)}
        />
      )}
    </div>
  );
}
