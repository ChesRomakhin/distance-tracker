import { useState } from 'react';
import Dialog from './Dialog';
import FeatureEditor from './FeatureEditor';
import { useConfirm } from './Feedback';
import { SIZE_PRESETS } from '../constants';

// Read/write a possibly-dotted path (e.g. "thresholds.major") on a draft object.
function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}
function setPath(obj, path, value) {
  const keys = path.split('.');
  const copy = { ...obj };
  let cur = copy;
  for (let i = 0; i < keys.length - 1; i++) {
    cur[keys[i]] = { ...cur[keys[i]] };
    cur = cur[keys[i]];
  }
  cur[keys[keys.length - 1]] = value;
  return copy;
}

// Generic add/edit modal driven by a field schema.
//   fields: [{ key, label, type: 'text'|'number'|'textarea'|'select'|'features'|'size', options?, full?: bool,
//              step?, min?, fallback?, group? }]   — number fields: empty or < min saves as `fallback` (default 0)
//   Fields sharing a `group` are shown under one heading, in order of first appearance.
export default function EntityForm({ title, fields, initial, onSave, onClose }) {
  const [draft, setDraft] = useState(initial);
  const [tried, setTried] = useState(false);
  const confirm = useConfirm();

  const nameMissing = !String(getPath(draft, 'name') ?? '').trim();
  const dirty = JSON.stringify(draft) !== JSON.stringify(initial);

  const set = (key, val) => setDraft(d => setPath(d, key, val));
  const update = (key, type) => e => {
    const raw = e.target.value;
    set(key, type === 'number' ? (raw === '' ? '' : Number(raw)) : raw);
  };

  const save = () => {
    setTried(true);
    if (nameMissing) return;
    let out = draft;
    fields.forEach(f => {
      if (f.type !== 'number') return;
      const v = getPath(out, f.key);
      if (v === '' || v == null || (f.min != null && v < f.min)) out = setPath(out, f.key, f.fallback ?? 0);
    });
    onSave(out);
  };

  const close = () => {
    if (!dirty) { onClose(); return; }
    confirm({ title: 'Discard changes?', message: 'Your edits to this entry will be lost.', confirmLabel: 'Discard', onConfirm: onClose });
  };

  const renderInput = f => {
    const value = getPath(draft, f.key);
    if (f.type === 'features') {
      return <FeatureEditor value={value ?? []} onChange={v => set(f.key, v)} />;
    }
    if (f.type === 'size') {
      return (
        <div className="size-presets" role="group" aria-label={f.label}>
          {SIZE_PRESETS.map(([s, label]) => (
            <button
              key={s} type="button"
              className={`stepper-btn ${(value || 1) === s ? 'active' : ''}`}
              onClick={() => set(f.key, s)}
              title={`${s * 1.5} m across`}
              aria-pressed={(value || 1) === s}
            >
              {label}
            </button>
          ))}
        </div>
      );
    }
    if (f.type === 'select') {
      return (
        <select value={value ?? ''} onChange={update(f.key, 'text')}>
          {f.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      );
    }
    if (f.type === 'textarea') {
      return <textarea rows={2} value={value ?? ''} onChange={update(f.key, f.type)} />;
    }
    const invalid = f.key === 'name' && tried && nameMissing;
    return (
      <input
        autoFocus={f.key === 'name'}
        className={invalid ? 'invalid' : undefined}
        aria-invalid={invalid || undefined}
        type={f.type === 'number' ? 'number' : 'text'}
        step={f.step}
        min={f.min}
        value={value ?? (f.fallback ?? '')}
        onChange={update(f.key, f.type)}
        onKeyDown={e => { if (e.key === 'Enter') save(); }}
      />
    );
  };

  const groups = [];
  fields.forEach(f => {
    const g = groups.find(x => x.name === (f.group ?? null));
    if (g) g.fields.push(f); else groups.push({ name: f.group ?? null, fields: [f] });
  });

  return (
    <Dialog title={title} onClose={close} wide>
      {groups.map(g => (
        <section key={g.name ?? '_'} className="form-group">
          {g.name && <h3>{g.name}</h3>}
          <div className="form-grid">
            {g.fields.map(f => {
              // Composite inputs hold several controls, so they can't sit inside a <label>.
              const Wrap = ['features', 'size'].includes(f.type) ? 'div' : 'label';
              return (
                <Wrap key={f.key} className={`field ${f.full || ['textarea', 'features'].includes(f.type) ? 'field-full' : ''}`}>
                  {f.label !== g.name && <span>{f.label}</span>}
                  {renderInput(f)}
                  {f.key === 'name' && tried && nameMissing && <em className="field-error">Name is required.</em>}
                </Wrap>
              );
            })}
          </div>
        </section>
      ))}
      <div className="modal-btns modal-foot">
        <button className="btn btn-clr" onClick={close}>Cancel</button>
        <button className="btn btn-pc" onClick={save}>Save</button>
      </div>
    </Dialog>
  );
}
