import { useReducer, useState, useEffect, useRef } from 'react';
import Graph from './components/Graph';
import Modal from './components/Modal';
import AdversaryLibrary from './components/AdversaryLibrary';
import CharacterLibrary from './components/CharacterLibrary';
import EncounterBuilder from './components/EncounterBuilder';
import BattleSidePanel from './components/BattleSidePanel';
import DataModal from './components/DataModal';
import MapLibrary from './components/MapLibrary';
import DeployDialog from './components/DeployDialog';
import SaveBoardDialog from './components/SaveBoardDialog';
import { useConfirm, useToast } from './components/Feedback';
import {
  tokenStatsFromCharacter, tokenStatsFromAdversary, makeCharacter,
  spawnPositions, backgroundRect, PX_PER_M,
} from './constants';
import { applyImport, buildSelection, downloadJson, fileNameFor } from './transfer';
import { adversarySpecs, findAnyAdversary, isScene, planDeploy, sceneCenter } from './scene';
import { cachedImage } from './useImage';
import { loadState, saveState, storedSeedVersion } from './storage';
import './App.css';

// ── Role & channel (determined once at load time) ─────────────────────────────
const ROLE    = new URLSearchParams(window.location.search).get('role') === 'player' ? 'player' : 'gm';
const CHANNEL = new BroadcastChannel('daggerheart-tracker');

const HEARTBEAT_MS = 2000;   // GM → players "still here"
const LOST_MS      = 6000;   // players call the GM gone after this much silence

// ── Reducer ───────────────────────────────────────────────────────────────────

// Bump to re-seed the SRD library for returning GMs (add changes to srdUpdates.js).
// 2 — SRD 2.0 adversaries.
const SEED_VERSION = 2;

// Fresh GMs start with the full SRD adversary library pre-loaded. The data is a
// separate ~400 kB chunk, fetched only when seeding is due — returning GMs keep
// their stored library and players never show it.
const SRD_ADVERSARIES = ROLE === 'gm' && storedSeedVersion() !== SEED_VERSION
  ? (await import('./adversaryData')).SRD_ADVERSARIES
  : [];
const SEED_ADVERSARIES = SRD_ADVERSARIES.map((a, i) => ({ ...a, id: i + 1 }));

// Bump when stored board data becomes incompatible (the board is cleared on load).
// 2 — token coordinates switched from pixels to metres.
const SCHEMA_VERSION = 2;

const HISTORY_LIMIT = 50;

const initial = {
  tokens: [],
  sceneMapId: null,  // map on the board (the map itself is reused across encounters)
  spawnPoints: [],   // PC spawn points marked on the board, in order
  adversaries: SEED_ADVERSARIES,
  characters: [],
  encounters: [],
  maps: [],
  nextId: SEED_ADVERSARIES.length + 1,
  seedVersion: SEED_VERSION,
  schemaVersion: SCHEMA_VERSION,
  boardPast: [],     // board snapshots for undo (not persisted)
  boardFuture: [],   // … and redo
};

// Board actions that get an undo step. MOVE_TOKEN / MOVE_SPAWN fire on every
// drag frame, so drags record one step up front via BOARD_SNAPSHOT instead.
const BOARD_ACTIONS = new Set([
  'ADD_TOKENS', 'ADD_PC', 'REMOVE_TOKEN', 'UPDATE_TOKEN_STATS', 'CLEAR', 'BOARD_SNAPSHOT',
  'SET_SCENE_MAP', 'ADD_SPAWN', 'REMOVE_SPAWN', 'DEPLOY_SCENE',
]);

const boardOf = s => ({ tokens: s.tokens, sceneMapId: s.sceneMapId, spawnPoints: s.spawnPoints });

const newToken = (t, id) => ({
  id, name: t.name, type: t.tokenType,
  x: t.x, y: t.y,
  refKind: 'custom', size: 1,
  ...(t.stats || {}),
});

function reducer(state, action) {
  if (BOARD_ACTIONS.has(action.type)) {
    state = {
      ...state,
      boardPast: [...state.boardPast.slice(-(HISTORY_LIMIT - 1)), boardOf(state)],
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
        ...state.boardPast[state.boardPast.length - 1],
        boardPast: state.boardPast.slice(0, -1),
        boardFuture: [boardOf(state), ...state.boardFuture],
      };
    }
    case 'REDO': {
      if (!state.boardFuture.length) return state;
      return {
        ...state,
        ...state.boardFuture[0],
        boardPast: [...state.boardPast, boardOf(state)],
        boardFuture: state.boardFuture.slice(1),
      };
    }
    case 'ADD_TOKENS': {
      let id = state.nextId;
      const added = action.tokens.map(t => newToken(t, id++));
      return { ...state, tokens: [...state.tokens, ...added], nextId: id };
    }

    // ── Scene ──
    case 'SET_SCENE_MAP':
      return { ...state, sceneMapId: action.mapId };
    case 'ADD_SPAWN':
      return { ...state, spawnPoints: [...state.spawnPoints, { x: action.x, y: action.y }] };
    case 'REMOVE_SPAWN':
      return { ...state, spawnPoints: state.spawnPoints.filter((_, i) => i !== action.index) };
    case 'MOVE_SPAWN':
      return {
        ...state,
        spawnPoints: state.spawnPoints.map((p, i) => (i === action.index ? { x: action.x, y: action.y } : p)),
      };
    case 'DEPLOY_SCENE': {
      let id = state.nextId;
      const added = action.add.map(t => newToken(t, id++));
      return {
        ...state,
        sceneMapId: action.mapId,
        spawnPoints: action.spawnPoints,
        tokens: [...action.keep, ...added],
        nextId: id,
      };
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
      return { ...state, tokens: [], spawnPoints: [] };   // board only — the map and libraries stay
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
          placements: e.placements.filter(p => p.ref.lib !== action.id),
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
    case 'SAVE_BOARD_TO_ENCOUNTER': {
      // Local adversaries arrive with temporary negative ids — give them real ones.
      let id = state.nextId;
      const enc = action.encounter;
      const ids = new Map();
      const adversaries = enc.adversaries.map(a => {
        ids.set(a.id, id);
        return { ...a, id: id++ };
      });
      const placements = enc.placements.map(p =>
        p.ref.local != null ? { ...p, ref: { local: ids.get(p.ref.local) } } : p);
      const entry = { ...enc, adversaries, placements };
      if (enc.id == null) {
        return { ...state, encounters: [...state.encounters, { ...entry, id: id++ }], nextId: id };
      }
      return { ...state, encounters: state.encounters.map(e => (e.id === enc.id ? entry : e)), nextId: id };
    }

    // ── Maps ──
    case 'ADD_MAP':
      return {
        ...state,
        maps: [...state.maps, { ...action.entry, id: state.nextId }],
        nextId: state.nextId + 1,
      };
    case 'EDIT_MAP':
      return { ...state, maps: state.maps.map(m => (m.id === action.entry.id ? action.entry : m)) };
    case 'REMOVE_MAP':
      return {
        ...state,
        maps: state.maps.filter(m => m.id !== action.id),
        encounters: state.encounters.map(e => (e.mapId === action.id ? { ...e, mapId: null } : e)),
        sceneMapId: state.sceneMapId === action.id ? null : state.sceneMapId,
      };

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
  const [view,       setView]       = useState('map');   // 'map'|'adversaries'|'characters'|'encounters'|'maps'
  const [modal,      setModal]      = useState(null);
  const [dataOpen,   setDataOpen]   = useState(false);
  const [saveOpen,   setSaveOpen]   = useState(false);   // "Save to encounter" dialog
  const [deploying,  setDeploying]  = useState(null);    // encounter waiting for the PC dialog
  const [spawnMode,  setSpawnMode]  = useState(false);   // GM: clicks on the map mark spawn points
  const [fitKey,     setFitKey]     = useState(0);       // bump → the map frames the new scene
  const [scene,      setScene]      = useState(null);    // player: the map received from the GM
  const [focusedId,  setFocusedId]  = useState(null);
  const [ringAnchor, setRingAnchor] = useState(null);    // { x, y } — where rings are pinned
  const [panelOpen,  setPanelOpen]  = useState(false);   // side panel drawer on narrow screens
  const [link,       setLink]       = useState('waiting'); // player: 'waiting'|'live'|'lost'
  const viewRef = useRef(null);                            // map viewport, survives tab switches
  const confirm = useConfirm();
  const toast   = useToast();

  const sceneMap = state.maps.find(m => m.id === state.sceneMapId) ?? null;

  // Always-fresh ref for the REQUEST_STATE handler
  const latestRef = useRef({ tokens: state.tokens, focusedId, ringAnchor, sceneMap });
  useEffect(() => { latestRef.current = { tokens: state.tokens, focusedId, ringAnchor, sceneMap }; });

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

  // The whole map goes out only when the scene changes (or the map is edited).
  useEffect(() => {
    if (ROLE !== 'gm') return;
    CHANNEL.postMessage({ type: 'SCENE_UPDATE', map: sceneMap });
  }, [sceneMap]);

  useEffect(() => {
    if (ROLE !== 'gm') return;
    const handler = e => {
      if (e.data.type === 'REQUEST_STATE') {
        const { sceneMap: map, ...board } = latestRef.current;
        CHANNEL.postMessage({ type: 'SCENE_UPDATE', map });
        CHANNEL.postMessage({ type: 'STATE_UPDATE', ...board });
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
    let sceneId;   // undefined until the first scene arrives
    const handler = e => {
      const { type } = e.data;
      if (type !== 'STATE_UPDATE' && type !== 'SCENE_UPDATE' && type !== 'HEARTBEAT') return;
      lastSeen = Date.now();
      setLink('live');
      if (type === 'SCENE_UPDATE') {
        setScene(e.data.map);
        // A different map → frame it; edits to the same map keep the view.
        if ((e.data.map?.id ?? null) !== sceneId) setFitKey(k => k + 1);
        sceneId = e.data.map?.id ?? null;
        return;
      }
      if (type !== 'STATE_UPDATE') return;
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

  const units = n => `${n} unit${n === 1 ? '' : 's'}`;

  // A plain roster joins the board; a scene (map / positions) goes through the PC dialog.
  const handleDeployEncounter = enc => {
    if (isScene(enc)) { setDeploying(enc); return; }
    const specs = adversarySpecs(enc, state.adversaries);
    if (!specs.length) return;
    addTokens(specs);
    setView('map');
    toast(`Deployed “${enc.name}” — ${units(specs.length)}.`, undoAction);
  };

  const handleDeployScene = (enc, pcIds) => {
    const map = state.maps.find(m => m.id === enc.mapId);
    const bg  = map?.background;
    const center = sceneCenter(enc, backgroundRect(bg, cachedImage(bg?.url)), spawnCenter());
    const plan = planDeploy(enc, {
      library: state.adversaries, characters: state.characters, pcIds, tokens: state.tokens, center,
    });
    dispatch({ type: 'DEPLOY_SCENE', ...plan, mapId: map ? map.id : null });
    setDeploying(null);
    setSpawnMode(false);
    setView('map');
    setFitKey(k => k + 1);
    toast(`Deployed “${enc.name}” — ${units(plan.keep.length + plan.add.length)}.`, undoAction);
  };

  const handleSaveBoard = (encounter, isNew) => {
    dispatch({ type: 'SAVE_BOARD_TO_ENCOUNTER', encounter });
    setSaveOpen(false);
    toast(isNew ? `Saved the board as “${encounter.name}”.` : `Updated “${encounter.name}” from the board.`);
  };

  const handleSetSceneMap = mapId => {
    dispatch({ type: 'SET_SCENE_MAP', mapId });
    setFitKey(k => k + 1);
  };

  const handleOpenMap = map => {
    handleSetSceneMap(map.id);
    setView('map');
    toast(`“${map.name}” is on the board.`, undoAction);
  };

  const handleRemoveToken = id => {
    const tok = state.tokens.find(t => t.id === id);
    dispatch({ type: 'REMOVE_TOKEN', id });
    if (focusedId === id) { setFocusedId(null); setRingAnchor(null); }
    if (tok) toast(`Removed ${tok.name}.`, undoAction);
  };

  const boardEmpty = !state.tokens.length && !state.spawnPoints.length;

  const handleClear = () => {
    if (boardEmpty) return;
    confirm({
      title: 'Clear the board?',
      message: `Removes all ${state.tokens.length} tokens with their HP and Stress, and the spawn points. The map and your libraries are kept, and you can undo this.`,
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
    downloadJson(buildSelection(state, { encounterIds: [enc.id] }), fileNameFor('encounter', enc.name));
  const handleExportMap = map =>
    downloadJson(buildSelection(state, { mapIds: [map.id] }), fileNameFor('map', map.name));

  const findAdversary = id => findAnyAdversary(state, id);

  // ── GM keyboard shortcuts ──────────────────────────────────────────────────
  const keyRef = useRef(null);
  keyRef.current = e => {
    if (isTyping(e.target) || document.querySelector('.overlay')) return;
    const mod = e.ctrlKey || e.metaKey;
    const key = e.key.toLowerCase();

    if (mod && key === 'z') { e.shiftKey ? redo() : undo(); e.preventDefault(); return; }
    if (mod && key === 'y') { redo(); e.preventDefault(); return; }
    if (mod || e.altKey || view !== 'map') return;

    if (e.key === 'Escape' && spawnMode) setSpawnMode(false);
    else if (e.key === 'Escape' && focusedId != null) handleFocusChange(null);
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
    ['maps',        'Maps'],
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
                  <select
                    className="lib-select toolbar-map"
                    value={state.sceneMapId ?? ''}
                    onChange={e => handleSetSceneMap(e.target.value === '' ? null : Number(e.target.value))}
                    aria-label="Map on the board"
                    title="Map on the board"
                  >
                    <option value="">No map</option>
                    {state.maps.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                  </select>
                  <button
                    className={`btn btn-clr ${spawnMode ? 'btn-on' : ''}`}
                    onClick={() => setSpawnMode(on => !on)}
                    aria-pressed={spawnMode}
                    title="Mark where PCs appear when this board is deployed as an encounter"
                  >
                    Spawn points{state.spawnPoints.length > 0 && ` (${state.spawnPoints.length})`}
                  </button>
                  <button
                    className="btn btn-clr"
                    onClick={() => setSaveOpen(true)}
                    disabled={boardEmpty && state.sceneMapId == null}
                    title="Save the map, adversary positions and spawn points as an encounter"
                  >
                    Save to encounter
                  </button>
                  <span className="toolbar-sep" />
                  <button className="btn btn-pc"  onClick={() => setModal('PC')}>+ PC</button>
                  <button className="btn btn-npc" onClick={() => setModal('NPC')}>+ NPC</button>
                  <span className="toolbar-sep" />
                  <button className="btn btn-clr btn-icon" onClick={undo} disabled={!state.boardPast.length} title="Undo (Ctrl+Z)" aria-label="Undo">↶</button>
                  <button className="btn btn-clr btn-icon" onClick={redo} disabled={!state.boardFuture.length} title="Redo (Ctrl+Shift+Z)" aria-label="Redo">↷</button>
                  <button className="btn btn-ghost-danger" onClick={handleClear} disabled={boardEmpty}>Clear</button>
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
              map={isGM ? sceneMap : scene}
              fitKey={fitKey}
              spawnPoints={isGM ? state.spawnPoints : []}
              spawnMode={isGM && spawnMode}
              onFocusChange={handleFocusChange}
              onConfirmPosition={handleConfirmPosition}
              onMoveStart={() => dispatch({ type: 'BOARD_SNAPSHOT' })}
              onMoveToken={(id, x, y) => dispatch({ type: 'MOVE_TOKEN', id, x, y })}
              onAddSpawn={(x, y) => dispatch({ type: 'ADD_SPAWN', x, y })}
              onRemoveSpawn={index => dispatch({ type: 'REMOVE_SPAWN', index })}
              onMoveSpawn={(index, x, y) => dispatch({ type: 'MOVE_SPAWN', index, x, y })}
              onSpawnModeEnd={() => setSpawnMode(false)}
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
            maps={state.maps}
            onAdd={entry => dispatch({ type: 'ADD_ENCOUNTER', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_ENCOUNTER', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_ENCOUNTER', id })}
            onDeploy={handleDeployEncounter}
            onExport={handleExportEncounter}
          />
        )}

        {isGM && view === 'maps' && (
          <MapLibrary
            maps={state.maps}
            encounters={state.encounters}
            sceneMapId={state.sceneMapId}
            onAdd={entry => dispatch({ type: 'ADD_MAP', entry })}
            onEdit={entry => dispatch({ type: 'EDIT_MAP', entry })}
            onRemove={id => dispatch({ type: 'REMOVE_MAP', id })}
            onOpen={handleOpenMap}
            onExport={handleExportMap}
          />
        )}
      </main>

      {deploying && (
        <DeployDialog
          encounter={deploying}
          map={state.maps.find(m => m.id === deploying.mapId) ?? null}
          library={state.adversaries}
          characters={state.characters}
          tokens={state.tokens}
          onDeploy={pcIds => handleDeployScene(deploying, pcIds)}
          onClose={() => setDeploying(null)}
        />
      )}

      {saveOpen && (
        <SaveBoardDialog
          state={state}
          map={sceneMap}
          onSave={handleSaveBoard}
          onClose={() => setSaveOpen(false)}
        />
      )}

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
