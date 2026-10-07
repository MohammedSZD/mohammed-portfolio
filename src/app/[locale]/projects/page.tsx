import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";
import { clientProjects, featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ClientProjectList } from "@/components/project/ClientProjectList";
import { Labs } from "@/components/sections/Labs";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return pageMetadata({ locale, path: "/projects", title: dict.meta.projectsTitle, description: dict.meta.projectsDescription });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
    <div className="container-x pb-24 pt-28 md:pb-36 md:pt-36">
      <p className="eyebrow hero-in mb-5">{dict.work.eyebrow}</p>
      <h1 className="h-section hero-in mb-16 max-w-[18ch] text-balance md:mb-24" style={{ "--d": "80ms" } as React.CSSProperties}>
        {dict.meta.projectsTitle}
      </h1>
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} locale={locale} dict={dict} delay={(i % 2) * 90} />
        ))}
      </div>
      <div className="mt-24 md:mt-32">
        <ClientProjectList projects={clientProjects} locale={locale} dict={dict} />
      </div>
    </div>
    <Labs locale={locale} dict={dict} />
    </>
  );
}
