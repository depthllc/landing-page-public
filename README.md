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

## GitHub Pages

The repository includes a GitHub Pages workflow at `.github/workflows/deploy-pages.yml`.

- Pushes to `main` build and deploy automatically
- The Vite `base` path is derived from GitHub Pages metadata during CI
- Local builds still use `/`

For a custom domain like `depth.ai`, set the domain in `Settings -> Pages`. When publishing via a custom GitHub Actions workflow, GitHub Pages ignores any `CNAME` file, so none is required in this repo.

## Contact Endpoint

The contact form posts JSON to a Vercel Serverless Function at `api/contact.js`.
The function validates the request and sends it to `info@depth.ai` through Resend.

Frontend endpoint:

```bash
VITE_CONTACT_ENDPOINT=/api/contact
```

Required Vercel environment variables:

```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=info@depth.ai
CONTACT_FROM_EMAIL=Depth Website <noreply@depth.ai>
```

Set these with Vercel CLI:

```bash
vercel env add RESEND_API_KEY production
vercel env add CONTACT_TO_EMAIL production
vercel env add CONTACT_FROM_EMAIL production
```

Use these values:

```bash
CONTACT_TO_EMAIL=info@depth.ai
CONTACT_FROM_EMAIL=Depth Website <noreply@depth.ai>
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. For first testing, you can temporarily
use Resend's sandbox sender if your account allows it, then switch to `noreply@depth.ai` after
domain verification.

## Media Assets

- Current hero video: `public/digital-twin.mp4`
- Use-case card videos:
  - `public/national-defense.mp4`
  - `public/auto-system.mp4`
  - `public/robotics.mp4`
- Operational domain card videos:
  - `public/national-defense.mp4`
  - `public/auto-system.mp4`
  - `public/infrastructure.mp4`
  - `public/robotics-current.mp4`
- Defense deployment video:
  - `public/deployment.mp4`
- Use-case card posters:
  - `public/defense_card_bg.png`
  - `public/autonomy_card_bg.png`
  - `public/robotics_card_bg.png`
