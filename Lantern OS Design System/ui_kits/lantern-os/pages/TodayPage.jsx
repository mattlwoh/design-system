// pages/TodayPage.jsx — cinematic dawn hero, single focus moment, neutral metrics.

function TodayPage({ goals, onToggleGoal }) {
  const done = goals.filter(g => g.done).length;

  return (
    <div className="page">
      <Hero
        variant="dawn"
        meta={(
          <>
            <span>Monday, April 14</span>
            <span className="dot"></span>
            <span>Partly cloudy · 62°</span>
          </>
        )}
        mark="A page from the morning."
      />

      <PageHead
        stamp="GOOD MORNING, JAMIE"
        title="A quiet week"
        italic="and a long run on Saturday."
        sub="Three goals in focus, one habit to keep, and the Q2 essay still to finish before Friday."
        action={<Button variant="secondary" icon="plus">New goal</Button>}
      />

      <FocusMoment
        eyebrow="One thing today"
        title="Write before lunch."
        italic="Everything else can wait."
        meta={`${done} of ${goals.length} weekly goals on track · 21-day streak`}
        ctaLabel="Begin"
      />

      <h3 className="section-h">The numbers <em>at a glance</em></h3>
      <div className="metric-grid">
        <MetricCard label="Weekly goals" value={`${done}`} unit={`of ${goals.length}`} deltaText="One more than last week" deltaTone="up" />
        <MetricCard label="Habits kept" value="21" unit="days" deltaText="Steady, going strong" deltaTone="flat" />
        <MetricCard label="Hours focused" value="12.5" unit="this week" deltaText="Two hours below last" deltaTone="down" />
      </div>

      <h3 className="section-h">This week</h3>
      <div className="two-up">
        <div className="card">
          <div className="card-hd">
            <h3>Three things in focus</h3>
            <span className="link">See all →</span>
          </div>
          <div className="goal-list">
            {goals.map(g => <GoalRow key={g.id} goal={g} onToggle={onToggleGoal} />)}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Note
            eyebrow="A note for the week"
            title="A steady pace"
            italic="beats a sprint."
          />
          <div className="card">
            <div className="card-hd"><h3 style={{ fontSize: 18 }}>Up next</h3></div>
            <div style={{ display: 'grid', gap: 16 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--bg-inset)', color: 'var(--fg-2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Icon name="calendar" size={16} />
                </div>
                <div>
                  <div style={{ fontSize: 14, color: 'var(--fg-1)', fontWeight: 500 }}>Weekly review</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>Sunday at 9:00 am</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--bg-inset)', color: 'var(--fg-2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <Icon name="flag" size={16} />
                </div>
                <div>
                  <div style={{ fontSize: 14, color: 'var(--fg-1)', fontWeight: 500 }}>Mid-year review</div>
                  <div style={{ fontSize: 13, color: 'var(--fg-3)' }}>June 30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="section-h">The year <em>so far</em></h3>
      <div className="card">
        <Timeline nodes={[
          { label: 'Kickoff',         meta: 'January',    state: 'done' },
          { label: 'Draft plan',      meta: 'February',   state: 'done' },
          { label: 'Build the habit', meta: 'April · now', state: 'now' },
          { label: 'Mid-year review', meta: 'June' },
        ]} />
      </div>
    </div>
  );
}

window.TodayPage = TodayPage;
