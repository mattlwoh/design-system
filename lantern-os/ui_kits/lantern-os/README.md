# Reference UI kit — Horizon (built with Lantern OS)

This kit is a **reference implementation** of the Lantern OS design system applied to a sample product called **Horizon** — a personal planning app. Horizon is not the design system; it's a worked example so you can see how Lantern OS feels when applied to a real interface.

Use this kit to:

- Understand how Lantern OS tokens compose into screens
- Copy components into your own product as a starting point
- Test palette / theme variants live (via the Tweaks panel)

Open `index.html` for an interactive demo with four working screens (Today, Long view, Goals, Journal) reachable from the sidebar. The desktop kit is **fully responsive** — resize the window and the sidebar collapses to a drawer, grids stack, and wide charts become horizontally scrollable.

For a **native-mobile** take, open `mobile.html` — Horizon rebuilt as a real phone app (inside an iOS device frame) with a **bottom tab bar** instead of a sidebar. This shows how Lantern OS reads on a phone, which is a different nav pattern than the responsive web layout.

## Files

- `index.html` — app shell + page routing (responsive: sidebar → drawer)
- `mobile.html` — native-mobile sample (iOS frame + bottom tab bar)
- `MobileApp.jsx` — the mobile screens (Today / Goals / Journal)
- `ios-frame.jsx` — iOS device frame (starter component)
- `app.jsx` — top-level layout (sidebar + content + page state + drawer)
- `Sidebar.jsx` — persistent left nav / off-canvas drawer
- `TopBar.jsx` — search + theme toggle
- `pages/TodayPage.jsx` — focus moment, metrics, weekly goals
- `pages/LongViewPage.jsx` — annual horizon timeline
- `pages/GoalsPage.jsx` — goals card grid
- `pages/JournalPage.jsx` — journal entry surface
- `components.jsx` — Button, Hero, PageHead, Badge, FocusMoment, MetricCard, GoalRow, Timeline, Note
- `Icon.jsx` — inline Lucide-style icons
- `tweaks-panel.jsx` — live palette / theme toggling

## Why these screens

Three of them exercise the core component vocabulary (sidebar, dashboard cards, timeline, focus moment, metrics, list rows). The journal is included to show how Lantern OS handles a long-form writing surface — a different rhythm than the dashboard screens.

## Notes

- All components are cosmetic recreations — state is mocked locally in `app.jsx`.
- Icons are inline Lucide SVGs (1.5px stroke).
- Theme toggle in the top bar switches `[data-theme]` on the root.
- The sidebar mark inside Horizon is the Lantern OS sunburst — used here as a visual signal that Horizon is built with Lantern OS. Your own product would use its own mark.
