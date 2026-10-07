import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { profile } from "@/data/profile";
import { languages } from "@/data/languages";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const paragraphs = t(profile.summary, locale);
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="04" id="about-title" eyebrow={dict.about.eyebrow} title={dict.about.title} />
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <p className="font-serif text-[clamp(1.6rem,1.15rem+1.6vw,2.4rem)] leading-[1.2] text-balance">{paragraphs[0]}</p>
            <div className="mt-8 space-y-5 text-muted text-pretty">
              {paragraphs.slice(1).map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100} className="space-y-10 md:col-span-4 md:col-start-9">
            <div>
              <h3 className="eyebrow mb-3 text-accent">{dict.about.topfanTitle}</h3>
              <p className="text-sm text-muted text-pretty">{dict.about.topfanBody}</p>
            </div>
            <div>
              <h3 className="eyebrow mb-3">{dict.about.languagesTitle}</h3>
              <ul className="border-t border-line">
                {languages.map((l) => (
                  <li key={l.name.en} className="flex items-baseline justify-between border-b border-line py-3 text-sm">
                    <span>{t(l.name, locale)}</span>
                    <span className="text-muted">{t(l.level, locale)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow mb-3">{dict.about.basedIn}</h3>
              <p className="text-sm">{profile.location}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
