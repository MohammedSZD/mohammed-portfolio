import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Amiri, IBM_Plex_Sans_Arabic, Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../globals.css";
import { isLocale, localeDirection, localeLabels, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteUrl } from "@/lib/site";
import { profile } from "@/data/profile";
import { pageMetadata } from "@/lib/seo";

const serif = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

/* Arabic faces: loaded lazily via unicode-range, so they are only downloaded when Arabic text is on the page. */
const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-arabic",
  display: "swap",
  preload: false,
});
const arabicSerif = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

/** Runs before first paint: sets the theme (stored choice, else OS preference) and flags JS availability. */
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}d.setAttribute('data-theme',t)})();`;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f3ed" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1b19" },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: dict.meta.siteTitle, template: `%s — ${profile.name}` },
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.github }],
    creator: profile.name,
    keywords:
      locale === "ar"
        ? ["مهندس برمجيات", "مطور Full-Stack", "مطور Laravel", "مطور React", "مطور Next.js", "تطوير مواقع الويب", "تطوير تطبيقات الويب", "متجر إلكتروني"]
        : ["Full-Stack Engineer", "Software Engineer", "Laravel Developer", "React Developer", "Next.js Developer", "R&D Software Engineer", "Web Application Development"],
    ...pageMetadata({ locale, path: "/", title: dict.meta.siteTitle, description: dict.meta.siteDescription, absoluteTitle: true }),
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html
      lang={localeLabels[locale].htmlLang}
      dir={localeDirection[locale]}
      className={`${GeistSans.variable} ${GeistMono.variable} ${serif.variable} ${arabicSans.variable} ${arabicSerif.variable}`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-fg focus:px-5 focus:py-3 focus:text-bg"
        >
          {dict.a11y.skip}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
