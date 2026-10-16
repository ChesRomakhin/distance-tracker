import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Dialog from './Dialog';

// App-wide confirm dialog and toast, reachable from any component.
//   const confirm = useConfirm();  confirm({ title, message, confirmLabel, onConfirm })
//   const toast   = useToast();    toast('Saved', { label: 'Undo', run: fn })

const ConfirmCtx = createContext(() => {});
const ToastCtx   = createContext(() => {});

export const useConfirm = () => useContext(ConfirmCtx);
export const useToast   = () => useContext(ToastCtx);

function ConfirmDialog({ title, message, confirmLabel = 'Delete', danger = true, onConfirm, onCancel }) {
  return (
    <Dialog title={title} onClose={onCancel}>
      {message && <p className="data-hint">{message}</p>}
      <div className="modal-btns">
        {/* Destructive dialogs start on Cancel so a stray Enter can't confirm */}
        <button className="btn btn-clr" autoFocus={danger} onClick={onCancel}>Cancel</button>
        <button className={`btn ${danger ? 'btn-npc' : 'btn-pc'}`} autoFocus={!danger} onClick={onConfirm}>{confirmLabel}</button>
      </div>
    </Dialog>
  );
}

function Toast({ toast, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, toast.action ? 6000 : 3500);
    return () => clearTimeout(t);
  }, [toast, onDone]);

  return (
    <div className="toast" role="status">
      <span>{toast.message}</span>
      {toast.action && (
        <button className="link-btn toast-action" onClick={() => { toast.action.run(); onDone(); }}>
          {toast.action.label}
        </button>
      )}
    </div>
  );
}

export function FeedbackProvider({ children }) {
  const [confirm, setConfirm] = useState(null);
  const [toast,   setToast]   = useState(null);
  const seq = useRef(0);

  const ask  = useCallback(opts => setConfirm(opts), []);
  const show = useCallback((message, action) => setToast({ message, action, key: ++seq.current }), []);
  const hide = useCallback(() => setToast(null), []);

  return (
    <ConfirmCtx.Provider value={ask}>
      <ToastCtx.Provider value={show}>
        {children}
        {confirm && (
          <ConfirmDialog
            {...confirm}
            onConfirm={() => { setConfirm(null); confirm.onConfirm(); }}
            onCancel={() => setConfirm(null)}
          />
        )}
        {toast && <Toast key={toast.key} toast={toast} onDone={hide} />}
      </ToastCtx.Provider>
    </ConfirmCtx.Provider>
  );
}
