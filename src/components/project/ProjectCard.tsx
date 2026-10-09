import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t, tl } from "@/i18n/localize";
import { publicFileExists } from "@/lib/assets";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagList } from "@/components/ui/Tag";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectCard({ project, locale, dict, priority = false }: { project: Project; locale: Locale; dict: Dictionary; priority?: boolean }) {
  const href = localePath(locale, `/projects/${project.slug}`);
  const live = project.liveUrl ?? project.liveUrls?.[0]?.url;
  const hasShot = project.coverImage ? publicFileExists(project.coverImage.src) : false;

  return (
    <article className="group relative flex h-full flex-col">
      <div className="overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <ProjectMedia
          image={project.coverImage}
          visual={project.visual}
          locale={locale}
          dict={dict}
          priority={priority}
          placeholderLabel={project.visibility === "confidential" ? dict.projectPage.confidentialArt : undefined}
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="transition-colors duration-300 group-hover:border-accent"
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <StatusBadge status={project.status} dict={dict} />
          {project.featured && <span className="eyebrow text-accent">{dict.card.featured}</span>}
          {!hasShot && project.visibility !== "confidential" && <span className="eyebrow">{dict.card.shotsPending}</span>}
        </div>
        <p className="eyebrow mb-2">{t(project.category, locale)}</p>
        <h3 className="font-serif text-[clamp(1.6rem,1.2rem+1.2vw,2.2rem)] leading-[1.08] tracking-[-0.01em]">
          <Link href={href} className="after:absolute after:inset-0 after:content-['']">
            {t(project.title, locale)}
          </Link>
        </h3>
        {project.tagline && <p className="mt-1.5 font-serif text-lg italic text-muted">{t(project.tagline, locale)}</p>}
        <p className="mt-3 line-clamp-4 text-pretty text-muted">{t(project.summary, locale)}</p>
        <TagList items={tl(project.technologies, locale).slice(0, 5)} className="mt-4" />

        <div className="relative z-10 mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 text-sm font-medium">
          <Link href={href} className="inline-flex items-center gap-1.5 rounded-full bg-fg px-4 py-2 text-bg transition-colors hover:bg-accent hover:text-on-accent">
            {dict.card.details}
          </Link>
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
              {project.cardLinkLabel ? t(project.cardLinkLabel, locale) : dict.card.liveDemo} <ArrowUpRight size={15} aria-hidden />
              <span className="sr-only">({dict.a11y.external})</span>
            </a>
          )}
          {project.repositoryUrl && (
            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
              <GithubIcon /> {dict.card.github}
              <span className="sr-only">({dict.a11y.external})</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
