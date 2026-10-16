import { useState } from 'react';

export const FEATURE_TYPES = ['Passive', 'Action', 'Reaction', 'Evolution'];

// ── Feature (array) <-> text helpers, for bulk paste ──
// One feature per line, fields separated by " :: ":  Name :: Type :: Text
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

// Row-per-feature editor with a plain-text mode for pasting stat blocks.
export default function FeatureEditor({ value = [], onChange }) {
  const [bulk, setBulk] = useState(null);   // text while in bulk mode, else null

  const setAt = (i, patch) => onChange(value.map((f, j) => (j === i ? { ...f, ...patch } : f)));
  const remove = i => onChange(value.filter((_, j) => j !== i));
  const add = () => onChange([...value, { name: '', type: 'Passive', text: '' }]);

  if (bulk != null) {
    return (
      <div className="feat-editor">
        <textarea
          rows={6}
          placeholder="One per line — Name :: Type :: Text"
          value={bulk}
          onChange={e => setBulk(e.target.value)}
        />
        <div className="feat-tools">
          <button type="button" className="link-btn" onClick={() => setBulk(null)}>Cancel</button>
          <button type="button" className="btn btn-clr btn-sm" onClick={() => { onChange(textToFeatures(bulk)); setBulk(null); }}>
            Apply text
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="feat-editor">
      {value.length === 0 && <p className="sp-empty">No features.</p>}
      {value.map((f, i) => (
        <div key={i} className="feat-row">
          <div className="feat-row-head">
            <input
              placeholder="Feature name"
              aria-label={`Feature ${i + 1} name`}
              value={f.name}
              onChange={e => setAt(i, { name: e.target.value })}
            />
            <select aria-label={`Feature ${i + 1} type`} value={f.type} onChange={e => setAt(i, { type: e.target.value })}>
              {FEATURE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button type="button" className="icon-btn" onClick={() => remove(i)} aria-label={`Remove feature ${f.name || i + 1}`} title="Remove feature">✕</button>
          </div>
          <textarea
            rows={2}
            placeholder="What it does…"
            aria-label={`Feature ${i + 1} text`}
            value={f.text}
            onChange={e => setAt(i, { text: e.target.value })}
          />
        </div>
      ))}
      <div className="feat-tools">
        <button type="button" className="link-btn" onClick={() => setBulk(featuresToText(value))}>Edit as text</button>
        <button type="button" className="btn btn-clr btn-sm" onClick={add}>+ Add feature</button>
      </div>
    </div>
  );
}
