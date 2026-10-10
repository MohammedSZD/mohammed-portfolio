import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import type { Project } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t, tl } from "@/i18n/localize";
import { projects } from "@/data/projects";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/Icons";
import { publicFileExists } from "@/lib/assets";
import { Lightbox } from "./Lightbox";
import { GalleryExplorer, GalleryProvider, HighlightStrip, type CaseGalleryLabels, type CaseGroup, type CaseImage } from "./CaseGallery";
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
  const links = [
    ...(p.liveUrls ?? []).map((l) => ({ label: t(l.label, locale), url: l.url, latin: false })),
    ...(p.liveUrl ? [{ label: p.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""), url: p.liveUrl, latin: true }] : []),
  ];

  const meta: { label: string; value: string }[] = [
    p.role && { label: d.role, value: t(p.role, locale) },
    p.client && { label: d.company, value: `\u2066${p.client}\u2069` },
    p.year && { label: d.year, value: p.year },
    { label: d.category, value: t(p.category, locale) },
  ].filter(Boolean) as { label: string; value: string }[];

  // Rich, categorized galleries (MEDMAR, SALTI) vs. the simple thumbnail gallery used elsewhere.
  const groups: CaseGroup[] = (p.galleryGroups ?? []).map((g) => ({ id: g.id, title: t(g.title, locale), intro: g.intro ? t(g.intro, locale) : undefined }));
  const rich = groups.length > 0;
  const caseImages: CaseImage[] = rich
    ? (p.gallery ?? [])
        .filter((g) => publicFileExists(g.src) && g.width && g.height)
        .map((g) => ({
          src: g.src,
          alt: t(g.alt, locale),
          caption: g.caption ? t(g.caption, locale) : undefined,
          description: g.description ? t(g.description, locale) : undefined,
          category: g.category,
          device: g.device ?? "desktop",
          kind: g.kind ?? "viewport",
          ownership: g.ownership,
          width: g.width as number,
          height: g.height as number,
        }))
    : [];
  const galleryLabels: CaseGalleryLabels = {
    close: dict.gallery.close,
    next: dict.gallery.next,
    previous: dict.gallery.previous,
    of: dict.gallery.of,
    zoomIn: d.zoomIn,
    zoomOut: d.zoomOut,
    fullPage: d.fullPage,
    fullPageHint: d.fullPageHint,
    swipeHint: d.swipeHint,
    all: d.galleryAll,
    device: d.galleryDevices,
    desktop: d.desktop,
    mobile: d.mobile,
    count: d.count,
    personal: d.personalBadge,
    shared: d.sharedBadge,
    open: dict.gallery.open,
    screenshot: dict.a11y.screenshot,
  };

  const featureTitle = p.keyFeatures?.some((f) => f.state === "planned") || p.status === "in-development" || p.status === "concept" ? d.featuresPlanned : d.features;

  const article = (
    <article>
      <header className="container-x pt-28 md:pt-36">
        <Link href={localePath(locale, "/projects")} className="link mb-10 inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft size={15} aria-hidden /> {d.back}
        </Link>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-8">
            <div className="hero-in mb-6 flex flex-wrap items-center gap-4">
              <StatusBadge status={p.status} dict={dict} />
              <span className="eyebrow">{t(p.category, locale)}</span>
            </div>
            <h1 className="display hero-in break-words text-[clamp(2.4rem,1.2rem+6.2vw,6.2rem)] text-balance" style={{ "--d": "80ms" } as React.CSSProperties}>
              {t(p.title, locale)}
            </h1>
            {p.tagline && (
              <p className="hero-in mt-4 font-serif text-2xl italic text-muted md:text-3xl" style={{ "--d": "140ms" } as React.CSSProperties}>
                {t(p.tagline, locale)}
              </p>
            )}
          </div>
          <div className="hero-in min-w-0 lg:col-span-4 lg:pt-3" style={{ "--d": "200ms" } as React.CSSProperties}>
            <p className="text-lg text-pretty text-muted">{t(p.summary, locale)}</p>
            {links.length > 0 && (
              <ul aria-label={d.links} className="mt-6 space-y-2">
                {links.map((l) => (
                  <li key={l.url}>
                    <a href={l.url} target="_blank" rel="noopener noreferrer" className="btn w-full justify-between">
                      <span dir={l.latin ? "ltr" : undefined} className="truncate">{l.label}</span>
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

        {rich && p.highlights && p.highlights.length > 0 && (
          <Reveal className="pb-6 md:pb-10">
            <HighlightStrip srcs={p.highlights} title={d.highlights} />
          </Reveal>
        )}

        <Section id="overview" label={d.overview}>
          <div className="space-y-5 text-lg text-pretty">
            {t(p.description, locale).map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          {locale !== "en" && !(p.description as Record<string, unknown>)[locale] && (
            <p className="mt-6 text-sm text-subtle">{d.english}</p>
          )}
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

        {(p.context || p.objectives) && (
          <section aria-label={`${d.context} / ${d.objectives}`} className="border-t border-line py-14 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {p.context && (
                <Reveal>
                  <h2 className="eyebrow mb-6">{d.context}</h2>
                  <NumberedList items={t(p.context, locale)} />
                </Reveal>
              )}
              {p.objectives && (
                <Reveal delay={80}>
                  <h2 className="eyebrow mb-6 text-accent">{d.objectives}</h2>
                  <NumberedList items={t(p.objectives, locale)} />
                </Reveal>
              )}
            </div>
          </section>
        )}

        {p.contribution && (
          <Section id="contribution" label={d.contribution}>
            <div className="space-y-10">
              <div>
                <h3 className="mb-4 flex items-center gap-3 font-serif text-2xl leading-tight">
                  {d.personalTitle}
                  <span className="rounded-full border border-accent/50 bg-accent-soft px-2.5 py-0.5 font-sans text-[0.68rem] font-medium text-accent">{d.personalBadge}</span>
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {p.contribution.personal.map((c) => (
                    <li key={c.title.en} className="rounded-xl border border-accent/40 bg-bg p-5">
                      <h4 className="font-medium leading-snug">{t(c.title, locale)}</h4>
                      {c.body && <p className="mt-1.5 text-sm text-muted text-pretty">{t(c.body, locale)}</p>}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 flex items-center gap-3 font-serif text-2xl leading-tight">
                  {d.sharedTitle}
                  <span className="rounded-full border border-line-strong bg-surface-2 px-2.5 py-0.5 font-sans text-[0.68rem] font-medium text-muted">{d.sharedBadge}</span>
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {p.contribution.shared.map((c) => (
                    <li key={c.title.en} className="rounded-xl border border-line bg-surface p-5">
                      <h4 className="font-medium leading-snug">{t(c.title, locale)}</h4>
                      {c.body && <p className="mt-1.5 text-sm text-muted text-pretty">{t(c.body, locale)}</p>}
                    </li>
                  ))}
                </ul>
              </div>
              {p.contribution.note && <p className="border-s-2 border-accent bg-accent-soft py-3 ps-4 pe-4 text-sm text-muted">{t(p.contribution.note, locale)}</p>}
            </div>
          </Section>
        )}

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
                    {f.ownership && (
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${
                          f.ownership === "personal" ? "border-accent/50 bg-accent-soft text-accent" : "border-line-strong bg-surface-2 text-muted"
                        }`}
                      >
                        {f.ownership === "personal" ? d.personalBadge : d.sharedBadge}
                      </span>
                    )}
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
            <TagList items={tl(p.technologies, locale)} />
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
                  <TagList items={tl(layer.items, locale)} />
                </li>
              ))}
            </ol>
          </Section>
        )}

        {p.responsive && (
          <Section id="responsive" label={d.responsive}>
            <ul className="space-y-3 text-lg">
              {t(p.responsive, locale).map((r) => (
                <li key={r} className="relative ps-6 text-pretty before:absolute before:start-0 before:top-[0.85em] before:h-px before:w-3 before:bg-accent">
                  {r}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {rich && caseImages.length > 0 && (
          <Section id="gallery" label={`${d.gallery} · ${caseImages.length}`}>
            {p.screenshotNote && <p className="mb-8 max-w-[75ch] border-s-2 border-line-strong ps-4 text-sm text-muted text-pretty">{t(p.screenshotNote, locale)}</p>}
            <GalleryExplorer groups={groups} images={caseImages} showOwner={!!p.contribution} />
          </Section>
        )}

        {!rich && galleryItems.length > 0 && (
          <Section id="gallery" label={d.gallery}>
            <Lightbox items={galleryItems} labels={{ ...dict.gallery, screenshot: dict.a11y.screenshot }} />
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

        {p.scope && (
          <section aria-label={`${d.scopeFuture} / ${d.scopeLimits}`} className="border-t border-line py-14 md:py-20">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <Reveal>
                <h2 className="eyebrow mb-6">{d.scopeLimits}</h2>
                <ul className="space-y-3 text-muted">
                  {t(p.scope.limits, locale).map((x) => (
                    <li key={x} className="relative ps-6 text-pretty before:absolute before:start-0 before:top-[0.85em] before:h-px before:w-3 before:bg-line-strong">
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="eyebrow mb-6 text-accent">{d.scopeFuture}</h2>
                <ul className="space-y-3">
                  {t(p.scope.future, locale).map((x) => (
                    <li key={x} className="relative ps-6 text-pretty before:absolute before:start-0 before:top-[0.85em] before:h-px before:w-3 before:bg-accent">
                      {x}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </section>
        )}

        {related.length > 0 && (
          <Section id="related" label={d.related}>
            <ul className="border-t border-line">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-line">
                  <Link href={localePath(locale, `/projects/${r.slug}`)} className="group flex items-center justify-between gap-4 py-4">
                    <span className="font-serif text-2xl leading-tight">{t(r.shortTitle, locale)}</span>
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

      <nav aria-label={dict.a11y.projectNav} className="border-t border-line">
        <div className="container-x grid md:grid-cols-2">
          <Link href={localePath(locale, `/projects/${prev.slug}`)} className="group py-10 transition-colors hover:text-accent md:border-e md:border-line md:pe-8">
            <p className="eyebrow mb-3 flex items-center gap-2">
              <ArrowLeft size={14} aria-hidden /> {d.previous}
            </p>
            <p className="font-serif text-3xl leading-tight">{t(prev.shortTitle, locale)}</p>
          </Link>
          <Link href={localePath(locale, `/projects/${next.slug}`)} className="group border-t border-line py-10 transition-colors hover:text-accent md:border-t-0 md:ps-8 md:text-end">
            <p className="eyebrow mb-3 flex items-center gap-2 md:justify-end">
              {d.next} <ArrowRight size={14} aria-hidden />
            </p>
            <p className="font-serif text-3xl leading-tight">{t(next.shortTitle, locale)}</p>
          </Link>
        </div>
      </nav>
    </article>
  );
  return rich ? (
    <GalleryProvider images={caseImages} labels={galleryLabels}>
      {article}
    </GalleryProvider>
  ) : (
    article
  );
}
