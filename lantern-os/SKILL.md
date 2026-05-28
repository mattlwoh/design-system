---
name: lantern-os-design
description: Use this skill to generate well-branded interfaces and assets in the Lantern OS design system — a calm, flat, low-contrast visual language for productivity, planning, reading, and focus-oriented products. Contains essential design guidelines, colors, type, fonts, assets, and a reference UI kit demonstrating the system applied to one example product.
user-invocable: true
---

# Lantern OS — a design system

Lantern OS is a **brand-agnostic design system** for products that should feel calm, trustworthy, and focused. The visual register is **flat, low-contrast, warm, and quiet**. Lantern OS isn't a product — it's a system you apply to your product.

Typical fits: productivity tools, planning apps, reading interfaces, personal finance dashboards, research workspaces, journaling apps, anywhere the goal is clarity and long-form focus instead of attention capture.

## How to use this skill

1. Read `README.md` first — it covers vision, content fundamentals (voice, casing, copy), visual foundations (color, type, spacing, motion, hover/press, borders, shadows), and iconography.
2. Pull tokens from `colors_and_type.css` (CSS custom properties for light + dark mode) or `tokens.json` (raw values).
3. The reference UI kit lives in `ui_kits/lantern-os/` — it demonstrates Lantern OS applied to a sample planning app called Horizon. The `index.html` is a working multi-screen demo; the `.jsx` files are small, modular, cosmetic recreations safe to copy into a prototype.
4. The Lantern OS logo (the sunburst mark) lives in `assets/logo/` — that's the system's own brand. **Products built on Lantern OS use their own logos.**
5. Iconography uses **Lucide** (CDN — see `assets/icons/README.md`).

## When the user invokes this skill

If they ask for an artifact (slide, mockup, prototype), copy the assets they need out and produce static HTML using Lantern OS tokens. If they ask for production code, you can read the tokens directly and write framework-native components.

Always remember: Lantern OS is the *system*, not the product. Use the user's own product name, voice, and content. The Horizon reference kit is a worked example, not a template to clone wholesale.

If the request is vague, ask:
- What product is this for — and what does it do?
- Which surface — a single screen, a flow, or a marketing page?
- Light, dark, or both?
- What lives on the screen — what data, what task, what feeling?

## Cardinal rules

- **No emoji**, no gradients on UI, no shadow-elevated cards. Borders do the work.
- **Sentence case** for every UI label.
- **4px radius is the default.** Cards 8px, hero blocks 12–16px. Pills only for status dots.
- **One brand color** (whatever the product's accent is — Horizon uses copper). Use it sparingly; the warmth of the neutrals is the system.
- **Generous white space** is the loudest design element. Don't pack screens.

If the brief contradicts one of these, ask the user before breaking it.
