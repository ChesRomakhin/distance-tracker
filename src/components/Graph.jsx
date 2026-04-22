import { useState, useEffect, useRef } from 'react';
import {
  DISTANCES, DIST_COLOR, DIST_LABEL, RING_RADII,
  TYPE_FILL, TYPE_RING, TOKEN_R,
} from '../constants';

const ZOOM_MIN  = 0.12;
const ZOOM_MAX  = 10;
const ZOOM_STEP = 1.3;

export default function Graph({
  tokens,
  focusedId,
  ringAnchor,          // { x, y } — pinned ring centre (set on focus, updated on confirm)
  onFocusChange,
  onConfirmPosition,   // (id) => void — snap rings to token's current position
  onMoveToken,
  onRemoveToken,
  role,
}) {
  const containerRef = useRef(null);
  const tokensRef    = useRef(tokens);
  tokensRef.current  = tokens;

  const [dims,     setDims]     = useState({ width: 800, height: 600 });
  const [viewport, setViewport] = useState({ zoom: 1, panX: 0, panY: 0 });
  const [panning,  setPanning]  = useState(false);

  const isGM = role === 'gm';
  const focusedToken = tokens.find(t => t.id === focusedId) ?? null;
  const viewBox = `${viewport.panX} ${viewport.panY} ${dims.width / viewport.zoom} ${dims.height / viewport.zoom}`;

  // Has the focused token moved away from its anchor?
  const hasMoved = focusedToken && ringAnchor &&
    (Math.abs(focusedToken.x - ringAnchor.x) > 1 || Math.abs(focusedToken.y - ringAnchor.y) > 1);

  // ── Resize observer ────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const { width, height } = el.getBoundingClientRect();
    setDims({ width, height });
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setDims({ width, height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Wheel zoom ─────────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = e => {
      e.preventDefault();
      const rect   = el.getBoundingClientRect();
      const mx     = e.clientX - rect.left;
      const my     = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.1 : 1 / 1.1;
      setViewport(v => {
        const nz = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, v.zoom * factor));
        const wx = v.panX + mx / v.zoom;
        const wy = v.panY + my / v.zoom;
        return { zoom: nz, panX: wx - mx / nz, panY: wy - my / nz };
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // ── Zoom button helper ─────────────────────────────────────────────────
  const zoomBy = factor => {
    setViewport(v => {
      const nz = Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, v.zoom * factor));
      const cx = v.panX + dims.width  / (2 * v.zoom);
      const cy = v.panY + dims.height / (2 * v.zoom);
      return { zoom: nz, panX: cx - dims.width / (2 * nz), panY: cy - dims.height / (2 * nz) };
    });
  };

  // ── Token drag (GM only) ───────────────────────────────────────────────
  function startDrag(e, tokenId, tok) {
    if (!isGM || e.button !== 0) return;
    e.preventDefault();
    e.stopPropagation();

    const x0 = e.clientX, y0 = e.clientY;
    const tx0 = tok.x,   ty0 = tok.y;
    const z   = viewport.zoom;
    let moved = false;

    const onMove = mv => {
      const dsx = mv.clientX - x0, dsy = mv.clientY - y0;
      if (!moved && dsx * dsx + dsy * dsy > 9) moved = true;
      if (moved) onMoveToken(tokenId, tx0 + dsx / z, ty0 + dsy / z);
    };
    const onUp = () => {
      if (!moved) {
        if (focusedId === tokenId) {
          // Already focused — confirm: snap rings to current position
          onConfirmPosition(tokenId);
        } else {
          onFocusChange(tokenId);
        }
      }
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
  }

  function startTouchDrag(e, tokenId, tok) {
    if (!isGM) return;
    e.preventDefault();
    e.stopPropagation();
    const t0  = e.touches[0];
    const x0  = t0.clientX, y0  = t0.clientY;
    const tx0 = tok.x,      ty0 = tok.y;
    const z   = viewport.zoom;
    let moved = false;

    const onMove = mv => {
      mv.preventDefault();
      const t = mv.touches[0];
      const dsx = t.clientX - x0, dsy = t.clientY - y0;
      if (!moved && dsx * dsx + dsy * dsy > 25) moved = true;
      if (moved) onMoveToken(tokenId, tx0 + dsx / z, ty0 + dsy / z);
    };
    const onEnd = () => {
      if (!moved) {
        if (focusedId === tokenId) {
          onConfirmPosition(tokenId);
        } else {
          onFocusChange(tokenId);
        }
      }
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend',  onEnd);
    };
    window.addEventListener('touchmove', onMove, { passive: false });
    window.addEventListener('touchend',  onEnd);
  }

  // ── Canvas pan ─────────────────────────────────────────────────────────
  function handleSvgMouseDown(e) {
    if (e.button !== 0) return;
    const x0    = e.clientX, y0    = e.clientY;
    const panX0 = viewport.panX,   panY0 = viewport.panY;
    const z     = viewport.zoom;
    let moved   = false;

    const onMove = mv => {
      const dsx = mv.clientX - x0, dsy = mv.clientY - y0;
      if (!moved && dsx * dsx + dsy * dsy > 9) { moved = true; setPanning(true); }
      if (moved) setViewport(v => ({ ...v, panX: panX0 - dsx / z, panY: panY0 - dsy / z }));
    };
    const onUp = () => {
      if (!moved && isGM) onFocusChange(null);
      setPanning(false);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup',   onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup',   onUp);
  }

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div
      ref={containerRef}
      className="graph-container"
      style={{ cursor: panning ? 'grabbing' : 'default' }}
    >
      {tokens.length === 0 && (
        <div className="empty-msg">
          <span className="empty-icon">⚔</span>
          <p>{isGM ? 'Add characters and drag them to position' : 'Waiting for GM to add characters…'}</p>
        </div>
      )}

      <svg
        width="100%" height="100%"
        viewBox={viewBox}
        onMouseDown={handleSvgMouseDown}
      >
        {/* ── Distance rings — pinned at ringAnchor ── */}
        {ringAnchor && focusedToken && (
          <g className="rings-group" style={{ pointerEvents: 'none' }}>
            {/* Zone fills (outermost first) */}
            {[...DISTANCES].reverse().map(d => (
              <circle
                key={`fill-${d}`}
                cx={ringAnchor.x} cy={ringAnchor.y}
                r={RING_RADII[d]}
                fill={DIST_COLOR[d]} fillOpacity={0.04}
                stroke="none"
              />
            ))}

            {/* Ring outlines + labels */}
            {DISTANCES.map(d => (
              <g key={d}>
                <circle
                  cx={ringAnchor.x} cy={ringAnchor.y}
                  r={RING_RADII[d]}
                  fill="none"
                  stroke={DIST_COLOR[d]}
                  strokeWidth={1.5}
                  strokeDasharray="7 4"
                  strokeOpacity={0.75}
                />
                <text
                  x={ringAnchor.x + RING_RADII[d] + 8}
                  y={ringAnchor.y}
                  dominantBaseline="middle"
                  fontSize={12} fontWeight={600}
                  fill={DIST_COLOR[d]} fillOpacity={0.9}
                >
                  {DIST_LABEL[d]}
                </text>
              </g>
            ))}

            {/* Outline-only rings at the token's CURRENT position (visible only after movement) */}
            {hasMoved && DISTANCES.map(d => (
              <circle
                key={`live-${d}`}
                cx={focusedToken.x} cy={focusedToken.y}
                r={RING_RADII[d]}
                fill="none"
                stroke={DIST_COLOR[d]}
                strokeWidth={1}
                strokeDasharray="3 6"
                strokeOpacity={0.4}
              />
            ))}

            {/* Ghost marker at anchor when token has moved away */}
            {hasMoved && (
              <>
                <circle
                  cx={ringAnchor.x} cy={ringAnchor.y} r={TOKEN_R}
                  fill="none"
                  stroke={TYPE_RING[focusedToken.type]}
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  strokeOpacity={0.35}
                />
                {/* Dashed line from anchor → current token */}
                <line
                  x1={ringAnchor.x} y1={ringAnchor.y}
                  x2={focusedToken.x} y2={focusedToken.y}
                  stroke="#f1f5f9"
                  strokeWidth={1.2}
                  strokeDasharray="5 4"
                  strokeOpacity={0.4}
                />
              </>
            )}
          </g>
        )}

        {/* ── Tokens ── */}
        <g>
          {tokens.map(tok => {
            const isFocused = tok.id === focusedId;
            const ini = tok.name.trim()
              .split(/\s+/).map(w => w[0] ?? '').join('')
              .toUpperCase().slice(0, 2) || '?';
            const delX = tok.x + TOKEN_R - 4;
            const delY = tok.y - TOKEN_R + 4;

            return (
              <g
                key={tok.id}
                className="token-group"
                style={{
                  cursor: isGM ? (panning ? 'grabbing' : 'grab') : 'default',
                  pointerEvents: isGM ? 'auto' : 'none',
                }}
                onClick={e => e.stopPropagation()}
                onMouseDown={e => startDrag(e, tok.id, tok)}
                onTouchStart={e => startTouchDrag(e, tok.id, tok)}
              >
                {isFocused && (
                  <circle
                    cx={tok.x} cy={tok.y} r={TOKEN_R + 7}
                    fill="none" stroke="#f1f5f9"
                    strokeWidth={2.5} strokeOpacity={0.9}
                    style={{ pointerEvents: 'none' }}
                  />
                )}
                <circle cx={tok.x + 2} cy={tok.y + 3} r={TOKEN_R} fill="rgba(0,0,0,0.35)" />
                <circle
                  cx={tok.x} cy={tok.y} r={TOKEN_R}
                  fill={TYPE_FILL[tok.type]}
                  stroke={isFocused ? '#f1f5f9' : TYPE_RING[tok.type]}
                  strokeWidth={2.5}
                />
                <text
                  x={tok.x} y={tok.y}
                  textAnchor="middle" dominantBaseline="middle"
                  fontSize={13} fontWeight={800} fill="white"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {ini}
                </text>
                <text
                  x={tok.x} y={tok.y + TOKEN_R + 13}
                  textAnchor="middle" fontSize={10} fill="#94a3b8"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {tok.name.length > 11 ? tok.name.slice(0, 10) + '\u2026' : tok.name}
                </text>

                {isGM && (
                  <>
                    <circle
                      cx={delX} cy={delY} r={9}
                      fill="#dc2626" className="del-btn"
                      onMouseDown={e => e.stopPropagation()}
                      onTouchStart={e => e.stopPropagation()}
                      onClick={e => { e.stopPropagation(); onRemoveToken(tok.id); }}
                      onTouchEnd={e => { e.preventDefault(); e.stopPropagation(); onRemoveToken(tok.id); }}
                      style={{ cursor: 'pointer' }}
                    />
                    <text
                      x={delX} y={delY}
                      textAnchor="middle" dominantBaseline="middle"
                      fontSize={12} fontWeight={800} fill="white"
                      className="del-x"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}
                    >
                      ×
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </g>
      </svg>

      {/* ── Zoom controls ── */}
      <div className="zoom-controls panel">
        <button className="zoom-btn" onClick={() => zoomBy(ZOOM_STEP)} title="Zoom in">+</button>
        <span className="zoom-level">{Math.round(viewport.zoom * 100)}%</span>
        <button className="zoom-btn" onClick={() => zoomBy(1 / ZOOM_STEP)} title="Zoom out">−</button>
        <button
          className="zoom-btn zoom-reset"
          onClick={() => setViewport({ zoom: 1, panX: 0, panY: 0 })}
          title="Reset view"
        >
          ⊙
        </button>
      </div>

      {/* ── Legend ── */}
      <div className="panel legend">
        <h3>Distance</h3>
        {DISTANCES.map(d => (
          <div key={d} className="legend-row">
            <div className="legend-swatch" style={{ background: DIST_COLOR[d] }} />
            <span>{DIST_LABEL[d]}</span>
          </div>
        ))}
      </div>

      {/* ── Hints ── */}
      <div className="panel hint">
        {isGM ? (
          <>
            <strong>Click token</strong> — select &amp; show rings<br />
            <strong>Drag token</strong> — move (rings stay pinned)<br />
            <strong>Click selected</strong> — confirm new position<br />
            <strong>Drag canvas</strong> — pan<br />
            <strong>Scroll / buttons</strong> — zoom
          </>
        ) : (
          <>
            <strong>Drag canvas</strong> — pan<br />
            <strong>Scroll / buttons</strong> — zoom<br />
            <span style={{ color: 'var(--text-muted)' }}>GM controls the board</span>
          </>
        )}
      </div>
    </div>
  );
}
