import type { LList, LText } from "@/lib/types";

export const profile = {
  name: "Mohammed S. Zaineldeen",
  initials: "MZ",
  location: "Turkey",
  email: "mohammedszd99@gmail.com",
  github: "https://github.com/MohammedSZD",
  linkedin: "https://linkedin.com/in/mohammad-zaineldeen",
  /** Place the PDF here (see PORTFOLIO_CONTENT_GUIDE.md). The button only appears when the file exists. */
  cvPath: "/cv/Mohammed-Zaineldeen-CV.pdf",
  /** Phone is intentionally not published. */
  headline: {
    en: "Full-Stack Engineer & R&D Specialist",
    tr: "Full-Stack Mühendis ve Ar-Ge Uzmanı",
  } satisfies LText,
  positioning: {
    en: ["Full-Stack Engineer", "R&D Software Engineer", "Software Product Builder", "Cybersecurity Master's Candidate"],
    tr: ["Full-Stack Mühendis", "Ar-Ge Yazılım Mühendisi", "Yazılım Ürünü Geliştirici", "Siber Güvenlik Yüksek Lisans Adayı"],
  } satisfies LList,
  heroStatement: {
    en: "I build production software, end to end.",
    tr: "Üretim ortamında çalışan yazılımları uçtan uca geliştiriyorum.",
  } satisfies LText,
  heroDescription: {
    en: "Full-stack engineer with a foundation in cybersecurity and secure application design. I architect and ship real systems — industrial management software, client websites, web applications and automation workflows.",
    tr: "Siber güvenlik ve güvenli uygulama tasarımı temelli bir full-stack mühendisiyim. Endüstriyel yönetim yazılımları, kurumsal web siteleri, web uygulamaları ve otomasyon akışları gibi gerçek sistemleri tasarlayıp yayına alıyorum.",
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
  } satisfies LList,
  /** Quick facts shown beside the hero. Only verified information. */
  facts: [
    {
      label: { en: "Currently", tr: "Şu anda" },
      value: {
        en: "R&D Software Engineer at Med-Mar Tuz San. Tic. A.Ş.",
        tr: "Med-Mar Tuz San. Tic. A.Ş.'de Ar-Ge Yazılım Mühendisi",
      },
    },
    {
      label: { en: "Studying", tr: "Eğitim" },
      value: {
        en: "M.S. Cybersecurity, Bahçeşehir University",
        tr: "Siber Güvenlik Yüksek Lisansı, Bahçeşehir Üniversitesi",
      },
    },
    {
      label: { en: "Core stack", tr: "Ana teknolojiler" },
      value: { en: "Laravel · Next.js · React · TypeScript", tr: "Laravel · Next.js · React · TypeScript" },
    },
  ] satisfies { label: LText; value: LText }[],
};
