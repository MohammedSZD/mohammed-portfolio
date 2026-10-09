import type { LList, LText } from "@/lib/types";

export const profile = {
  name: "Mohammed S. Zaineldeen",
  /** Display name per locale (the Latin form is used for metadata and structured data). */
  displayName: { en: "Mohammed S. Zaineldeen", ar: "محمد زين الدين" } satisfies LText,
  initials: "MZ",
  location: "Turkey",
  locationLabel: { en: "Turkey", tr: "Türkiye", ar: "تركيا" } satisfies LText,
  email: "mohammedszd99@gmail.com",
  github: "https://github.com/MohammedSZD",
  linkedin: "https://linkedin.com/in/mohammad-zaineldeen",
  /** Place the PDF here (see PORTFOLIO_CONTENT_GUIDE.md). The button only appears when the file exists. */
  cvPath: "/cv/Mohammed-Zaineldeen-CV.pdf",
  /** Phone is intentionally not published. */
  headline: {
    en: "Full-Stack Engineer & R&D Specialist",
    tr: "Full-Stack Mühendis ve Ar-Ge Uzmanı",
    ar: "مهندس برمجيات Full-Stack ومتخصص في البحث والتطوير",
  } satisfies LText,
  positioning: {
    en: ["Full-Stack Engineer", "R&D Software Engineer", "Software Product Builder", "Cybersecurity Master's Candidate"],
    tr: ["Full-Stack Mühendis", "Ar-Ge Yazılım Mühendisi", "Yazılım Ürünü Geliştirici", "Siber Güvenlik Yüksek Lisans Adayı"],
    ar: ["مهندس Full-Stack", "مهندس برمجيات للبحث والتطوير", "باني منتجات برمجية", "طالب ماجستير في الأمن السيبراني"],
  } satisfies LList,
  heroStatement: {
    en: "I build production software, end to end.",
    tr: "Üretim ortamında çalışan yazılımları uçtan uca geliştiriyorum.",
    ar: "أبني برمجيات جاهزة للإنتاج، من الفكرة حتى التسليم.",
  } satisfies LText,
  heroDescription: {
    en: "Full-stack software engineer building business websites, e-commerce platforms, dashboards and custom systems — with a foundation in cybersecurity and secure application design. R&D Software Engineer by day; available for selected freelance projects.",
    tr: "İş siteleri, e-ticaret platformları, paneller ve özel sistemler geliştiren bir full-stack yazılım mühendisiyim; siber güvenlik ve güvenli uygulama tasarımı temelim var. Gün içinde Ar-Ge Yazılım Mühendisiyim; seçili freelance projelere açığım.",
    ar: "مهندس برمجيات Full-Stack أبني مواقع الأعمال ومنصات التجارة الإلكترونية ولوحات المتابعة والأنظمة المخصصة، بأساس في الأمن السيبراني وتصميم التطبيقات الآمنة. أعمل مهندس برمجيات للبحث والتطوير، ومتاح لمشاريع مستقلة مختارة.",
  } satisfies LText,
  summary: {
    en: [
      "Full-stack software engineer with a foundation in cybersecurity, network security and secure application design.",
      "Experienced in architecting and shipping real systems end-to-end, including industrial management software, corporate and client websites, web applications, automation workflows and product platforms.",
      "Frontend work centres on React, Next.js and TypeScript; backend work on Laravel/PHP and API-driven systems. Additional experience spans AI-driven automation, QA/testing, databases and product development.",
    ],
    tr: [
      "Siber güvenlik, ağ güvenliği ve güvenli uygulama tasarımı temeline sahip bir full-stack yazılım mühendisiyim.",
      "Endüstriyel yönetim yazılımları, kurumsal ve müşteri web siteleri, web uygulamaları, otomasyon akışları ve ürün platformları dahil gerçek sistemleri uçtan uca tasarlayıp yayına alma deneyimim var.",
      "Ön yüzde React, Next.js ve TypeScript; arka yüzde Laravel/PHP ve API tabanlı sistemler üzerinde çalışıyorum. Ayrıca yapay zekâ destekli otomasyon, QA/test, veritabanları ve ürün geliştirme deneyimim bulunuyor.",
    ],
    ar: [
      "مهندس برمجيات Full-Stack بأساس في الأمن السيبراني وأمن الشبكات وتصميم التطبيقات الآمنة.",
      "لديّ خبرة في تصميم أنظمة حقيقية وتسليمها من البداية إلى النهاية، تشمل برمجيات إدارة صناعية ومواقع شركات وعملاء وتطبيقات ويب وسير عمل آلية ومنصات منتجات.",
      "تتركز أعمالي في الواجهات على React وNext.js وTypeScript، وفي الخلفية على Laravel/PHP والأنظمة القائمة على الواجهات البرمجية. ولديّ خبرة إضافية في الأتمتة بالذكاء الاصطناعي واختبار الجودة وقواعد البيانات وتطوير المنتجات.",
    ],
  } satisfies LList,
  /** Quick facts shown beside the hero. Only verified information. */
  facts: [
    {
      label: { en: "Currently", tr: "Şu anda", ar: "حاليًا" },
      value: {
        en: "R&D Software Engineer at Med-Mar Tuz San. Tic. A.Ş.",
        tr: "Med-Mar Tuz San. Tic. A.Ş.'de Ar-Ge Yazılım Mühendisi",
        ar: "مهندس برمجيات للبحث والتطوير في \u2066Med-Mar Tuz San. Tic. A.Ş.\u2069",
      },
    },
    {
      label: { en: "Studying", tr: "Eğitim", ar: "الدراسة" },
      value: {
        en: "M.S. Cybersecurity, Bahçeşehir University",
        tr: "Siber Güvenlik Yüksek Lisansı, Bahçeşehir Üniversitesi",
        ar: "ماجستير الأمن السيبراني، جامعة بهتشه شهير",
      },
    },
    {
      label: { en: "Core stack", tr: "Ana teknolojiler", ar: "التقنيات الأساسية" },
      value: { en: "Laravel · Next.js · React · TypeScript", tr: "Laravel · Next.js · React · TypeScript", ar: "Laravel · Next.js · React · TypeScript" },
    },
  ] satisfies { label: LText; value: LText }[],
};
