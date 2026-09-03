# Visual Style Map

## Authoritative source

The modal is styled primarily by inline `<style>` blocks in `production/index.php`. The relevant block trace is in `source/styles/index-inline-modal-relevant.css`. The trace preserves source line ranges; it is not a new deploy stylesheet.

## Relevant inline blocks

style block 6: production/index.php:1871-1890
style block 10: production/index.php:3828-4622
style block 14: production/index.php:5425-5688
style block 15: production/index.php:5689-5946
style block 29: production/index.php:8527-8540
style block 37: production/index.php:9476-9618
style block 43: production/index.php:9895-10221
style block 44: production/index.php:10224-10399
style block 45: production/index.php:10400-10631
style block 46: production/index.php:10632-10858
style block 47: production/index.php:10859-10922
style block 48: production/index.php:10923-11390
style block 49: production/index.php:11391-11435
style block 51: production/index.php:11733-11746
style block 52: production/index.php:12962-13042
style block 53: production/index.php:13044-13156
style block 54: production/index.php:13157-13291
style block 55: production/index.php:13292-13417
style block 56: production/index.php:13418-13648
style block 57: production/index.php:13649-13830
style block 58: production/index.php:13831-13934
style block 59: production/index.php:13935-14009
style block 61: production/index.php:14316-14557
style block 62: production/index.php:14558-14569
style block 65: production/index.php:15217-15225
style block 66: production/index.php:15261-15535
style block 67: production/index.php:15613-15856
style block 68: production/index.php:15858-16396
style block 69: production/index.php:16398-16405
style block 70: production/index.php:16407-16679
style block 71: production/index.php:16681-16800
style block 72: production/index.php:16802-16812
style block 73: production/index.php:16814-16818
style block 74: production/index.php:16820-16825
style block 75: production/index.php:16827-17046
style block 76: production/index.php:17117-17134
style block 77: production/index.php:17135-17249
style block 78: production/index.php:17300-17422
style block 79: production/index.php:17424-17505
style block 80: production/index.php:17507-17512
style block 81: production/index.php:17514-17713
style block 82: production/index.php:18063-18101
style block 83: production/index.php:18102-18161
style block 84: production/index.php:18163-18345
style block 85: production/index.php:18555-19010
style block 86: production/index.php:19011-19043
style block 87: production/index.php:19075-19114
style block 88: production/index.php:19115-19161
style block 89: production/index.php:19162-19431
style block 90: production/index.php:19432-19768
style block 91: production/index.php:19770-19899
style block 92: production/index.php:19900-19913
style block 93: production/index.php:19914-20036
style block 94: production/index.php:20104-20119
style block 95: production/index.php:20192-20247
style block 100: production/index.php:20788-20884
style block 101: production/index.php:20886-20926
style block 102: production/index.php:20928-21165
style block 103: production/index.php:21167-21435
style block 104: production/index.php:21436-21511
style block 105: production/index.php:21512-21552
style block 106: production/index.php:21553-21569
style block 107: production/index.php:21570-21707
style block 110: production/index.php:21954-22080
style block 111: production/index.php:22128-22168
style block 112: production/index.php:22169-22260
style block 114: production/index.php:22457-22491
style block 117: production/index.php:22712-22837
style block 118: production/index.php:22838-22905
style block 119: production/index.php:22906-22944
style block 120: production/index.php:22945-22965
style block 122: production/index.php:23102-23188
style block 123: production/index.php:23189-23214
style block 124: production/index.php:23232-23299
style block 125: production/index.php:23300-23382
style block 126: production/index.php:23383-23455
style block 127: production/index.php:23456-23468
style block 128: production/index.php:23469-23517
style block 129: production/index.php:23518-23536
style block 130: production/index.php:23671-23701
style block 131: production/index.php:23821-23835
style block 132: production/index.php:23905-23982
style block 133: production/index.php:24034-24131
style block 134: production/index.php:24132-24185
style block 135: production/index.php:24186-24241
style block 136: production/index.php:24242-24349
style block 137: production/index.php:24350-24360
style block 138: production/index.php:24361-24373
style block 139: production/index.php:24374-24418
style block 140: production/index.php:24419-24437
style block 142: production/index.php:24458-24521
style block 144: production/index.php:24630-24672

## External stylesheets

- `source/styles/sw-index-pay-ui.css`: payment CTA widget and state styling.
- `source/styles/sw-yookassa-opening-alert.css`: payment opening alert styling; included because it is linked on `index.php`.

## Safe to redesign

- Root surface, background treatment, spacing, grid/flex presentation and visual grouping.
- Typography hierarchy, labels, metadata badges, cards, borders, shadows and gradients.
- Waveform color treatment, glow, cursor appearance and canvas presentation without changing canvas dimensions or data attributes.
- Play button shape, ring, icon treatment and hover/focus states without changing the button element or its `data-saas-audio` value.
- Metric block composition and CTA visual hierarchy without changing live-value nodes.
- Responsive arrangement and visual density, provided all locked nodes remain reachable and usable.

## Potentially functional

- `display`, `visibility`, `pointer-events` and `overflow` on overlay, players, stage, cursor, timeline, payment CTA or close controls.
- `position` and transforms used by waveform fit, dynamic source-card reveal and result-file-weight alignment.
- CSS variables beginning `--sw-` and `--progress` because JavaScript writes them.
- State classes and selectors ending in `is-*` because JavaScript toggles them.
- `:has()`, media queries and reduced-motion rules that control modal visibility or keyboard access.

## Visual target from supplied refs

The redesign should reach the supplied reference direction: deep near-black surface, restrained smoked violet, warm champagne-gold accent, pearl typography, thin borders, premium waveform as the primary visual, centered play control, compact before card, metric block at top and a confident download CTA. Avoid green payment styling, competing cards, noisy glow and oversized low-information copy.