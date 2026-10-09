import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TagList } from "@/components/ui/Tag";

export function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const primary = experience.filter((e) => e.emphasis === "primary");
  const compact = experience.filter((e) => e.emphasis === "compact");

  return (
    <section id="experience" aria-labelledby="exp-title" className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <SectionHeading index="03" id="exp-title" eyebrow={dict.experience.eyebrow} title={dict.experience.title} />

        {primary.map((e) => (
          <Reveal key={e.id}>
            <article className="grid gap-8 border-y border-line py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <header className="md:col-span-4">
                <p className="eyebrow mb-4 flex items-center gap-2">
                  {e.current && <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">{dict.experience.current}</span>}
                  {t(e.period, locale)}
                </p>
                <h3 className="font-serif text-[clamp(2rem,1.4rem+2vw,3rem)] leading-[1.05]"><bdi dir={typeof e.company === "string" ? "ltr" : undefined}>{typeof e.company === "string" ? e.company : t(e.company, locale)}</bdi></h3>
                <p className="mt-2 text-lg text-muted">{t(e.role, locale)}</p>
                {e.tags && <TagList items={e.tags} className="mt-6" />}
              </header>
              <div className="md:col-span-8">
                {e.summary && <p className="mb-8 max-w-[60ch] text-lg text-pretty">{t(e.summary, locale)}</p>}
                <div className="space-y-8">
                  {e.highlightGroups?.map((g) => (
                    <div key={g.title.en}>
                      <h4 className="eyebrow mb-4 text-accent">{t(g.title, locale)}</h4>
                      <ul className="space-y-4">
                        {t(g.items, locale).map((item) => (
                          <li key={item} className="relative ps-6 text-muted text-pretty before:absolute before:start-0 before:top-[0.8em] before:h-px before:w-3 before:bg-line-strong">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}

        <ol className="relative">
          {compact.map((e) => (
            <li key={e.id}>
              <Reveal>
                <article className="grid gap-x-10 gap-y-3 border-b border-line py-7 md:grid-cols-12">
                  <p className="eyebrow md:col-span-3 md:pt-2">
                    {t(e.period, locale)}
                    {e.current && <span className="ms-2 text-accent">● {dict.experience.current}</span>}
                  </p>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl leading-tight"><bdi dir={typeof e.company === "string" ? "ltr" : undefined}>{typeof e.company === "string" ? e.company : t(e.company, locale)}</bdi></h3>
                    <p className="text-sm text-muted">{t(e.role, locale)}</p>
                  </div>
                  <ul className="space-y-1.5 text-sm text-muted md:col-span-5">
                    {e.bullets && t(e.bullets, locale).map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
