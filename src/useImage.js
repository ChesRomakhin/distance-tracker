import { useEffect, useState } from 'react';

// Loads an image by URL to learn its natural size (or that it failed).
// Only <img>/<image> display is used — no canvas — so CORS doesn't matter.
//   → { status: 'none' | 'loading' | 'ok' | 'error', w, h }

const NONE    = { status: 'none' };
const LOADING = { status: 'loading' };
const cache   = new Map();   // url → settled result, shared by every map view

// Size of an image some view has already loaded, if any.
export const cachedImage = url => (url ? cache.get(url) : undefined);

export default function useImage(url) {
  const [state, setState] = useState(() => ({ url, info: cache.get(url) }));

  useEffect(() => {
    if (!url || cache.has(url)) return;
    let live = true;
    const img = new Image();
    const settle = info => {
      cache.set(url, info);
      if (live) setState({ url, info });
    };
    img.onload  = () => settle(img.naturalWidth > 0
      ? { status: 'ok', w: img.naturalWidth, h: img.naturalHeight }
      : { status: 'error' });                  // e.g. an SVG without a size
    img.onerror = () => settle({ status: 'error' });
    img.src = url;
    return () => { live = false; };
  }, [url]);

  if (!url) return NONE;
  return (state.url === url && state.info) || cache.get(url) || LOADING;
}
