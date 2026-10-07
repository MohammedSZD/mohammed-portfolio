import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectCard({
  project,
  index,
  locale,
  dict,
  variant = "grid",
  delay = 0,
}: {
  project: Project;
  index: number;
  locale: Locale;
  dict: Dictionary;
  variant?: "lead" | "grid";
  delay?: number;
}) {
  const href = localePath(locale, `/projects/${project.slug}`);
  const lead = variant === "lead";
  const num = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={delay}>
      <article className="group relative flex h-full flex-col">
        <div className="overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
          <ProjectMedia
            image={project.coverImage}
            visual={project.visual}
            locale={locale}
            dict={dict}
            priority={lead}
            sizes={lead ? "(min-width: 1280px) 1200px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className={`transition-colors duration-300 group-hover:border-accent ${lead ? "md:aspect-[21/9]" : ""}`}
          />
        </div>

        <div className={`mt-6 grid gap-5 ${lead ? "md:grid-cols-12 md:gap-8" : ""}`}>
          <div className={lead ? "md:col-span-7" : ""}>
            <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="font-mono text-xs text-accent">{num}</span>
              <StatusBadge status={project.status} dict={dict} />
              <span className="eyebrow">{t(project.category, locale)}</span>
            </div>
            <h3 className={`font-serif leading-[1.05] tracking-[-0.01em] ${lead ? "text-[clamp(2rem,1.2rem+3vw,3.5rem)]" : "text-[clamp(1.7rem,1.2rem+1.6vw,2.4rem)]"}`}>
              <Link href={href} className="after:absolute after:inset-0 after:content-['']">
                {t(project.title, locale)}
              </Link>
            </h3>
            {project.tagline && <p className="mt-2 font-serif text-lg italic text-muted">{t(project.tagline, locale)}</p>}
          </div>

          <div className={lead ? "md:col-span-5" : ""}>
            <p className="text-pretty text-muted">{t(project.summary, locale)}</p>
            <TagList items={project.technologies.slice(0, lead ? 7 : 5)} className="mt-4" />
            {lead && project.metrics && (
              <dl className="mt-6 grid grid-cols-4 gap-3 border-t border-line pt-5">
                {project.metrics.map((m) => (
                  <div key={m.value + m.label.en}>
                    <dt className="font-serif text-2xl leading-none md:text-3xl">{m.value}</dt>
                    <dd className="mt-1.5 text-[0.7rem] leading-tight text-subtle">{t(m.label, locale)}</dd>
                  </div>
                ))}
              </dl>
            )}
            <p className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
              <span className="link">{dict.work.viewCase}</span>
              <ArrowUpRight size={16} className="arrow-move transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
