# Third-party licenses

The Lantern OS design system bundles references to (but does not redistribute) the following open-source assets. License texts are included here for completeness.

| Asset | License | File |
|---|---|---|
| Newsreader (font family) | SIL Open Font License 1.1 | `SIL-OFL-1.1.txt` |
| DM Sans (font family) | SIL Open Font License 1.1 | `SIL-OFL-1.1.txt` |
| Geist Mono (font family) | SIL Open Font License 1.1 | `SIL-OFL-1.1.txt` |
| Lucide (icon library) | MIT | `MIT-lucide.txt` |

The fonts are loaded at runtime from the Google Fonts CDN via the `@import` in `colors_and_type.css`. No font binaries are vendored into this repo. If you self-host the `.woff2` files for offline / production use, keep this `LICENSES/` folder alongside them.

Everything else in this project (tokens, CSS, JSX components, logo, hero gradients, screen layouts, copy) is original work and is yours to use as described in the project README.
