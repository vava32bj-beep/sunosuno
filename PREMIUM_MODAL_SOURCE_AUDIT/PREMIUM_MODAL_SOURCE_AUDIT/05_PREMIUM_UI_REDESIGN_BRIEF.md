# Premium UI Redesign Brief

Status: brief only. No redesign has been applied in this audit.

## Goal

Transform the existing result modal into a premium AI audio enhancement SaaS surface at the level of the supplied references. This is a visual skin replacement over the existing composition. The reference direction is a 100 percent target for visual ambition, not permission to change application logic.

## Supplied visual references

- `reference/ref-01-plan.png`: full visual plan and component hierarchy.
- `reference/ref-02-result-modal.png`: target result-modal composition.

## Target hierarchy

1. Result title and status remain clear but quiet.
2. Waveform and main Play are the primary visual focus.
3. Source/result metrics are immediately scannable.
4. Before card is compact and useful for comparison.
5. What-was-done proof remains available without competing with playback.
6. Download/payment CTA is the final confident action.

## Direction

- Deep obsidian / near-black base.
- Smoked violet depth.
- Warm champagne-gold accent.
- Pearl white primary text.
- Restrained metallic gray secondary text.
- Thin borders, controlled radius, small depth and deliberate negative space.
- Waveform gradient: violet -> champagne gold -> violet, with no visual noise.
- Play control: dark center, thin gold ring, subtle ambient glow, familiar play icon.
- CTA: dark premium surface, thin gold border, subtle violet depth; do not use a bright green primary CTA.

## Prohibited visual outcomes

- Acid green or loud green payment button.
- Rustic multicolor decoration or competing gradients.
- Thick borders, heavy glassmorphism, aggressive neon or many glows.
- A card inside every card.
- Oversized headings that push the player below the fold.
- Decorative waveform that replaces the real waveform image/canvas.
- Text, icons or CTA elements overlapping on mobile.

## ZERO LOGIC CHANGE

The implementation may alter CSS and safe visual structure only. It must not change:

- any locked ID, class, data attribute or event target;
- audio source selection, play/pause, scrub, duration or currentTime logic;
- polling, status rendering, error handling or localStorage/cookie behavior;
- payment/download href semantics, payment guard behavior or CTA binding;
- waveform source URLs, canvas rendering inputs, geometry data or progress variables;
- accessibility roles, labels, keyboard interaction or close behavior.

## Acceptance

The redesign is accepted only when the visual target is materially matched at the supplied references and all existing interactions pass unchanged: open, close, loading, ready, play result, pause, scrub result, play source, scrub source, reveal before, growth explanation, proof explanation, payment/download click, keyboard access, reduced motion and mobile scroll.