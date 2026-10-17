import { useState } from 'react';
import LibraryHeader from './LibraryHeader';
import MapEditor from './MapEditor';
import { useConfirm } from './Feedback';
import useImage from '../useImage';
import { makeMap, backgroundRect } from '../constants';

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

function MapCard({ map, used, onBoard, onOpen, onEdit, onExport, onRemove }) {
  const bg  = map.background;
  const img = useImage(bg?.url);
  const rect = backgroundRect(bg, img);
  const confirm = useConfirm();

  return (
    <div className="entity-card map-card">
      <div className={`map-thumb ${img.status}`}>
        {img.status === 'ok' && <img src={bg.url} alt="" loading="lazy" />}
        {img.status === 'none'    && <span>No background</span>}
        {img.status === 'loading' && <span>Loading…</span>}
        {img.status === 'error'   && <span className="map-thumb-error">Image didn't load</span>}
      </div>
      <div className="entity-card-head">
        <span className="entity-name">{map.name}</span>
        {rect && <span className="entity-tag">{rect.w.toFixed(0)} × {rect.h.toFixed(0)} m</span>}
      </div>
      <div className="stat-row">
        {onBoard && <span className="stat-pill on-map-tag">on board</span>}
        {used > 0 && <span className="stat-pill">{plural(used, 'encounter')}</span>}
      </div>
      <div className="entity-card-btns">
        <button className="btn btn-npc btn-sm" onClick={onOpen}>Open on board</button>
        <button className="btn btn-clr btn-sm" onClick={onEdit}>Edit</button>
        <button className="btn btn-clr btn-sm" onClick={onExport} title="Download as a file">Export</button>
        <button
          className="btn btn-ghost-danger btn-sm card-delete"
          aria-label={`Delete ${map.name}`}
          title="Delete map"
          onClick={() => confirm({
            title: `Delete ${map.name}?`,
            message: used
              ? `${plural(used, 'encounter uses', 'encounters use')} this map. They keep their adversaries and positions, without a map.`
              : 'The map is removed. The image itself stays wherever it is hosted.',
            onConfirm: onRemove,
          })}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default function MapLibrary({ maps, encounters, sceneMapId, onAdd, onEdit, onRemove, onOpen, onExport }) {
  const [editing, setEditing] = useState(null);

  const save = entry => {
    if (entry.id == null) onAdd(entry);
    else onEdit(entry);
    setEditing(null);
  };

  return (
    <div className="library">
      <LibraryHeader
        title="Maps" count={maps.length}
        action={<button className="btn btn-pc" onClick={() => setEditing(makeMap())}>+ New Map</button>}
      />

      {maps.length === 0 ? (
        <p className="library-empty">No maps yet. A map is a background image by URL, scaled to metres, that encounters can be laid out on.</p>
      ) : (
        <div className="card-grid">
          {maps.map(m => (
            <MapCard
              key={m.id}
              map={m}
              used={encounters.filter(e => e.mapId === m.id).length}
              onBoard={m.id === sceneMapId}
              onOpen={() => onOpen(m)}
              onEdit={() => setEditing(m)}
              onExport={() => onExport(m)}
              onRemove={() => onRemove(m.id)}
            />
          ))}
        </div>
      )}

      {editing && <MapEditor draft={editing} onSave={save} onCancel={() => setEditing(null)} />}
    </div>
  );
}
