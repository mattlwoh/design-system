// TopBar.jsx — slim top bar. Greeting + theme toggle + small status.
// The greeting is the "moment of life": warm, written, addressed to a person.

function TopBar({ greeting, theme, onToggleTheme }) {
  return (
    <header className="topbar">
      {greeting ? (
        <div className="topbar-greet">
          {greeting.label}
          {greeting.sub && <em>{greeting.sub}</em>}
        </div>
      ) : null}

      <div className="search">
        <Icon name="search" size={14} />
        <span>Find a goal, habit, or note</span>
        <kbd>⌘K</kbd>
      </div>

      <div className="theme-toggle" role="group" aria-label="Theme">
        <button className={theme === 'light' ? 'on' : ''} onClick={() => onToggleTheme('light')} aria-label="Light mode">
          <Icon name="sun" size={14} />
        </button>
        <button className={theme === 'dark' ? 'on' : ''} onClick={() => onToggleTheme('dark')} aria-label="Dark mode">
          <Icon name="moon" size={14} />
        </button>
      </div>

      <button className="icon-btn" aria-label="Notifications"><Icon name="bell" size={14} /></button>
    </header>
  );
}

window.TopBar = TopBar;
