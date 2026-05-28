// pages/JournalPage.jsx — warm dusk hero, big writing surface, recent entries.

const RECENT_ENTRIES = [
  {
    date:    'Sunday, April 13',
    title:   'A quieter Sunday than expected.',
    preview: 'Walked along the bay this morning. Came home to write but ended up reading instead — Le Guin, the new collection. Felt no guilt about it…',
    mins:    8,
  },
  {
    date:    'Saturday, April 12',
    title:   'Long run, then a long lunch.',
    preview: 'Eight miles at an easy pace. Pace felt sustainable — could have gone ten. Lunch with M at the corner place. We talked about the summer trip…',
    mins:    12,
  },
  {
    date:    'Friday, April 11',
    title:   'On finishing things.',
    preview: 'The Q2 essay still isn\u2019t done and I notice I keep finding small reasons. A note for next week: pick a small thing each morning and finish it before noon…',
    mins:    6,
  },
];

const DAYS = (() => {
  const today = new Date('2026-04-14T10:00:00');
  return Array.from({ length: 14 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (13 - i));
    const seeded = [1,3,0,2,1,2,0,1,3,2,1,2,3,2][i];
    return {
      label: d.toLocaleDateString('en-US', { weekday: 'short' })[0],
      num:   d.getDate(),
      level: seeded,
      today: i === 13,
    };
  });
})();

function JournalPage() {
  const [draft, setDraft] = React.useState('');

  return (
    <div className="page">
      <Hero
        variant="dusk"
        meta={(<><span>Monday evening</span><span className="dot"></span><span>20 entries this year</span></>)}
        mark="A page a day, no streaks."
      />

      <PageHead
        stamp="JOURNAL"
        title="What's on"
        italic="your mind?"
        sub="A page a day. No streaks, no badges — just the writing."
        action={<Button variant="ghost" icon="calendar">All entries</Button>}
      />

      {/* Calendar strip */}
      <div className="journal-cal">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ fontSize: 12, color: 'var(--fg-3)', fontWeight: 500 }}>The last two weeks</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, color: 'var(--fg-3)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: 4, background: 'var(--bg-inset)', border: '1px solid var(--border-1)' }}></span> none
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: 4, background: 'var(--primary-tint)' }}></span> short
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 10, height: 10, borderRadius: 4, background: 'var(--primary)' }}></span> a page
            </span>
          </div>
        </div>
        <div className="journal-cal-strip">
          {DAYS.map((d, i) => {
            const bg = d.level === 0 ? 'var(--bg-inset)'
                     : d.level === 1 ? 'var(--primary-tint)'
                     : 'var(--primary)';
            const fg = d.level >= 2 ? 'var(--fg-on-primary)' : 'var(--fg-2)';
            return (
              <div key={i} className="journal-cal-day">
                <div className="wk">{d.label}</div>
                <div className="pip" style={{
                  background: bg, color: fg,
                  outline: d.today ? '1.5px solid var(--fg-1)' : 'none',
                  outlineOffset: 2,
                }}>{d.num}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Editor */}
      <div className="journal-editor">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 20 }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 24, color: 'var(--fg-1)',
            letterSpacing: '-0.02em', fontWeight: 600,
          }}>Monday, April 14</div>
          <div style={{ fontSize: 12, color: 'var(--fg-3)' }}>
            {draft.trim().split(/\s+/).filter(Boolean).length} words
          </div>
        </div>
        <textarea
          value={draft}
          onChange={e => setDraft(e.target.value)}
          placeholder="A quiet sentence to start. What's happening today, what's on your mind, what you want to remember…"
          style={{
            width: '100%', minHeight: 280, border: 'none', outline: 'none',
            background: 'transparent', resize: 'vertical',
            fontFamily: 'var(--font-display)', fontSize: 19, lineHeight: 1.65,
            color: 'var(--fg-1)', padding: 0, fontWeight: 400,
          }}
        />
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginTop: 20, paddingTop: 20, borderTop: '1px solid var(--border-1)',
          fontSize: 13, color: 'var(--fg-3)',
        }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <Icon name="feather" size={12} />
            Saving as you type
          </span>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="ghost">Tag mood</Button>
            <Button variant="secondary">Save & close</Button>
          </div>
        </div>
      </div>

      <h3 className="section-h">Recent entries</h3>
      <div>
        {RECENT_ENTRIES.map((e, i) => (
          <div key={i} className="journal-entry">
            <div style={{ fontSize: 13, color: 'var(--fg-3)', paddingTop: 6 }}>{e.date}</div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: 21, color: 'var(--fg-1)',
                letterSpacing: '-0.015em', marginBottom: 8, fontWeight: 600, lineHeight: 1.25,
              }}>{e.title}</div>
              <div style={{ fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.65 }}>{e.preview}</div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--fg-3)', whiteSpace: 'nowrap', paddingTop: 6 }}>{e.mins} min</div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.JournalPage = JournalPage;
