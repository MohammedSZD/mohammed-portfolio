import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { services } from "@/data/services";
import { getProject } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/** Seven focused offerings in a compact editorial list; each links to real portfolio examples. */
export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line bg-surface/50 py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          index="02"
          id="services-title"
          eyebrow={dict.services.eyebrow}
          title={dict.services.title}
          intro={dict.services.intro}
          action={
            <Link href={`${localePath(locale, "/")}#contact`} className="link inline-flex items-center gap-1.5 text-sm font-medium">
              {dict.services.cta} <ArrowRight size={15} aria-hidden />
            </Link>
          }
        />
        <ol className="border-t border-line">
          {services.map((s, i) => {
            const examples = s.examples.map((slug) => getProject(slug)).filter((p): p is NonNullable<typeof p> => !!p);
            return (
              <li key={s.id}>
                <Reveal>
                  <div className="grid gap-x-8 gap-y-2 border-b border-line py-5 transition-colors hover:bg-surface/70 md:grid-cols-12 md:items-baseline md:py-6">
                    <span className="font-mono text-xs text-accent md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-[clamp(1.3rem,1.1rem+0.7vw,1.7rem)] leading-snug md:col-span-4">{t(s.title, locale)}</h3>
                    <p className="text-[0.95rem] text-muted text-pretty md:col-span-4">{t(s.body, locale)}</p>
                    <ul aria-label={dict.services.examples} className="flex flex-wrap gap-x-4 gap-y-1 text-sm md:col-span-3 md:justify-end">
                      {examples.map((p) => (
                        <li key={p.slug}>
                          <Link href={localePath(locale, `/projects/${p.slug}`)} className="link inline-flex items-center gap-1 text-muted hover:text-fg">
                            {t(p.shortTitle, locale)} <ArrowRight size={13} aria-hidden />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
