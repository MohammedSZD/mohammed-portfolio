import Link from "next/link";
import { ArrowDown, ArrowRight, Download, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { profile } from "@/data/profile";
import { publicFileExists } from "@/lib/assets";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = localePath(locale, "/");
  const hasCv = publicFileExists(profile.cvPath);
  const [first, ...rest] = profile.name.split(" ");
  const roles = t(profile.positioning, locale);

  return (
    <section aria-labelledby="hero-title" className="relative pt-28 md:pt-36">
      <div className="container-x">
        <p className="hero-in eyebrow mb-8 flex flex-wrap items-center gap-x-3 gap-y-2" style={{ "--d": "0ms" } as React.CSSProperties}>
          <span className="relative inline-flex h-2 w-2 text-accent pulse-dot" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </span>
          {t(profile.headline, locale)}
          <span aria-hidden className="text-line-strong">/</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} aria-hidden /> {dict.hero.available}
          </span>
        </p>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1
              id="hero-title"
              className="display hero-in text-[clamp(3.4rem,11.5vw,9.5rem)] leading-[0.92] tracking-[-0.03em]"
              style={{ "--d": "80ms" } as React.CSSProperties}
            >
              <span className="block">{first}</span>
              <span className="block italic text-muted">{rest.join(" ")}</span>
            </h1>
            <p
              className="hero-in mt-8 max-w-[34ch] font-serif text-[clamp(1.6rem,1.1rem+2vw,2.6rem)] leading-[1.1] text-balance"
              style={{ "--d": "180ms" } as React.CSSProperties}
            >
              {t(profile.heroStatement, locale)}
            </p>
            <p
              className="hero-in mt-6 max-w-[58ch] text-base text-muted text-pretty md:text-lg"
              style={{ "--d": "260ms" } as React.CSSProperties}
            >
              {t(profile.heroDescription, locale)}
            </p>

            <div className="hero-in mt-10 flex flex-wrap items-center gap-3" style={{ "--d": "340ms" } as React.CSSProperties}>
              <Link href={`${home}#work`} className="btn btn-primary">
                {dict.hero.exploreWork} <ArrowDown size={16} className="arrow" aria-hidden />
              </Link>
              <Link href={`${home}#contact`} className="btn">
                {dict.hero.contact} <ArrowRight size={16} className="arrow" aria-hidden />
              </Link>
              {hasCv && (
                <a href={profile.cvPath} download className="btn">
                  <Download size={16} aria-hidden /> {dict.hero.downloadCv}
                </a>
              )}
              <span className="ms-1 flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub (${dict.a11y.external})`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-lg text-muted transition-colors hover:border-fg hover:text-fg"
                >
                  <GithubIcon />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`LinkedIn (${dict.a11y.external})`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line text-lg text-muted transition-colors hover:border-fg hover:text-fg"
                >
                  <LinkedinIcon />
                </a>
              </span>
            </div>
          </div>

          <aside className="hero-in lg:col-span-4 lg:pt-6" style={{ "--d": "420ms" } as React.CSSProperties} aria-label="Summary">
            <dl className="border-t border-line">
              {profile.facts.map((f) => (
                <div key={f.label.en} className="border-b border-line py-5">
                  <dt className="eyebrow mb-1.5">{t(f.label, locale)}</dt>
                  <dd className="text-[0.95rem] leading-snug">{t(f.value, locale)}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <ul className="hero-in mt-16 grid grid-cols-2 border-y border-line md:mt-24 md:grid-cols-4" style={{ "--d": "520ms" } as React.CSSProperties}>
          {roles.map((r, i) => (
            <li
              key={r}
              className={`flex items-center gap-3 px-1 py-5 text-sm md:px-5 md:first:ps-0 ${
                i > 0 ? "md:border-s md:border-line" : ""
              } ${i % 2 === 1 ? "border-s border-line ps-4 md:ps-5" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
