import { useEffect, useRef } from 'react';

// Open dialogs, innermost last — only the top one reacts to Esc / Tab.
const stack = [];

const FOCUSABLE = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Modal shell: overlay, Esc to close, focus trap, focus restore.
// `onClose` omitted → the dialog can only be left through its own buttons.
export default function Dialog({ title, onClose, wide, className = '', children }) {
  const boxRef   = useRef(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    const box = boxRef.current;
    const prevFocus = document.activeElement;
    stack.push(box);
    if (!box.contains(document.activeElement)) {
      (box.querySelector('[autofocus], input, textarea, select') ?? box.querySelector(FOCUSABLE) ?? box).focus();
    }

    const onKey = e => {
      if (stack[stack.length - 1] !== box) return;
      if (e.key === 'Escape' && closeRef.current) {
        e.stopPropagation();
        closeRef.current();
      } else if (e.key === 'Tab') {
        const items = [...box.querySelectorAll(FOCUSABLE)].filter(el => el.offsetParent !== null);
        if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('keydown', onKey, true);
      stack.splice(stack.indexOf(box), 1);
      prevFocus?.focus?.();
    };
  }, []);

  return (
    <div
      className="overlay"
      onMouseDown={e => { if (e.target === e.currentTarget) closeRef.current?.(); }}
    >
      <div
        ref={boxRef}
        className={`modal ${wide ? 'modal-wide' : ''} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        tabIndex={-1}
      >
        {title != null && <h2>{title}</h2>}
        {children}
      </div>
    </div>
  );
}
