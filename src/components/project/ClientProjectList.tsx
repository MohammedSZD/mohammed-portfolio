import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { Reveal } from "@/components/ui/Reveal";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function ClientProjectList({ projects, locale, dict }: { projects: Project[]; locale: Locale; dict: Dictionary }) {
  if (!projects.length) return null;
  return (
    <div>
      <Reveal className="mb-8 grid gap-4 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="eyebrow mb-3">{dict.work.clientEyebrow}</p>
          <h3 className="font-serif text-[clamp(1.8rem,1.2rem+2vw,2.8rem)] leading-tight">{dict.work.clientTitle}</h3>
        </div>
        <p className="text-muted md:col-span-5">{dict.work.clientIntro}</p>
      </Reveal>
      <ul className="border-t border-line">
        {projects.map((p) => (
          <li key={p.slug}>
            <Reveal>
              <article className="group relative grid items-center gap-x-6 gap-y-2 border-b border-line py-6 transition-colors hover:bg-surface/60 md:grid-cols-12 md:px-3">
                <h4 className="font-serif text-2xl leading-tight md:col-span-4">
                  <Link href={localePath(locale, `/projects/${p.slug}`)} className="after:absolute after:inset-0 after:content-['']">
                    {p.shortTitle}
                  </Link>
                </h4>
                <p className="eyebrow md:col-span-3">{t(p.category, locale)}</p>
                <p className="line-clamp-2 text-sm text-muted md:col-span-3">{t(p.summary, locale)}</p>
                <div className="flex items-center justify-between gap-3 md:col-span-2 md:justify-end">
                  <StatusBadge status={p.status} dict={dict} />
                  <ArrowUpRight size={18} className="arrow-move text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" aria-hidden />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
