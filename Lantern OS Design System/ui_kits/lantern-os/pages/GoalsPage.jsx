// pages/GoalsPage.jsx — afternoon sage hero, card grid, neutral palette.

const GOALS_FULL = [
  { id: 'g1', title: 'Read 12 books',                 category: 'Learning',   cadence: 'A book a month',     progress: 25, tone: 'success', status: 'On track',  next: 'Apr book — 60% read' },
  { id: 'g2', title: 'Run a half marathon',           category: 'Health',     cadence: 'Race in July',       progress: 40, tone: 'success', status: 'On track',  next: 'Long run on Saturday' },
  { id: 'g3', title: 'Daily writing habit',           category: 'Craft',      cadence: '500 words a day',    progress: 65, tone: 'success', status: 'On track',  next: '21-day streak' },
  { id: 'g4', title: 'Save for a sabbatical',         category: 'Finance',    cadence: '$400 a month',       progress: 30, tone: 'success', status: 'On track',  next: 'Auto-transfer Friday' },
  { id: 'g5', title: 'Publish four essays',           category: 'Craft',      cadence: 'One a quarter',      progress: 50, tone: 'warning', status: 'Drifting',  next: 'Q2 draft overdue' },
  { id: 'g6', title: 'Conversational Spanish',        category: 'Learning',   cadence: 'Twenty minutes a day', progress: 18, tone: 'warning', status: 'Drifting',  next: 'Resume Monday' },
  { id: 'g7', title: 'Family summer trip',            category: 'Connection', cadence: 'Plan by June',       progress: 10, tone: 'info',    status: 'In review', next: 'Pick dates' },
  { id: 'g8', title: 'Strength training',             category: 'Health',     cadence: 'Twice a week',       progress: 5,  tone: 'danger',  status: 'At risk',   next: 'Restart this week' },
];

const CATEGORIES = ['All', 'Health', 'Craft', 'Learning', 'Finance', 'Connection'];

function ProgressRing({ pct, size = 56 }) {
  const r = (size / 2) - 4;
  const c = 2 * Math.PI * r;
  const dash = c * (pct / 100);
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--border-1)" strokeWidth="3" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--primary)" strokeWidth="3"
                strokeLinecap="round" strokeDasharray={`${dash} ${c}`} />
      </svg>
      <div style={{
        position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
        fontSize: 13, fontWeight: 600, color: 'var(--fg-1)',
        letterSpacing: '-0.02em'
      }}>{pct}%</div>
    </div>
  );
}

function GoalCard({ goal }) {
  return (
    <div className="goal-card">
      <div style={{ minWidth: 0 }}>
        <div className="cat">{goal.category}</div>
        <h4 className="gt">{goal.title}</h4>
        <div className="cadence">{goal.cadence}</div>
        <div className="next">{goal.next}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
        <ProgressRing pct={goal.progress} size={64} />
        <Badge tone={goal.tone}>{goal.status}</Badge>
      </div>
    </div>
  );
}

function GoalsPage() {
  const [filter, setFilter] = React.useState('All');
  const visible = filter === 'All' ? GOALS_FULL : GOALS_FULL.filter(g => g.category === filter);

  return (
    <div className="page">
      <Hero
        variant="afternoon"
        meta={(<><span>{GOALS_FULL.length} active</span><span className="dot"></span><span>5 on track</span></>)}
        mark="Steady as the year unfolds."
      />

      <PageHead
        stamp="GOALS"
        title="Twelve goals,"
        italic="quietly underway."
        sub="Five on track. Two drifting. One at risk. One in review — and the rest, building."
        action={<Button variant="primary" icon="plus">New goal</Button>}
      />

      <div style={{ display: 'flex', gap: 4, marginBottom: 32, flexWrap: 'wrap' }}>
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={filter === c ? 'btn secondary sm' : 'btn ghost sm'}
          >{c}</button>
        ))}
      </div>

      <div className="goal-card-grid">
        {visible.map(g => <GoalCard key={g.id} goal={g} />)}
      </div>
    </div>
  );
}

window.GoalsPage = GoalsPage;
