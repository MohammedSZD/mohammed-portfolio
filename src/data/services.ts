import type { LText } from "@/lib/types";

export interface Service {
  id: string;
  title: LText;
  body: LText;
  /** Slugs of projects that demonstrate this service (first one is the primary example). */
  examples: string[];
}

/**
 * Seven focused offerings. Every example is a real project in `projects.ts`;
 * the status of each project (production, demo, in development…) is shown on its own page.
 */
export const services: Service[] = [
  {
    id: "business-websites",
    title: { en: "Business & corporate websites", tr: "Kurumsal ve iş web siteleri", ar: "مواقع الشركات والأعمال" },
    body: {
      en: "Fast, responsive company and brand websites — bilingual where needed — with clean structure, SEO fundamentals and clear calls to action.",
      tr: "Hızlı ve duyarlı kurumsal ve marka web siteleri — gerekirse çok dilli — temiz yapı, SEO temelleri ve net eylem çağrıları ile.",
      ar: "مواقع سريعة ومتجاوبة للشركات والعلامات التجارية، ثنائية اللغة عند الحاجة، ببنية واضحة وأساسيات تحسين محركات البحث ووضوح في دعوات اتخاذ الإجراء.",
    },
    examples: ["galaxs-team", "restaurant-website"],
  },
  {
    id: "e-commerce",
    title: { en: "E-commerce platforms", tr: "E-ticaret platformları", ar: "منصات التجارة الإلكترونية" },
    body: {
      en: "Storefronts and catalogues with search, filters and product pages, and commerce platform architecture — storefront, admin, inventory and orders.",
      tr: "Arama, filtre ve ürün sayfaları olan vitrinler ve kataloglar; ayrıca vitrin, yönetim paneli, stok ve siparişleri kapsayan e-ticaret platformu mimarisi.",
      ar: "واجهات متاجر وكتالوجات مع بحث وتصفية وصفحات منتجات، وبنية منصات تجارة تشمل المتجر ولوحة الإدارة والمخزون والطلبات.",
    },
    examples: ["zain-el-deen-store", "lale"],
  },
  {
    id: "industrial-systems",
    title: { en: "Industrial & company management systems", tr: "Endüstriyel ve şirket yönetim sistemleri", ar: "أنظمة إدارة المصانع والشركات" },
    body: {
      en: "Role-based internal platforms for operations — asset tracking, work orders, preventive maintenance, finance and reporting — for the desktop and for staff on phones.",
      tr: "Operasyonlar için rol tabanlı kurum içi platformlar — varlık takibi, iş emirleri, önleyici bakım, finans ve raporlama — masaüstü ve telefondaki personel için.",
      ar: "منصات داخلية قائمة على الأدوار للعمليات: تتبع الأصول وأوامر العمل والصيانة الوقائية والمالية والتقارير، لسطح المكتب وللعاملين عبر هواتفهم.",
    },
    examples: ["medmar", "topfan-os"],
  },
  {
    id: "travel",
    title: { en: "Travel & tourism websites", tr: "Seyahat ve turizm web siteleri", ar: "مواقع السياحة والسفر" },
    body: {
      en: "Destination and tour catalogues with trip search, filters, pricing presentation and WhatsApp contact — in English and Arabic.",
      tr: "Gezi arama, filtreler, fiyat sunumu ve WhatsApp iletişimi olan destinasyon ve tur katalogları — İngilizce ve Arapça.",
      ar: "كتالوجات وجهات ورحلات مع بحث وتصفية وعرض للأسعار وتواصل عبر واتساب، بالعربية والإنجليزية.",
    },
    examples: ["flyget-travel"],
  },
  {
    id: "clinics",
    title: { en: "Clinic & healthcare websites", tr: "Klinik ve sağlık web siteleri", ar: "مواقع العيادات والرعاية الصحية" },
    body: {
      en: "Conversion-focused, bilingual clinic websites with consultation forms, WhatsApp contact and RTL Arabic.",
      tr: "Danışma formları, WhatsApp iletişimi ve RTL Arapça içeren, dönüşüm odaklı iki dilli klinik web siteleri.",
      ar: "مواقع عيادات ثنائية اللغة تركز على التحويل، مع نماذج استشارة وتواصل عبر واتساب ودعم كامل للعربية من اليمين إلى اليسار.",
    },
    examples: ["hair-clinic", "podoclinic"],
  },
  {
    id: "web-apps",
    title: { en: "Custom web applications & dashboards", tr: "Özel web uygulamaları ve paneller", ar: "تطبيقات ويب ولوحات متابعة مخصصة" },
    body: {
      en: "Full-stack applications with React, Next.js, Laravel and Supabase, with access control designed in from the start.",
      tr: "React, Next.js, Laravel ve Supabase ile geliştirilen, erişim denetimi en baştan tasarlanmış full-stack uygulamalar.",
      ar: "تطبيقات Full-Stack باستخدام React وNext.js وLaravel وSupabase، مع تصميم صلاحيات الوصول منذ البداية.",
    },
    examples: ["topfan-os", "mini-ecommerce"],
  },
  {
    id: "automation",
    title: { en: "Automation, integrations & workflows", tr: "Otomasyon, entegrasyon ve iş akışları", ar: "الأتمتة والتكاملات وسير العمل" },
    body: {
      en: "n8n workflows, scheduling and CRM integrations, and AI-API processing that turns messages into structured data.",
      tr: "n8n iş akışları, planlama ve CRM entegrasyonları ve mesajları yapılandırılmış veriye çeviren yapay zekâ API işleme.",
      ar: "سير عمل n8n وتكاملات الجدولة وأنظمة CRM، ومعالجة عبر واجهات الذكاء الاصطناعي تحوّل الرسائل إلى بيانات منظمة.",
    },
    examples: ["ai-automation"],
  },
];
