import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { getProject } from "@/data/projects";
import { BeforeAfter } from "@/components/project/BeforeAfter";
import { Reveal } from "@/components/ui/Reveal";

/** Home-page teaser for the project that defines `comparison` (Zain El Deen Store). */
export function ThenAndNow({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = getProject("zain-el-deen-store");
  if (!p?.comparison) return null;
  const c = p.comparison;
  return (
    <section aria-labelledby="then-now-title" className="border-t border-line py-24 md:py-32">
      <div className="container-x">
        <Reveal className="mb-10 grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-4 text-accent">{dict.compare.eyebrow}</p>
            <h2 id="then-now-title" className="h-section text-balance">
              {t(c.title, locale)}
            </h2>
          </div>
          <p className="text-muted md:col-span-4 md:ps-6">{t(p.summary, locale)}</p>
        </Reveal>
        <Reveal>
          <BeforeAfter
            label={dict.compare.sliderLabel}
            before={{ src: c.before.src, alt: t(c.before.alt, locale), label: t(c.before.label, locale) }}
            after={{ src: c.after.src, alt: t(c.after.alt, locale), label: t(c.after.label, locale) }}
          />
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-subtle">{dict.compare.drag}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm font-medium">
              {p.liveUrls?.slice(0, 2).map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5">
                  {l.label} <ArrowUpRight size={15} aria-hidden />
                  <span className="sr-only">({dict.a11y.external})</span>
                </a>
              ))}
              <Link href={localePath(locale, `/projects/${p.slug}`)} className="btn btn-primary">
                {dict.compare.read} <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
