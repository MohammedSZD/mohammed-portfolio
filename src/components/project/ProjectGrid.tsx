import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

/** Server wrapper: renders every (non-archived) project card once, featured first, and hands them to the filter. */
export function ProjectGrid({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const listed = projects.filter((p) => !p.archived);
  const ordered = [...listed.filter((p) => p.featured), ...listed.filter((p) => !p.featured)];
  const used = new Set(listed.flatMap((p) => p.categories));
  const order = ["e-commerce", "business-websites", "internal-systems", "web-applications", "in-development"] as const;

  const chips = [
    { id: "all", label: dict.categories.all },
    { id: "featured", label: dict.categories.featured },
    ...order.filter((c) => used.has(c)).map((c) => ({ id: c, label: dict.categories[c] })),
  ];

  const items = ordered.map((p, i) => ({
    slug: p.slug,
    featured: p.featured,
    categories: p.categories,
    searchText: [t(p.title, locale), p.shortTitle, t(p.summary, locale), t(p.category, locale), ...p.technologies].join(" ").toLowerCase(),
    node: <ProjectCard project={p} locale={locale} dict={dict} priority={i < 2} />,
  }));

  return <ProjectFilter items={items} labels={{ ...dict.filters, chips }} />;
}
