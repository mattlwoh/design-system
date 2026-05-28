# Lantern OS — UI kit

A pixel-fidelity recreation of the Lantern OS product surface, using Horizon UI tokens. Open `index.html` for an interactive demo with three working screens (Today, Long view, Goals) reachable from the sidebar.

## Files

- `index.html` — app shell + page routing
- `app.jsx` — top-level layout (sidebar + content + page state)
- `Sidebar.jsx` — persistent left nav with collapsible groups
- `TopBar.jsx` — search + theme toggle
- `pages/TodayPage.jsx` — focus banner, metrics, weekly goals
- `pages/LongViewPage.jsx` — annual horizon timeline
- `pages/GoalsPage.jsx` — goals list with detail
- `components/Button.jsx` · `Badge.jsx` · `Card.jsx` · `FocusBanner.jsx` · `Timeline.jsx` · `MetricCard.jsx` · `GoalRow.jsx` · `Icon.jsx`

## Why these screens

These are the three views the brief calls out: **daily focus**, **long-term horizon planning**, and **goal/milestone tracking**. Together they exercise every core component (sidebar, dashboard cards, timeline, focus banner, metrics, list rows).

## Notes

- All components are cosmetic recreations — state is mocked locally in `app.jsx`.
- Icons are inline Lucide SVGs (1.5px stroke).
- Theme toggle in the top bar switches `[data-theme]` on the root.
