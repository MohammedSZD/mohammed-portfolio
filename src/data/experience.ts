import type { ExperienceEntry } from "@/lib/types";

/** Display order = array order (prioritised, not strictly chronological). */
export const experience: ExperienceEntry[] = [
  {
    id: "med-mar",
    company: "Med-Mar Tuz San. Tic. A.Ş.",
    role: { en: "R&D Software Engineer", tr: "Ar-Ge Yazılım Mühendisi" },
    period: { en: "February 2026 – Present", tr: "Şubat 2026 – Günümüz" },
    current: true,
    emphasis: "primary",
    summary: {
      en: "Designing and building the company's web presence and major parts of an internal, Laravel-based factory management platform.",
    },
    highlightGroups: [
      {
        title: { en: "Corporate website" },
        items: { en: ["End-to-end design and development of the company's corporate website."] },
      },
      {
        title: { en: "Factory management platform" },
        items: {
          en: [
            "Major development on an internal Laravel-based factory management platform. Delivered core modules across 40+ database migrations and 15+ new views and interfaces during an eight-week sprint (May–June 2026).",
            "Designed and built a self-referencing industrial asset hierarchy — Factory → Unit → Section → Machine → Part → Sub-part — with dynamic, category-driven custom attributes, change and movement audit logging, and file/image attachments.",
            "Built maintenance work-order workflows linking jobs to machines, locations and personnel, with photo documentation, cost and spare-parts tracking, personnel assignment and search, and mobile-first reporting for factory staff.",
            "Built preventive-maintenance scheduling with daily, weekly, monthly, quarterly, biannual and annual recurrence, plus checklists and progress tracking, priorities and reminders, historical maintenance logs and reusable templates.",
            "Applied Laravel caching, Axios/AJAX asynchronous data fetching, mobile-first responsive interfaces and middleware-based role-based access control (RBAC).",
          ],
        },
      },
    ],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Axios / AJAX", "RBAC"],
  },
  {
    id: "nur-plastic",
    company: "Nur Plastic Company",
    role: { en: "Trading & Web Coordinator", tr: "Ticaret ve Web Koordinatörü" },
    period: { en: "2024 – January 2026", tr: "2024 – Ocak 2026" },
    emphasis: "compact",
    bullets: {
      en: [
        "Corporate website development and maintenance",
        "Digital identity, social media and content management",
        "Traffic and engagement analysis",
      ],
    },
  },
  {
    id: "freelance",
    company: "Freelance",
    role: { en: "Front-End Development Editor / WordPress", tr: "Front-End Geliştirme Editörü / WordPress" },
    period: { en: "2022 – Present", tr: "2022 – Günümüz" },
    current: true,
    emphasis: "compact",
    bullets: {
      en: ["WordPress websites", "Responsive design and UX improvements", "Ongoing maintenance"],
    },
  },
  {
    id: "maf-palestine",
    company: "MAF Palestine Consultative",
    role: { en: "Front-End Development Editor", tr: "Front-End Geliştirme Editörü" },
    period: { en: "2023 – 2024", tr: "2023 – 2024" },
    emphasis: "compact",
    bullets: {
      en: ["Web performance and browser compatibility", "UI/UX implementation", "API integrations"],
    },
  },
  {
    id: "unit-one",
    company: "Unit One Company",
    role: { en: "Web / Front-End Developer", tr: "Web / Front-End Geliştirici" },
    period: { en: "June 2021 – 2022", tr: "Haziran 2021 – 2022" },
    emphasis: "compact",
    bullets: {
      en: [
        "Website development and backend functionality",
        "Legacy-code optimisation and debugging",
        "Responsive, accessibility-focused frontend implementation",
      ],
    },
  },
  {
    id: "topfan",
    company: "TopFan League",
    role: { en: "Founder & Logistics Lead", tr: "Kurucu ve Lojistik Sorumlusu" },
    period: { en: "December 2023 – Present", tr: "Aralık 2023 – Günümüz" },
    current: true,
    emphasis: "compact",
    bullets: {
      en: [
        "Football community operations: weekly matches and tournaments",
        "Venue reservations, team coordination and logistics",
        "Media production — a technology/platform relaunch is in development",
      ],
    },
  },
];
