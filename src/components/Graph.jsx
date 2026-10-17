import { useState, useEffect, useRef } from 'react';
import {
  DISTANCES, DIST_COLOR, DIST_LABEL, DIST_METERS, DIST_SHORT,
  TYPE_FILL, TYPE_RING, PX_PER_M, TOKEN_DIAMETER_M, toPx, tokenRadiusM, ringRadiusM, rangeM, bandOf, tokenLabel,
  backgroundRect,
} from '../constants';
import useImage from '../useImage';

const ZOOM_MIN  = 0.12;
const ZOOM_MAX  = 10;
const ZOOM_STEP = 1.3;
const clampZoom = z => Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, z));

// Bands that get a ring (Very Far is open-ended — legend only).
const RING_DISTANCES = DISTANCES.filter(d => DIST_METERS[d] != null);

const GRID_PX = toPx(1.5);   // one SRD square

// Ring labels sit on the rings at ±40° from horizontal.
const LABEL_COS = Math.cos(Math.PI * 40 / 180);
const LABEL_SIN = Math.sin(Math.PI * 40 / 180);

// Boolean UI preference remembered per browser.
function useStoredToggle(key, initial) {
  const [on, setOn] = useState(() => {
    try { const v = localStorage.getItem(key); return v == null ? initial : v === '1'; } catch { return initial; }
  });
  const toggle = () => setOn(v => {
    try { localStorage.setItem(key, v ? '0' : '1'); } catch { /* storage unavailable */ }
    return !v;
  });
  return [on, toggle];
}

const isTyping = el => el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable);

// Marked-slot pips (HP or Stress) drawn under a token.
function Pips({ x, y, w, h, value, max, color }) {
  if (!max) return null;
  const n = Math.min(max, 12);
  const gap = n > 1 ? h * 0.6 : 0;
  const segW = (w - gap * (n - 1)) / n;
  const filled = Math.round((value / max) * n);
  return Array.from({ length: n }, (_, i) => (
    <rect
      key={i}
      x={x + i * (segW + gap)} y={y} width={segW} height={h} rx={h / 3}
      fill={i < filled ? color : 'rgba(255,255,255,0.14)'}
    />
  ));
}

export default function Graph({
  tokens,
  focusedId,
  ringAnchor,          // { x, y } — pinned ring centre (set on focus, updated on confirm)
  onFocusChange,
  onConfirmPosition,   // (id) => void — snap rings to token's current position
  onMoveStart,         // (id) => void — a drag is about to move the token (undo snapshot)
  onMoveToken,
  map,                 // scene map (background) or null
  fitKey,              // changes → frame the scene (new map, deployed encounter)
  spawnPoints = [],    // GM: PC spawn points, in order
  spawnMode,           // GM: clicks on the canvas add spawn points
  onAddSpawn,          // (x, y) => void
  onRemoveSpawn,       // (index) => void
  onMoveSpawn,         // (index, x, y) => void
  onSpawnModeEnd,
  areas = [],          // areas of effect (players get only the visible ones)
  selectedAreaId,
  onSelectArea,        // (id) => void
  onMoveArea,          // (id, x, y) => void
  role,
  viewRef,             // ref the map writes its viewport/centre into (kept across remounts)
}) {
  const containerRef = useRef(null);
  const lastFitRef   = useRef(viewRef?.current?.fitKey);

  const [dims,     setDims]     = useState({ width: 800, height: 600 });
  const [viewport, setViewport] = useState(() => viewRef?.current?.viewport ?? { zoom: 1, panX: 0, panY: 0 });
  const [panning,  setPanning]  = useState(false);
  const [hintOpen,   toggleHint]   = useStoredToggle('dh-hint-open', window.innerWidth > 700);
  const [legendOpen, toggleLegend] = useStoredToggle('dh-legend-open', window.innerWidth > 700);

  const isGM = role === 'gm';
  const bg     = map?.background ?? null;
  const img    = useImage(bg?.url);
  const bgRect = backgroundRect(bg, img);   // metres
  const focusedToken = tokens.find(t => t.id === focusedId) ?? null;
  const { zoom, panX, panY } = viewport;
  const viewW = dims.width / zoom, viewH = dims.height / zoom;
  const viewBox = `${panX} ${panY} ${viewW} ${viewH}`;

  // World units per screen pixel for text and badges, so labels stay readable
  // at any zoom (capped so they don't swamp the tokens when zoomed far out).
  const ui = Math.min(2.4, Math.max(0.5, 1 / zoom));
  const showNames = zoom >= 0.6;

  // Has the focused token moved away from its anchor? (metres; ≈ 1 px at zoom 1)
  const hasMoved = focusedToken && ringAnchor &&
    (Math.abs(focusedToken.x - ringAnchor.x) > 0.03 || Math.abs(focusedToken.y - ringAnchor.y) > 0.03);
  const movedM = hasMoved ? Math.hypot(focusedToken.x - ringAnchor.x, focusedToken.y - ringAnchor.y) : 0;

  // Ring geometry in screen-space pixels (world is in metres)
  const anchorPx  = ringAnchor && { x: toPx(ringAnchor.x), y: toPx(ringAnchor.y) };
  const focusedPx = focusedToken && { x: toPx(focusedToken.x), y: toPx(focusedToken.y) };
  const ringR     = d => toPx(ringRadiusM(d, focusedToken));

  // ── Share viewport with the app (spawn point, restore after tab switch) ──
  useEffect(() => {
    if (!viewRef) return;
    viewRef.current = {
      viewport,
      fitKey: lastFitRef.current,
      center: { x: (panX + viewW / 2) / PX_PER_M, y: (panY + viewH / 2) / PX_PER_M },
    };
  });

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
        const nz = clampZoom(v.zoom * factor);
        const wx = v.panX + mx / v.zoom;
        const wy = v.panY + my / v.zoom;
        return { zoom: nz, panX: wx - mx / nz, panY: wy - my / nz };
      });
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  // ── Zoom helpers ───────────────────────────────────────────────────────
  const zoomBy = factor => {
    setViewport(v => {
      const nz = clampZoom(v.zoom * factor);
      const cx = v.panX + dims.width  / (2 * v.zoom);
      const cy = v.panY + dims.height / (2 * v.zoom);
      return { zoom: nz, panX: cx - dims.width / (2 * nz), panY: cy - dims.height / (2 * nz) };
    });
  };

  const centerOn = (px, py, z = zoom) =>
    setViewport({ zoom: z, panX: px - dims.width / (2 * z), panY: py - dims.height / (2 * z) });

  // Frame every token and area on the board, and the map background.
  const fitAll = () => {
    if (!tokens.length && !areas.length && !bgRect) { setViewport({ zoom: 1, panX: 0, panY: 0 }); return; }
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    tokens.forEach(t => {
      const r = toPx(tokenRadiusM(t));
      x0 = Math.min(x0, toPx(t.x) - r); x1 = Math.max(x1, toPx(t.x) + r);
      y0 = Math.min(y0, toPx(t.y) - r); y1 = Math.max(y1, toPx(t.y) + r);
    });
    areas.forEach(a => {
      const r = toPx(a.radius);
      x0 = Math.min(x0, toPx(a.x) - r); x1 = Math.max(x1, toPx(a.x) + r);
      y0 = Math.min(y0, toPx(a.y) - r); y1 = Math.max(y1, toPx(a.y) + r);
    });
    if (bgRect) {
      x0 = Math.min(x0, toPx(bgRect.x)); x1 = Math.max(x1, toPx(bgRect.x + bgRect.w));
      y0 = Math.min(y0, toPx(bgRect.y)); y1 = Math.max(y1, toPx(bgRect.y + bgRect.h));
    }
    // Measured here, not from `dims`: right after mount `dims` may still be the default.
    const { width, height } = containerRef.current?.getBoundingClientRect() ?? dims;
    const pad = 70;
    const z = clampZoom(Math.min(2, (width - 2 * pad) / (x1 - x0), (height - 2 * pad) / (y1 - y0)));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
    setViewport({ zoom: z, panX: cx - width / (2 * z), panY: cy - height / (2 * z) });
  };

  // Latest values for the window-level handlers below.
  const live = useRef({});
  live.current = {
    viewport, focusedId, isGM, onFocusChange, onConfirmPosition, onMoveToken, onMoveStart, zoomBy, fitAll,
    spawnMode, onAddSpawn, onRemoveSpawn, onMoveSpawn, onSelectArea, onMoveArea,
  };

  // ── Keyboard: zoom / fit ───────────────────────────────────────────────
  useEffect(() => {
    const onKey = e => {
      if (e.ctrlKey || e.metaKey || e.altKey || isTyping(e.target) || document.querySelector('.overlay')) return;
      const L = live.current;
      if (e.key === '+' || e.key === '=') L.zoomBy(ZOOM_STEP);
      else if (e.key === '-' || e.key === '_') L.zoomBy(1 / ZOOM_STEP);
      else if (e.key === '0') setViewport({ zoom: 1, panX: 0, panY: 0 });
      else if (e.key === 'f' || e.key === 'F') L.fitAll();
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // ── Player: frame the board the first time it arrives ──────────────────
  const fittedRef = useRef(false);
  useEffect(() => {
    if (isGM || fittedRef.current || !tokens.length) return;
    fittedRef.current = true;
    const id = requestAnimationFrame(() => live.current.fitAll());   // after the first size measurement
    return () => cancelAnimationFrame(id);
  }, [isGM, tokens.length]);

  // ── New scene: frame it once its background has loaded (or failed) ─────
  useEffect(() => {
    if (fitKey == null || lastFitRef.current === fitKey || img.status === 'loading') return;
    // Marked as done only once the frame runs — a cancelled frame (StrictMode's
    // double effect, a fast re-render) must not swallow the fit.
    const id = requestAnimationFrame(() => {
      lastFitRef.current = fitKey;
      live.current.fitAll();
    });
    return () => cancelAnimationFrame(id);
  }, [fitKey, img.status]);

  // ── Player: keep the GM's selection in view ────────────────────────────
  useEffect(() => {
    if (isGM || !ringAnchor) return;
    const px = toPx(ringAnchor.x), py = toPx(ringAnchor.y);
    const m = 60 / zoom;
    const inView = px > panX + m && px < panX + viewW - m && py > panY + m && py < panY + viewH - m;
    if (!inView) centerOn(px, py);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedId, ringAnchor?.x, ringAnchor?.y]);

  // ── Pointer gestures: token drag, canvas pan, two-finger pinch ─────────
  // One code path for mouse, pen and touch.
  const pointersRef = useRef(new Map());   // pointerId → { x, y }
  const gestureRef  = useRef(null);

  // Screen point → world metres.
  const worldAt = (clientX, clientY) => {
    const rect = containerRef.current.getBoundingClientRect();
    const v = live.current.viewport;
    return {
      x: (v.panX + (clientX - rect.left) / v.zoom) / PX_PER_M,
      y: (v.panY + (clientY - rect.top) / v.zoom) / PX_PER_M,
    };
  };

  function beginPointer(e, tok, spawnIndex, area) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const pts = pointersRef.current;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const v = live.current.viewport;

    if (pts.size === 2) {
      const [a, b] = [...pts.values()];
      const rect = containerRef.current.getBoundingClientRect();
      const mx = (a.x + b.x) / 2 - rect.left, my = (a.y + b.y) / 2 - rect.top;
      gestureRef.current = {
        kind: 'pinch', rect, zoom0: v.zoom, d0: Math.max(1, Math.hypot(a.x - b.x, a.y - b.y)),
        wx: v.panX + mx / v.zoom, wy: v.panY + my / v.zoom,
      };
      setPanning(false);
      return;
    }
    if (pts.size > 2) return;

    const k = v.zoom * PX_PER_M;
    if (area) {
      gestureRef.current = { kind: 'area', id: area.id, x0: e.clientX, y0: e.clientY, tx0: area.x, ty0: area.y, k, moved: false };
      return;
    }
    if (spawnIndex != null) {
      const p = spawnPoints[spawnIndex];
      gestureRef.current = { kind: 'spawn', index: spawnIndex, x0: e.clientX, y0: e.clientY, tx0: p.x, ty0: p.y, k, moved: false };
      return;
    }
    gestureRef.current = tok && live.current.isGM
      ? { kind: 'drag', id: tok.id, x0: e.clientX, y0: e.clientY, tx0: tok.x, ty0: tok.y, k, moved: false }
      : { kind: 'pan', x0: e.clientX, y0: e.clientY, panX0: v.panX, panY0: v.panY, z: v.zoom, moved: false };
  }

  useEffect(() => {
    const onMove = e => {
      const pts = pointersRef.current;
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      const g = gestureRef.current;
      if (!g) return;

      if (g.kind === 'pinch') {
        if (pts.size < 2) return;
        const [a, b] = [...pts.values()];
        const nz = clampZoom(g.zoom0 * Math.hypot(a.x - b.x, a.y - b.y) / g.d0);
        const mx = (a.x + b.x) / 2 - g.rect.left, my = (a.y + b.y) / 2 - g.rect.top;
        setViewport({ zoom: nz, panX: g.wx - mx / nz, panY: g.wy - my / nz });
        return;
      }

      const dx = e.clientX - g.x0, dy = e.clientY - g.y0;
      const slop = e.pointerType === 'mouse' ? 3 : 6;
      if (!g.moved && dx * dx + dy * dy > slop * slop) {
        g.moved = true;
        if (g.kind === 'pan')  setPanning(true);
        if (g.kind === 'drag' || g.kind === 'spawn' || g.kind === 'area') live.current.onMoveStart?.(g.id);
      }
      if (!g.moved) return;
      if (g.kind === 'drag') live.current.onMoveToken(g.id, g.tx0 + dx / g.k, g.ty0 + dy / g.k);
      else if (g.kind === 'spawn') live.current.onMoveSpawn(g.index, g.tx0 + dx / g.k, g.ty0 + dy / g.k);
      else if (g.kind === 'area') live.current.onMoveArea(g.id, g.tx0 + dx / g.k, g.ty0 + dy / g.k);
      else setViewport(v => ({ ...v, panX: g.panX0 - dx / g.z, panY: g.panY0 - dy / g.z }));
    };

    const onUp = e => {
      const pts = pointersRef.current;
      if (!pts.has(e.pointerId)) return;
      pts.delete(e.pointerId);
      const g = gestureRef.current;
      if (!g) return;
      if (g.kind === 'pinch') {
        // Lifting one finger ends the pinch; nothing else starts until all are up.
        if (pts.size === 0) gestureRef.current = null;
        else gestureRef.current = { kind: 'idle' };
        return;
      }
      if (g.kind === 'idle') { if (pts.size === 0) gestureRef.current = null; return; }
      gestureRef.current = null;
      setPanning(false);
      if (g.moved || e.type === 'pointercancel') return;

      const L = live.current;
      if (g.kind === 'drag') {
        // Tap on the focused token confirms its new position; on another token, selects it.
        if (L.focusedId === g.id) L.onConfirmPosition(g.id);
        else L.onFocusChange(g.id);
      } else if (g.kind === 'spawn') {
        L.onRemoveSpawn(g.index);
      } else if (g.kind === 'area') {
        L.onSelectArea(g.id);
      } else if (L.isGM && L.spawnMode) {
        const p = worldAt(e.clientX, e.clientY);
        L.onAddSpawn(p.x, p.y);
      } else if (L.isGM) {
        L.onFocusChange(null);
      }
    };

    window.addEventListener('pointermove',   onMove);
    window.addEventListener('pointerup',     onUp);
    window.addEventListener('pointercancel', onUp);
    return () => {
      window.removeEventListener('pointermove',   onMove);
      window.removeEventListener('pointerup',     onUp);
      window.removeEventListener('pointercancel', onUp);
    };
  }, []);

  // ── Render ─────────────────────────────────────────────────────────────
  const textProps = { style: { pointerEvents: 'none', userSelect: 'none' } };
  const haloText  = { stroke: '#0f0f1a', strokeWidth: 3 * ui, paintOrder: 'stroke', strokeLinejoin: 'round' };

  return (
    <div
      ref={containerRef}
      className="graph-container"
      style={{ cursor: panning ? 'grabbing' : spawnMode ? 'crosshair' : 'default' }}
    >
      {tokens.length === 0 && areas.length === 0 && !bgRect && !spawnMode && (
        <div className="empty-msg">
          <span className="empty-icon">⚔</span>
          {isGM ? (
            <p>Add characters or deploy an encounter from the panel on the right.</p>
          ) : (
            <>
              <p>Waiting for the GM to add characters…</p>
              <p className="empty-sub">The GM view must be open in this same browser.</p>
            </>
          )}
        </div>
      )}

      <svg
        width="100%" height="100%"
        viewBox={viewBox}
        onPointerDown={e => beginPointer(e, null)}
      >
        <defs>
          <pattern id="sq-grid" width={GRID_PX} height={GRID_PX} patternUnits="userSpaceOnUse">
            <path
              d={`M ${GRID_PX} 0 L 0 0 0 ${GRID_PX}`}
              fill="none" stroke="#ffffff" strokeOpacity={0.045} strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
          </pattern>
        </defs>
        {bgRect && (
          <image
            href={bg.url}
            x={toPx(bgRect.x)} y={toPx(bgRect.y)} width={toPx(bgRect.w)} height={toPx(bgRect.h)}
            preserveAspectRatio="none"
            style={{ pointerEvents: 'none' }}
          />
        )}
        {/* The map image usually has its own grid — the board grid would clash with it. */}
        {!bgRect && zoom >= 0.3 && <rect x={panX} y={panY} width={viewW} height={viewH} fill="url(#sq-grid)" style={{ pointerEvents: 'none' }} />}

        {/* ── PC spawn points (GM only) ── */}
        {spawnPoints.map((p, i) => {
          const x = toPx(p.x), y = toPx(p.y), r = toPx(TOKEN_DIAMETER_M / 2);
          return (
            <g
              key={i}
              style={{ pointerEvents: spawnMode ? 'auto' : 'none', cursor: spawnMode ? 'grab' : 'default' }}
              onPointerDown={spawnMode ? e => { e.stopPropagation(); beginPointer(e, null, i); } : undefined}
            >
              <title>{`Spawn point ${i + 1}${spawnMode ? ' — click to remove, drag to move' : ''}`}</title>
              <circle
                cx={x} cy={y} r={r}
                fill="#c9a84c" fillOpacity={spawnMode ? 0.22 : 0.1}
                stroke="#c9a84c" strokeOpacity={spawnMode ? 0.95 : 0.5}
                strokeWidth={1.5} strokeDasharray="4 3"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={x} y={y}
                textAnchor="middle" dominantBaseline="central"
                fontSize={Math.max(r * 0.7, 9 * ui)} fontWeight={800}
                fill="#c9a84c" fillOpacity={spawnMode ? 1 : 0.6}
                {...textProps}
              >
                {i + 1}
              </text>
            </g>
          );
        })}

        {/* ── Areas of effect ── The fill lets clicks through (a Far-sized cloud
            must not block panning); the GM grabs an area by its tag (drawn above the tokens). */}
        {areas.map(a => {
          const selected = isGM && a.id === selectedAreaId;
          return (
            <g key={a.id} opacity={a.hidden ? 0.55 : 1} style={{ pointerEvents: 'none' }}>
              <circle
                cx={toPx(a.x)} cy={toPx(a.y)} r={toPx(a.radius)}
                fill={a.color} fillOpacity={a.hidden ? 0.08 : 0.18}
                stroke={a.color} strokeOpacity={selected ? 1 : 0.75}
                strokeWidth={selected ? 2.5 : 1.5} strokeDasharray={selected ? undefined : '6 4'}
                vectorEffect="non-scaling-stroke"
              />
              {!isGM && (
                <text
                  x={toPx(a.x)} y={toPx(a.y - a.radius) - 6 * ui}
                  textAnchor="middle" fontSize={11 * ui} fontWeight={700}
                  fill={a.color}
                  {...haloText}
                  {...textProps}
                >
                  {a.name}
                </text>
              )}
            </g>
          );
        })}

        {/* ── Distance rings — pinned at ringAnchor ── */}
        {ringAnchor && focusedToken && (
          <g className="rings-group" style={{ pointerEvents: 'none' }}>
            {/* Zone fills (outermost first) */}
            {[...RING_DISTANCES].reverse().map(d => (
              <circle
                key={`fill-${d}`}
                cx={anchorPx.x} cy={anchorPx.y}
                r={ringR(d)}
                fill={DIST_COLOR[d]} fillOpacity={0.04}
                stroke="none"
              />
            ))}

            {/* Ring outlines + labels (up-right, clear of the horizontal row of tokens) */}
            {RING_DISTANCES.map(d => (
              <g key={d}>
                <circle
                  cx={anchorPx.x} cy={anchorPx.y}
                  r={ringR(d)}
                  fill="none"
                  stroke={DIST_COLOR[d]}
                  strokeWidth={1.5}
                  strokeDasharray="7 4"
                  strokeOpacity={0.8}
                  vectorEffect="non-scaling-stroke"
                />
                {ringR(d) * zoom > 28 && (
                  <text
                    x={anchorPx.x + ringR(d) * LABEL_COS + 4 * ui}
                    y={anchorPx.y - ringR(d) * LABEL_SIN - 2 * ui}
                    fontSize={12 * ui} fontWeight={600}
                    fill={DIST_COLOR[d]}
                    {...haloText}
                  >
                    {DIST_LABEL[d]}
                  </text>
                )}
              </g>
            ))}

            {/* Preview rings at the token's current position: thin dotted, no fill,
                short tags down-right — secondary to the pinned rings above. */}
            {hasMoved && RING_DISTANCES.map(d => (
              <g key={`live-${d}`}>
                <circle
                  cx={focusedPx.x} cy={focusedPx.y}
                  r={ringR(d)}
                  fill="none"
                  stroke={DIST_COLOR[d]}
                  strokeWidth={1}
                  strokeDasharray="1.5 5"
                  strokeLinecap="round"
                  strokeOpacity={0.7}
                  vectorEffect="non-scaling-stroke"
                />
                {ringR(d) * zoom > 28 && (
                  <text
                    x={focusedPx.x + ringR(d) * LABEL_COS + 3 * ui}
                    y={focusedPx.y + ringR(d) * LABEL_SIN + 10 * ui}
                    fontSize={10 * ui} fontWeight={700}
                    fill={DIST_COLOR[d]} fillOpacity={0.85}
                    {...haloText}
                  >
                    {DIST_SHORT[d]}
                  </text>
                )}
              </g>
            ))}

            {/* Where the token started this move, and how far it has gone */}
            {hasMoved && (
              <>
                <circle
                  cx={anchorPx.x} cy={anchorPx.y} r={toPx(tokenRadiusM(focusedToken))}
                  fill="none"
                  stroke={TYPE_RING[focusedToken.type]}
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                  strokeOpacity={0.45}
                  vectorEffect="non-scaling-stroke"
                />
                <line
                  x1={anchorPx.x} y1={anchorPx.y}
                  x2={focusedPx.x} y2={focusedPx.y}
                  stroke="#f1f5f9"
                  strokeWidth={1.2}
                  strokeDasharray="5 4"
                  strokeOpacity={0.55}
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  x={(anchorPx.x + focusedPx.x) / 2}
                  y={(anchorPx.y + focusedPx.y) / 2 - 8 * ui}
                  textAnchor="middle"
                  fontSize={12 * ui} fontWeight={700}
                  fill={DIST_COLOR[bandOf(movedM)]}
                  {...haloText}
                >
                  {movedM.toFixed(1)} m · {bandOf(movedM)}
                </text>
              </>
            )}
          </g>
        )}

        {/* ── Tokens ── */}
        <g>
          {tokens.map(tok => {
            const isFocused = tok.id === focusedId;
            const label = tokenLabel(tok.name);
            // Screen-space geometry (world is in metres)
            const x = toPx(tok.x), y = toPx(tok.y);
            const r = toPx(tokenRadiusM(tok));
            const defeated = tok.hpMax > 0 && tok.hp >= tok.hpMax;
            // Only once something is marked — empty slots on every token are noise.
            const showBars = (isGM || tok.type === 'PC') && ((tok.hp ?? 0) > 0 || (tok.stress ?? 0) > 0);
            const barW = Math.max(2 * r, 30 * ui), barH = 3 * ui;
            const nameY = y + r + (showBars ? 4 + 2 * 3 + 3 : 2) * ui + 10 * ui;
            const band = focusedToken && ringAnchor && !isFocused
              ? bandOf(rangeM(focusedToken, tok, ringAnchor))
              : null;

            return (
              <g
                key={tok.id}
                className={`token-group ${defeated ? 'defeated' : ''}`}
                style={{
                  cursor: isGM ? (panning ? 'grabbing' : 'grab') : 'default',
                  pointerEvents: isGM ? 'auto' : 'none',
                }}
                onPointerDown={e => { e.stopPropagation(); beginPointer(e, tok); }}
              >
                <title>{tok.name}{defeated ? ' (defeated)' : ''}</title>
                {isFocused && (
                  <circle
                    cx={x} cy={y} r={r + 6 * ui}
                    fill="none" stroke="#f1f5f9"
                    strokeWidth={2.5} strokeOpacity={0.9}
                    vectorEffect="non-scaling-stroke"
                    style={{ pointerEvents: 'none' }}
                  />
                )}
                <circle cx={x + 2} cy={y + 3} r={r} fill="rgba(0,0,0,0.35)" />
                <circle
                  cx={x} cy={y} r={r}
                  fill={defeated ? '#374151' : TYPE_FILL[tok.type]}
                  stroke={isFocused ? '#f1f5f9' : defeated ? '#6b7280' : TYPE_RING[tok.type]}
                  strokeWidth={2.5}
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  x={x} y={y}
                  textAnchor="middle" dominantBaseline="central"
                  fontSize={Math.max(r * 0.62, 9 * ui)} fontWeight={800}
                  fill={defeated ? '#9ca3af' : 'white'}
                  {...textProps}
                >
                  {label.initials}
                </text>
                {defeated && (
                  <path
                    d={`M ${x - r * 0.6} ${y - r * 0.6} L ${x + r * 0.6} ${y + r * 0.6}`}
                    stroke="#f87171" strokeWidth={2} strokeOpacity={0.8}
                    vectorEffect="non-scaling-stroke"
                  />
                )}

                {/* Copy number (e.g. "Bandit 3") */}
                {label.num && (
                  <g {...textProps}>
                    <circle
                      cx={x + r * 0.78} cy={y + r * 0.78} r={8 * ui}
                      fill="#0f172a" stroke={TYPE_RING[tok.type]} strokeWidth={1.5}
                      vectorEffect="non-scaling-stroke"
                    />
                    <text
                      x={x + r * 0.78} y={y + r * 0.78}
                      textAnchor="middle" dominantBaseline="central"
                      fontSize={9.5 * ui} fontWeight={800} fill="white"
                    >
                      {label.num}
                    </text>
                  </g>
                )}

                {/* Range band from the selected unit */}
                {band && (
                  <g {...textProps}>
                    <rect
                      x={x - (DIST_SHORT[band].length * 6 + 8) * ui / 2} y={y - r - 17 * ui}
                      width={(DIST_SHORT[band].length * 6 + 8) * ui} height={13 * ui} rx={6.5 * ui}
                      fill={DIST_COLOR[band]}
                    />
                    <text
                      x={x} y={y - r - 10.5 * ui}
                      textAnchor="middle" dominantBaseline="central"
                      fontSize={9 * ui} fontWeight={800} fill="#0f0f1a"
                    >
                      {DIST_SHORT[band]}
                    </text>
                  </g>
                )}

                {showBars && (
                  <g {...textProps}>
                    <Pips x={x - barW / 2} y={y + r + 4 * ui}            w={barW} h={barH} value={tok.hp ?? 0}     max={tok.hpMax}     color="#f87171" />
                    <Pips x={x - barW / 2} y={y + r + 4 * ui + barH + 2 * ui} w={barW} h={barH} value={tok.stress ?? 0} max={tok.stressMax} color="#fbbf24" />
                  </g>
                )}

                {showNames && (
                  <text
                    x={x} y={nameY}
                    textAnchor="middle" fontSize={10.5 * ui}
                    fill={isFocused ? '#f1f5f9' : '#a3adbd'}
                    {...haloText}
                    {...textProps}
                  >
                    {label.short}
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* ── Area tags (GM): a pin on the top of the circle — click to edit, drag to move ── */}
        {isGM && areas.map(a => {
          const x = toPx(a.x), y = toPx(a.y - a.radius);
          const selected = a.id === selectedAreaId;
          return (
            <g
              key={a.id}
              opacity={a.hidden ? 0.7 : 1}
              style={{ cursor: panning ? 'grabbing' : 'grab' }}
              onPointerDown={e => { e.stopPropagation(); beginPointer(e, null, null, a); }}
            >
              <title>{`${a.name} — click to edit, drag to move`}</title>
              <circle
                cx={x} cy={y} r={6 * ui}
                fill={selected ? a.color : '#0f172a'} stroke={a.color} strokeWidth={2}
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={x} y={y - 10 * ui}
                textAnchor="middle" fontSize={11 * ui} fontWeight={700}
                fill={a.color}
                {...haloText}
                style={{ userSelect: 'none' }}
              >
                {`${a.name} · ${+a.radius.toFixed(1)} m${a.hidden ? ' · hidden' : ''}`}
              </text>
            </g>
          );
        })}
      </svg>

      {/* ── Notices: spawn mode, broken background ── */}
      {isGM && (spawnMode || img.status === 'error') && (
        <div className="map-notices">
          {img.status === 'error' && (
            <div className="map-notice map-notice-warn" role="alert">
              <span>
                The map background didn't load: <span className="map-notice-url">{bg.url}</span>. The map works without it.
              </span>
            </div>
          )}
          {spawnMode && (
            <div className="map-notice">
              <span>
                <b>Spawn points</b> — click the map to add · click a point to remove · drag to move.
                PCs take them in order.
              </span>
              <button className="btn btn-pc btn-sm" onClick={onSpawnModeEnd}>Done</button>
            </div>
          )}
        </div>
      )}

      {/* ── Zoom controls ── */}
      <div className="zoom-controls panel">
        <button className="zoom-btn" onClick={() => zoomBy(ZOOM_STEP)} title="Zoom in (+)" aria-label="Zoom in">+</button>
        <span className="zoom-level" aria-live="polite">{Math.round(zoom * 100)}%</span>
        <button className="zoom-btn" onClick={() => zoomBy(1 / ZOOM_STEP)} title="Zoom out (−)" aria-label="Zoom out">−</button>
        <button className="zoom-btn zoom-text" onClick={fitAll} title="Show the whole board (F)" aria-label="Show the whole board">Fit</button>
        <button
          className="zoom-btn zoom-reset"
          onClick={() => setViewport({ zoom: 1, panX: 0, panY: 0 })}
          title="Reset view (0)"
          aria-label="Reset view"
        >
          ⊙
        </button>
      </div>

      {/* ── Legend ── */}
      <div className={`panel legend ${legendOpen ? '' : 'collapsed'}`}>
        <button className="panel-toggle" onClick={toggleLegend} aria-expanded={legendOpen}>
          Distance <span aria-hidden="true">{legendOpen ? '▾' : '▸'}</span>
        </button>
        {legendOpen && DISTANCES.map(d => (
          <div key={d} className="legend-row">
            <div className="legend-swatch" style={{ background: DIST_COLOR[d] }} />
            <span>{DIST_LABEL[d]}</span>
          </div>
        ))}
      </div>

      {/* ── Hints ── */}
      {hintOpen ? (
        <div className="panel hint">
          <button className="panel-close" onClick={toggleHint} aria-label="Hide hints" title="Hide hints">✕</button>
          {isGM ? (
            <>
              <strong>Click token</strong> — select &amp; show rings<br />
              <strong>Drag token</strong> — move (rings stay pinned)<br />
              <strong>Enter</strong> — confirm move · <strong>Ctrl+Z</strong> — undo<br />
              <strong>Drag canvas</strong> — pan · <strong>Scroll / pinch</strong> — zoom<br />
              <strong>Del</strong> — remove · <strong>F</strong> — show all
            </>
          ) : (
            <>
              <strong>Drag canvas</strong> — pan<br />
              <strong>Scroll / pinch</strong> — zoom · <strong>F</strong> — show all<br />
              <span className="hint-muted">GM controls the board</span>
            </>
          )}
        </div>
      ) : (
        <button className="panel hint-open" onClick={toggleHint} aria-label="Show hints" title="Show hints">?</button>
      )}
    </div>
  );
}
