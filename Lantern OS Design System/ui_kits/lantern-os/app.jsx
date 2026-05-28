// app.jsx — root component. Holds nav state, theme, and weekly goals.

// ── Background palettes — Tweaks-switchable. ───────────────────────────
// Each palette is a complete neutral set: page / surface / hover / press /
// raised / inset / border-1 / border-2. Brand colors (copper) stay the same.
// LIGHT palettes apply only when theme === 'light'; DARK palettes when theme === 'dark'.
const LIGHT_PALETTES = {
  paper: {  // near-white with a subtle warm cast — the default
    '--bg-page':          '#FAFAF7',
    '--bg-surface':       '#FFFFFF',
    '--bg-surface-hover': '#F3F3EF',
    '--bg-surface-press': '#EAEAE5',
    '--bg-raised':        '#FFFFFF',
    '--bg-inset':         '#F0F0EB',
    '--border-1':         '#E6E4DC',
    '--border-2':         '#CFCCC2',
  },
  mist: {
    '--bg-page':          '#DEE6EE',
    '--bg-surface':       '#E9EFF4',
    '--bg-surface-hover': '#D2DCE6',
    '--bg-surface-press': '#C3D0DD',
    '--bg-raised':        '#F0F4F7',
    '--bg-inset':         '#CFD9E3',
    '--border-1':         '#C7D3DE',
    '--border-2':         '#A8B8C8',
  },
  sage: {
    '--bg-page':          '#E5ECDF',
    '--bg-surface':       '#EFF4EA',
    '--bg-surface-hover': '#DCE5D4',
    '--bg-surface-press': '#D0DBC5',
    '--bg-raised':        '#F5F8F1',
    '--bg-inset':         '#DBE2D0',
    '--border-1':         '#D1DBC4',
    '--border-2':         '#B6C5A4',
  },
  linen: {
    '--bg-page':          '#F4EDDB',
    '--bg-surface':       '#FBF6E7',
    '--bg-surface-hover': '#EFE7D0',
    '--bg-surface-press': '#E8DFC1',
    '--bg-raised':        '#FFFCEF',
    '--bg-inset':         '#EDE3C8',
    '--border-1':         '#E6DCC0',
    '--border-2':         '#D2C7A8',
  },
};

const DARK_PALETTES = {
  indigo: {  // matte deep indigo — the default dark mood
    '--bg-page':          '#16182A',
    '--bg-surface':       '#1D2034',
    '--bg-surface-hover': '#242842',
    '--bg-surface-press': '#2C3150',
    '--bg-raised':        '#232742',
    '--bg-inset':         '#14162A',
    '--border-1':         '#2D3145',
    '--border-2':         '#3F4360',
  },
  slate: {   // cooler, slightly lighter slate-blue
    '--bg-page':          '#1A2030',
    '--bg-surface':       '#222A3D',
    '--bg-surface-hover': '#2A334A',
    '--bg-surface-press': '#323C56',
    '--bg-raised':        '#28324A',
    '--bg-inset':         '#161B28',
    '--border-1':         '#323C52',
    '--border-2':         '#465269',
  },
  midnight: {  // deeper, near-black indigo for a calmer night feel
    '--bg-page':          '#0F1120',
    '--bg-surface':       '#161A2D',
    '--bg-surface-hover': '#1C2138',
    '--bg-surface-press': '#252B45',
    '--bg-raised':        '#1A1F36',
    '--bg-inset':         '#0B0D1B',
    '--border-1':         '#252A3F',
    '--border-2':         '#363D55',
  },
  plum: {   // warmer dark with a violet undertone
    '--bg-page':          '#1B1726',
    '--bg-surface':       '#241F33',
    '--bg-surface-hover': '#2C2540',
    '--bg-surface-press': '#352D4D',
    '--bg-raised':        '#2A2438',
    '--bg-inset':         '#16121F',
    '--border-1':         '#322B47',
    '--border-2':         '#46395E',
  },
};

const WEEKLY_SEED = [
  { id: 'w1', title: 'Finish Q2 essay draft',      tag: 'Craft',    tone: 'neutral', meta: 'due Fri', done: false },
  { id: 'w2', title: 'Long run · 8 miles',          tag: 'Health',   tone: 'neutral', meta: 'Sat',     done: true  },
  { id: 'w3', title: 'Read two chapters of Dune',  tag: 'Learning', tone: 'neutral', meta: 'this wk', done: false },
];

const PAGE_GREETINGS = {
  today:   { label: 'Today',     sub: '· April 14' },
  long:    { label: 'Long view', sub: '· 2026' },
  goals:   { label: 'Goals',     sub: '· twelve in motion' },
  journal: { label: 'Journal',   sub: '· a page a day' },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "lightPalette": "paper",
  "darkPalette":  "indigo"
}/*EDITMODE-END*/;

function App() {
  const [route, setRoute] = React.useState('today');
  const [theme, setTheme] = React.useState('light');
  const [goals, setGoals] = React.useState(WEEKLY_SEED);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Apply the chosen palette by writing CSS vars on :root.
  // We pick the light or dark palette based on the current theme, and
  // remove any inline overrides for the other set so theme can switch cleanly.
  React.useEffect(() => {
    const root = document.documentElement;
    const vars = theme === 'dark'
      ? (DARK_PALETTES[tweaks.darkPalette] || DARK_PALETTES.indigo)
      : (LIGHT_PALETTES[tweaks.lightPalette] || LIGHT_PALETTES.paper);
    for (const [k, v] of Object.entries(vars)) root.style.setProperty(k, v);
  }, [tweaks.lightPalette, tweaks.darkPalette, theme]);

  const toggleGoal = (id) =>
    setGoals(prev => prev.map(g => g.id === id ? { ...g, done: !g.done } : g));

  let page;
  if      (route === 'today')   page = <TodayPage    goals={goals} onToggleGoal={toggleGoal} />;
  else if (route === 'long')    page = <LongViewPage />;
  else if (route === 'goals')   page = <GoalsPage />;
  else if (route === 'journal') page = <JournalPage />;
  else {
    page = (
      <div className="page">
        <div className="page-head">
          <div>
            <div className="eyebrow">{route}</div>
            <h1>Coming next.</h1>
            <div className="sub">This view isn't in the kit yet — the system is ready for it.</div>
          </div>
        </div>
        <div className="card" style={{ display: 'grid', placeItems: 'center', minHeight: 240, color: 'var(--fg-3)' }}>
          <div style={{ textAlign: 'center', display: 'grid', gap: 8, justifyItems: 'center' }}>
            <Icon name="feather" size={28} />
            <div>Placeholder — see Today, Long view, Goals, or Journal.</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="app" data-screen-label={`Lantern OS — ${route}`}>
        <Sidebar current={route} onNav={setRoute} />
        <main className="main">
          <TopBar greeting={PAGE_GREETINGS[route]} theme={theme} onToggleTheme={setTheme} />
          {page}
        </main>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection label={theme === 'dark' ? 'Dark background' : 'Light background'}>
          {theme === 'dark' ? (
            <TweakRadio
              label="Mood"
              value={tweaks.darkPalette}
              options={[
                { value: 'indigo',   label: 'Indigo' },
                { value: 'slate',    label: 'Slate' },
                { value: 'midnight', label: 'Midnight' },
                { value: 'plum',     label: 'Plum' },
              ]}
              onChange={v => setTweak('darkPalette', v)}
            />
          ) : (
            <TweakRadio
              label="Mood"
              value={tweaks.lightPalette}
              options={[
                { value: 'paper', label: 'Paper' },
                { value: 'mist',  label: 'Mist' },
                { value: 'sage',  label: 'Sage' },
                { value: 'linen', label: 'Linen' },
              ]}
              onChange={v => setTweak('lightPalette', v)}
            />
          )}
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
