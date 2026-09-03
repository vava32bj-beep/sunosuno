# PREMIUM_MODAL_SOURCE_AUDIT

Prepared 2026-09-03 for a premium visual redesign of the current `index.php` result modal.

## Root modal

`source/modal/index.php` is the authoritative production root. The modal starts at `production/index.php:11769` and the extracted `#resultModal` fragment ends at line `11915`.

## Included files

- Exact root source: `source/modal/index.php`.
- Extracted modal and adjacent audio/dialog fragments under `source/modal/`.
- Inline CSS and JS dependency traces under `source/styles/` and `source/scripts/`.
- Direct payment/audio styles, scripts and SBP image under `source/`.
- Supplied reference images under `reference/`.
- Dependency, DOM, selector, visual and responsive maps.

## Safe to modify visually

CSS values and presentation in the modal, waveform, player, metric, before-card, proof and CTA surfaces. Keep every functional selector and runtime data contract listed in `02_LOCKED_FUNCTIONAL_SELECTORS.md`.

## Do not touch functionally

Inline bootstrap/player/polling/payment logic in `source/modal/index.php` and the external scripts in `source/scripts/`. Do not alter API calls, download/payment URLs, audio behavior, waveform data, state transitions or accessibility behavior.

## Entry points

- Page/root: `production/index.php`.
- Result status: `/status_best.php` with `/status.php` fallback.
- Audio: `/download_source.php` and `/download_full.php`.
- Payment: `/pay.php` guarded by `#payFullLink` and payment scripts.

## Verification after redesign

1. Run `php -l production/index.php`.
2. Compare a DOM selector snapshot before/after and require all locked IDs/classes/data attributes.
3. Test open/close, loading, ready, result playback, source playback, scrub, before reveal, proof dialog and payment/download.
4. Test 1440x900, 1280x800, 1024x768, 768x1024, 390x844 and 360x740.
5. Confirm no horizontal overflow, no overlap, keyboard focus, reduced motion and readable CTA.
6. Run HTTPS smoke test only after the visual diff is approved. This audit itself makes no production change.

## Exclusions

No `node_modules`, `.git`, `dist`, `build`, cache, runtime jobs, uploads, model files, logs, env files, API keys or unrelated pages are included. Backend endpoints are documented as contracts but not copied.