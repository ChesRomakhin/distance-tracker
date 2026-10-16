// Label + value(/max) with −/+ steppers. `max` is optional: when undefined the
// value is unbounded upward (used for "custom" tokens with no stat block).
export default function StatStepper({ label, value, max, min = 0, color, hint, onChange }) {
  const v = value ?? 0;
  const dec = () => onChange(Math.max(min, v - 1));
  const inc = () => onChange(max == null ? v + 1 : Math.min(max, v + 1));

  return (
    <div className="stepper">
      <span className="stepper-label" style={color ? { color } : undefined}>
        {label}
        {hint && <span className="stepper-hint">{hint}</span>}
      </span>
      <div className="stepper-controls">
        <button className="stepper-btn" onClick={dec} disabled={v <= min} aria-label={`${label}: one less`}>−</button>
        <span className="stepper-value" aria-label={`${label} ${v}${max != null ? ` of ${max}` : ''}`}>
          {v}{max != null && <span className="stepper-max">/{max}</span>}
        </span>
        <button className="stepper-btn" onClick={inc} disabled={max != null && v >= max} aria-label={`${label}: one more`}>+</button>
      </div>
    </div>
  );
}
