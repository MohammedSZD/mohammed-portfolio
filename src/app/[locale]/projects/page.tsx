import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { pageMetadata } from "@/lib/seo";
import { ProjectGrid } from "@/components/project/ProjectGrid";
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
      <div className="container-x pb-24 pt-28 md:pb-32 md:pt-36">
        <p className="eyebrow hero-in mb-5">{dict.work.gallerySection}</p>
        <h1 className="h-section hero-in mb-12 max-w-[18ch] text-balance md:mb-16" style={{ "--d": "80ms" } as React.CSSProperties}>
          {dict.meta.projectsTitle}
        </h1>
        <h2 className="sr-only">{dict.work.galleryTitle}</h2>
        <ProjectGrid locale={locale} dict={dict} />
      </div>
      <Labs locale={locale} dict={dict} />
    </>
  );
}
