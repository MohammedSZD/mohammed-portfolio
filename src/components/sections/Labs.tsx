import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { labs } from "@/data/labs";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Labs({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="labs" aria-labelledby="labs-title" className="border-t border-line py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          index="07"
          id="labs-title"
          eyebrow={dict.labs.eyebrow}
          title={dict.labs.title}
          intro={dict.labs.intro}
          action={
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 text-sm font-medium">
              {dict.labs.github} <ArrowUpRight size={15} aria-hidden />
              <span className="sr-only">({dict.a11y.external})</span>
            </a>
          }
        />
        <Reveal>
          <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-12">
            {labs.map((l) => {
              const inner = (
                <>
                  <div className="min-w-0">
                    <p className="truncate font-mono text-sm">{l.repo}</p>
                    <p className="mt-1 text-sm text-muted">{t(l.description, locale)}</p>
                    {l.technologies && <p className="mt-1 font-mono text-[0.7rem] text-subtle">{l.technologies.join(" · ")}</p>}
                  </div>
                  <span className="eyebrow sm:shrink-0 sm:text-end">{dict.labs.kinds[l.kind]}</span>
                </>
              );
              return (
                <li key={l.repo} className="border-b border-line">
                  {l.repositoryUrl ? (
                    <a href={l.repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-2 py-5 transition-colors hover:text-accent sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      {inner}
                      <span className="sr-only">({dict.a11y.external})</span>
                    </a>
                  ) : (
                    <div className="flex flex-col gap-2 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
