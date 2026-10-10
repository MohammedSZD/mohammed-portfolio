import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t, tl } from "@/i18n/localize";
import { projects } from "@/data/projects";
import type { Project } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";
import { ProjectCard } from "@/components/project/ProjectCard";

const FLAGSHIP_COUNT = 2;
const CLIENT_COUNT = 3;
const MORE_COUNT = 3;

function Flagship({ project: p, index, locale, dict }: { project: Project; index: number; locale: Locale; dict: Dictionary }) {
  const href = localePath(locale, `/projects/${p.slug}`);
  const live = p.liveUrl ?? p.liveUrls?.[0]?.url;
  const liveLabel = p.cardLinkLabel ? t(p.cardLinkLabel, locale) : dict.card.liveDemo;
  const metrics = (p.metrics ?? []).slice(0, 3);
  const highlights = (p.engineeringDecisions ?? []).slice(0, 3);
  return (
    <Reveal>
      <article className="group relative grid items-center gap-8 border-t border-line py-12 md:grid-cols-12 md:gap-12 md:py-16">
        <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
          <div className="overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
            <ProjectMedia
              image={p.coverImage}
              visual={p.visual}
              locale={locale}
              dict={dict}
              priority={index === 0}
              placeholderLabel={p.visibility === "confidential" ? dict.projectPage.confidentialArt : undefined}
              sizes="(min-width: 1280px) 56vw, (min-width: 768px) 58vw, 100vw"
              className="shadow-[var(--shadow-card)] transition-colors duration-300 group-hover:border-accent"
            />
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="text-accent">{String(index + 1).padStart(2, "0")}</span>
            <StatusBadge status={p.status} dict={dict} />
          </p>
          <p className="eyebrow mb-3">{t(p.category, locale)}</p>
          <h3 className="font-serif text-[clamp(1.9rem,1.3rem+1.8vw,3rem)] leading-[1.05] tracking-[-0.01em] text-balance">
            <Link href={href} className="after:absolute after:inset-0 after:content-['']">
              {t(p.title, locale)}
            </Link>
          </h3>
          <p className="mt-4 text-pretty text-muted">{t(p.summary, locale)}</p>
          {p.authorship && <p className="mt-3 border-s-2 border-line-strong ps-3 text-xs leading-relaxed text-subtle text-pretty">{t(p.authorship, locale)}</p>}
          {metrics.length > 0 && (
            <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-line py-4">
              {metrics.map((m) => (
                <div key={m.value + m.label.en}>
                  <dt className="font-serif text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] leading-none">{m.value}</dt>
                  <dd className="mt-1.5 text-xs leading-snug text-subtle">{t(m.label, locale)}</dd>
                </div>
              ))}
            </dl>
          )}
          {highlights.length > 0 && (
            <div className="mt-5">
              <p className="eyebrow mb-2">{dict.work.highlights}</p>
              <ul className="space-y-1.5 text-sm">
                {highlights.map((h) => (
                  <li key={h.title.en} className="relative ps-5 text-pretty before:absolute before:start-0 before:top-[0.8em] before:h-px before:w-3 before:bg-accent">
                    {t(h.title, locale)}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <TagList items={tl(p.technologies, locale).slice(0, 6)} className="mt-5" />
          <div className="relative z-10 mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
            <Link href={href} className="btn btn-primary">
              {dict.work.viewCase} <ArrowRight size={16} className="arrow" aria-hidden />
            </Link>
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
                {liveLabel} <ArrowUpRight size={15} aria-hidden />
                <span className="sr-only">({dict.a11y.external})</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectRow({ eyebrow, title, intro, projects: list, locale, dict, className }: { eyebrow: string; title: string; intro: string; projects: Project[]; locale: Locale; dict: Dictionary; className: string }) {
  return (
    <div className={className}>
      <Reveal className="mb-10 grid gap-4 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h3 className="font-serif text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)] leading-[1.1] text-balance">{title}</h3>
        </div>
        <p className="text-sm text-muted md:col-span-4 md:ps-6">{intro}</p>
      </Reveal>
      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
        {list.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} locale={locale} dict={dict} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Home page: two engineering flagships, a balanced row of live client sites, then a few showcases. */
export function SelectedWork({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const listed = projects.filter((p) => !p.archived);
  const flagship = listed.slice(0, FLAGSHIP_COUNT);
  const client = listed.slice(FLAGSHIP_COUNT, FLAGSHIP_COUNT + CLIENT_COUNT);
  const more = listed.slice(FLAGSHIP_COUNT + CLIENT_COUNT, FLAGSHIP_COUNT + CLIENT_COUNT + MORE_COUNT);

  return (
    <section id="work" aria-labelledby="work-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading index="01" id="work-title" eyebrow={dict.work.flagshipEyebrow} title={dict.work.flagshipTitle} intro={dict.work.flagshipIntro} />
        <div className="border-b border-line">
          {flagship.map((p, i) => (
            <Flagship key={p.slug} project={p} index={i} locale={locale} dict={dict} />
          ))}
        </div>

        <ProjectRow
          eyebrow={dict.work.clientEyebrow}
          title={dict.work.clientTitle}
          intro={dict.work.clientIntro}
          projects={client}
          locale={locale}
          dict={dict}
          className="mt-16 md:mt-24"
        />
        <ProjectRow
          eyebrow={dict.work.moreEyebrow}
          title={dict.work.moreTitle}
          intro={dict.work.moreIntro}
          projects={more}
          locale={locale}
          dict={dict}
          className="mt-20 md:mt-28"
        />
        <div className="mt-14 flex justify-center">
          <Link href={localePath(locale, "/projects")} className="btn">
            {dict.work.browseAll} <ArrowRight size={16} className="arrow" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
