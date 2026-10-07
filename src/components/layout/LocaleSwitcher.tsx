"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { defaultLocale, localeLabels, locales, localePath, type Locale } from "@/i18n/config";

/** Strips a leading locale segment so the same page can be linked in another locale. */
function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname || "/";
}

export function LocaleSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const base = stripLocale(pathname);
  return (
    <nav aria-label={label} className="flex items-center rounded-full border border-line p-0.5 font-mono text-[0.7rem] tracking-wider">
      {locales.map((l) => (
        <Link
          key={l}
          href={localePath(l, base)}
          hrefLang={localeLabels[l].htmlLang}
          lang={localeLabels[l].htmlLang}
          aria-current={l === current ? "true" : undefined}
          title={localeLabels[l].native}
          className={`rounded-full px-2.5 py-1.5 transition-colors ${
            l === current ? "bg-fg text-bg" : "text-muted hover:text-fg"
          }`}
        >
          {localeLabels[l].short}
        </Link>
      ))}
    </nav>
  );
}
