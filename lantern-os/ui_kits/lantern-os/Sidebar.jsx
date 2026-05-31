// Sidebar.jsx — persistent left nav for the Horizon reference kit.
// Recessed: same canvas as the page; active state is a quiet pill, not a fill.

const NAV_GROUPS = [
  {
    name: 'Plan',
    items: [
      { id: 'today', label: 'Today',     icon: 'compass',  count: '3' },
      { id: 'week',  label: 'This week', icon: 'calendar', count: '8' },
      { id: 'long',  label: 'Long view', icon: 'horizon' },
    ],
  },
  {
    name: 'Track',
    items: [
      { id: 'goals',   label: 'Goals',   icon: 'target',   count: '12' },
      { id: 'habits',  label: 'Habits',  icon: 'repeat',   count: '5' },
      { id: 'journal', label: 'Journal', icon: 'book' },
    ],
  },
];

function Sidebar({ current, onNav, theme, onToggleTheme }) {
  return (
    <aside className="sb">
      <div className="sb-brand">
        <img src="../../assets/logo/lantern-os-mark.svg" width="24" height="24" alt="" style={{ color: 'var(--fg-1)' }} />
        <div className="wm">Horizon</div>
      </div>

      {NAV_GROUPS.map(group => (
        <React.Fragment key={group.name}>
          <div className="sb-group">{group.name}</div>
          {group.items.map(item => (
            <button
              key={item.id}
              className={`sb-item ${current === item.id ? 'active' : ''}`}
              onClick={() => onNav(item.id)}
            >
              <Icon name={item.icon} size={16} />
              <span>{item.label}</span>
              {item.count && <span className="sb-count">{item.count}</span>}
            </button>
          ))}
        </React.Fragment>
      ))}

      <div className="sb-bottom">
        <div className="avatar">J</div>
        <div className="me">
          Jamie Lee
          <div className="sub">Personal</div>
        </div>
      </div>
    </aside>
  );
}

window.Sidebar = Sidebar;
