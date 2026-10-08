import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/project/ProjectGrid";

export function SelectedWork({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 md:py-36">
      <div className="container-x">
        <SectionHeading index="01" id="work-title" eyebrow={dict.work.gallerySection} title={dict.work.galleryTitle} intro={dict.work.galleryIntro} />
        <ProjectGrid locale={locale} dict={dict} />
      </div>
    </section>
  );
}
