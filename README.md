# Depth.ai

Static-first marketing site scaffold using Vite + React + TypeScript.

## Tech

- Vite
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- GSAP + SplitType (hero kinetic text animation)

## Start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Contact Endpoint

The frontend is static. Contact submits to an API endpoint configured by:

```bash
VITE_CONTACT_ENDPOINT=/api/contact
```

Copy `.env.example` to `.env` and adjust per environment.

## Media Assets

- Current hero video: `public/digital-twin.mp4`
- Use-case card videos:
  - `public/national-defense.mp4`
  - `public/auto-system.mp4`
  - `public/robotics.mp4`
- Use-case card posters:
  - `public/defense_card_bg.png`
  - `public/autonomy_card_bg.png`
  - `public/robotics_card_bg.png`
