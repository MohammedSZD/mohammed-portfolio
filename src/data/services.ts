import type { LText } from "@/lib/types";

export interface Service {
  id: string;
  title: LText;
  body: LText;
  /** Slug of a project that demonstrates this service. */
  example?: string;
}

export const services: Service[] = [
  {
    id: "business-websites",
    title: { en: "Business websites", tr: "Kurumsal web siteleri" },
    body: {
      en: "Fast, responsive company and brand websites — bilingual where needed — with clean structure, SEO fundamentals and conversion or lead tracking.",
      tr: "Hızlı ve duyarlı kurumsal ve marka web siteleri — gerekirse çok dilli — temiz yapı, SEO temelleri ve dönüşüm ya da potansiyel müşteri takibi ile.",
    },
    example: "galaxs-team",
  },
  {
    id: "e-commerce",
    title: { en: "E-commerce platforms", tr: "E-ticaret platformları" },
    body: {
      en: "Storefronts and catalogs with search, filters, product pages and content management, built on Next.js or Laravel depending on the need.",
      tr: "Arama, filtreler, ürün sayfaları ve içerik yönetimi olan vitrin ve katalog çözümleri; ihtiyaca göre Next.js veya Laravel ile.",
    },
    example: "zain-el-deen-store",
  },
  {
    id: "dashboards",
    title: { en: "Dashboards & internal systems", tr: "Panolar ve kurum içi sistemler" },
    body: {
      en: "Role-based internal platforms for operations — asset tracking, work orders, scheduling and reporting — designed for desktop and for staff on phones.",
      tr: "Operasyonlar için rol tabanlı kurum içi platformlar — varlık takibi, iş emirleri, planlama ve raporlama — masaüstü ve telefondaki personel için tasarlanmış.",
    },
    example: "medmar",
  },
  {
    id: "custom-systems",
    title: { en: "Custom web applications", tr: "Özel web uygulamaları" },
    body: {
      en: "Full-stack applications with React, Next.js, Laravel and API integrations, built with secure application design in mind.",
      tr: "React, Next.js, Laravel ve API entegrasyonlarıyla, güvenli uygulama tasarımı gözetilerek geliştirilen full-stack uygulamalar.",
    },
    example: "mini-ecommerce",
  },
  {
    id: "automation",
    title: { en: "Automation & integrations", tr: "Otomasyon ve entegrasyonlar" },
    body: {
      en: "n8n workflows, scheduling and CRM integrations, and AI-API processing that turns messages into structured data.",
      tr: "n8n iş akışları, planlama ve CRM entegrasyonları ve mesajları yapılandırılmış veriye çeviren yapay zekâ API işleme.",
    },
    example: "ai-automation",
  },
];
