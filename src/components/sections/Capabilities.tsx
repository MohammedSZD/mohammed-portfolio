import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Capabilities({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="capabilities" aria-labelledby="cap-title" className="border-t border-line bg-surface/50 py-20 md:py-28">
      <div className="container-x">
        <SectionHeading index="04" id="cap-title" eyebrow={dict.capabilities.eyebrow} title={dict.capabilities.title} intro={dict.capabilities.intro} />
        <ul>
          {skills.map((g) => (
            <li key={g.id}>
              <Reveal>
                <div className="grid gap-3 border-t border-line py-7 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-2xl leading-tight">{t(g.title, locale)}</h3>
                    {g.developing && <span className="eyebrow mt-2 block text-accent">{dict.capabilities.developing}</span>}
                    {g.note && <span className="mt-1 block text-xs text-subtle">{t(g.note, locale)}</span>}
                  </div>
                  <div className="md:col-span-9">
                    <ul className="flex flex-wrap gap-x-2 gap-y-2.5">
                      {g.items.map((raw) => {
                        const item = typeof raw === "string" ? raw : t(raw, locale);
                        return (
                          <li
                            key={item}
                            dir={typeof raw === "string" ? "ltr" : undefined}
                            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors hover:border-fg ${
                              g.developing ? "border-dashed border-line-strong text-muted" : "border-line text-fg"
                            }`}
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
