export const locales = ["en", "tr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Text direction per locale. Add "ar" here (and a dictionary) to enable RTL later. */
export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  tr: "ltr",
};

export const localeLabels: Record<Locale, { short: string; native: string; htmlLang: string; og: string }> = {
  en: { short: "EN", native: "English", htmlLang: "en", og: "en_US" },
  tr: { short: "TR", native: "Türkçe", htmlLang: "tr", og: "tr_TR" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Builds a URL for a locale. English lives at the root; other locales are prefixed.
 * Accepts paths like "/", "/projects/medmar", "/#work".
 */
export function localePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}
