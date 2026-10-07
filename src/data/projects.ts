import type { Project } from "@/lib/types";

/**
 * All case-study content lives here. Display order = array order.
 * To add a project: add its images under /public/projects/<slug>/ and append one object.
 * Fields marked optional in `Project` can simply be left out — empty sections are not rendered.
 */
export const projects: Project[] = [
  /* ───────────────────────────── FEATURED ───────────────────────────── */
  {
    slug: "medmar",
    title: { en: "MEDMAR — Factory Management System" },
    shortTitle: "MEDMAR",
    category: { en: "Industrial Software / Internal Platform", tr: "Endüstriyel Yazılım / Kurum İçi Platform" },
    summary: {
      en: "An internal Laravel platform that models a factory's physical assets and runs its maintenance operations — from asset hierarchy and work orders to preventive schedules and mobile reporting for floor staff.",
    },
    description: {
      en: [
        "MEDMAR is the internal factory management platform at Med-Mar Tuz San. Tic. A.Ş. I contributed major development as R&D Software Engineer, delivering its core modules during an eight-week sprint in May–June 2026.",
        "The platform represents the plant as a single asset hierarchy and builds maintenance operations on top of it: work orders, preventive schedules, spare-parts and cost tracking, and mobile-first reporting for the people on the factory floor.",
      ],
    },
    status: "production",
    statusNote: { en: "Internal company system in production use at Med-Mar. Not publicly accessible." },
    year: "2026",
    role: { en: "R&D Software Engineer · Full-Stack Development" },
    client: "Med-Mar Tuz San. Tic. A.Ş.",
    featured: true,
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Axios / AJAX", "PWA concepts"],
    responsibilities: {
      en: [
        "Designed and built core platform modules end to end — database, backend, and interface",
        "Modelled the asset hierarchy and its audit trail",
        "Built work-order and preventive-maintenance workflows",
        "Implemented role-based access control and mobile-first interfaces",
      ],
    },
    challenges: {
      en: [
        "Represent a plant's equipment — from the whole factory down to sub-parts — in one consistent, navigable structure.",
        "Different categories of equipment need different data, without a new screen or schema for each.",
        "Keep a trustworthy history of what changed and where equipment moved.",
        "Let factory staff report and document work from the floor, on their phones.",
        "Schedule recurring preventive maintenance across very different cadences.",
      ],
    },
    solutions: {
      en: [
        "A self-referencing hierarchy — Factory → Unit → Section → Machine → Part → Sub-part — with dynamic, category-driven custom attributes.",
        "Change and movement audit logging, plus file and image attachments on assets.",
        "Work orders linked to machines, locations and personnel, with photo documentation and mobile-first reporting.",
        "A preventive-maintenance scheduler with six recurrence intervals, checklists, reminders and reusable templates.",
      ],
    },
    keyFeatures: [
      { title: { en: "Asset hierarchy" }, description: { en: "Six-level, self-referencing structure with category-driven custom attributes." } },
      { title: { en: "Audit logging" }, description: { en: "Change and movement history for every asset." } },
      { title: { en: "Maintenance work orders" }, description: { en: "Jobs linked to machines, locations and personnel, with photo documentation." } },
      { title: { en: "Cost & spare-parts tracking" }, description: { en: "Costs and parts recorded against maintenance work." } },
      { title: { en: "Preventive maintenance" }, description: { en: "Daily, weekly, monthly, quarterly, biannual and annual recurrence with checklists and reminders." } },
      { title: { en: "Reusable templates" }, description: { en: "Maintenance templates and historical logs." } },
      { title: { en: "Personnel assignment & search" } },
      { title: { en: "Mobile-first reporting" }, description: { en: "Designed for factory staff reporting from the floor." } },
      { title: { en: "Role-based access control" }, description: { en: "Middleware-based RBAC." } },
    ],
    engineeringDecisions: [
      {
        title: { en: "One self-referencing hierarchy" },
        body: { en: "A single self-referencing structure models every level from factory to sub-part, so depth is a property of the data rather than of separate screens." },
      },
      {
        title: { en: "Dynamic, category-driven attributes" },
        body: { en: "Attributes are defined per equipment category, so different kinds of assets can carry different information." },
      },
      {
        title: { en: "Audit trail by design" },
        body: { en: "Changes and movements are logged, giving maintenance history a reliable source." },
      },
      {
        title: { en: "Fast, responsive interfaces" },
        body: { en: "Laravel caching and Axios/AJAX asynchronous fetching, in mobile-first responsive views." },
      },
      {
        title: { en: "Access control in middleware" },
        body: { en: "Role-based access control is enforced at the middleware layer." },
      },
    ],
    metrics: [
      { value: "40+", label: { en: "database migrations" } },
      { value: "15+", label: { en: "new views & interfaces" } },
      { value: "8 wks", label: { en: "May–June 2026 sprint" } },
      { value: "6", label: { en: "asset hierarchy levels" } },
    ],
    architecture: {
      summary: { en: "High-level overview only. Internal structure is confidential." },
      layers: [
        { label: { en: "Interface" }, items: ["Bootstrap", "Mobile-first views", "PWA concepts"] },
        { label: { en: "Client logic" }, items: ["JavaScript", "Axios / AJAX"] },
        { label: { en: "Application" }, items: ["Laravel", "PHP", "Middleware RBAC", "Laravel caching"] },
        { label: { en: "Data" }, items: ["MySQL", "Audit logging"] },
      ],
    },
    outcomes: {
      en: [
        "Core platform modules delivered within an eight-week sprint (May–June 2026).",
        "Used internally at Med-Mar — source code, data and internal URLs are intentionally not shown.",
      ],
    },
    visibility: "confidential",
    confidentialityNote: {
      en: "This is a confidential internal company system. Source code, credentials, database structure, employee data and internal URLs are not shared. Any imagery on this page is illustrative or sanitised.",
    },
    coverImage: { src: "/projects/medmar/cover.webp", alt: { en: "MEDMAR factory management system — interface overview" } },
    gallery: [
      { src: "/projects/medmar/01.webp", alt: { en: "MEDMAR asset hierarchy view" }, caption: { en: "Asset hierarchy" } },
      { src: "/projects/medmar/02.webp", alt: { en: "MEDMAR maintenance work order view" }, caption: { en: "Maintenance work orders" } },
      { src: "/projects/medmar/03.webp", alt: { en: "MEDMAR preventive maintenance scheduling" }, caption: { en: "Preventive maintenance scheduling" } },
      { src: "/projects/medmar/04.webp", alt: { en: "MEDMAR mobile reporting" }, caption: { en: "Mobile-first reporting" } },
    ],
    related: ["lale", "topfan-os"],
    visual: "hierarchy",
  },
  {
    slug: "lale",
    title: { en: "LALE — Fashion E-Commerce Platform" },
    shortTitle: "LALE",
    category: { en: "E-Commerce / Product Platform", tr: "E-Ticaret / Ürün Platformu" },
    summary: {
      en: "A fashion e-commerce platform designed as a monorepo — storefront, admin, API and background worker — with inventory, orders, returns and localization at its core.",
    },
    description: {
      en: [
        "LALE is a fashion e-commerce platform currently in development. It is architected as a monorepo of Next.js and React front-ends, a NestJS API and a worker service, backed by PostgreSQL through Prisma.",
        "The product scope covers the storefront and an admin area, catalog and inventory management, order and returns workflows, and growth tooling such as coupons, loyalty, analytics, localization and SEO.",
      ],
    },
    status: "in-development",
    statusNote: {
      en: "In development. The scope below describes the product design — it is not a list of launched functionality. Integrations and try-on features are planned.",
    },
    role: { en: "Product & engineering" },
    featured: true,
    technologies: ["Next.js", "React", "NestJS", "PostgreSQL", "Prisma", "Worker service", "Monorepo"],
    keyFeatures: [
      { title: { en: "Storefront" } },
      { title: { en: "Admin" } },
      { title: { en: "API" } },
      { title: { en: "Inventory" } },
      { title: { en: "Product & catalog management" } },
      { title: { en: "Order workflows" } },
      { title: { en: "Returns" } },
      { title: { en: "Coupons" } },
      { title: { en: "Loyalty" } },
      { title: { en: "Analytics" } },
      { title: { en: "Localization" } },
      { title: { en: "SEO" } },
      { title: { en: "Payment & shipping architecture" } },
      { title: { en: "Find My Size" } },
      { title: { en: "Trendyol integration" }, state: "planned" },
      { title: { en: "Virtual try-on" }, state: "planned" },
    ],
    architecture: {
      summary: { en: "A monorepo with separate applications sharing a single data layer." },
      layers: [
        { label: { en: "Front-ends" }, items: ["Storefront (Next.js + React)", "Admin"] },
        { label: { en: "API" }, items: ["NestJS"] },
        { label: { en: "Background" }, items: ["Worker service"] },
        { label: { en: "Data" }, items: ["PostgreSQL", "Prisma"] },
      ],
    },
    outcomes: { en: ["Currently in development — no launch or business results to report yet."] },
    visibility: "private",
    coverImage: { src: "/projects/lale/cover.webp", alt: { en: "LALE storefront" } },
    gallery: [
      { src: "/projects/lale/01.webp", alt: { en: "LALE storefront" }, caption: { en: "Storefront" } },
      { src: "/projects/lale/02.webp", alt: { en: "LALE admin" }, caption: { en: "Admin" } },
    ],
    related: ["medmar", "matchara"],
    visual: "storefront",
  },
  {
    slug: "matchara",
    title: { en: "MATCHARA" },
    shortTitle: "MATCHARA",
    category: { en: "Sports Platform / Product", tr: "Spor Platformu / Ürün" },
    tagline: { en: "Your match starts here.", tr: "Maçın burada başlıyor." },
    summary: {
      en: "A product concept for a platform where players create, discover and join local matches, build teams and track their own statistics — starting with football and volleyball.",
    },
    description: {
      en: [
        "MATCHARA is a sports product concept: a place for players to create local matches, find ones to join, pick positions, form teams and challenge other teams.",
        "Beyond organising matches, the vision includes recording results, tracking goals and assists, building player statistics, rating matches and players, voting for player of the match, and leaderboards. Football and volleyball are the initial sports; Arabic, Turkish and English are the planned languages.",
        "MATCHARA is a separate product from TopFan OS.",
      ],
    },
    status: "concept",
    statusNote: {
      en: "Product concept / planned. Everything on this page describes the intended product — none of it has launched.",
    },
    role: { en: "Product & engineering" },
    featured: true,
    technologies: [],
    keyFeatures: [
      { title: { en: "Create & discover local matches" }, state: "planned" },
      { title: { en: "Join matches & select positions" }, state: "planned" },
      { title: { en: "Create teams & challenge other teams" }, state: "planned" },
      { title: { en: "Record results, goals and assists" }, state: "planned" },
      { title: { en: "Player statistics" }, state: "planned" },
      { title: { en: "Rate matches & players; vote for player of the match" }, state: "planned" },
      { title: { en: "Leaderboards" }, state: "planned" },
      { title: { en: "Tournaments" }, state: "planned" },
      { title: { en: "Shareable match posters" }, state: "planned" },
      { title: { en: "Team history & match feedback" }, state: "planned" },
      { title: { en: "Filters by level, location, time and format" }, state: "planned" },
      { title: { en: "Organizer tools" }, state: "planned" },
    ],
    outcomes: { en: ["Concept stage — no launch, users or results to report."] },
    visibility: "private",
    coverImage: { src: "/projects/matchara/cover.webp", alt: { en: "MATCHARA concept" } },
    gallery: [
      { src: "/projects/matchara/01.webp", alt: { en: "MATCHARA match discovery concept" }, caption: { en: "Match discovery (concept)" } },
      { src: "/projects/matchara/02.webp", alt: { en: "MATCHARA player profile concept" }, caption: { en: "Player profile (concept)" } },
    ],
    related: ["topfan-os", "lale"],
    visual: "matches",
  },
  {
    slug: "topfan-os",
    title: { en: "TopFan OS" },
    shortTitle: "TopFan OS",
    category: { en: "Sports Operations Platform", tr: "Spor Operasyon Platformu" },
    summary: {
      en: "An internal operations platform for running a football community — tournaments, sponsors, finance, teams, tasks and reporting in one system.",
    },
    description: {
      en: [
        "TopFan OS is an internal sports operations platform in development. It brings the day-to-day work of running a community — tournaments, teams, fields, referees, sponsors, finance and reporting — into one system.",
        "It is built with React and Supabase on PostgreSQL, using row-level security (RLS) to control data access. TopFan OS is a separate product from MATCHARA.",
      ],
    },
    status: "in-development",
    statusNote: { en: "Internal platform, in development. Not publicly available." },
    role: { en: "Product & engineering" },
    featured: true,
    technologies: ["React", "Supabase", "PostgreSQL", "Row-Level Security"],
    keyFeatures: [
      { title: { en: "Dashboard & analytics" } },
      { title: { en: "Strategy, OKRs & reports" } },
      { title: { en: "Tournaments" } },
      { title: { en: "Sponsors / CRM" } },
      { title: { en: "Social operations" } },
      { title: { en: "Notifications" } },
      { title: { en: "Community & players" } },
      { title: { en: "Team management" } },
      { title: { en: "Tasks" } },
      { title: { en: "Fields & referees" } },
      { title: { en: "Finance" } },
      { title: { en: "Files" } },
      { title: { en: "Internal AI assistance" } },
    ],
    architecture: {
      layers: [
        { label: { en: "Interface" }, items: ["React"] },
        { label: { en: "Backend services" }, items: ["Supabase"] },
        { label: { en: "Data & access control" }, items: ["PostgreSQL", "Row-Level Security"] },
      ],
    },
    outcomes: { en: ["In development — no results to report yet."] },
    visibility: "private",
    coverImage: { src: "/projects/topfan/cover.webp", alt: { en: "TopFan OS dashboard" } },
    gallery: [
      { src: "/projects/topfan/01.webp", alt: { en: "TopFan OS dashboard" }, caption: { en: "Dashboard" } },
      { src: "/projects/topfan/02.webp", alt: { en: "TopFan OS tournaments module" }, caption: { en: "Tournaments" } },
    ],
    related: ["matchara", "medmar"],
    visual: "operations",
  },
  {
    slug: "ai-automation",
    title: { en: "AI-Driven Sales & Real Estate Automation System" },
    shortTitle: "AI Automation",
    category: { en: "AI / Automation", tr: "Yapay Zekâ / Otomasyon" },
    summary: {
      en: "An n8n-based automation system that turns inbound conversations into structured data, schedules appointments and routes leads to a CRM — reducing manual data entry.",
    },
    description: {
      en: [
        "A personal technical project exploring how far customer-acquisition and scheduling workflows can be automated. n8n orchestrates conversations across WhatsApp and web channels, database and scheduling integrations, and Claude/GPT API calls that return structured JSON.",
        "Appointments are handled through the Cal.com API — availability checks, booking and reminders — while leads are routed to a CRM or Google Sheets.",
      ],
    },
    status: "personal",
    statusNote: { en: "Personal technical project. No business results are claimed." },
    role: { en: "Design & implementation" },
    featured: true,
    technologies: ["n8n", "Claude / GPT APIs", "Cal.com API", "Webhooks", "JSON", "Google Sheets", "WhatsApp / web flows"],
    keyFeatures: [
      { title: { en: "Automated customer-acquisition workflows" } },
      { title: { en: "WhatsApp / web communication flows" } },
      { title: { en: "Structured-data processing" }, description: { en: "Claude/GPT API calls returning structured JSON." } },
      { title: { en: "Appointment scheduling" }, description: { en: "Cal.com API: availability checks, booking and reminders." } },
      { title: { en: "Database & scheduling integrations" } },
      { title: { en: "CRM / Google Sheets routing" } },
      { title: { en: "Less manual data entry" } },
    ],
    architecture: {
      layers: [
        { label: { en: "Channels" }, items: ["WhatsApp", "Web"] },
        { label: { en: "Orchestration" }, items: ["n8n", "Webhooks"] },
        { label: { en: "Intelligence" }, items: ["Claude / GPT APIs", "Structured JSON output"] },
        { label: { en: "Integrations" }, items: ["Cal.com API", "Database", "CRM / Google Sheets"] },
      ],
    },
    visibility: "private",
    coverImage: { src: "/projects/ai-automation/cover.webp", alt: { en: "AI automation workflow diagram" } },
    gallery: [{ src: "/projects/ai-automation/01.webp", alt: { en: "n8n workflow overview" }, caption: { en: "Workflow overview" } }],
    related: ["medmar", "lale"],
    visual: "workflow",
  },

  /* ──────────────────── CLIENT / PROFESSIONAL WEB WORK ─────────────────── */
  {
    slug: "podoclinic",
    title: { en: "Podoclinic & Hair Clinic Websites" },
    shortTitle: "Podoclinic",
    category: { en: "Medical Tourism / Client Websites", tr: "Sağlık Turizmi / Müşteri Web Siteleri" },
    summary: { en: "Bilingual, multi-page Next.js websites for medical-tourism clinics, built around lead capture and ad conversion tracking." },
    description: {
      en: [
        "Two live websites for a medical-tourism clinic, built with Next.js in Arabic and English. The structure is clean and multi-page, with presentation tailored to medical tourism.",
        "Lead handling is part of the build: Google Ads conversion tracking and lead management, with email delivery through PHPMailer.",
      ],
    },
    status: "client-work",
    featured: false,
    technologies: ["Next.js", "PHPMailer", "Google Ads conversion tracking"],
    keyFeatures: [
      { title: { en: "Arabic / English" } },
      { title: { en: "Clean multi-page structure" } },
      { title: { en: "Google Ads conversion tracking" } },
      { title: { en: "Lead management" } },
      { title: { en: "PHPMailer" } },
      { title: { en: "Medical-tourism presentation" } },
    ],
    liveUrls: [
      { label: "podoclinic.podoclinik.com", url: "https://podoclinic.podoclinik.com" },
      { label: "hair.podoclinik.com", url: "https://hair.podoclinik.com" },
    ],
    visibility: "public",
    coverImage: { src: "/projects/podoclinic/cover.webp", alt: { en: "Podoclinic website" } },
    gallery: [
      { src: "/projects/podoclinic/01.webp", alt: { en: "Podoclinic home page" }, caption: { en: "Podoclinic" } },
      { src: "/projects/podoclinic/02.webp", alt: { en: "Hair clinic home page" }, caption: { en: "Hair clinic" } },
    ],
    related: ["houston-performance", "zaineldeen-stores"],
    visual: "clinic",
  },
  {
    slug: "houston-performance",
    title: { en: "Houston Performance" },
    shortTitle: "Houston Performance",
    category: { en: "Automotive", tr: "Otomotiv" },
    summary: { en: "A premium dark automotive website with a Year → Make → Model vehicle-fitment flow and visual product and service galleries." },
    description: {
      en: [
        "Lead developer on a premium, dark-themed automotive website. A vehicle-fitment selector walks visitors through Year → Make → Model, alongside visual galleries for products and services.",
      ],
    },
    status: "client-work",
    featured: false,
    role: { en: "Lead Developer" },
    technologies: [],
    keyFeatures: [
      { title: { en: "Vehicle fitment: Year → Make → Model" } },
      { title: { en: "Product and service galleries" } },
      { title: { en: "Premium dark automotive presentation" } },
    ],
    visibility: "public",
    coverImage: { src: "/projects/houston/cover.webp", alt: { en: "Houston Performance website" } },
    gallery: [{ src: "/projects/houston/01.webp", alt: { en: "Houston Performance vehicle fitment" }, caption: { en: "Vehicle fitment" } }],
    related: ["podoclinic", "zaineldeen-stores"],
    visual: "automotive",
  },
  {
    slug: "zaineldeen-stores",
    title: { en: "Zaineldeen Stores" },
    shortTitle: "Zaineldeen Stores",
    category: { en: "E-Commerce", tr: "E-Ticaret" },
    summary: { en: "Full-stack e-commerce work for a perfume and fashion store, with ad conversion tracking and automated lead management." },
    description: {
      en: ["Full-stack e-commerce work for perfumes and fashion, including Google Ads conversion tracking and automated lead management."],
    },
    status: "client-work",
    featured: false,
    technologies: [],
    keyFeatures: [
      { title: { en: "Full-stack e-commerce" } },
      { title: { en: "Google Ads conversion tracking" } },
      { title: { en: "Automated lead management" } },
    ],
    visibility: "public",
    coverImage: { src: "/projects/zaineldeen-stores/cover.webp", alt: { en: "Zaineldeen Stores" } },
    related: ["lale", "podoclinic"],
    visual: "storefront",
  },
  {
    slug: "yeni-sayfa",
    title: { en: "Yeni Sayfa Platform" },
    shortTitle: "Yeni Sayfa",
    category: { en: "Web Integration / Content Platform", tr: "Web Entegrasyonu / İçerik Platformu" },
    summary: { en: "Interactive frontend elements and WordPress integrations for a digital content platform." },
    description: {
      en: ["Frontend and integration work for a content platform: interactive elements, WordPress integration, third-party visualisations and iframes, digital-media components and responsive HTML blocks."],
    },
    status: "client-work",
    featured: false,
    technologies: ["WordPress", "HTML"],
    keyFeatures: [
      { title: { en: "Interactive frontend elements" } },
      { title: { en: "WordPress integration" } },
      { title: { en: "Third-party visualisations / iframes" } },
      { title: { en: "Digital-media components" } },
      { title: { en: "Responsive HTML blocks" } },
      { title: { en: "Layout optimisation" } },
    ],
    visibility: "public",
    coverImage: { src: "/projects/yeni-sayfa/cover.webp", alt: { en: "Yeni Sayfa platform" } },
    related: ["podoclinic", "houston-performance"],
    visual: "content",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const clientProjects = projects.filter((p) => !p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
