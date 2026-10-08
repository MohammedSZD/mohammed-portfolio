import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/Icons";
import { publicFileExists } from "@/lib/assets";
import { Lightbox } from "./Lightbox";
import { BeforeAfter } from "./BeforeAfter";

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id} className="border-t border-line py-14 md:py-20">
      <div className="grid gap-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-3">
          <h2 id={id} className="eyebrow md:sticky md:top-28">
            {label}
          </h2>
        </Reveal>
        <Reveal className="md:col-span-9" delay={60}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-5">
      {items.map((item, i) => (
        <li key={item} className="grid grid-cols-[2.2rem_1fr] gap-3 text-pretty">
          <span className="pt-1 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function CaseStudy({ project: p, locale, dict }: { project: Project; locale: Locale; dict: Dictionary }) {
  const d = dict.projectPage;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const related = (p.related ?? []).map((s) => projects.find((x) => x.slug === s)).filter((x): x is Project => !!x);
  const galleryItems = (p.gallery ?? [])
    .filter((g) => publicFileExists(g.src))
    .map((g) => ({ src: g.src, alt: t(g.alt, locale), caption: g.caption ? t(g.caption, locale) : undefined, device: g.device ?? ("desktop" as const) }));
  const links = [...(p.liveUrls ?? []), ...(p.liveUrl ? [{ label: p.liveUrl.replace(/^https?:\/\//, ""), url: p.liveUrl }] : [])];

  const meta: { label: string; value: string }[] = [
    p.role && { label: d.role, value: t(p.role, locale) },
    p.client && { label: d.company, value: p.client },
    p.year && { label: d.year, value: p.year },
    { label: d.category, value: t(p.category, locale) },
  ].filter(Boolean) as { label: string; value: string }[];

  const featureTitle = p.keyFeatures?.some((f) => f.state === "planned") || p.status === "in-development" || p.status === "concept" ? d.featuresPlanned : d.features;

  return (
    <article>
      <header className="container-x pt-28 md:pt-36">
        <Link href={localePath(locale, "/projects")} className="link mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft size={15} aria-hidden /> {d.back}
        </Link>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <div className="hero-in mb-6 flex flex-wrap items-center gap-4">
              <StatusBadge status={p.status} dict={dict} />
              <span className="eyebrow">{t(p.category, locale)}</span>
            </div>
            <h1 className="display hero-in text-[clamp(2.6rem,1.2rem+6.2vw,6.2rem)] text-balance" style={{ "--d": "80ms" } as React.CSSProperties}>
              {t(p.title, locale)}
            </h1>
            {p.tagline && (
              <p className="hero-in mt-4 font-serif text-2xl italic text-muted md:text-3xl" style={{ "--d": "140ms" } as React.CSSProperties}>
                {t(p.tagline, locale)}
              </p>
            )}
          </div>
          <div className="hero-in lg:col-span-4 lg:pt-3" style={{ "--d": "200ms" } as React.CSSProperties}>
            <p className="text-lg text-pretty text-muted">{t(p.summary, locale)}</p>
            {links.length > 0 && (
              <ul className="mt-6 space-y-2">
                {links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="btn w-full justify-between">
                      <span className="truncate">{l.label}</span>
                      <ArrowUpRight size={16} className="arrow shrink-0" aria-hidden />
                      <span className="sr-only">({dict.a11y.external})</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {p.repositoryUrl && (
              <a href={p.repositoryUrl} target="_blank" rel="noopener noreferrer" className="link mt-4 inline-flex items-center gap-2 text-sm">
                <GithubIcon /> {d.repository}
              </a>
            )}
          </div>
        </div>

        <dl className="hero-in mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-6 md:grid-cols-4" style={{ "--d": "260ms" } as React.CSSProperties}>
          {meta.map((m) => (
            <div key={m.label}>
              <dt className="eyebrow mb-1.5">{m.label}</dt>
              <dd className="text-sm leading-snug">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="hero-in mt-10" style={{ "--d": "320ms" } as React.CSSProperties}>
          <ProjectMedia image={p.coverImage} visual={p.visual} locale={locale} dict={dict} priority placeholderLabel={p.visibility === "confidential" ? d.confidentialArt : undefined} sizes="(min-width: 1280px) 1200px, 100vw" className="md:aspect-[21/10]" />
        </div>
      </header>

      <div className="container-x mt-6 md:mt-10">
        {p.metrics && p.metrics.length > 0 && (
          <Reveal>
            <dl aria-label={d.metrics} className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
              {p.metrics.map((m) => (
                <div key={m.value + m.label.en}>
                  <dt className="font-serif text-[clamp(2.4rem,1.6rem+3vw,4.2rem)] leading-none">{m.value}</dt>
                  <dd className="mt-2 text-sm text-muted">{t(m.label, locale)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <Section id="overview" label={d.overview}>
          <div className="space-y-5 text-lg text-pretty">
            {t(p.description, locale).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          {p.statusNote && (
            <p className="mt-8 border-s-2 border-accent bg-accent-soft py-3 ps-4 pe-4 text-sm text-muted">{t(p.statusNote, locale)}</p>
          )}
          {p.authorship && (
            <p className="mt-4 text-sm text-muted">
              <strong className="font-medium text-fg">{d.authorship}. </strong>
              {t(p.authorship, locale)}
            </p>
          )}
          {p.confidentialityNote && (
            <p className="mt-4 flex gap-3 rounded-lg border border-line bg-surface p-4 text-sm text-muted">
              <Lock size={16} className="mt-0.5 shrink-0 text-subtle" aria-hidden />
              <span>
                <strong className="font-medium text-fg">{d.confidentiality}. </strong>
                {t(p.confidentialityNote, locale)}
              </span>
            </p>
          )}
        </Section>

        {p.comparison && (
          <section aria-labelledby="comparison" className="border-t border-line py-14 md:py-20">
            <Reveal>
              <h2 id="comparison" className="eyebrow mb-4">
                {d.comparison}
              </h2>
              <p className="mb-3 max-w-[22ch] font-serif text-[clamp(2rem,1.3rem+2.6vw,3.4rem)] leading-[1.05] text-balance">{t(p.comparison.title, locale)}</p>
              <p className="mb-8 max-w-[70ch] text-muted text-pretty">{t(p.comparison.body, locale)}</p>
              <BeforeAfter
                label={dict.compare.sliderLabel}
                before={{ src: p.comparison.before.src, alt: t(p.comparison.before.alt, locale), label: t(p.comparison.before.label, locale) }}
                after={{ src: p.comparison.after.src, alt: t(p.comparison.after.alt, locale), label: t(p.comparison.after.label, locale) }}
              />
              <p className="mt-3 text-sm text-subtle">{dict.compare.drag}</p>
            </Reveal>
          </section>
        )}

        {p.responsibilities && (
          <Section id="role" label={d.responsibilities}>
            <ul className="grid gap-x-8 gap-y-3 md:grid-cols-2">
              {t(p.responsibilities, locale).map((r) => (
                <li key={r} className="relative ps-5 text-pretty before:absolute before:start-0 before:top-[0.85em] before:h-px before:w-3 before:bg-accent">
                  {r}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {(p.challenges || p.solutions) && (
          <section aria-label={`${d.challenges} / ${d.solutions}`} className="border-t border-line py-14 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {p.challenges && (
                <Reveal>
                  <h2 className="eyebrow mb-6">{d.challenges}</h2>
                  <NumberedList items={t(p.challenges, locale)} />
                </Reveal>
              )}
              {p.solutions && (
                <Reveal delay={80}>
                  <h2 className="eyebrow mb-6 text-accent">{d.solutions}</h2>
                  <NumberedList items={t(p.solutions, locale)} />
                </Reveal>
              )}
            </div>
          </section>
        )}

        {p.keyFeatures && p.keyFeatures.length > 0 && (
          <Section id="features" label={featureTitle}>
            <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
              {p.keyFeatures.map((f) => (
                <li key={f.title.en} className="bg-bg p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium leading-snug">{t(f.title, locale)}</h3>
                    {f.state && (
                      <span className="shrink-0 rounded-full border border-dashed border-line-strong px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-wider text-subtle">
                        {dict.featureState[f.state]}
                      </span>
                    )}
                  </div>
                  {f.description && <p className="mt-1.5 text-sm text-muted text-pretty">{t(f.description, locale)}</p>}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {p.technologies.length > 0 && (
          <Section id="tech" label={d.technology}>
            <TagList items={p.technologies} />
          </Section>
        )}

        {p.engineeringDecisions && (
          <Section id="decisions" label={d.decisions}>
            <ul className="space-y-8">
              {p.engineeringDecisions.map((e, i) => (
                <li key={e.title.en} className="grid grid-cols-[2.2rem_1fr] gap-3">
                  <span className="pt-1.5 font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight">{t(e.title, locale)}</h3>
                    <p className="mt-2 text-muted text-pretty">{t(e.body, locale)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {p.architecture && (
          <Section id="architecture" label={d.architecture}>
            {p.architecture.summary && <p className="mb-6 text-muted">{t(p.architecture.summary, locale)}</p>}
            <ol className="space-y-2">
              {p.architecture.layers.map((layer) => (
                <li key={layer.label.en} className="grid items-center gap-3 rounded-xl border border-line bg-surface px-5 py-4 sm:grid-cols-[9rem_1fr]">
                  <span className="eyebrow">{t(layer.label, locale)}</span>
                  <TagList items={layer.items} />
                </li>
              ))}
            </ol>
          </Section>
        )}

        {galleryItems.length > 0 && (
          <Section id="gallery" label={d.gallery}>
            <Lightbox items={galleryItems} labels={dict.gallery} />
          </Section>
        )}

        {p.outcomes && (
          <Section id="outcomes" label={d.outcomes}>
            <ul className="space-y-3 text-lg">
              {t(p.outcomes, locale).map((o) => (
                <li key={o} className="relative ps-6 text-pretty before:absolute before:start-0 before:top-[0.85em] before:h-px before:w-3 before:bg-accent">
                  {o}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {related.length > 0 && (
          <Section id="related" label={d.related}>
            <ul className="border-t border-line">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-line">
                  <Link href={localePath(locale, `/projects/${r.slug}`)} className="group flex items-center justify-between gap-4 py-4">
                    <span className="font-serif text-2xl leading-tight">{r.shortTitle}</span>
                    <span className="flex items-center gap-3">
                      <span className="eyebrow hidden sm:inline">{t(r.category, locale)}</span>
                      <ArrowUpRight size={18} className="arrow-move text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Section>
        )}
      </div>

      <nav aria-label="Project navigation" className="border-t border-line">
        <div className="container-x grid md:grid-cols-2">
          <Link href={localePath(locale, `/projects/${prev.slug}`)} className="group py-10 transition-colors hover:text-accent md:border-e md:border-line md:pe-8">
            <p className="eyebrow mb-3 flex items-center gap-2">
              <ArrowLeft size={14} aria-hidden /> {d.previous}
            </p>
            <p className="font-serif text-3xl leading-tight">{prev.shortTitle}</p>
          </Link>
          <Link href={localePath(locale, `/projects/${next.slug}`)} className="group border-t border-line py-10 transition-colors hover:text-accent md:border-t-0 md:ps-8 md:text-end">
            <p className="eyebrow mb-3 flex items-center gap-2 md:justify-end">
              {d.next} <ArrowRight size={14} aria-hidden />
            </p>
            <p className="font-serif text-3xl leading-tight">{next.shortTitle}</p>
          </Link>
        </div>
      </nav>
    </article>
  );
}
