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

export function Services({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line bg-surface/50 py-24 md:py-36">
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
            const example = s.example ? getProject(s.example) : undefined;
            return (
              <li key={s.id}>
                <Reveal>
                  <div className="grid gap-x-10 gap-y-3 border-b border-line py-8 md:grid-cols-12">
                    <span className="font-mono text-xs text-accent md:col-span-1 md:pt-2">0{i + 1}</span>
                    <h3 className="font-serif text-[clamp(1.6rem,1.2rem+1.4vw,2.3rem)] leading-tight md:col-span-4">{t(s.title, locale)}</h3>
                    <p className="text-muted text-pretty md:col-span-5">{t(s.body, locale)}</p>
                    {example && (
                      <Link href={localePath(locale, `/projects/${example.slug}`)} className="link text-sm text-muted hover:text-fg md:col-span-2 md:text-end">
                        {example.shortTitle} →
                      </Link>
                    )}
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
