import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="education" aria-labelledby="edu-title" className="border-t border-line bg-surface/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="05" id="edu-title" eyebrow={dict.education.eyebrow} title={dict.education.title} />
        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <Reveal>
            <h3 className="eyebrow mb-6">{dict.education.degrees}</h3>
            <ul className="border-t border-line">
              {education.map((e) => (
                <li key={e.id} className="border-b border-line py-6">
                  <p className="eyebrow mb-2 flex items-center gap-2">
                    {e.period}
                    {e.status === "in-progress" && (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">{dict.education.inProgress}</span>
                    )}
                  </p>
                  <p className="font-serif text-2xl leading-tight">{t(e.degree, locale)}</p>
                  <p className="text-sm text-muted">{e.institution}</p>
                  {e.details && (
                    <div className="mt-4">
                      <p className="mb-2 text-xs text-subtle">{t(e.details.title, locale)}</p>
                      <ul className="flex flex-wrap gap-2">
                        {t(e.details.items, locale).map((i) => (
                          <li key={i} className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <h3 className="eyebrow mb-6">{dict.education.certifications}</h3>
            <ul className="border-t border-line">
              {certifications.map((c) => (
                <li key={c.id} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <div>
                    <p className="font-serif text-xl leading-tight">{c.title}</p>
                    {c.issuer && <p className="text-sm text-muted">{c.issuer}</p>}
                  </div>
                  {c.year && <span className="font-mono text-xs text-subtle">{c.year}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
