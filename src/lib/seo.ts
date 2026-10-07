import type { Metadata } from "next";
import { defaultLocale, localeLabels, locales, localePath, type Locale } from "@/i18n/config";
import { siteName, siteUrl } from "./site";

/** Canonical + hreflang alternates for a path like "/" or "/projects/medmar". */
export function alternatesFor(locale: Locale, path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[localeLabels[l].htmlLang] = `${siteUrl}${localePath(l, path)}`;
  languages["x-default"] = `${siteUrl}${localePath(defaultLocale, path)}`;
  return { canonical: `${siteUrl}${localePath(locale, path)}`, languages };
}

export function pageMetadata(opts: { locale: Locale; path: string; title: string; description: string; absoluteTitle?: boolean }): Metadata {
  const url = `${siteUrl}${localePath(opts.locale, opts.path)}`;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: alternatesFor(opts.locale, opts.path),
    openGraph: {
      type: "website",
      url,
      siteName,
      title: opts.title,
      description: opts.description,
      locale: localeLabels[opts.locale].og,
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}
