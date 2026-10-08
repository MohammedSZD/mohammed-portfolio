import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { t } from "@/i18n/localize";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { languages } from "@/data/languages";

export const metadata: Metadata = { title: "Résumé", robots: { index: false, follow: false } };

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-2 mt-5 border-b border-line pb-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">{children}</h2>;
}

const strip = (u: string) => u.replace(/^https?:\/\//, "");

/**
 * Print-optimised résumé built from the same data files as the site.
 * `npm run cv` renders this page to public/cv/Mohammed-Zaineldeen-CV.pdf (A4).
 * Phone number is intentionally not included.
 */
export default async function ResumePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const featured = projects.filter((p) => p.featured && !p.archived);

  return (
    <div className="resume mx-auto max-w-[52rem] px-6 pb-16 pt-24 text-[0.82rem] leading-[1.45] print:max-w-none print:p-0">
      <header className="mb-3">
        <h1 className="font-serif text-4xl leading-none">{profile.name}</h1>
        <p className="mt-1 text-base text-muted">{t(profile.headline, locale)} · {t(profile.positioning, locale)[3]}</p>
        <p className="mt-2 text-muted">
          {profile.location} · {profile.email} · {strip(profile.github)} · {strip(profile.linkedin)}
        </p>
      </header>

      <H>Profile</H>
      <p>{t(profile.summary, locale).slice(0, 2).join(" ")}</p>

      <H>Experience</H>
      <div className="space-y-3">
        {experience.map((e) => (
          <section key={e.id} className="break-inside-avoid">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-semibold">
                {e.company} <span className="font-normal text-muted">— {t(e.role, locale)}</span>
              </h3>
              <span className="shrink-0 font-mono text-[0.7rem] text-subtle">{t(e.period, locale)}</span>
            </div>
            <ul className="mt-1 list-disc space-y-0.5 ps-5 text-muted">
              {(e.highlightGroups ? e.highlightGroups.flatMap((g) => t(g.items, locale)) : e.bullets ? t(e.bullets, locale) : []).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <H>Selected projects</H>
      <ul className="space-y-1.5">
        {featured.map((p) => {
          const link = p.liveUrl ?? p.liveUrls?.[0]?.url;
          return (
            <li key={p.slug} className="break-inside-avoid">
              <span className="font-semibold">{p.shortTitle}</span> <span className="text-subtle">({t(p.category, locale)})</span> — <span className="text-muted">{t(p.summary, locale)}</span>
              {link && <span className="font-mono text-[0.7rem] text-subtle"> {strip(link)}</span>}
            </li>
          );
        })}
      </ul>

      <H>Technical skills</H>
      <dl className="space-y-0.5">
        {skills.map((g) => (
          <div key={g.id} className="flex gap-2">
            <dt className="w-36 shrink-0 font-semibold">{t(g.title, locale)}{g.developing ? " *" : ""}</dt>
            <dd className="text-muted">{g.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-1 text-[0.7rem] text-subtle">* currently developing</p>

      <div className="grid gap-x-8 sm:grid-cols-2 print:grid-cols-2">
        <div>
          <H>Education</H>
          <ul className="space-y-1.5">
            {education.map((e) => (
              <li key={e.id}>
                <span className="font-semibold">{t(e.degree, locale)}</span>
                <span className="text-muted"> — {e.institution}</span>
                <span className="block font-mono text-[0.7rem] text-subtle">{e.period}{e.status === "in-progress" ? " · in progress" : ""}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <H>Certifications</H>
          <ul className="space-y-1">
            {certifications.map((c) => (
              <li key={c.id}>
                <span className="font-semibold">{c.title}</span>
                <span className="text-muted">{[c.issuer, c.year].filter(Boolean).length ? ` — ${[c.issuer, c.year].filter(Boolean).join(", ")}` : ""}</span>
              </li>
            ))}
          </ul>
          <H>Languages</H>
          <p className="text-muted">{languages.map((l) => `${t(l.name, locale)} (${t(l.level, locale)})`).join(" · ")}</p>
        </div>
      </div>
    </div>
  );
}
