# RESXPECT — Premium Homepage Redesign

## Original problem statement
Redesign the RESXPECT homepage to feel substantially more premium, cinematic and distinctive — closer to a financial infrastructure / blockchain protocol / advanced technology company than a freelance marketplace. Remove startup aesthetic, rounded cards, empty whites and handshake emoji. Serious trust infrastructure for independent work.

## Architecture
- **Stack:** React 19 + Tailwind 3 + CRA/CRACO. Static frontend, no backend needed (static demo).
- **Type system:** Fraunces (display serif) + IBM Plex Sans (body) + IBM Plex Mono (labels).
- **Palette:** Near-black `#0A0A0B` (ink), warm off-white `#F3EDE3` (paper), vivid `#FF5B1F` RESXPECT orange used sparingly as accent.
- **Design tokens** in `src/index.css` as CSS variables; shadcn `--*` bridge preserved.

## Component tree
```
src/
├── App.js
├── components/
│   ├── Logo.jsx                (custom geometric handshake SVG + wordmark)
│   ├── Nav.jsx                 (fixed, glass on scroll)
│   ├── ProtocolVisual.jsx      (abstract protocol diagram — nodes, dashed lines, animated flow)
│   └── sections/
│       ├── Hero.jsx
│       ├── TrustProblem.jsx
│       ├── HowItWorks.jsx
│       ├── ProtectedAgreements.jsx
│       ├── RespectPoints.jsx
│       ├── Disputes.jsx
│       └── FinalCTA.jsx
├── index.css                   (design system, tokens, primitives, animations)
└── App.css
```

## Implemented (Jan 2026)
- Minimal fixed navigation with glass-blur on scroll, editorial mono links, single primary CTA.
- Cinematic dark hero with radial orange glow, hairline grid, film grain overlay, editorial Fraunces headline, italic orange accent word, protocol status bar, live ticker.
- Custom protocol diagram (SVG): agreement → payment → central verify core → evidence → reputation with dashed animated lines and traveling orange dots.
- Chapter 01 "Trust problem" — warm paper, editorial rows with hover accents.
- Chapter 02 "How it works" — five-state protocol rail with node markers and progress shimmer.
- Chapter 03 "Protected agreements" — realistic agreement document mock with milestones + signatures.
- Chapter 04 "Respect Points & Skill Trust" — identity card with animated skill trust bars and tier badge.
- Chapter 05 "Evidence over escalation" — dispute timeline mock with vertical rail.
- Final CTA — oversized editorial closer with orange italic emphasis + footer.
- Global smooth-scroll and anchor links wired for nav.
- data-testid attributes on every interactive/critical element.

## Backlog / P1
- Wire CTAs to a real waitlist backend + email capture.
- Add scroll-triggered reveal animations (framer-motion) beyond initial fade-up.
- Dedicated pages: `/protocol` (spec), `/security`, `/legal`.
- Mobile refinements (currently responsive but hero layout stacks — polish spacing).
- Case studies / studio logos strip.

## P2
- Motion-heavy protocol demo (interactive walkthrough of the 5 states).
- Dark/light toggle for paper sections.
- Real ledger animation with WebSocket-driven live stats.
