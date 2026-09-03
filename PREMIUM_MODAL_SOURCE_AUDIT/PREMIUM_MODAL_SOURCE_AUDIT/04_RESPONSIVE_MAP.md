# Responsive Map

The source contains layered responsive overrides because this modal has been patched over time. The UI agent must test the final skin at desktop, tablet, narrow mobile and short mobile heights.

## Observed breakpoints in `production/index.php`

`max-width: 1024px`, `980px`, `960px`, `900px`, `860px`, `760px`, `720px`, `640px`, `600px`, `560px`, `520px`, `430px`, `420px`, `380px`, `374px`, `370px`, `360px` and height-constrained variants.

## Required behavior

| Viewport | Modal / overlay | Result player | Before card | Metrics | CTA |
|---|---|---|---|---|---|
| Desktop >= 1024 | centered premium shell with stable max width; no page jump | waveform is primary surface; play centered; file-weight badge may align to metric block | compact comparison card remains visible or revealable | top-right / top row with readable source, result and growth | prominent but restrained; payment/download action remains one target |
| Tablet 760-1023 | overlay scrolls without clipping; shell uses available width | stage keeps stable height; scrub/timeline remains reachable | card stacks or becomes compact | wraps without overlapping title | CTA full width or stable column; no hidden action |
| Mobile <= 759 | vertical flow; safe-area bottom padding; no horizontal overflow | waveform remains first-class; button remains centered and >= touch target | compact before card below result or reveal control | single-column, values do not collide | full-width CTA with readable copy and preserved `#payFullLink` |
| Narrow <= 430 | reduced padding and type, not viewport-scaled text | no clipped waveform, cursor or timeline labels | no overlay outside viewport | labels wrap cleanly | no text overflow; payment state still visible |
| Short height | overlay remains scrollable | no fixed element hides player controls | before card can follow content | metrics remain above or in flow | CTA reachable by scroll |

## Responsive locks

- Preserve `#resultOverlay` overflow/scroll semantics and focus access.
- Preserve player stage dimensions enough for waveform/canvas code to measure them.
- Do not hide `#resultWave`, `#sourceWave`, play buttons, scrub targets, close button or payment CTA as a visual shortcut.
- Test at 1440x900, 1280x800, 1024x768, 768x1024, 390x844 and 360x740.