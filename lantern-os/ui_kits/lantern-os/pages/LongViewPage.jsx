// pages/LongViewPage.jsx — annual horizon with bar chart, cool morning hero.

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const TRACKS = [
  { label: 'Health',    bars: [{ from: 1, to: 12, tone: '',      text: 'Run a half marathon' }] },
  { label: 'Craft',     bars: [{ from: 1, to: 6,  tone: '',      text: 'Daily writing habit' },
                               { from: 7, to: 12, tone: 'muted', text: 'Publish 4 essays' }] },
  { label: 'Learning',  bars: [{ from: 2, to: 11, tone: 'muted', text: 'Read 12 books' }] },
  { label: 'Finance',   bars: [{ from: 3, to: 12, tone: 'muted', text: 'Save for sabbatical' }] },
  { label: 'Connection',bars: [{ from: 5, to: 8,  tone: '',      text: 'Family summer trip' }] },
];

function LongViewPage() {
  const nowMonth = 3;
  const nowFrac = 0.45;
  const colLeft = (m) => `${(m - 1) * (100 / 12)}%`;
  const colSpan = (from, to) => `${((to - from + 1) * (100 / 12))}%`;
  const nowLeft = `calc(80px + ((${nowMonth} + ${nowFrac}) * ((100% - 80px) / 12)))`;

  return (
    <div className="page">
      <Hero
        variant="morning"
        meta={(<><span>2026</span><span className="dot"></span><span>5 tracks · 12 months</span></>)}
        mark="The year as a single horizon."
      />

      <PageHead
        stamp="LONG VIEW"
        title="Twelve months,"
        italic="one steady line."
        sub="Five tracks running the length of the year. The line through them is where you're standing today."
        action={(
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="ghost">2025</Button>
            <Button variant="secondary">2026</Button>
            <Button variant="ghost">2027</Button>
          </div>
        )}
      />

      <div className="horizon" style={{ position: 'relative' }}>
        <div className="horizon-grid">
          <div className="head" style={{ borderBottom: '1px solid var(--border-1)' }}></div>
          {MONTHS.map(m => <div key={m} className="head" style={{ borderBottom: '1px solid var(--border-1)' }}>{m}</div>)}

          {TRACKS.map((t) => (
            <React.Fragment key={t.label}>
              <div className="row-label">{t.label}</div>
              <div className="cell" style={{ gridColumn: '2 / span 12', position: 'relative' }}>
                {t.bars.map((b, i) => (
                  <div key={i} className={`bar ${b.tone}`} style={{ left: colLeft(b.from), width: colSpan(b.from, b.to) }}>
                    {b.text}
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="horizon-now" style={{ left: nowLeft }}></div>
      </div>

      <h3 className="section-h">A question <em>to sit with</em></h3>
      <Note
        eyebrow="The horizon"
        title="Where do you want to be"
        italic="standing on December 31?"
      />
    </div>
  );
}

window.LongViewPage = LongViewPage;
