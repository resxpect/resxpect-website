# RESXPECT — Marketing Website (v3, cinematic hero)

## Status (Jan 2026)
Full landing rebuild for the new brand story: three role colors, cinematic video hero with the RESXPECT wordmark visible in-frame, and the six-section narrative Hero → How it works → Why RESXPECT → Roles → Global message → Final CTA.

## Design tokens
- **Creator (orange):** `#F7931A`
- **Runner (blue):** `#2A6DEA`
- **Validator / RESXPECT green:** `#2E8B47`
- Soft variants of each: `--creator-soft`, `--runner-soft`, `--validator-soft`
- Neutrals: near-black `#0E0E10`, paper white, warm `#F7F5F1`
- Type: Manrope 400/500/600/700/800 (display + body), IBM Plex Mono (labels)

## Structure
- `Nav` — transparent on hero (white text), solid white glass on scroll; links: How It Works · Roles · Why RESXPECT · Sign in · Create Agreement CTA.
- `Hero` — full-viewport dark section with `<video autoplay muted loop playsInline>` background using `/assets/hero.mp4`, `object-fit: cover`, subtle top/bottom vignette + radial mask. Poster/fallback image (`/assets/hero-poster.jpg`) + `prefers-reduced-motion` fallback via CSS. Content anchored below the in-frame RESXPECT wordmark: headline "Different people. One **protected** agreement.", supporting copy, primary + ghost CTAs.
- `HowItWorks` — 3 steps (Commit / Deliver / Verify) with role-colored numbered circles and a horizontal connecting rail.
- `WhyResxpect` — statement headline with role-coloured emphasis on *payment / work / reputation* + 4 benefit cards (Protected funds, Connected evidence, Clear outcomes, Verifiable reputation).
- `Roles` — three cards with role-colour accent bars: Creator (orange), Runner (blue), Validator (green).
- `GlobalMessage` — full statement "The **people** change. The **roles** change. The **agreement** remains protected." with faint hexagon watermark on the right.
- `FinalCTA` — "Make the agreement stronger than the promise." card with tri-colour ambient glow + full 4-column footer.

## Assets
```
/public/assets/
├── hero.mp4                 (4.5 MB, 1440x1080, 14.5s)
├── hero-poster.jpg          (fallback / prefers-reduced-motion frame)
├── logo-x.webp              (hexagon-X mark v7)
└── (legacy) hero-mock.png, resxpect-mark.webp, resxpect-logo.webp
```

## Responsive
- ≥1024: 3-step / 3-card / 4-benefit horizontal grids
- 768–1023: 2-col benefit grid, 1-col role grid, stacked hero
- <768: fully stacked, buttons vertical
- Respects `prefers-reduced-motion` (video hidden, poster shown)

## Explicit non-goals (per brief)
- No stock photos, no crypto imagery, no marketplace navigation, no fake live stats, no dark backgrounds outside the hero video, no gender association with the role colors.

## Backlog
- Wire Create Agreement CTAs to a real backend + email capture
- Mobile hamburger menu for <1024 px viewports
- Dedicated pages: How It Works, Roles, Why RESXPECT, Trust and Safety, Terms, Privacy, Contact
- Serve hero.mp4 alongside a `webm` transcoded variant for smaller Chrome/Android payloads
