# Iconography

Lantern OS uses **Lucide** icons exclusively.

## CDN

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Or per-icon SVG via [lucide.dev](https://lucide.dev).

## Rules

- Stroke 1.5px, round caps, round joins. **Never filled.**
- Sizes: 14 / 16 / 20 / 24. Always on the 4px grid.
- Color via `currentColor`. Default tone is `--fg-2`; primary states use `--primary`.
- No emoji. No mixing icon sets.

If Lucide doesn't have what you need, draw a new glyph in the same 24×24 grid with a 1.5px round stroke and submit it back to this repo rather than reaching for a different set.
