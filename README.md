# Mohammed S. Zaineldeen — Portfolio

Personal portfolio of a full-stack / R&D software engineer: editorial design, case-study pages generated from structured data, dark/light themes, English + Turkish.

> Preview: add a screenshot at `docs/preview.png` and reference it here.

## Stack
- **Next.js 16** (App Router, static generation) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with CSS-variable design tokens
- `lucide-react` icons, `geist` fonts, Instrument Serif (via `next/font`)
- No animation library: CSS transitions + a tiny IntersectionObserver reveal; honours `prefers-reduced-motion`
- No database, CMS or auth — content lives in `src/data`

## Local development
```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + production build
```

## Architecture
```
src/
  app/[locale]/        pages: home, /projects, /projects/[slug]  (+ sitemap, robots)
  components/
    layout/ sections/  header, footer, home sections
    project/ ui/       case-study system, cards, placeholders, primitives
  data/                ALL content (profile, projects, experience, skills, …)
  i18n/                locales, dictionaries (UI strings), t() helper
  lib/                 types, SEO helpers, asset checks
public/                cv/ and projects/<slug>/ assets
```
- **Localization:** English at `/`, Turkish at `/tr`. Content fields are `{ en, tr? }` with English fallback; UI strings live in `src/i18n/dictionaries`. Layout uses logical properties so adding RTL (Arabic) needs no redesign.
- **Case studies:** one `Project` object (`src/lib/types.ts`) renders a full page; empty sections are skipped.
- **Images:** real screenshots are used when present in `public/`, otherwise designed placeholders render.

## Content
See **[PORTFOLIO_CONTENT_GUIDE.md](./PORTFOLIO_CONTENT_GUIDE.md)** for: adding projects, screenshots (1600×1000), the CV (`public/cv/Mohammed-Zaineldeen-CV.pdf`), skills, certifications and languages.

## Deployment (Vercel)
Import the repo into Vercel — no configuration needed; it works on `*.vercel.app`. Optionally set `NEXT_PUBLIC_SITE_URL` (see `.env.example`) once you add a custom domain so canonical URLs, sitemap and Open Graph use it.

## Notes
Confidential employer information (source, URLs, schema, personnel) is intentionally not published. Project statuses distinguish production, in-development and concept work.
