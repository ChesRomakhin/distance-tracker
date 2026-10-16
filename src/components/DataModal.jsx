import { useState } from 'react';
import ConflictDialog from './ConflictDialog';
import Dialog from './Dialog';
import {
  buildBackup, buildSelection, downloadJson, backupFileName, selectionFileName,
  parseImport, findConflicts, applyImport, normName,
} from '../transfer';

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

function summaryText(s) {
  const added = [
    s.added.adversary && plural(s.added.adversary, 'adversary', 'adversaries'),
    s.added.character && plural(s.added.character, 'character', 'characters'),
    s.added.encounter && plural(s.added.encounter, 'encounter', 'encounters'),
  ].filter(Boolean);
  const parts = [
    added.length && `Added ${added.join(', ')}`,
    s.replaced  && `replaced ${s.replaced}`,
    s.renamed   && `renamed ${s.renamed}`,
    s.skipped   && `skipped ${s.skipped}`,
    s.unchanged && `${s.unchanged} already up to date`,
  ].filter(Boolean);
  return parts.length ? `${parts.join(' · ')}.` : 'Nothing to import.';
}

// One collapsible checkbox list.
function PickGroup({ title, items, selected, onChange, searchable, detail }) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const shown = q ? items.filter(x => x.name.toLowerCase().includes(q)) : items;

  const toggle = id => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    onChange(next);
  };
  const setShown = on => {
    const next = new Set(selected);
    shown.forEach(x => (on ? next.add(x.id) : next.delete(x.id)));
    onChange(next);
  };

  return (
    <details className="pick-group">
      <summary>
        {title} <span className="lib-count">{selected.size} / {items.length}</span>
      </summary>
      {items.length === 0 ? (
        <p className="data-hint">Nothing here yet.</p>
      ) : (
        <>
          <div className="pick-tools">
            {searchable && (
              <input className="lib-search" placeholder="Search…" value={query} onChange={e => setQuery(e.target.value)} />
            )}
            <button className="link-btn" onClick={() => setShown(true)}>All</button>
            <button className="link-btn" onClick={() => setShown(false)}>None</button>
          </div>
          <div className="pick-list">
            {shown.map(x => (
              <label key={x.id} className="pick-item">
                <input type="checkbox" checked={selected.has(x.id)} onChange={() => toggle(x.id)} />
                <span className="pick-name">{x.name}</span>
                {detail && <span className="pick-detail">{detail(x)}</span>}
              </label>
            ))}
          </div>
        </>
      )}
    </details>
  );
}

export default function DataModal({ state, onImport, onClose }) {
  const [tab, setTab] = useState('export');

  // Export
  const [advSel,  setAdvSel]  = useState(() => new Set());
  const [charSel, setCharSel] = useState(() => new Set());
  const [encSel,  setEncSel]  = useState(() => new Set());
  const total = advSel.size + charSel.size + encSel.size;

  const exportSelected = () => downloadJson(
    buildSelection(state, { adversaryIds: [...advSel], characterIds: [...charSel], encounterIds: [...encSel] }),
    selectionFileName(),
  );

  // Import
  const [pending, setPending] = useState(null);   // { file, conflicts }
  const [error,   setError]   = useState(null);
  const [summary, setSummary] = useState(null);
  const [inputKey, setInputKey] = useState(0);    // bump to clear the file input

  const finish = (file, resolutions) => {
    setSummary(summaryText(applyImport(state, file, resolutions).summary));
    onImport(file, resolutions);
    setPending(null);
    setInputKey(k => k + 1);
  };

  const handleFile = async e => {
    const f = e.target.files?.[0];
    if (!f) return;
    setError(null);
    setSummary(null);
    const { file, error: err } = parseImport(await f.text());
    if (err) { setError(err); setInputKey(k => k + 1); return; }
    const conflicts = findConflicts(state, file);
    if (conflicts.length) setPending({ file, conflicts });
    else finish(file, {});
  };

  // Names a rename must avoid: everything in the libraries and in the file.
  const takenNames = () => new Set(
    [...state.adversaries, ...state.characters, ...pending.file.adversaries, ...pending.file.characters]
      .map(x => normName(x.name)),
  );

  return (
    <>
      <Dialog title="Data" onClose={pending ? undefined : onClose} wide>
          <div className="data-tabs">
            <button className={`tab ${tab === 'export' ? 'active' : ''}`} onClick={() => setTab('export')}>Export</button>
            <button className={`tab ${tab === 'import' ? 'active' : ''}`} onClick={() => setTab('import')}>Import</button>
          </div>

          {tab === 'export' ? (
            <>
              <p className="data-hint">A backup holds all adversaries, characters and encounters.</p>
              <button className="btn btn-pc" onClick={() => downloadJson(buildBackup(state), backupFileName())}>
                Export everything (backup)
              </button>

              <h3>Or pick items</h3>
              <PickGroup
                title="Adversaries" items={state.adversaries} selected={advSel} onChange={setAdvSel}
                searchable detail={a => `T${a.tier} ${a.type}`}
              />
              <PickGroup title="Characters" items={state.characters} selected={charSel} onChange={setCharSel} />
              <PickGroup
                title="Encounters" items={state.encounters} selected={encSel} onChange={setEncSel}
                detail={e => plural(e.entries.reduce((n, en) => n + en.count, 0), 'unit', 'units')}
              />
              <p className="data-hint">Encounters are exported with copies of their adversaries.</p>

              <div className="modal-btns">
                <button className="btn btn-clr" onClick={onClose}>Close</button>
                <button className="btn btn-pc" disabled={!total} onClick={exportSelected}>
                  Export selected ({total})
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="data-hint">
                Pick a .json file exported from DH Tracker. Adversaries and characters go to your
                libraries. Adversaries that come inside an encounter stay in that encounter.
              </p>
              <input key={inputKey} type="file" accept=".json,application/json" onChange={handleFile} />
              {error   && <p className="data-error">{error}</p>}
              {summary && <p className="data-ok">{summary}</p>}
              <div className="modal-btns">
                <button className="btn btn-clr" onClick={onClose}>Close</button>
              </div>
            </>
          )}
      </Dialog>

      {pending && (
        <ConflictDialog
          conflicts={pending.conflicts}
          takenNames={takenNames()}
          onDone={res => finish(pending.file, res)}
          onAbort={() => { setPending(null); setInputKey(k => k + 1); setSummary('Import aborted. Nothing was changed.'); }}
        />
      )}
    </>
  );
}
