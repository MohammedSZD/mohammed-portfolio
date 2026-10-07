import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { getProject, projects } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { localePath } from "@/i18n/config";
import { CaseStudy } from "@/components/project/CaseStudy";
import { JsonLd } from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((p) => ({ locale, slug: p.slug })));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) return {};
  return pageMetadata({
    locale,
    path: `/projects/${slug}`,
    title: t(project.title, locale),
    description: t(project.summary, locale),
  });
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();
  const dict = getDictionary(locale);
  const url = `${siteUrl}${localePath(locale, `/projects/${slug}`)}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "CreativeWork",
              name: t(project.title, locale),
              description: t(project.summary, locale),
              url,
              inLanguage: locale,
              author: { "@type": "Person", name: profile.name, url: siteUrl },
              ...(project.year ? { dateCreated: project.year } : {}),
              ...(project.technologies.length ? { keywords: project.technologies.join(", ") } : {}),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: profile.name, item: `${siteUrl}${localePath(locale, "/")}` },
                { "@type": "ListItem", position: 2, name: dict.meta.projectsTitle, item: `${siteUrl}${localePath(locale, "/projects")}` },
                { "@type": "ListItem", position: 3, name: t(project.title, locale), item: url },
              ],
            },
          ],
        }}
      />
      <CaseStudy project={project} locale={locale} dict={dict} />
    </>
  );
}
