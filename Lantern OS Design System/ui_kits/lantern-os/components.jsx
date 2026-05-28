// components.jsx — small shared building blocks for Lantern OS.

function Button({ variant = 'primary', size, icon, children, onClick, type = 'button' }) {
  const cls = ['btn', variant, size].filter(Boolean).join(' ');
  return (
    <button className={cls} onClick={onClick} type={type}>
      {icon && <Icon name={icon} size={14} />}
      {children}
    </button>
  );
}

// Hero — a cinematic block at the top of each page. Variant picks a tonal gradient.
// Optional `meta` sits in the top-right (date, weather, etc.). Optional `mark`
// sits in the bottom-left as a quiet italic note.
function Hero({ variant = 'dawn', meta, mark }) {
  return (
    <div className={`hero ${variant}`}>
      {meta && <div className="hero-meta">{meta}</div>}
      {mark && <div className="hero-mark">{mark}</div>}
    </div>
  );
}

function PageHead({ stamp, title, italic, sub, action }) {
  return (
    <div className="page-head-row">
      <div className="page-head">
        {stamp && <div className="stamp">{stamp}</div>}
        <h1>
          {title}
          {italic && <em>{italic}</em>}
        </h1>
        {sub && <div className="sub">{sub}</div>}
      </div>
      {action}
    </div>
  );
}

function Badge({ tone = 'neutral', children }) {
  return (
    <span className={`badge ${tone}`}>
      <span className="dot" />
      {children}
    </span>
  );
}

// Focus moment — the one color hit per page. Big serif headline, copper edge
// glow from the left, optional CTA on the right.
function FocusMoment({ eyebrow, title, italic, meta, ctaLabel = 'Begin', onCta }) {
  return (
    <div className="focus">
      <div className="focus-text">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2>
          {title}
          {italic && <> <em>{italic}</em></>}
        </h2>
        {meta && <div className="meta">{meta}</div>}
      </div>
      {ctaLabel && (
        <Button variant="primary" onClick={onCta}>
          {ctaLabel}
          <Icon name="arrowRight" size={14} />
        </Button>
      )}
    </div>
  );
}

function MetricCard({ label, value, unit, deltaText, deltaTone = 'flat' }) {
  return (
    <div className="metric">
      <div className="eyebrow">{label}</div>
      <div className="num">
        {value}
        {unit && <small>{unit}</small>}
      </div>
      {deltaText && <div className={`delta ${deltaTone}`}>{deltaText}</div>}
    </div>
  );
}

function GoalRow({ goal, onToggle }) {
  return (
    <div className={`goal-row ${goal.done ? 'done' : ''}`} onClick={() => onToggle(goal.id)}>
      <div className={`check ${goal.done ? 'done' : ''}`}>
        <Icon name="check" size={12} />
      </div>
      <div className="title">{goal.title}</div>
      <div className="meta">{goal.meta}</div>
    </div>
  );
}

function Timeline({ nodes }) {
  return (
    <div className="timeline">
      <div className="tl-track">
        <div className="tl-line" />
        <div className="tl-nodes" style={{ gridTemplateColumns: `repeat(${nodes.length}, 1fr)` }}>
          {nodes.map((n, i) => (
            <div key={i} className={`tl-node ${n.state || ''}`}>
              <div className="tl-dot" />
              <div className="tl-label">
                <strong>{n.label}</strong>
                <div className="tl-meta">{n.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Note({ eyebrow, title, italic }) {
  return (
    <div className="note">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h4>
        {title}
        {italic && <> <em>{italic}</em></>}
      </h4>
    </div>
  );
}

Object.assign(window, { Button, Hero, PageHead, Badge, FocusMoment, MetricCard, GoalRow, Timeline, Note });
