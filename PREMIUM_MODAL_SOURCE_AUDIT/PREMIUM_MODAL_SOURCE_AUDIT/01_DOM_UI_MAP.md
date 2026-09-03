# DOM and UI Map

Root source: `production/index.php:11769`. The supplied rendered snippet is a runtime-populated instance of the same structure; values such as filename, URLs, sizes and waveform sources are injected after the status request.

| Block | Selector / ID | Source | JS dependencies | CSS dependencies | Change policy |
|---|---|---|---|---|---|
| Root overlay | `#resultOverlay` | `index.php:11769` | open/close, backdrop, focus | overlay, scroll, z-index | visual skin only; selector locked |
| Root modal | `#resultModal` | `index.php:11770` | DOM registry, close, result render | modal shell and responsive rules | visual skin only; selector locked |
| Header | `.result-header`, `#resultTitle`, `#resultSubtitle` | `index.php:11772-11774` | title/subtitle injection | typography, spacing | visual skin only |
| Loading state | `#loadingPanel`, `#loadingTitle`, `#loadingText` | `index.php:11791-11795` | polling/loading state | loading panel/bar | visual skin only; IDs locked |
| Metrics | `.result-impact`, `#impactSourceSize`, `#impactResultSize`, `#impactGrowthTrigger`, `#impactGrowth` | `index.php:11779-11793` | size and visual-diff injection | metric grid, score, arrow | visual skin only; IDs locked |
| Result player | `#resultSaasPlayer`, `#resultAudio` | `index.php:11808-11828, 11944` | play/pause, progress, scrub, duration | player, stage, cursor, canvas | visual skin only; data contracts locked |
| Result waveform | `#resultWave`, `.swWaveSaasStage` | `index.php:11818-11826` | image load, geometry fit, canvas | waveform image/canvas | visual skin only; IDs/classes locked |
| Result CTA | `.result-offer`, `#payFullLink` | `index.php:11838-11884` | payment guard, href/copy/price | offer, SBP widget, trust | restyle only; no node removal or href changes |
| Before card | `.audio-card.before`, `#sourceAudioCard` | `index.php:11887-11909` | reveal/close, source play | before card, player | visual skin only; ID/class contracts locked |
| Source player | `#sourceSaasPlayer`, `#sourceAudio` | `index.php:11893-11906, 11943` | play/pause, progress, scrub | player, stage, cursor, canvas | visual skin only; data contracts locked |
| Explain action | `#swWaveUpgradeQuestion` | `index.php:11912` | opens `#swEverywhereModal` | secondary action rail | placement/skin only |
| Proof action | `#swWaveProofStandaloneButton` | generated/inline modules | opens proof dialog | proof CTA and modal | visual skin only; ID/class locked |

## Functional state

- Loading, ready, playing, error and payment states are represented by classes and text mutations. Preserve class names such as `is-loading`, `is-audio-ready`, `is-audio-loading`, `is-audio-error`, `is-playing`, `is-free` and `is-paid`.
- Result metadata comes from status JSON and is written into existing IDs. A redesign must not replace these nodes with static text.
- Waveform progress is rendered through CSS variables and canvas/image layers. Keep the stage, `data-saas-scrub` and cursor nodes present.
- Payment opening is guarded by external scripts. Keep `#payFullLink` as the sole CTA entry point and do not add competing handlers.