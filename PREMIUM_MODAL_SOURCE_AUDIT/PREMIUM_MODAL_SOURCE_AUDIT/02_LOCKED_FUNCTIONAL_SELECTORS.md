# Locked Functional Selectors

These selectors are extracted from the current source and runtime contracts. Rename, remove or repurpose none of them during the visual redesign.

## Selector register

| Selector | Function | Source | Allowed visual changes |
|---|---|---|---|
| `#resultOverlay` | Открытие, закрытие, backdrop click, aria dialog | `index.php:11769, 7027, 12761` | CSS only; ID locked |
| `#resultModal` | Root modal lookup, layout and visibility | `index.php:11770, 7028, 9253` | CSS and safe wrappers only; ID locked |
| `#resultClose` | Close action and focus target | `index.php:11772, bootstrap DOM map` | CSS only; ID and href locked |
| `#resultTitle` | Runtime title injection | `index.php:11774, bootstrap DOM map` | Typography/placement only; ID locked |
| `#resultSubtitle` | Runtime status/subtitle injection | `index.php:11775, bootstrap DOM map` | Typography/placement only; ID locked |
| `#loadingPanel, #loadingTitle, #loadingText` | Loading state content and progress UI | `index.php:11791-11795, bootstrap DOM map` | Visual skin only; IDs locked |
| `#impactSourceSize, #impactResultSize` | Source/result size metrics | `index.php:11780-11781, updateImpactMetrics` | Visual skin only; IDs locked |
| `#impactGrowthTrigger, #impactGrowth` | Growth metric trigger and value | `index.php:11782-11793, updateImpactMetrics` | Visual skin only; IDs locked |
| `#resultSize, #resultTech` | Result file metadata | `index.php:11801-11803, renderResult` | Visual skin only; IDs locked |
| `#resultSaasPlayer` | Result player state root | `index.php:11808, playerBoxFor` | CSS only; ID/data-player-for locked |
| `#resultWave, #resultWaveFileSize` | Result waveform image and file-size overlay | `index.php:11818-11823` | Visual skin only; IDs locked |
| `#resultTimeStart, #resultTimeEnd` | Result timeline labels | `index.php:11828, timeupdate handler` | Visual skin only; IDs locked |
| `#sourceSize, #sourceTech` | Source file metadata | `index.php:11887-11890` | Visual skin only; IDs locked |
| `#sourceAudioCard` | Dynamic source-card reveal and close | `index.php:19058-19065` | Class skin only; ID locked when present |
| `#sourceSaasPlayer` | Source player state root | `index.php:11893, playerBoxFor` | CSS only; ID/data-player-for locked |
| `#sourceWave` | Source waveform image and canvas render | `index.php:11900, 23655` | Visual skin only; ID locked |
| `#sourceTimeStart, #sourceTimeEnd` | Source timeline labels | `index.php:11906, timeupdate handler` | Visual skin only; IDs locked |
| `#payFullLink` | Payment/download CTA entry point | `index.php:11848, payment guard asset` | CSS only; ID/href semantics locked |
| `#payFullEyebrow, #payFullText, #payFullSub, #payFullPrice` | CTA copy and price injection | `index.php:11870-11875, renderResult` | Visual skin only; IDs locked |
| `#purchaseTitle, #purchaseDescription, #purchasePrice` | Offer copy and price injection | `index.php:11842-11846, renderResult` | Visual skin only; IDs locked |
| `#swWaveUpgradeQuestion` | Secondary improvement explanation trigger | `index.php:11912, 23926-24030` | Placement/skin only; ID locked |
| `#swEverywhereModal, #swEverywhereClose` | Secondary explanation modal open/close | `index.php:11916-11927, 17086` | CSS only; IDs locked |
| `[data-player-for]` | Map audio element to player box | `bootstrap playerBoxFor` | Attribute/value locked |
| `[data-saas-audio]` | Play button to audio mapping | `bootstrap playButtonFor, listen presence` | Attribute/value locked |
| `[data-saas-scrub]` | Waveform/timeline scrubbing target | `bootstrap scrub handlers` | Attribute/value locked |
| `[data-saas-status]` | Dynamic ready/loading/error/playing status | `bootstrap setPlayerState` | Visual skin only; attribute/value locked |
| `[data-saas-now]` | Current-time label target | `bootstrap updateSaasProgress` | Visual skin only; attribute/value locked |
| `.swWaveSaasPlay` | Main and source play/pause buttons | `index.php:11817, 11899, bootstrap` | Visual skin only; class locked |
| `.swWaveSaasStage` | Waveform stage, pointer/keyboard scrub | `index.php:11818, 11900, geometry bridges` | Visual skin only; class/data locked |
| `.swWaveCursor` | Playback cursor | `index.php:11824, 11902, updateSaasProgress` | Visual skin only; class locked |
| `.swWaveImage, .swWaveBase` | Waveform image rendering | `index.php:11819, 11901` | Visual skin only; class locked |
| `.swWaveEmeraldCanvas, .swWaveEmeraldCompareCanvas` | Canvas waveform comparison rendering | `index.php:23545-23817` | Visual skin only; class locked |
| `.swWaveCompareOverlayV983` | Legacy comparison overlay hidden/synced | `index.php:23778` | Do not remove; class locked |
| `.result-impact, .result-impact__line` | Metric block layout and live values | `index.php:11779-11793, 24244` | Visual skin only; class locked |
| `.result-offer, .result-offer__action` | Offer and CTA layout | `index.php:11838-11884` | Visual skin only; class locked |
| `.swSbpPurchase, .swSbpPurchase__*` | Payment CTA internal parts | `index.php:11848-11884, sw-index-pay-ui.css` | Visual skin only; do not remove nodes |
| `.swTrustAssurance, .safe-line` | Payment/file-delivery reassurance | `index.php:11877-11884` | Can be visually restyled; do not change copy/behavior |
| `.swSourceRevealButton` | Dynamically inserted source-card reveal | `index.php:19065, 23992` | Visual skin only; class locked |
| `.swResultCompareLinks` | Dynamic comparison link rail | `index.php:23989-24030` | Visual skin only; class locked |
| `#swWaveProofStandaloneButton` | What-was-done proof modal trigger | `index.php:24376-24410` | Visual skin only; ID/class locked |

## Lock rule

Allowed: change CSS values, layout presentation, visual wrappers that do not alter event targets, typography, colors, borders, shadows, gradients, animation timing and responsive presentation.

Not allowed: rename IDs/classes/data attributes, change `href` semantics, remove audio/canvas/image nodes, move an event target away from its expected parent, change API calls, alter status transitions, change payment/download behavior, or replace the player with a mock waveform.