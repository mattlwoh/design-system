---
name: lantern-os-design
description: Use this skill to generate well-branded interfaces and assets for Lantern OS, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Lantern OS — Horizon UI

Lantern OS is a personal productivity toolkit for clear access to life information, strategy, and long-term planning. Horizon UI is its design system. The visual register is **flat, low-contrast, warm, and hopeful** — quiet tools for clear-headed planning.

## How to use this skill

1. Read `README.md` first — it covers vision, content fundamentals (voice, casing, copy), visual foundations (color, type, spacing, motion, hover/press, borders, shadows), and iconography.
2. Pull tokens from `colors_and_type.css` (CSS custom properties for light + dark mode) or `tokens.json` (raw values).
3. Components live in `ui_kits/lantern-os/`. The `index.html` is a working three-screen demo; the `.jsx` files are small, modular, cosmetic recreations safe to copy into a prototype.
4. Logos and favicons are in `assets/logo/`. Iconography uses **Lucide** (CDN — see `assets/icons/README.md`).

## When the user invokes this skill

If they ask for an artifact (slide, mockup, prototype), copy the assets they need out and produce static HTML. If they ask for production code, you can read the tokens directly and write framework-native components.

If the request is vague, ask:
- Which surface — a single screen, a flow, or a marketing page?
- Light, dark, or both?
- What lives on the screen — what data, what task, what feeling?

## Cardinal rules

- **No emoji**, no gradients on UI, no shadow-elevated cards. Borders do the work.
- **Sentence case** for every UI label.
- **4px radius is the default.** Cards 8px, hero blocks 12–16px. Pills only for status dots.
- **One brand color** (sage in light, mint in dark). Use it sparingly; the warmth of the cream / matte indigo backgrounds is the system.
- **Generous white space** is the loudest design element. Don't pack screens.

If the brief contradicts one of these, ask the user before breaking it.
