# Modal Dependency Map

Audit date: 2026-09-03

## Root

ROOT MODAL
-> `production/index.php`
-> `11769-11915`: `#resultOverlay` + `#resultModal` markup
-> inline CSS and inline JavaScript in the same monolithic PHP file
-> external payment/audio assets listed below

The production page is a PHP monolith. There is no separate React/Vue/Svelte component for this modal. The exact root source is copied to `source/modal/index.php`. The extracted files are convenience views for the next UI agent; `index.php` remains authoritative.

## Direct source files

| File | Role | Why included | Modal surface |
|---|---|---|---|
| `source/modal/index.php` | authoritative root | exact production source; contains PHP markup, inline styles, inline scripts and bootstrap data | all modal behavior and visual rules |
| `source/modal/resultModal.html` | extracted root fragment | isolates the exact `resultOverlay`/`resultModal` markup without changing it | header, metrics, players, CTA, before card |
| `source/modal/swEverywhereModal.html` | adjacent dialog fragment | secondary improvement explanation is opened from the result modal | explanation dialog |
| `source/modal/audio-elements.html` | audio nodes | hidden HTMLAudioElement nodes are outside the visual modal but are required for playback | `sourceAudio` and `resultAudio` |
| `source/styles/index-inline-modal-relevant.css` | inline style trace | every inline `<style>` block containing a modal dependency token, with original line ranges | root modal, waveform, CTA, responsive overrides |
| `source/scripts/index-inline-modal-relevant.js` | inline script trace | every inline `<script>` block containing a modal dependency token, with original line ranges | bootstrap, playback, polling, waveform, payment and modal events |

## External direct dependencies

| File | Role | Size | Production path |
|---|---|---:|---|
| `source/styles/sw-index-pay-ui.css` | payment widget visual styles | 9355 bytes | `assets/css/sw-index-pay-ui.css` |
| `source/styles/sw-yookassa-opening-alert.css` | payment opening visual styles | 4019 bytes | `assets/css/sw-yookassa-opening-alert.css` |
| `source/scripts/sw-payment-open-guard.js` | payment opening guard | 7548 bytes | `assets/js/sw-payment-open-guard.js` |
| `source/scripts/sw-payment-details-auto-open.js` | payment details auto-open behavior | 4666 bytes | `assets/js/sw-payment-details-auto-open.js` |
| `source/scripts/sw-yookassa-opening-alert.js` | payment intent and redirect behavior | 7500 bytes | `assets/js/sw-yookassa-opening-alert.js` |
| `source/scripts/sw-minusa-listen-presence.js` | audio play/pause presence binding | 15463 bytes | `assets/js/sw-minusa-listen-presence.js` |
| `source/assets/sbp-trust-transparent-v206.png` | SBP logo rendered inside CTA | 84818 bytes | `assets/images/sbp-trust-transparent-v206.png` |

## Runtime endpoints intentionally not copied

`/status_best.php`, `/status.php`, `/download_full.php`, `/download_source.php` and `/pay.php` are backend contracts referenced by the modal. They are not visual dependencies and are intentionally excluded to keep this audit minimal. The redesign must preserve their URLs, query parameters, response assumptions and payment semantics.

## No separate component/state files found

`source/components/README.md` and `source/state/README.md` record that the modal state and component tree are embedded in `production/index.php`.