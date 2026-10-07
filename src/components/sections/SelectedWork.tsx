import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { localePath } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { clientProjects, featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ClientProjectList } from "@/components/project/ClientProjectList";

export function SelectedWork({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [lead, ...rest] = featuredProjects;
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          index="01"
          id="work-title"
          eyebrow={dict.work.eyebrow}
          title={dict.work.title}
          intro={dict.work.intro}
          action={
            <Link href={localePath(locale, "/projects")} className="link inline-flex items-center gap-1.5 text-sm font-medium">
              {dict.work.allProjects} <ArrowRight size={15} aria-hidden />
            </Link>
          }
        />

        {lead && <ProjectCard project={lead} index={0} locale={locale} dict={dict} variant="lead" />}

        <div className="mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i + 1} locale={locale} dict={dict} delay={(i % 2) * 90} />
          ))}
        </div>

        <div className="mt-28 md:mt-36">
          <ClientProjectList projects={clientProjects} locale={locale} dict={dict} />
        </div>
      </div>
    </section>
  );
}
