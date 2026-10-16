import { useReducer, useState, useEffect, useRef } from 'react';
import Graph from './components/Graph';
import Modal from './components/Modal';
import AdversaryLibrary from './components/AdversaryLibrary';
import CharacterLibrary from './components/CharacterLibrary';
import EncounterBuilder from './components/EncounterBuilder';
import BattleSidePanel from './components/BattleSidePanel';
import DataModal from './components/DataModal';
import { useConfirm, useToast } from './components/Feedback';
import {
  tokenStatsFromCharacter, tokenStatsFromAdversary, makeCharacter, findEncounterAdversary,
  spawnPositions, PX_PER_M,
} from './constants';
import { applyImport, buildSelection, downloadJson, encounterFileName } from './transfer';
import { SRD_ADVERSARIES } from './adversaryData';
import { loadState, saveState } from './storage';
import './App.css';

// ── Role & channel (determined once at load time) ─────────────────────────────
const ROLE    = new URLSearchParams(window.location.search).get('role') === 'player' ? 'player' : 'gm';
const CHANNEL = new BroadcastChannel('daggerheart-tracker');

const HEARTBEAT_MS = 2000;   // GM → players "still here"
const LOST_MS      = 6000;   // players call the GM gone after this much silence

// ── Reducer ───────────────────────────────────────────────────────────────────

// Fresh GMs start with the full SRD adversary library pre-loaded.
const SEED_ADVERSARIES = SRD_ADVERSARIES.map((a, i) => ({ ...a, id: i + 1 }));

// Bump to re-seed the SRD library for returning GMs (add changes to srdUpdates.js).
// 2 — SRD 2.0 adversaries.
const SEED_VERSION = 2;

// Bump when stored board data becomes incompatible (the board is cleared on load).
// 2 — token coordinates switched from pixels to metres.
const SCHEMA_VERSION = 2;

const HISTORY_LIMIT = 50;

const initial = {
  tokens: [],
  adversaries: SEED_ADVERSARIES,
  characters: [],
  encounters: [],
  nextId: SEED_ADVERSARIES.length + 1,
  seedVersion: SEED_VERSION,
  schemaVersion: SCHEMA_VERSION,
  boardPast: [],     // token snapshots for undo (not persisted)
  boardFuture: [],   // … and redo
};

// Board actions that get an undo step. MOVE_TOKEN fires on every drag frame,
// so drags record one step up front via BOARD_SNAPSHOT instead.
const BOARD_ACTIONS = new Set(['ADD_TOKENS', 'ADD_PC', 'REMOVE_TOKEN', 'UPDATE_TOKEN_STATS', 'CLEAR', 'BOARD_SNAPSHOT']);

function reducer(state, action) {
  if (BOARD_ACTIONS.has(action.type)) {
    state = {
      ...state,
      boardPast: [...state.boardPast.slice(-(HISTORY_LIMIT - 1)), state.tokens],
      boardFuture: [],
    };
  }

  switch (action.type) {
    case 'BOARD_SNAPSHOT':
      return state;
    case 'UNDO': {
      if (!state.boardPast.length) return state;
      return {
        ...state,
        tokens: state.boardPast[state.boardPast.length - 1],
        boardPast: state.boardPast.slice(0, -1),
        boardFuture: [state.tokens, ...state.boardFuture],
      };
    }
    case 'REDO': {
      if (!state.boardFuture.length) return state;
      return {
        ...state,
        tokens: state.boardFuture[0],
        boardPast: [...state.boardPast, state.tokens],
        boardFuture: state.boardFuture.slice(1),
      };
    }
    case 'ADD_TOKENS': {
      let id = state.nextId;
      const added = action.tokens.map(t => ({
        id: id++, name: t.name, type: t.tokenType,
        x: t.x, y: t.y,
        refKind: 'custom', size: 1,
        ...(t.stats || {}),
      }));
      return { ...state, tokens: [...state.tokens, ...added], nextId: id };
    }
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

    // ── Import (one atomic step) ──
    case 'IMPORT':
      return applyImport(state, action.file, action.resolutions).state;

    default:
      return state;
  }
}

const isTyping = el => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);
const narrowScreen = () => window.matchMedia('(max-width: 900px)').matches;

// ── Component ─────────────────────────────────────────────────────────────────

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    initial,
    init => (ROLE === 'gm' ? loadState(init) : init),
  );
  const [view,       setView]       = useState('map');   // 'map'|'adversaries'|'characters'|'encounters'
  const [modal,      setModal]      = useState(null);
  const [dataOpen,   setDataOpen]   = useState(false);
  const [focusedId,  setFocusedId]  = useState(null);
  const [ringAnchor, setRingAnchor] = useState(null);    // { x, y } — where rings are pinned
  const [panelOpen,  setPanelOpen]  = useState(false);   // side panel drawer on narrow screens
  const [link,       setLink]       = useState('waiting'); // player: 'waiting'|'live'|'lost'
  const viewRef = useRef(null);                            // map viewport, survives tab switches
  const confirm = useConfirm();
  const toast   = useToast();

  // Always-fresh ref for the REQUEST_STATE handler
  const latestRef = useRef({ tokens: state.tokens, focusedId, ringAnchor });
  useEffect(() => { latestRef.current = { tokens: state.tokens, focusedId, ringAnchor }; });

  // ── Persistence (GM only) ────────────────────────────────────────────────
  useEffect(() => {
    if (ROLE !== 'gm') return;
    const { boardPast, boardFuture, ...persisted } = state;
    saveState(persisted);
  }, [state]);

  const isGM = ROLE === 'gm';
  const focusedToken = state.tokens.find(t => t.id === focusedId) ?? null;

  // Selection vanished (undo, removal) → drop it.
  useEffect(() => {
    if (isGM && focusedId != null && !focusedToken) { setFocusedId(null); setRingAnchor(null); }
  }, [isGM, focusedId, focusedToken]);

  // ── Focus helpers ──────────────────────────────────────────────────────────
  const handleFocusChange = id => {
    setFocusedId(id);
    if (id != null) {
      const tok = state.tokens.find(t => t.id === id);
      if (tok) setRingAnchor({ x: tok.x, y: tok.y });
      if (narrowScreen()) setPanelOpen(true);
    } else {
      setRingAnchor(null);
    }
  };

  // Snap rings to the focused token's current position
  const handleConfirmPosition = id => {
    const tok = state.tokens.find(t => t.id === id);
    if (tok) setRingAnchor({ x: tok.x, y: tok.y });
  };

  const handleRevertMove = () => {
    if (!focusedToken || !ringAnchor) return;
    dispatch({ type: 'BOARD_SNAPSHOT' });
    dispatch({ type: 'MOVE_TOKEN', id: focusedToken.id, x: ringAnchor.x, y: ringAnchor.y });
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
    const beat = setInterval(() => CHANNEL.postMessage({ type: 'HEARTBEAT' }), HEARTBEAT_MS);
    return () => { CHANNEL.removeEventListener('message', handler); clearInterval(beat); };
  }, []);

  // ── Player: receive state ──────────────────────────────────────────────────
  useEffect(() => {
    if (ROLE !== 'player') return;
    let lastSeen = 0;
    const handler = e => {
      if (e.data.type !== 'STATE_UPDATE' && e.data.type !== 'HEARTBEAT') return;
      lastSeen = Date.now();
      setLink('live');
      if (e.data.type !== 'STATE_UPDATE') return;
      dispatch({ type: 'SET_TOKENS', tokens: e.data.tokens });
      setFocusedId(e.data.focusedId);
      setRingAnchor(e.data.ringAnchor);
    };
    CHANNEL.addEventListener('message', handler);
    CHANNEL.postMessage({ type: 'REQUEST_STATE' });
    const watch = setInterval(() => {
      if (lastSeen && Date.now() - lastSeen > LOST_MS) setLink('lost');
    }, 1000);
    return () => { CHANNEL.removeEventListener('message', handler); clearInterval(watch); };
  }, []);

  // ── Token spawn: free spots around the centre of the visible map ───────────
  const spawnCenter = () => viewRef.current?.center ?? {
    x: Math.max(200, window.innerWidth - 300) / 2 / PX_PER_M,
    y: Math.max(200, window.innerHeight - 60) / 2 / PX_PER_M,
  };

  const undo = () => dispatch({ type: 'UNDO' });
  const redo = () => dispatch({ type: 'REDO' });
  const undoAction = { label: 'Undo', run: undo };

  // specs: [{ name, tokenType, stats }]
  const addTokens = specs => {
    const spots = spawnPositions(specs.map(s => s.stats?.size || 1), state.tokens, spawnCenter());
    dispatch({ type: 'ADD_TOKENS', tokens: specs.map((s, i) => ({ ...s, ...spots[i] })) });
  };

  const handleAddCustomToken = (name, type) => {
    if (type === 'PC') {
      // A PC added from the master's screen is also saved to the Characters tab.
      dispatch({ type: 'ADD_PC', name, ...spawnPositions([1], state.tokens, spawnCenter())[0] });
      toast(`${name} added and saved to Characters.`);
    } else {
      addTokens([{ name, tokenType: type, stats: { refKind: 'custom', hp: 0, stress: 0 } }]);
    }
    setModal(null);
  };

  const handleQuickAddCharacter = c => addTokens([{ name: c.name, tokenType: 'PC',  stats: tokenStatsFromCharacter(c) }]);
  const handleQuickAddAdversary = a => addTokens([{ name: a.name, tokenType: 'NPC', stats: tokenStatsFromAdversary(a) }]);

  const handleDeployEncounter = enc => {
    const specs = [];
    enc.entries.forEach(({ adversaryId, count }) => {
      const adv = findEncounterAdversary(enc, adversaryId, state.adversaries);
      if (!adv) return;
      for (let i = 0; i < count; i++) {
        specs.push({ name: count > 1 ? `${adv.name} ${i + 1}` : adv.name, tokenType: 'NPC', stats: tokenStatsFromAdversary(adv) });
      }
    });
    if (!specs.length) return;
    addTokens(specs);
    setView('map');
    toast(`Deployed “${enc.name}” — ${specs.length} unit${specs.length === 1 ? '' : 's'}.`, undoAction);
  };

  const handleRemoveToken = id => {
    const tok = state.tokens.find(t => t.id === id);
    dispatch({ type: 'REMOVE_TOKEN', id });
    if (focusedId === id) { setFocusedId(null); setRingAnchor(null); }
    if (tok) toast(`Removed ${tok.name}.`, undoAction);
  };

  const handleClear = () => {
    if (!state.tokens.length) return;
    confirm({
      title: 'Clear the board?',
      message: `Removes all ${state.tokens.length} tokens with their HP and Stress. Your libraries are kept, and you can undo this.`,
      confirmLabel: 'Clear board',
      onConfirm: () => {
        dispatch({ type: 'CLEAR' });
        setFocusedId(null);
        setRingAnchor(null);
        toast('Board cleared.', undoAction);
      },
    });
  };

  const handleUpdateTokenStats = (id, patch) =>
    dispatch({ type: 'UPDATE_TOKEN_STATS', id, patch });

  const handleExportEncounter = enc =>
    downloadJson(buildSelection(state, { encounterIds: [enc.id] }), encounterFileName(enc));

  // Library first, then adversaries that live inside encounters (imported ones).
  const findAdversary = id =>
    state.adversaries.find(a => a.id === id) ??
    state.encounters.flatMap(e => e.adversaries ?? []).find(a => a.id === id);

  // ── GM keyboard shortcuts ──────────────────────────────────────────────────
  const keyRef = useRef(null);
  keyRef.current = e => {
    if (isTyping(e.target) || document.querySelector('.overlay')) return;
    const mod = e.ctrlKey || e.metaKey;
    const key = e.key.toLowerCase();

    if (mod && key === 'z') { e.shiftKey ? redo() : undo(); e.preventDefault(); return; }
    if (mod && key === 'y') { redo(); e.preventDefault(); return; }
    if (mod || e.altKey || view !== 'map') return;

    if (e.key === 'Escape' && focusedId != null) handleFocusChange(null);
    else if ((e.key === 'Delete' || e.key === 'Backspace') && focusedToken) handleRemoveToken(focusedToken.id);
    else if (e.key === 'Enter' && focusedToken) handleConfirmPosition(focusedToken.id);
    else if (e.key.startsWith('Arrow') && focusedToken) {
      const step = e.shiftKey ? 0.5 : 1.5;
      const dx = { ArrowLeft: -step, ArrowRight: step }[e.key] ?? 0;
      const dy = { ArrowUp: -step, ArrowDown: step }[e.key] ?? 0;
      dispatch({ type: 'BOARD_SNAPSHOT' });
      dispatch({ type: 'MOVE_TOKEN', id: focusedToken.id, x: focusedToken.x + dx, y: focusedToken.y + dy });
    } else return;
    e.preventDefault();
  };
  useEffect(() => {
    if (ROLE !== 'gm') return;
    const onKey = e => keyRef.current(e);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openPlayerView = () => {
    const url = `${window.location.pathname}?role=player`;
    window.open(url, 'dh-player-view');
  };

  const TABS = [
    ['map',         'Battle Map'],
    ['adversaries', 'Adversaries'],
    ['characters',  'Characters'],
    ['encounters',  'Encounters'],
  ];

  const LINK_TEXT = {
    waiting: ['Connecting…', 'Looking for the GM tab in this browser'],
    live:    ['Live',        'Receiving the board from the GM'],
    lost:    ['GM offline',  'The GM tab was closed or is not responding'],
  };

  return (
    <div className="app">
      <header className="app-header">
        <span className="title">⚔ DH Tracker</span>

        {isGM ? (
          <>
            <span className="role-badge role-gm">GM</span>
            <nav className="tabs" aria-label="Sections">
              {TABS.map(([id, label]) => (
                <button
                  key={id}
                  className={`tab ${view === id ? 'active' : ''}`}
                  aria-current={view === id ? 'page' : undefined}
                  onClick={() => setView(id)}
                >
                  {label}
                </button>
              ))}
            </nav>
            <div className="toolbar">
              {view === 'map' && (
                <>
                  <button className="btn btn-pc"  onClick={() => setModal('PC')}>+ PC</button>
                  <button className="btn btn-npc" onClick={() => setModal('NPC')}>+ NPC</button>
                  <span className="toolbar-sep" />
                  <button className="btn btn-clr btn-icon" onClick={undo} disabled={!state.boardPast.length} title="Undo (Ctrl+Z)" aria-label="Undo">↶</button>
                  <button className="btn btn-clr btn-icon" onClick={redo} disabled={!state.boardFuture.length} title="Redo (Ctrl+Shift+Z)" aria-label="Redo">↷</button>
                  <button className="btn btn-ghost-danger" onClick={handleClear} disabled={!state.tokens.length}>Clear</button>
                  <span className="toolbar-sep" />
                </>
              )}
              <button className="btn btn-clr" onClick={openPlayerView} title="Open the player screen in a new window (same browser) — e.g. on a second monitor">Player view ↗</button>
              <button className="btn btn-clr" onClick={() => setDataOpen(true)} title="Export / import JSON">Data</button>
            </div>
          </>
        ) : (
          <>
            <span className={`link-badge link-${link}`} title={LINK_TEXT[link][1]}>● {LINK_TEXT[link][0]}</span>
            <span className="role-badge role-player">PLAYER VIEW</span>
          </>
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
              onMoveStart={() => dispatch({ type: 'BOARD_SNAPSHOT' })}
              onMoveToken={(id, x, y) => dispatch({ type: 'MOVE_TOKEN', id, x, y })}
              role={ROLE}
              viewRef={viewRef}
            />
            {isGM && (
              <>
                <button
                  className="sp-toggle btn btn-clr"
                  onClick={() => setPanelOpen(o => !o)}
                  aria-expanded={panelOpen}
                >
                  {panelOpen ? 'Hide panel' : focusedToken ? focusedToken.name : 'Units ▸'}
                </button>
                <BattleSidePanel
                  characters={state.characters}
                  adversaries={state.adversaries}
                  encounters={state.encounters}
                  tokens={state.tokens}
                  findAdversary={findAdversary}
                  focusedToken={focusedToken}
                  ringAnchor={ringAnchor}
                  open={panelOpen}
                  onQuickAddCharacter={handleQuickAddCharacter}
                  onQuickAddAdversary={handleQuickAddAdversary}
                  onDeployEncounter={handleDeployEncounter}
                  onUpdateStats={handleUpdateTokenStats}
                  onRemoveToken={handleRemoveToken}
                  onDeselect={() => handleFocusChange(null)}
                  onSelect={handleFocusChange}
                  onConfirmMove={() => focusedToken && handleConfirmPosition(focusedToken.id)}
                  onRevertMove={handleRevertMove}
                />
              </>
            )}
          </div>
        )}

        {isGM && view === 'adversaries' && (
          <AdversaryLibrary
            adversaries={state.adversaries}
            encounters={state.encounters}
            onAdd={entry => dispatch({ type: 'ADD_ADVERSARY', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_ADVERSARY', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_ADVERSARY', id })}
            onAddToMap={a => { handleQuickAddAdversary(a); toast(`${a.name} added to the map.`, undoAction); }}
          />
        )}

        {isGM && view === 'characters' && (
          <CharacterLibrary
            characters={state.characters}
            tokens={state.tokens}
            onAdd={entry => dispatch({ type: 'ADD_CHARACTER', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_CHARACTER', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_CHARACTER', id })}
            onAddToMap={c => { handleQuickAddCharacter(c); toast(`${c.name} added to the map.`, undoAction); }}
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
            onExport={handleExportEncounter}
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

      {dataOpen && (
        <DataModal
          state={state}
          onImport={(file, resolutions) => dispatch({ type: 'IMPORT', file, resolutions })}
          onClose={() => setDataOpen(false)}
        />
      )}
    </div>
  );
}
