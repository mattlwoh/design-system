// MobileApp.jsx — Horizon designed natively for mobile (Lantern OS tokens).
// Bottom tab bar replaces the desktop sidebar — the standard mobile pattern.
// Renders inside the IOSDevice frame in mobile.html.

const M_GOALS = [
  { t: 'Finish Q2 essay draft',     m: 'Fri',     done: false },
  { t: 'Long run · 8 miles',        m: 'Sat',     done: true  },
  { t: 'Read two chapters of Dune', m: 'this wk', done: false },
];

function MTab({ icon, label, active, onClick }) {
  return (
    <button className={`m-tab ${active ? 'active' : ''}`} onClick={onClick}>
      <Icon name={icon} size={22} />
      <span>{label}</span>
    </button>
  );
}

function TodayScreen({ goals, onToggle }) {
  const done = goals.filter(g => g.done).length;
  return (
    <>
      <div className="m-hero dawn">
        <div className="m-hero-meta">April 14 · 62°</div>
        <div className="m-hero-mark">A page from the morning.</div>
      </div>

      <div className="m-head">
        <div className="m-stamp">GOOD MORNING, JAMIE</div>
        <h1>A quiet week <em>and a long run on Saturday.</em></h1>
        <p className="m-sub">Three goals in focus, one habit to keep, and the Q2 essay still to finish.</p>
      </div>

      <div className="m-focus">
        <div className="m-focus-eyebrow">One thing today</div>
        <h2>Write before lunch. <em>Everything else can wait.</em></h2>
        <div className="m-focus-meta">{done} of {goals.length} on track · 21-day streak</div>
        <button className="m-btn primary">Begin</button>
      </div>

      <div className="m-section-h">The numbers</div>
      <div className="m-metric-row">
        <div className="m-metric">
          <div className="m-metric-label">Weekly goals</div>
          <div className="m-metric-num">{done}<small>of {goals.length}</small></div>
        </div>
        <div className="m-metric">
          <div className="m-metric-label">Habits kept</div>
          <div className="m-metric-num">21<small>days</small></div>
        </div>
        <div className="m-metric">
          <div className="m-metric-label">Focused</div>
          <div className="m-metric-num">12.5<small>h</small></div>
        </div>
      </div>

      <div className="m-section-h">This week</div>
      <div className="m-card">
        {goals.map((g, i) => (
          <div key={i} className={`m-goal ${g.done ? 'done' : ''} ${i === goals.length - 1 ? 'last' : ''}`} onClick={() => onToggle(i)}>
            <div className={`m-check ${g.done ? 'done' : ''}`}><Icon name="check" size={12} /></div>
            <div className="m-goal-title">{g.t}</div>
            <div className="m-goal-meta">{g.m}</div>
          </div>
        ))}
      </div>

      <div className="m-section-h">A note for the week</div>
      <div className="m-note">
        <div className="m-note-eyebrow">Keep in mind</div>
        <h4>A steady pace <em>beats a sprint.</em></h4>
      </div>
    </>
  );
}

function GoalsScreen() {
  const items = [
    { t: 'Read 12 books',       c: 'Learning', pct: 25, status: 'On track', tone: 'success' },
    { t: 'Run a half marathon', c: 'Health',   pct: 40, status: 'On track', tone: 'success' },
    { t: 'Daily writing habit', c: 'Craft',    pct: 65, status: 'On track', tone: 'success' },
    { t: 'Publish four essays', c: 'Craft',    pct: 50, status: 'Drifting', tone: 'warning' },
    { t: 'Strength training',   c: 'Health',   pct: 5,  status: 'At risk',  tone: 'danger'  },
  ];
  return (
    <>
      <div className="m-hero afternoon">
        <div className="m-hero-meta">12 active · 5 on track</div>
        <div className="m-hero-mark">Steady as the year unfolds.</div>
      </div>
      <div className="m-head">
        <div className="m-stamp">GOALS</div>
        <h1>Twelve goals, <em>quietly underway.</em></h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map((g, i) => (
          <div key={i} className="m-card m-goalcard">
            <div className="m-goalcard-ring" style={{ '--pct': `${g.pct}%` }}>
              <span>{g.pct}%</span>
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <div className="m-goalcard-cat">{g.c}</div>
              <div className="m-goalcard-title">{g.t}</div>
              <span className={`m-badge ${g.tone}`}><span className="m-dot"></span>{g.status}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function JournalScreen() {
  const entries = [
    { d: 'Sun, Apr 13', t: 'A quieter Sunday than expected.', p: 'Walked along the bay this morning. Came home to write but ended up reading instead — Le Guin…', m: 8 },
    { d: 'Sat, Apr 12', t: 'Long run, then a long lunch.', p: 'Eight miles at an easy pace. Could have gone ten. Lunch with M at the corner place…', m: 12 },
    { d: 'Fri, Apr 11', t: 'On finishing things.', p: 'The Q2 essay still isn\u2019t done and I keep finding small reasons. A note for next week…', m: 6 },
  ];
  return (
    <>
      <div className="m-hero dusk">
        <div className="m-hero-meta">20 entries this year</div>
        <div className="m-hero-mark">A page a day, no streaks.</div>
      </div>
      <div className="m-head">
        <div className="m-stamp">JOURNAL</div>
        <h1>What's on <em>your mind?</em></h1>
      </div>
      <div className="m-card m-editor">
        <div className="m-editor-date">Monday, April 14</div>
        <div className="m-editor-placeholder">A quiet sentence to start…</div>
        <div className="m-editor-foot">
          <span><Icon name="feather" size={12} /> Saving as you type</span>
        </div>
      </div>
      <div className="m-section-h">Recent entries</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {entries.map((e, i) => (
          <div key={i} className="m-card m-entry">
            <div className="m-entry-date">{e.d} · {e.m} min</div>
            <div className="m-entry-title">{e.t}</div>
            <div className="m-entry-preview">{e.p}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function MobileApp() {
  const [tab, setTab] = React.useState('today');
  const [goals, setGoals] = React.useState(M_GOALS);
  const toggle = (i) => setGoals(prev => prev.map((g, idx) => idx === i ? { ...g, done: !g.done } : g));

  return (
    <div className="m-root">
      <div className="m-scroll">
        {tab === 'today'   && <TodayScreen goals={goals} onToggle={toggle} />}
        {tab === 'goals'   && <GoalsScreen />}
        {tab === 'journal' && <JournalScreen />}
        {tab === 'long'    && (
          <div style={{ paddingTop: 80, textAlign: 'center', color: 'var(--fg-3)' }}>
            <Icon name="horizon" size={28} />
            <p style={{ marginTop: 12 }}>Long view — best on a wider screen.</p>
          </div>
        )}
        <div style={{ height: 24 }} />
      </div>

      {/* Bottom tab bar — the mobile nav pattern */}
      <nav className="m-tabbar">
        <MTab icon="compass" label="Today"   active={tab === 'today'}   onClick={() => setTab('today')} />
        <MTab icon="horizon" label="Long view" active={tab === 'long'}  onClick={() => setTab('long')} />
        <MTab icon="target"  label="Goals"   active={tab === 'goals'}   onClick={() => setTab('goals')} />
        <MTab icon="book"    label="Journal" active={tab === 'journal'} onClick={() => setTab('journal')} />
      </nav>
    </div>
  );
}

window.MobileApp = MobileApp;
