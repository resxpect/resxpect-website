# RESXPECT — Marketing Website

## Current status (Jan 2026)
Production-quality marketing site rebuilt to match the uploaded RESXPECT visual reference.

## Stack
React 19 + Tailwind 3 + CRACO. Static frontend only — no backend, no marketplace, no auth, no database (per requirement).

## Design system
- **Brand orange:** `#F7931A` (RESXPECT accent, primary CTA, italic emphasis)
- **Ink:** `#0E0E10` primary, `#3A3A3D` secondary, `#6B6B70` tertiary
- **Backgrounds:** white primary, warm off-white `#FDF7EF` counterpoint
- **Type:** Manrope (700/800 for display, 400/500/600 for body) + IBM Plex Mono (numeric)
- **Card:** 16px radius, thin hairlines `rgba(14,14,16,0.10)`, soft ambient shadow
- **Buttons:** 10px radius pill; orange primary, orange-outline secondary

## Sections
1. **Nav** — shield-with-handshake logomark; How It Works · Protected Agreements · Reputation · Disputes · About; orange Request Access CTA
2. **Hero** — two-column: label pill + editorial headline (orange "independent work.") + copy + two CTAs + three orange checkmarked benefits · three-phone composition (center largest and straight; left tilted −8°; right tilted +8°; both angled outward; center overlaps both; no cropping; transparent surround)
3. **Principles** — Built on principles that protect everyone (Protected Agreements, Portable Reputation, Fair Resolution)
4. **How RESXPECT works** — five numbered steps horizontal (desktop) / vertical (mobile) with connecting rail
5. **Reputation** — two panels (Respect Points, Skill Trust); no internal formulas surfaced
6. **Disputes** — 4-step evidence → response → validators → payment flow
7. **Final CTA + footer** — "People can meet anywhere. Trust is built on RESXPECT."

## Component tree
```
src/
├── App.js
├── App.css
├── index.css                       (design tokens, buttons, cards, animations)
└── components/
    ├── Logo.jsx                    (orange shield + white handshake + wordmark)
    ├── Nav.jsx
    ├── Phones.jsx                  (PhoneAgreements, PhoneHome, PhoneLifecycle)
    └── sections/
        ├── Hero.jsx
        ├── Principles.jsx
        ├── HowItWorks.jsx
        ├── Reputation.jsx
        ├── Disputes.jsx
        └── FinalCTA.jsx
```

## Responsive
- Desktop ≥1024: two-column hero, 5-across steps
- Tablet 768–1023: single-column hero, principles 1-col
- Mobile <768: fully stacked, 5-step vertical rail

## Explicitly not done (per requirement)
- No marketplace page or navigation entry
- No backend, no auth, no payment/escrow logic
- No stock photos, no crypto/blockchain iconography, no shield logo other than the official uploaded mark
- No fake live statistics, ticker, ledger sync or protocol version labels

## Backlog
- Wire CTAs to a real waitlist backend + email capture
- Mobile hamburger menu for < lg viewports (nav links currently hidden below 1024px)
- Framer-motion staggered scroll reveals per section
- Dedicated pages for How It Works, Protected Agreements, Reputation, Disputes, Privacy, Terms, Contact
