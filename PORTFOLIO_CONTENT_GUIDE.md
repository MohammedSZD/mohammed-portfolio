# Portfolio Content Guide

Everything on the site is driven by plain TypeScript files in `src/data/`. No database, no CMS.
After any change: commit and push — Vercel redeploys automatically.
To preview locally: `npm run dev` → http://localhost:3000

| I want to… | Edit |
|---|---|
| Change name, headline, summary, email, GitHub/LinkedIn | `src/data/profile.ts` |
| Add/edit a project or case study | `src/data/projects.ts` |
| Add/edit a small repo / experiment | `src/data/labs.ts` |
| Jobs & experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Education / certifications / languages | `src/data/education.ts`, `certifications.ts`, `languages.ts` |
| Menu items | `src/data/navigation.ts` |
| Interface wording (buttons, headings) | `src/i18n/dictionaries/en.ts` (and `tr.ts`) |

## Add a project
1. Create `public/projects/<slug>/` and add images (see **Screenshots** below).
2. Open `src/data/projects.ts`, copy an existing object, change its fields, and paste it into the array.
   Required: `slug`, `title`, `shortTitle`, `category`, `summary`, `description`, `status`, `featured`, `technologies`, `visibility`, `visual`.
   Everything else is optional — **sections with no data are simply not shown**.
3. The page `/projects/<slug>` exists automatically.

Only put verified facts in. Don't add metrics you can't back up.

## Remove a project
Delete its object from `src/data/projects.ts`. (Also remove its slug from other projects' `related` lists.)

## Feature / unfeature
Set `featured: true` (large "Selected work" card) or `featured: false` (compact "Professional web projects" row).

## Reorder
Order in the array = display order. Move the object up or down. The first featured project is rendered as the large lead card.

## Change project status
Set `status` to: `production`, `client-work`, `in-development`, `concept`, `experiment`, `personal`.
Use `statusNote` to explain it in plain words on the project page. For planned features set `state: "planned"` on that feature.

## Change text
Edit the string in the relevant data file. Text is `{ en: "…", tr: "…" }`; `tr` is optional and falls back to English.

## Screenshots
Put files in `public/projects/<slug>/`. Use WebP (or PNG/JPG), **1600×1000 px (16:10)**, under ~300 KB.
- Cover: `cover.webp` → referenced by `coverImage`
- Gallery: `01.webp`, `02.webp`, … → referenced by `gallery`
Folders already exist: `medmar`, `lale`, `matchara`, `topfan`, `podoclinic`, `houston`, `ai-automation`, `zaineldeen-stores`, `yeni-sayfa`.
If a file is missing, a designed placeholder is shown automatically — just drop the file in and rebuild.
**MEDMAR:** only add sanitised screenshots (no real names, internal URLs, data or credentials).

## CV
Save the PDF as `public/cv/Mohammed-Zaineldeen-CV.pdf`. The "Download CV" button appears automatically when the file exists. Replace the file to update it.

## Contact links
`src/data/profile.ts` → `email`, `github`, `linkedin`. The phone number is intentionally not published.
The contact form opens the visitor's email app (mailto). To send from the site later, replace `onSubmit` in `src/components/sections/ContactForm.tsx` with a call to a provider.

## Add a certification / skill
- Certification: add a line to `src/data/certifications.ts`.
- Skill: add the string to an `items` array in `src/data/skills.ts` (or add a new group).

## Add another language
1. `src/i18n/config.ts`: add the code to `locales`, `localeDirection` (`"rtl"` for Arabic) and `localeLabels`.
2. Create `src/i18n/dictionaries/<code>.ts` (copy `en.ts`, translate) and register it in `dictionaries/index.ts`.
3. Add `<code>` translations to data objects where you want them (`{ en, tr, ar }`); add the key to `Localized` in `src/lib/types.ts` automatically via `Locale`.
4. Layout uses logical CSS properties (`ms-`, `ps-`, `start-`), so RTL works without redesign.

## Deploy updates
`git add -A && git commit -m "Update content" && git push`. Vercel builds on every push.
Before pushing, run `npm run check` (lint + types + production build).
