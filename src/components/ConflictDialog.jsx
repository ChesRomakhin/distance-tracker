import { useState } from 'react';
import Dialog from './Dialog';
import { normName, uniqueName } from '../transfer';

// Per-kind wording. Phase 4 adds prop templates here.
const KIND = {
  map: {
    library: 'maps',
    line: m => (m.background
      ? `${Math.round(m.background.pxPerMeter * 1.5)} px per square · offset ${m.background.offset.x}, ${m.background.offset.y} m · ${m.background.url}`
      : 'No background'),
  },
  adversary: {
    library: 'adversary library',
    line: a => `Tier ${a.tier} ${a.type} · HP ${a.hpMax} · Stress ${a.stressMax} · Diff ${a.difficulty}`,
  },
  character: {
    library: 'character library',
    line: c => `HP ${c.hpMax} · Stress ${c.stressMax} · Evasion ${c.evasion} · Armor ${c.armorMax}`,
  },
};

// Walks through name conflicts one at a time.
// onDone(resolutions) with resolutions[kind][fileId] = 'replace' | 'skip' | { rename }.
export default function ConflictDialog({ conflicts, takenNames, onDone, onAbort }) {
  const [index,       setIndex]       = useState(0);
  const [resolutions, setResolutions] = useState({});
  const [taken,       setTaken]       = useState(() => new Set(takenNames));
  const [applyAll,    setApplyAll]    = useState(false);
  const [renameTo,    setRenameTo]    = useState(null);   // null = not renaming

  const c = conflicts[index];
  const k = KIND[c.kind];
  const remaining = conflicts.length - index - 1;

  const decide = (choice, newName) => {
    const res   = { ...resolutions };
    const names = new Set(taken);
    const targets = applyAll ? conflicts.slice(index) : [c];
    targets.forEach((t, i) => {
      let r = choice;
      if (choice === 'rename') {
        const name = i === 0 ? newName.trim() : uniqueName(t.incoming.name, names);
        names.add(normName(name));
        r = { rename: name };
      }
      res[t.kind] = { ...res[t.kind], [t.incoming.id]: r };
    });

    const next = index + targets.length;
    if (next >= conflicts.length) { onDone(res); return; }
    setResolutions(res);
    setTaken(names);
    setIndex(next);
    setRenameTo(null);
  };

  const renameOk = renameTo != null && renameTo.trim() && !taken.has(normName(renameTo));

  return (
    <Dialog title={<>Name conflict {conflicts.length > 1 && <span className="lib-count">{index + 1} / {conflicts.length}</span>}</>} wide>
        <p className="data-hint">
          <b>“{c.incoming.name}”</b> is already in your {k.library}.
        </p>

        <div className="conflict-compare">
          <div><span>In library</span>{k.line(c.existing)}</div>
          <div><span>In file</span>{k.line(c.incoming)}</div>
        </div>

        {renameTo != null ? (
          <>
            <input
              autoFocus
              aria-label="New name"
              value={renameTo}
              onChange={e => setRenameTo(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && renameOk) decide('rename', renameTo); }}
            />
            {!renameOk && renameTo.trim() && <p className="data-error">This name is taken.</p>}
            <div className="modal-btns">
              <button className="btn btn-clr" onClick={() => setRenameTo(null)}>Back</button>
              <button className="btn btn-pc" disabled={!renameOk} onClick={() => decide('rename', renameTo)}>
                Import as “{renameTo.trim()}”
              </button>
            </div>
          </>
        ) : (
          <div className="modal-btns">
            <button className="btn btn-clr" onClick={() => decide('skip')}>Skip</button>
            <button className="btn btn-clr" onClick={() => setRenameTo(uniqueName(c.incoming.name, taken))}>Rename</button>
            <button className="btn btn-npc" onClick={() => decide('replace')}>Replace</button>
          </div>
        )}

        <div className="conflict-foot">
          {remaining > 0 ? (
            <label className="pick-item">
              <input type="checkbox" checked={applyAll} onChange={e => setApplyAll(e.target.checked)} />
              Apply to the remaining {remaining}
              {applyAll && renameTo != null && ' (they get automatic names)'}
            </label>
          ) : <span />}
          <button className="link-btn" onClick={onAbort}>Abort import</button>
        </div>
    </Dialog>
  );
}
