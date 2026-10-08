import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Capabilities({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="capabilities" aria-labelledby="cap-title" className="border-t border-line bg-surface/50 py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="04" id="cap-title" eyebrow={dict.capabilities.eyebrow} title={dict.capabilities.title} intro={dict.capabilities.intro} />
        <dl>
          {skills.map((g) => (
            <Reveal key={g.id}>
              <div className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-10">
                <dt className="md:col-span-3">
                  <span className="font-serif text-2xl leading-tight">{t(g.title, locale)}</span>
                  {g.developing && (
                    <span className="eyebrow mt-2 block text-accent">{dict.capabilities.developing}</span>
                  )}
                  {g.note && <span className="mt-1 block text-xs text-subtle">{t(g.note, locale)}</span>}
                </dt>
                <dd className="md:col-span-9">
                  <ul className="flex flex-wrap gap-x-2 gap-y-2.5">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors hover:border-fg ${
                          g.developing ? "border-dashed border-line-strong text-muted" : "border-line text-fg"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
