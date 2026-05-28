# Lantern OS

> A calm, flat design system for products that need to feel trustworthy and quiet.

**Lantern OS is a design system, not a product.** It's a set of tokens, components, and rules you can apply to any interface where the goal is calm clarity and long-form focus — a productivity tool, a reading app, a personal finance dashboard, a research tool, a planning workspace.

The metaphor is the lantern itself: a small fixed point that helps you orient on a wide horizon. The system is built so the interface fades back and the content steps forward. Quiet chrome, generous space, restrained color, and one literary moment per screen.

This repo includes:

- The full token set (color, type, spacing, radii, motion)
- Foundational rules (voice, hierarchy, hover/press, iconography)
- A reusable component layer (cards, buttons, badges, focus moments, timelines)
- A reference UI kit demonstrating the system applied to one example product (a planning app called **Horizon**), so you can see how the rules translate into a real interface

You are encouraged to apply Lantern OS to your own products. The Horizon kit is a worked example, not the canon.

---

## Sources & provenance

This design system was generated from a brief — **no codebase, Figma file, or screenshots were attached**. Everything in this folder (palette, type, components, logo) is original work derived from the brief below. If you have brand assets that should supersede this, drop them in and we'll iterate.

The brief asked for:
- A personal productivity toolkit covering life info, strategy, and long-term planning
- Strictly flat design — no heavy gradients, no 3D, no deep shadows
- Soft, low-contrast, calming palettes: warm muted creams / soft sages / charcoal in light mode; matte deep indigo / mint in dark mode
- Psychologically uplifting, spacious, hopeful tone
- High scannability with clear typographic hierarchy

There is one font substitution flagged in **Type → Substitutions**, below.

---

## CONTENT FUNDAMENTALS

Voice is **the quietest grown-up in the room**. Confident, never urgent. We trust the reader to figure things out, and we don't perform busyness.

- **Person.** When applying Lantern OS to a product, address the user as **you**. The product (whatever it is) speaks as **we** only when describing something the system itself is doing ("We'll remind you on Sunday"). Avoid first-person singular.
- **Casing.** Sentence case **everywhere** — UI labels, buttons, headings, nav. The only thing that gets title case is product names. Never ALL CAPS for emphasis; if a word matters, write it once and trust it.
- **Tone.** Warm, plainspoken, slightly literary. We will use a long word if it's the right word ("a steady horizon," "a quiet week ahead"), but we never sound clinical or hyped.
- **Punctuation.** Em dashes are welcome — they slow the eye down. End buttons and labels without periods; end sentences in body copy with them.
- **Numbers.** Spell out one through nine in prose; numerals for ten and up, and for any data point. Times use lowercase am / pm with no period.
- **Emoji.** **Never in product copy.** This is a calming tool; emoji are loud. The only acceptable glyph use is a single neutral mark like `·` or `—` as a separator.
- **Encouragement.** Affirmations are quiet and specific, not motivational-poster generic. ✅ "Two of three weekly goals are on track." ❌ "You got this! 🚀"
- **Empty states.** Frame what's *possible*, not what's missing. ✅ "Your week is open." ❌ "No events found."

### Voice examples

(In the context of a planning / productivity app like the Horizon reference kit.)

| Context | ✅ Voice of Lantern OS | ❌ Not Lantern OS |
|---|---|---|
| Welcome banner | A quiet week ahead. Three goals in focus. | Welcome back, superstar! 🎉 |
| Onboarding nudge | Start with one goal. You can add more later. | Let's get you set up — only takes 2 mins! |
| Streak / progress | On track for the third week. | 🔥 21-day streak unlocked! |
| Error | We couldn't reach the calendar. Try again in a moment. | Oops! Something went wrong 😬 |
| Empty inbox | Nothing pressing today. | No notifications. |
| Goal complete | Marked complete · April 14 | 🎯 Goal crushed! |

---

## VISUAL FOUNDATIONS

The whole system is built on a small set of choices, applied with discipline.

### Editorial direction

Lantern OS reads like a quiet, well-edited magazine — not an app dressed in glass. Each page opens with a small stamp (e.g. "GOOD MORNING, JAMIE"), a large display heading in Newsreader, and an italic counter-line that softens the hierarchy ("A quiet week / *and a long run on Saturday.*"). Section titles inside the page are set in display serif with a light italic accent ("The numbers *at a glance*").

The signature move is **bold roman paired with a lighter italic** in `--fg-3`, so the italic reads as a whisper, not a shout. Use it on display headings, the focus moment, card titles, and the journal date — not on everything.

Layouts are wide and generous. Each page opens with a **cinematic hero** (a calm tonal gradient panel, no chrome) and releases the brand color in exactly **one focus moment** per screen. Cards have hairline borders and no shadows.

### Color

Two palettes, both **low contrast on purpose**. Page backgrounds sit near (not at) white in light mode and near (not at) black in dark mode, so text never glares.

- **Light mode** — paper-white backgrounds (`#FAFAF7` page with a faint dotted texture, `#FFFFFF` surface), warm charcoal text (`#2A2520`), and a single signature **copper-amber** (`#C97D4E`) for primary actions and the one "color moment" per screen. Secondary accent is **sage** (`#7C9B7B`), the calming counterweight, used sparingly. Success, info, warning, and danger are all muted siblings so nothing screams.
- **Dark mode** — matte deep indigo (`#16182A` page, `#1D2034` surface) with a **lit-copper** accent (`#E0A07A`) and mint as the supporting tone. There is no pure black and no pure white in the dark palette.
- **Switchable neutrals.** The reference kit ships a Tweaks panel that swaps the light-mode neutral set between **paper / mist / sage / linen** and the dark-mode set between **indigo / slate / midnight / plum** — the brand accent stays constant across all of them.
- **Contrast.** Body text on background hits ≥ 7:1 in both modes. The accent is used for emphasis, never for body text.
- **Imagery color vibe.** Warm, slightly desaturated, matte. Think: northern light, late afternoon, paper, linen. Never glossy, never neon. Black-and-white photography is welcome.

### Typography

Three families, no more.

- **Newsreader** — display headings. A literary serif with high contrast and an expressive italic; the system **leans into bold-roman + italic pairings** as a signature move ("Building things / *that actually ship.*"). Weights: Regular (400), Medium (500), Semibold (600), Bold (700), plus italics 400/500/600.
- **DM Sans** — every UI label, button, body paragraph, and data point. Weights: Regular (400), Medium (500), Semibold (600), Bold (700).
- **Geist Mono** — timestamps, IDs, key data values where alignment matters.

Headings use a **tight** line-height (1.1–1.2) so titles feel anchored. Body uses 1.55. Letter-spacing is left at default for the sans; display serifs get a hair of negative tracking at the largest sizes.

#### Substitutions
- All three families load from Google Fonts. No font files are bundled — the import lives in `colors_and_type.css`. If you adopt a different family for your product (e.g. a licensed type system), drop the `.woff2` files into a `fonts/` folder and update the `@font-face` block.

### Spacing & layout

- Base unit is **4px**. The scale is 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- The app uses a 12-column grid with a 24px gutter at desktop and 16px at mobile.
- Generous **white space** is the loudest visual element in this system. Cards carry 28–32px of internal padding; section-to-section breathing room is 48–56px.

### Radii

The system rounds generously but stays flat — no shadows compensating for soft corners.

- **0px** — page-level rules and dividers.
- **4px** — small chips and tight inline controls.
- **8px** — the default. Cards, surfaces, buttons, inputs.
- **12px** — large hero panels and modals.
- **16px** — full-bleed banners and marketing blocks.
- **999px** — pills, status dots, avatars.

### Borders

- **1px hairline borders** do the work that shadows do in other systems. Every card has a 1px border in `--border-1`. There is no "elevation" — surfaces are flat and bordered.
- A "selected" or "active" card swaps its border for `--primary` at the same 1px weight; no glow, no inset shadow.

### Shadows

- **None by default.** A single optional `--shadow-1` exists (`0 1px 2px rgba(42, 42, 38, 0.04)`) for floating elements like menus and toasts. It is barely perceptible — it exists only to separate a popover from the surface beneath it.
- No inner shadows. No layered shadows. No drop shadows on cards.

### Backgrounds & imagery

- No background gradients on UI surfaces. Ever.
- One "atmospheric" treatment is allowed: an extremely subtle two-stop wash from `--bg-page` to `--bg-surface` (≤ 4% delta) on marketing or onboarding hero panels only.
- Imagery is treated photographically — never collaged, never with hand-drawn overlays. If illustration is required, use a single-color line at the brand's primary stroke weight (1.5px).
- No repeating patterns or textures.

### Hover, press, focus states

- **Hover.** Background shifts to `--bg-surface-hover` (3% darker than its base). Borders and text do not change. No scale change.
- **Press.** Background to `--bg-surface-press` (5% darker). Still no scale change — the interface is meant to feel grounded.
- **Focus.** A 2px ring in `--focus`, offset by 2px from the element. Visible in both modes. Never hidden.
- **Disabled.** Opacity 0.5 on the whole element. Cursor `not-allowed`.

### Animation

- Easing is `cubic-bezier(0.32, 0.72, 0, 1)` ("calm-out") — a slow start that settles softly.
- Durations are short: **120ms** for hovers, **200ms** for state changes, **280ms** for layout. Nothing longer than 320ms.
- **No bounces, no springs, no overshoot.** Things arrive and stay there.
- Page transitions are crossfades only.

### Transparency & blur

- The system uses **no backdrop-blur** by default. The only translucency is the modal scrim at `rgba(22, 24, 42, 0.32)` in light mode (matte indigo at 32%) and `rgba(0, 0, 0, 0.5)` in dark.

### Layout rules

- The sidebar is fixed and persistent on desktop. It collapses to a top bar with a drawer on mobile.
- The content area has a **max-width of 1200px** and centers within the viewport.
- Sticky top bars are allowed; sticky bottom bars are not.

### Cards

A Lantern OS card is: `--bg-surface` fill, `1px solid --border-1`, `18px` radius, `28–32px` padding, no shadow. That's it. Variation comes from content density, not decoration. The reference kit uses bigger, softer cards with generous inner space rather than many tight ones.

---

## ICONOGRAPHY

Lantern OS uses **Lucide** at a uniform stroke weight.

- **Library.** Lucide (MIT) — chosen because its 1.5px geometric stroke matches the system's "flat, drawn-with-a-fine-pen" feel. Loaded from CDN; see `assets/icons/README.md`.
- **Stroke.** 1.5px, round caps, round joins. Never filled.
- **Size scale.** 14px (inline with body), 16px (default), 20px (buttons + nav), 24px (large affordances). Always on the 4px grid.
- **Color.** Inherits `currentColor`. Icons in nav and body use `--fg-2`; icons inside primary buttons or active states use `--primary` or the button's text color.
- **Emoji.** Not used.
- **Unicode glyphs.** Used only for typographic separators (`·`, `—`, `→`). Never as iconography.
- **Logo.** The Lantern OS mark (in `assets/logo/`) is a sunburst — a small filled center radiating eight thin rays. It represents the design system itself; products built on Lantern OS use their own logos. The mark scales from 16px (favicon) to any size; do not recolor the center.

If you need a glyph Lucide doesn't have, draw it in the same 24×24 grid with a 1.5px round stroke and submit it back to this repo rather than reaching for a different icon set.

---

## Index

```
.
├── README.md                ← you are here
├── SKILL.md                 ← Agent Skill manifest
├── tokens.json              ← design tokens (color, type, spacing, radius)
├── colors_and_type.css      ← CSS custom properties + base type rules
├── LICENSES/                ← OFL + ISC notices for fonts & icons
│   ├── README.md
│   ├── SIL-OFL-1.1.txt
│   └── MIT-lucide.txt
├── assets/
│   ├── logo/                ← Lantern OS marks (the design system's own logo)
│   └── icons/               ← Lucide CDN + usage notes
├── preview/                 ← design-system cards (registered for the DS tab)
└── ui_kits/
    └── lantern-os/          ← reference UI kit — a sample app (Horizon) built with Lantern OS
        ├── README.md
        ├── index.html       ← interactive demo
        └── *.jsx            ← Sidebar, TopBar, Hero, pages/…
```

Open `ui_kits/lantern-os/index.html` for an interactive demo of the system applied to a sample product (Horizon).

---

## Licensing & commercial use

**Short version: use this in any commercial product you own. Ship it.**

### What you can do

You can build and sell commercial products with this design system — paid SaaS, mobile apps, marketing sites, internal tools. You can reuse it across multiple products. You can take VC funding, get acquired, IPO. No royalties, no attribution required in shipped product UI.

This applies to:

- The tokens (`tokens.json`, `colors_and_type.css`)
- All JSX components and screen layouts in `ui_kits/`
- The Lantern OS logo + hero gradients + design copy in the Horizon reference kit
- Every preview card in `preview/`

Everything in this project that isn't a third-party font or icon is **original work created for this project**, and it's yours to use however you want.

### What's third-party (and why it's still fine)

| Asset | License | What it means |
|---|---|---|
| Newsreader, DM Sans, Geist Mono | SIL OFL 1.1 | Free for any use — embed, modify, ship in paid apps. Can't sell the font files *as fonts*. |
| Lucide icons | ISC (≈ MIT) | Free for any use — commercial, modification, redistribution all permitted. |

License texts live in `LICENSES/` — keep that folder alongside the code if you fork or relocate the repo. Not required in product UI; just standard hygiene.

### The one thing you can't do

Sell this **as a design system** (e.g. "Lantern UI Kit — $49 on Gumroad"). Not because of the work in it — that's yours — but because the fonts (OFL) can't be redistributed as standalone fonts for sale. You can package the system for your own team or your own products freely; you just can't market a font bundle as a font bundle.

### The product name (for your own products) — separate concern

Lantern OS is a design system. It doesn't dictate your product's name. But if you ship a **commercial product** built on this system, that product's name is a trademark question (separate from copyright). Before public launch:

1. Pick your final product name
2. Run a USPTO TMSearch — [tmsearch.uspto.gov](https://tmsearch.uspto.gov/) — for the exact name and likely variants in classes 9 (software) and 42 (SaaS)
3. Check App Store + Google Play + Product Hunt + GitHub for products already using it
4. Check domain availability
5. If anything close turns up in software classes, talk to a trademark attorney before committing

This is a brand-safety step, not a design-system step. The design system is yours to use whatever name you ship under.

### Production checklist

Before shipping commercially:

- **Self-host the fonts.** Right now they load from the Google Fonts CDN via `@import` in `colors_and_type.css`. For full portability and offline reliability, download the `.woff2` files (Google Fonts → "Download family"), drop them in a `fonts/` folder, and swap the `@import` for a local `@font-face` block. The OFL notice in `LICENSES/` stays put.
- **Run the product-name trademark search** (see above).
- **Keep `LICENSES/` in your shipped repo** alongside the code. Not exposed in product UI — just present in the source tree.
