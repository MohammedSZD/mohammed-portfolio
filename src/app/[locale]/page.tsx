import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { t } from "@/i18n/localize";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { Capabilities } from "@/components/sections/Capabilities";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Labs } from "@/components/sections/Labs";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": `${siteUrl}/#person`,
              name: profile.name,
              jobTitle: t(profile.headline, locale),
              url: siteUrl,
              email: `mailto:${profile.email}`,
              address: { "@type": "PostalAddress", addressCountry: "TR" },
              sameAs: [profile.github, profile.linkedin],
              knowsAbout: ["Laravel", "Next.js", "React", "TypeScript", "Web application development", "Cybersecurity"],
              alumniOf: { "@type": "CollegeOrUniversity", name: "Bahçeşehir University" },
            },
            { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: profile.name, inLanguage: locale, publisher: { "@id": `${siteUrl}/#person` } },
          ],
        }}
      />
      <Hero locale={locale} dict={dict} />
      <SelectedWork locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Capabilities locale={locale} dict={dict} />
      <About locale={locale} dict={dict} />
      <Education locale={locale} dict={dict} />
      <Labs locale={locale} dict={dict} />
      <Contact locale={locale} dict={dict} />
    </>
  );
}
