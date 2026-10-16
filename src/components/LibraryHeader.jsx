// Shared top bar for the library views: title + count, search, filters, primary action.
export default function LibraryHeader({ title, count, shown, query, onQuery, placeholder = 'Search…', children, action }) {
  return (
    <div className="library-head">
      <h2>
        {title}{' '}
        <span className="lib-count">{shown != null && shown !== count ? `${shown} / ${count}` : count}</span>
      </h2>
      <div className="library-tools">
        {onQuery && (
          <input
            className="lib-search"
            type="search"
            placeholder={placeholder}
            aria-label={`Search ${title.toLowerCase()}`}
            value={query}
            onChange={e => onQuery(e.target.value)}
          />
        )}
        {action}
      </div>
      {children && <div className="library-filters">{children}</div>}
    </div>
  );
}

// Single-choice row of pill buttons. options: [[value, label]]
export function Chips({ label, options, value, onChange }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {options.map(([v, text]) => (
        <button
          key={String(v)}
          className={`chip ${value === v ? 'active' : ''}`}
          aria-pressed={value === v}
          onClick={() => onChange(v)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
