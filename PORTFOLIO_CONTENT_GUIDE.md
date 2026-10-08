# Portfolio Content Guide

All content is plain TypeScript in `src/data/`. No database, no CMS, no admin panel — edit, commit, push; Vercel redeploys.
Preview: `npm run dev`. Before pushing: `npm run check` (validate + lint + types + build).

| I want to… | Edit |
|---|---|
| Name, headline, intro, email, GitHub/LinkedIn | `src/data/profile.ts` |
| Projects & case studies (cards, filters, pages) | `src/data/projects.ts` |
| Small repos / QA artifacts ("Labs") | `src/data/labs.ts` |
| Services | `src/data/services.ts` |
| Jobs, skills, education, certifications, languages | `experience.ts`, `skills.ts`, `education.ts`, `certifications.ts`, `languages.ts` |
| Interface wording | `src/i18n/dictionaries/en.ts` (`tr.ts` for Turkish) |

## Add a project (≈5 minutes)
1. Put images in `public/projects/<slug>/`: `cover.webp` (1920×1200), `01.webp`, `02.webp`… (same size), mobile shots `m-01.webp`… (780×1688), and `og.jpg` (1200×630, optional — used for social previews).
2. Copy any object in `src/data/projects.ts`, change its fields, and paste it into the array. Required: `slug`, `categories`, `title`, `shortTitle`, `category`, `summary`, `description`, `status`, `featured`, `technologies`, `visibility`, `visual`.
3. Run `npm run validate`. It lists exactly what is wrong (typos in status/category, non-https links, missing alt text, featured project without a real cover…).
The card, filters, search, detail page, sitemap and metadata all come from that one object. Optional sections (challenges, solutions, features, decisions, metrics, architecture, comparison, gallery, outcomes) are simply skipped when empty.

Gallery entries whose image file does not exist are skipped, so you can list future screenshots in advance. Mark phone screenshots with `device: "mobile"`.

## Common edits
- **Feature / unfeature:** `featured: true | false` (featured projects sort first and need a real cover).
- **Reorder:** move the object in the array.
- **Archive (hide without deleting):** `archived: true`. **Remove:** delete the object (and its slug from other projects' `related`).
- **Change status:** `status` = `production`, `demo`, `client-work`, `in-development`, `concept`, `experiment`, `personal`; explain it with `statusNote`.
- **Categories (filters):** `categories: ["e-commerce" | "business-websites" | "internal-systems" | "web-applications" | "in-development"]`.
- **Links:** `liveUrl` or `liveUrls` (several editions), `repositoryUrl` (only when `visibility: "public"`). Confidential projects must have no links.
- **Before/after slider:** add `comparison` (see `zain-el-deen-store`).
- **Authorship wording:** `authorship` shows an "Authorship" line on the case study.
- **Add a skill / certification / service:** add a line to the matching data file.

## Screenshots workflow
`scripts/capture-screenshots.mjs` (Playwright) captures the sibling sites served locally; `scripts/process-screenshots.mjs` converts them to the right sizes. For a new project, take 1440×900 desktop and 390×844 mobile screenshots yourself, convert to WebP (quality ≈80), and drop them in `public/projects/<slug>/`. Only use real screenshots — never mock-ups. For MEDMAR/internal systems, only add sanitised screenshots you are authorised to publish.

## CV
`public/cv/Mohammed-Zaineldeen-CV.pdf` is generated from your data by `npm run cv` (needs the site running: `npm run build && npx next start`, then `npm run cv`, with `CHROMIUM_PATH` set if Chromium is not auto-detected). Or simply replace the PDF with your own file. The preview page is `/resume`.

## Languages
Content fields are `{ en: "…", tr: "…" }`; `tr` is optional and falls back to English. To add a locale: add it in `src/i18n/config.ts`, create `src/i18n/dictionaries/<code>.ts`, register it in `dictionaries/index.ts`, then add translations where wanted. Layout uses logical CSS properties (RTL-ready).

## Deploy
`git push` — Vercel builds automatically (production from `main`, previews from other branches). Optional `NEXT_PUBLIC_SITE_URL` for a custom domain.
