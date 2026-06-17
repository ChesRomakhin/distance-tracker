import { useState, useEffect, useRef } from 'react';

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

// ── Feature (array) <-> text helpers ──
// One feature per line, fields separated by " :: ":  Name :: Type :: Text
const FEATURE_TYPES = ['Passive', 'Action', 'Reaction'];
function featuresToText(features = []) {
  return features.map(f => `${f.name} :: ${f.type} :: ${f.text}`).join('\n');
}
function textToFeatures(text) {
  return text.split('\n').map(l => l.trim()).filter(Boolean).map(line => {
    const parts = line.split('::').map(s => s.trim());
    if (parts.length >= 3) {
      const type = FEATURE_TYPES.find(t => t.toLowerCase() === parts[1].toLowerCase()) || 'Passive';
      return { name: parts[0], type, text: parts.slice(2).join(' :: ') };
    }
    if (parts.length === 2) return { name: parts[0], type: 'Passive', text: parts[1] };
    return { name: '', type: 'Passive', text: parts[0] };
  });
}

// Generic add/edit modal driven by a field schema.
//   fields: [{ key, label, type: 'text'|'number'|'textarea'|'select'|'features', options?, full?: bool }]
export default function EntityForm({ title, fields, initial, onSave, onClose }) {
  const [draft, setDraft] = useState(initial);
  const featField = fields.find(f => f.type === 'features');
  const [featText, setFeatText] = useState(featField ? featuresToText(initial[featField.key]) : '');
  const firstRef = useRef(null);

  useEffect(() => { firstRef.current?.focus(); }, []);

  const update = (key, type) => e => {
    const raw = e.target.value;
    const val = type === 'number' ? (raw === '' ? '' : Number(raw)) : raw;
    setDraft(d => setPath(d, key, val));
  };

  const save = () => {
    if (!String(getPath(draft, 'name') ?? '').trim()) return;
    let out = draft;
    fields.forEach(f => {
      if (f.type === 'number' && getPath(out, f.key) === '') out = setPath(out, f.key, 0);
    });
    if (featField) out = setPath(out, featField.key, textToFeatures(featText));
    onSave(out);
  };

  const renderInput = (f, i) => {
    const common = {
      ref: i === 0 ? firstRef : undefined,
      onKeyDown: e => { if (e.key === 'Escape') onClose(); },
    };
    if (f.type === 'features') {
      return (
        <textarea
          rows={5}
          placeholder="One per line — Name :: Type :: Text"
          value={featText}
          onChange={e => setFeatText(e.target.value)}
        />
      );
    }
    if (f.type === 'select') {
      return (
        <select value={getPath(draft, f.key) ?? ''} onChange={update(f.key, 'text')}>
          {f.options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      );
    }
    if (f.type === 'textarea') {
      return (
        <textarea {...common} rows={2} value={getPath(draft, f.key) ?? ''} onChange={update(f.key, f.type)} />
      );
    }
    return (
      <input
        {...common}
        type={f.type === 'number' ? 'number' : 'text'}
        value={getPath(draft, f.key) ?? ''}
        onChange={update(f.key, f.type)}
        onKeyDown={e => { if (e.key === 'Enter') save(); if (e.key === 'Escape') onClose(); }}
      />
    );
  };

  return (
    <div className="overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal modal-wide">
        <h2>{title}</h2>
        <div className="form-grid">
          {fields.map((f, i) => (
            <label key={f.key} className={`field ${f.full || f.type === 'textarea' || f.type === 'features' ? 'field-full' : ''}`}>
              <span>{f.label}</span>
              {renderInput(f, i)}
            </label>
          ))}
        </div>
        <div className="modal-btns">
          <button className="btn btn-clr" onClick={onClose}>Cancel</button>
          <button className="btn btn-pc" onClick={save}>Save</button>
        </div>
      </div>
    </div>
  );
}
