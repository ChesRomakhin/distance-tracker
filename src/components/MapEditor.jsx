import { useRef, useState } from 'react';
import Dialog from './Dialog';
import { useConfirm } from './Feedback';
import useImage from '../useImage';
import { DEFAULT_PX_PER_M, TOKEN_DIAMETER_M } from '../constants';

const CELL_M = TOKEN_DIAMETER_M;   // one SRD square, 1.5 m
const ZOOMS  = [0.1, 0.15, 0.25, 0.35, 0.5, 0.75, 1, 1.5, 2, 3];

const fmt = v => String(Math.round(v * 100) / 100);
const num = s => {
  const v = Number(String(s).replace(',', '.'));
  return Number.isFinite(v) ? v : null;
};

// Map name, background URL and calibration: scale (two points + distance, or
// px per 1.5 m cell) and offset (where the image's corner sits in the world).
export default function MapEditor({ draft: initial, onSave, onCancel }) {
  const bg0 = initial.background;
  const [name,     setName]     = useState(initial.name);
  const [url,      setUrl]      = useState(bg0?.url ?? '');
  const [ppm,      setPpm]      = useState(bg0?.pxPerMeter ?? DEFAULT_PX_PER_M);
  const [cellText, setCellText] = useState(fmt((bg0?.pxPerMeter ?? DEFAULT_PX_PER_M) * CELL_M));
  const [offX,     setOffX]     = useState(fmt(bg0?.offset.x ?? 0));
  const [offY,     setOffY]     = useState(fmt(bg0?.offset.y ?? 0));
  const [tool,     setTool]     = useState(null);    // null | 'measure' | 'corner'
  const [pts,      setPts]      = useState([]);      // measure points, image px
  const [meters,   setMeters]   = useState('1.5');
  const [zoom,     setZoom]     = useState('fit');   // 'fit' | factor
  const [tried,    setTried]    = useState(false);
  const svgRef  = useRef(null);
  const confirm = useConfirm();

  const cleanUrl = url.trim();
  const img = useImage(cleanUrl || null);
  const ox = num(offX) ?? 0, oy = num(offY) ?? 0;
  const nameMissing = !name.trim();

  const build = () => ({
    ...initial,
    name: name.trim(),
    background: cleanUrl ? { url: cleanUrl, pxPerMeter: ppm, offset: { x: ox, y: oy } } : null,
  });

  const setScale = v => { setPpm(v); setCellText(fmt(v * CELL_M)); };

  const onCellText = s => {
    setCellText(s);
    const v = num(s);
    if (v > 0) setPpm(v / CELL_M);
  };

  // ── Preview ──
  const toImage = e => {
    const p = new DOMPoint(e.clientX, e.clientY).matrixTransform(svgRef.current.getScreenCTM().inverse());
    return { x: p.x, y: p.y };
  };

  const onPreviewClick = e => {
    if (!tool) return;
    const p = toImage(e);
    if (tool === 'measure') {
      setPts(prev => (prev.length >= 2 ? [p] : [...prev, p]));
    } else {
      // Put the world grid through this corner: offset ≡ −p / ppm (mod 1.5 m).
      const snap = v => -(((v / ppm) % CELL_M + CELL_M) % CELL_M);
      setOffX(fmt(snap(p.x)));
      setOffY(fmt(snap(p.y)));
      setTool(null);
    }
  };

  const measuredPx = pts.length === 2 ? Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y) : 0;
  const applyMeasure = () => {
    const m = num(meters);
    if (!(m > 0) || !(measuredPx > 0)) return;
    setScale(measuredPx / m);
    setPts([]);
    setTool(null);
  };

  const pickTool = t => { setTool(cur => (cur === t ? null : t)); setPts([]); };

  const shownScale = () => (zoom === 'fit' ? (svgRef.current?.clientWidth ?? img.w) / img.w : zoom);
  const zoomStep = dir => {
    const cur = shownScale();
    const next = dir > 0 ? ZOOMS.find(z => z > cur + 1e-3) : [...ZOOMS].reverse().find(z => z < cur - 1e-3);
    if (next) setZoom(next);
  };

  // ── Save / close ──
  const save = () => {
    setTried(true);
    if (nameMissing) return;
    onSave(build());
  };
  const close = () => {
    if (JSON.stringify(build()) === JSON.stringify({ ...initial, name: initial.name.trim() })) { onCancel(); return; }
    confirm({ title: 'Discard changes?', message: 'Your edits to this map will be lost.', confirmLabel: 'Discard', onConfirm: onCancel });
  };

  const cell = CELL_M * ppm;                  // image px per square
  const mark = img.status === 'ok' ? Math.max(img.w, img.h) / 140 : 1;
  const line = img.status === 'ok' ? Math.max(1, Math.max(img.w, img.h) / 900) : 1;

  return (
    <Dialog title={initial.id == null ? 'New Map' : 'Edit Map'} onClose={close} wide className="modal-map">
      <div className="form-grid">
        <label className="field">
          <span>Name</span>
          <input
            autoFocus
            className={tried && nameMissing ? 'invalid' : undefined}
            placeholder="Map name…"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {tried && nameMissing && <em className="field-error">Name is required.</em>}
        </label>
        <label className="field">
          <span>Background image URL</span>
          <input
            type="url"
            placeholder="https://…/map.jpg"
            value={url}
            onChange={e => { setUrl(e.target.value); setPts([]); }}
          />
        </label>
      </div>
      <p className="data-hint map-url-hint">
        The link must open the image itself. Google Drive or Dropbox share links won't work, and some
        sites block showing their images on other pages. Without an image the map still works.
      </p>

      {img.status === 'error' && (
        <p className="data-error">The image didn't load. Check the URL — the map will work without a background.</p>
      )}
      {img.status === 'loading' && <p className="data-hint">Loading image…</p>}

      {img.status === 'ok' && (
        <>
          <div className="map-tools">
            <button className={`btn btn-clr btn-sm ${tool === 'measure' ? 'btn-on' : ''}`} onClick={() => pickTool('measure')} aria-pressed={tool === 'measure'}>
              Measure two points
            </button>
            <button className={`btn btn-clr btn-sm ${tool === 'corner' ? 'btn-on' : ''}`} onClick={() => pickTool('corner')} aria-pressed={tool === 'corner'}>
              Click a grid corner
            </button>
            <span className="map-tools-sep" />
            <button className="zoom-btn" onClick={() => zoomStep(-1)} aria-label="Zoom out">−</button>
            <button className="zoom-btn zoom-text" onClick={() => setZoom('fit')}>Fit</button>
            <button className="zoom-btn" onClick={() => zoomStep(1)} aria-label="Zoom in">+</button>
            <span className="pick-detail">{img.w} × {img.h} px · {fmt(img.w / ppm)} × {fmt(img.h / ppm)} m</span>
          </div>

          {tool === 'measure' && (
            <div className="map-measure">
              {pts.length < 2 ? (
                <span>Click two points on the image whose distance you know{pts.length === 1 && ' — now the second one'}.</span>
              ) : (
                <>
                  <span>{fmt(measuredPx)} px between the points =</span>
                  <input
                    autoFocus
                    aria-label="Distance in metres"
                    value={meters}
                    onChange={e => setMeters(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') applyMeasure(); }}
                  />
                  <span>m</span>
                  <button className="btn btn-pc btn-sm" onClick={applyMeasure} disabled={!(num(meters) > 0)}>Apply</button>
                </>
              )}
            </div>
          )}
          {tool === 'corner' && (
            <div className="map-measure"><span>Click where two grid lines of the image cross — the board grid is shifted to match.</span></div>
          )}

          <div className={`map-preview ${tool ? 'picking' : ''}`}>
            <svg
              ref={svgRef}
              viewBox={`0 0 ${img.w} ${img.h}`}
              style={zoom === 'fit'
                ? { width: '100%', aspectRatio: `${img.w} / ${img.h}` }
                : { width: img.w * zoom, height: img.h * zoom }}
              onClick={onPreviewClick}
            >
              <defs>
                <pattern
                  id="calib-grid" patternUnits="userSpaceOnUse"
                  x={-ox * ppm} y={-oy * ppm} width={cell} height={cell}
                >
                  <path d={`M ${cell} 0 L 0 0 0 ${cell}`} fill="none" stroke="#22d3ee" strokeOpacity={0.75} strokeWidth={line} />
                </pattern>
              </defs>
              <image href={cleanUrl} x={0} y={0} width={img.w} height={img.h} />
              {cell >= 3 && <rect x={0} y={0} width={img.w} height={img.h} fill="url(#calib-grid)" pointerEvents="none" />}
              {pts.length === 2 && (
                <line x1={pts[0].x} y1={pts[0].y} x2={pts[1].x} y2={pts[1].y} stroke="#fbbf24" strokeWidth={line * 2} />
              )}
              {pts.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={mark} fill="#fbbf24" stroke="#0f0f1a" strokeWidth={line} />
              ))}
            </svg>
          </div>
          <p className="data-hint">The cyan grid shows 1.5 m squares as they will sit on the board.</p>
        </>
      )}

      <div className="form-grid map-numbers">
        <label className="field">
          <span>Px per 1.5 m square</span>
          <input inputMode="decimal" value={cellText} onChange={e => onCellText(e.target.value)} />
        </label>
        <div className="form-grid map-offset">
          <label className="field">
            <span>Offset X, m</span>
            <input inputMode="decimal" value={offX} onChange={e => setOffX(e.target.value)} />
          </label>
          <label className="field">
            <span>Offset Y, m</span>
            <input inputMode="decimal" value={offY} onChange={e => setOffY(e.target.value)} />
          </label>
        </div>
      </div>

      <div className="modal-btns modal-foot">
        <button className="btn btn-clr" onClick={close}>Cancel</button>
        <button className="btn btn-pc" onClick={save}>Save</button>
      </div>
    </Dialog>
  );
}
