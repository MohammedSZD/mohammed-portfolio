import Link from "next/link";
import { ArrowUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { profile } from "@/data/profile";
import { navigation } from "@/data/navigation";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const home = localePath(locale, "/");
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-3xl leading-tight">{t(profile.displayName, locale)}</p>
          <p className="mt-3 text-sm text-muted">{t(profile.headline, locale)}</p>
          <p className="mt-1 text-sm text-subtle">{dict.footer.tagline}</p>
        </div>
        <nav aria-label={dict.a11y.footerNav} className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
          {navigation.map((n) => (
            <Link key={n.id} href={`${home}${n.hash}`} className="link hover:text-fg">
              {dict.nav[n.labelKey]}
            </Link>
          ))}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 hover:text-fg">
            <GithubIcon /> GitHub<span className="sr-only"> ({dict.a11y.external})</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-1.5 hover:text-fg">
            <LinkedinIcon /> LinkedIn<span className="sr-only"> ({dict.a11y.external})</span>
          </a>
        </nav>
      </div>
      <div className="container-x flex flex-col gap-3 border-t border-line py-6 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {t(profile.displayName, locale)}. {dict.footer.rights} {dict.footer.built}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-fg">
          {dict.footer.top} <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
