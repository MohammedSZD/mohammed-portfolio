import type { Project } from "@/lib/types";
import { trProjects } from "./projects.tr.ts";

/**
 * All case-study content lives here. Display order = priority order: technical depth and
 * real-world impact first, then other polished work, then demos and concepts.
 * To add a project: add its images under /public/projects/<slug>/ and add one object.
 * Fields marked optional in `Project` can simply be left out — empty sections are not rendered.
 * Every localized field needs `en` and `ar` (`npm run validate` enforces Arabic coverage on the
 * visible fields); `tr` is provided for card-level text and falls back to English elsewhere.
 */
export const projects: Project[] = [
  /* ───────────────────────── FLAGSHIP SYSTEMS ───────────────────────── */
  {
    slug: "medmar",
    categories: ["internal-systems", "web-applications"],
    title: { en: "MEDMAR — Factory Management System", ar: "MEDMAR — نظام إدارة المصنع" },
    shortTitle: { en: "MEDMAR", ar: "MEDMAR" },
    category: { en: "Industrial Software / Internal Platform", tr: "Endüstriyel Yazılım / Kurum İçi Platform", ar: "برمجيات صناعية / منصة داخلية" },
    summary: {
      en: "An internal Laravel platform that models a factory's physical assets and runs its maintenance operations — from asset hierarchy and work orders to preventive schedules and mobile reporting for floor staff.",
      tr: "Bir fabrikanın fiziksel varlıklarını modelleyen ve bakım operasyonlarını yürüten kurum içi Laravel platformu — varlık hiyerarşisinden iş emirlerine, önleyici bakım planlarından saha personeli için mobil raporlamaya.",
      ar: "منصة داخلية مبنية على Laravel تمثّل أصول المصنع المادية وتدير عمليات صيانته — من هرم الأصول وأوامر العمل إلى جداول الصيانة الوقائية والتقارير عبر الجوال لعاملي الأرضية.",
    },
    description: {
      en: [
        "MEDMAR is the internal factory management platform at Med-Mar Tuz San. Tic. A.Ş. I contributed major development as R&D Software Engineer, delivering its core modules during an eight-week sprint in May–June 2026.",
        "The platform represents the plant as a single asset hierarchy and builds maintenance operations on top of it: work orders, preventive schedules, spare-parts and cost tracking, and mobile-first reporting for the people on the factory floor.",
      ],
      ar: [
        "MEDMAR هي منصة إدارة المصنع الداخلية في شركة Med-Mar Tuz San. Tic. A.Ş. ساهمت في تطويرها بشكل رئيسي بصفتي مهندس برمجيات للبحث والتطوير، وسلّمت وحداتها الأساسية خلال سبرنت مدته ثمانية أسابيع بين مايو ويونيو 2026.",
        "تمثّل المنصة المصنع كهرم أصول واحد وتبني فوقه عمليات الصيانة: أوامر العمل والجداول الوقائية وتتبع قطع الغيار والتكاليف، وتقارير مصممة للجوال أولًا لمن يعملون في أرضية المصنع.",
      ],
    },
    status: "production",
    statusNote: {
      en: "Internal company system in production use at Med-Mar. Not publicly accessible.",
      ar: "نظام داخلي للشركة قيد الاستخدام الفعلي في Med-Mar. غير متاح للعموم.",
    },
    year: "2026",
    role: { en: "R&D Software Engineer · Full-Stack Development", ar: "مهندس برمجيات للبحث والتطوير · تطوير Full-Stack" },
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
      ar: [
        "صممت وبنيت الوحدات الأساسية للمنصة من البداية إلى النهاية — قاعدة البيانات والخلفية والواجهة",
        "نمذجت هرم الأصول وسجل التدقيق الخاص به",
        "بنيت مسارات أوامر الصيانة والصيانة الوقائية",
        "طبقت ضبط الصلاحيات حسب الأدوار وواجهات مصممة للجوال أولًا",
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
      ar: [
        "تمثيل معدات المصنع — من المصنع كله إلى القطع الفرعية — في بنية واحدة متسقة يسهل التنقل فيها.",
        "تحتاج فئات المعدات المختلفة إلى بيانات مختلفة، دون شاشة أو مخطط جديد لكل فئة.",
        "الحفاظ على سجل موثوق لما تغيّر وأين انتقلت المعدات.",
        "تمكين عاملي المصنع من الإبلاغ وتوثيق العمل من الأرضية عبر هواتفهم.",
        "جدولة الصيانة الوقائية المتكررة على فترات متباينة جدًا.",
      ],
    },
    solutions: {
      en: [
        "A self-referencing hierarchy — Factory → Unit → Section → Machine → Part → Sub-part — with dynamic, category-driven custom attributes.",
        "Change and movement audit logging, plus file and image attachments on assets.",
        "Work orders linked to machines, locations and personnel, with photo documentation and mobile-first reporting.",
        "A preventive-maintenance scheduler with six recurrence intervals, checklists, reminders and reusable templates.",
      ],
      ar: [
        "تسلسل هرمي ذاتي الإحالة — مصنع ← وحدة ← قسم ← آلة ← قطعة ← قطعة فرعية — مع خصائص مخصصة ديناميكية تحددها فئة المعدّة.",
        "سجل تدقيق للتغييرات والتنقلات، إضافةً إلى مرفقات الملفات والصور على الأصول.",
        "أوامر عمل مرتبطة بالآلات والمواقع والعاملين، مع توثيق بالصور وتقارير للجوال أولًا.",
        "جدولة للصيانة الوقائية بستة فواصل تكرار وقوائم تحقق وتذكيرات وقوالب قابلة لإعادة الاستخدام.",
      ],
    },
    keyFeatures: [
      { title: { en: "Asset hierarchy", ar: "هرم الأصول" }, description: { en: "Six-level, self-referencing structure with category-driven custom attributes.", ar: "بنية من ستة مستويات ذاتية الإحالة مع خصائص مخصصة تحددها الفئة." } },
      { title: { en: "Audit logging", ar: "سجل التدقيق" }, description: { en: "Change and movement history for every asset.", ar: "سجل للتغييرات والتنقلات لكل أصل." } },
      { title: { en: "Maintenance work orders", ar: "أوامر الصيانة" }, description: { en: "Jobs linked to machines, locations and personnel, with photo documentation.", ar: "أعمال مرتبطة بالآلات والمواقع والعاملين مع توثيق بالصور." } },
      { title: { en: "Cost & spare-parts tracking", ar: "تتبع التكاليف وقطع الغيار" }, description: { en: "Costs and parts recorded against maintenance work.", ar: "تسجيل التكاليف والقطع على أعمال الصيانة." } },
      { title: { en: "Preventive maintenance", ar: "الصيانة الوقائية" }, description: { en: "Daily, weekly, monthly, quarterly, biannual and annual recurrence with checklists and reminders.", ar: "تكرار يومي وأسبوعي وشهري وربع سنوي ونصف سنوي وسنوي مع قوائم تحقق وتذكيرات." } },
      { title: { en: "Reusable templates", ar: "قوالب قابلة لإعادة الاستخدام" }, description: { en: "Maintenance templates and historical logs.", ar: "قوالب صيانة وسجلات تاريخية." } },
      { title: { en: "Personnel assignment & search", ar: "إسناد العاملين والبحث" } },
      { title: { en: "Mobile-first reporting", ar: "تقارير للجوال أولًا" }, description: { en: "Designed for factory staff reporting from the floor.", ar: "مصممة لعاملي المصنع الذين يبلّغون من الأرضية." } },
      { title: { en: "Role-based access control", ar: "ضبط الصلاحيات حسب الأدوار" }, description: { en: "Middleware-based RBAC.", ar: "RBAC مطبّق عبر الـ middleware." } },
    ],
    engineeringDecisions: [
      {
        title: { en: "One self-referencing hierarchy", ar: "تسلسل هرمي واحد ذاتي الإحالة" },
        body: {
          en: "A single self-referencing structure models every level from factory to sub-part, so depth is a property of the data rather than of separate screens.",
          ar: "بنية واحدة ذاتية الإحالة تمثّل كل المستويات من المصنع إلى القطعة الفرعية، فيصبح العمق خاصية في البيانات لا في شاشات منفصلة.",
        },
      },
      {
        title: { en: "Dynamic, category-driven attributes", ar: "خصائص ديناميكية تحددها الفئة" },
        body: {
          en: "Attributes are defined per equipment category, so different kinds of assets can carry different information.",
          ar: "تُعرَّف الخصائص لكل فئة معدّات، فتحمل أنواع الأصول المختلفة معلومات مختلفة.",
        },
      },
      {
        title: { en: "Audit trail by design", ar: "سجل تدقيق من أساس التصميم" },
        body: {
          en: "Changes and movements are logged, giving maintenance history a reliable source.",
          ar: "تُسجَّل التغييرات والتنقلات، فيكون لتاريخ الصيانة مصدر موثوق.",
        },
      },
      {
        title: { en: "Fast, responsive interfaces", ar: "واجهات سريعة ومتجاوبة" },
        body: {
          en: "Laravel caching and Axios/AJAX asynchronous fetching, in mobile-first responsive views.",
          ar: "تخزين مؤقت في Laravel وجلب غير متزامن عبر Axios/AJAX، ضمن واجهات متجاوبة للجوال أولًا.",
        },
      },
      {
        title: { en: "Access control in middleware", ar: "ضبط الصلاحيات في الـ middleware" },
        body: {
          en: "Role-based access control is enforced at the middleware layer.",
          ar: "يُطبَّق ضبط الصلاحيات حسب الأدوار على مستوى طبقة الـ middleware.",
        },
      },
    ],
    metrics: [
      { value: "40+", label: { en: "database migrations", ar: "عملية ترحيل لقاعدة البيانات" } },
      { value: "15+", label: { en: "new views & interfaces", ar: "واجهة وعرضًا جديدًا" } },
      { value: "8", label: { en: "week sprint, May–June 2026", ar: "أسابيع سبرنت، مايو–يونيو 2026" } },
      { value: "6", label: { en: "asset hierarchy levels", ar: "مستويات في هرم الأصول" } },
    ],
    architecture: {
      summary: { en: "High-level overview only. Internal structure is confidential.", ar: "نظرة عامة عالية المستوى فقط. البنية الداخلية سرية." },
      layers: [
        { label: { en: "Interface", ar: "الواجهة" }, items: ["Bootstrap", { en: "Mobile-first views", ar: "عروض للجوال أولًا" }, "PWA concepts"] },
        { label: { en: "Client logic", ar: "منطق العميل" }, items: ["JavaScript", "Axios / AJAX"] },
        { label: { en: "Application", ar: "التطبيق" }, items: ["Laravel", "PHP", { en: "Middleware RBAC", ar: "RBAC عبر الـ middleware" }, { en: "Laravel caching", ar: "التخزين المؤقت في Laravel" }] },
        { label: { en: "Data", ar: "البيانات" }, items: ["MySQL", { en: "Audit logging", ar: "سجل التدقيق" }] },
      ],
    },
    outcomes: {
      en: [
        "Core platform modules delivered within an eight-week sprint (May–June 2026).",
        "Used internally at Med-Mar — source code, data and internal URLs are intentionally not shown.",
      ],
      ar: [
        "سُلّمت الوحدات الأساسية للمنصة خلال سبرنت مدته ثمانية أسابيع (مايو–يونيو 2026).",
        "تُستخدم داخليًا في Med-Mar — لا تُعرض الشيفرة المصدرية ولا البيانات ولا الروابط الداخلية عن قصد.",
      ],
    },
    visibility: "confidential",
    confidentialityNote: {
      en: "This is a confidential internal company system. Source code, credentials, database structure, employee data and internal URLs are not shared. Any imagery on this page is illustrative or sanitised.",
      ar: "هذا نظام داخلي سري للشركة. لا تُشارك الشيفرة المصدرية ولا بيانات الاعتماد ولا بنية قاعدة البيانات ولا بيانات الموظفين ولا الروابط الداخلية. أي صور في هذه الصفحة توضيحية أو منقّحة.",
    },
    coverImage: { src: "/projects/medmar/cover.webp", alt: { en: "MEDMAR factory management system — interface overview", ar: "نظام MEDMAR لإدارة المصنع — نظرة عامة على الواجهة" } },
    gallery: [
      { src: "/projects/medmar/01.webp", alt: { en: "MEDMAR asset hierarchy view", ar: "عرض هرم الأصول في MEDMAR" }, caption: { en: "Asset hierarchy", ar: "هرم الأصول" } },
      { src: "/projects/medmar/02.webp", alt: { en: "MEDMAR maintenance work order view", ar: "عرض أوامر الصيانة في MEDMAR" }, caption: { en: "Maintenance work orders", ar: "أوامر الصيانة" } },
      { src: "/projects/medmar/03.webp", alt: { en: "MEDMAR preventive maintenance scheduling", ar: "جدولة الصيانة الوقائية في MEDMAR" }, caption: { en: "Preventive maintenance scheduling", ar: "جدولة الصيانة الوقائية" } },
      { src: "/projects/medmar/04.webp", alt: { en: "MEDMAR mobile reporting", ar: "التقارير عبر الجوال في MEDMAR" }, caption: { en: "Mobile-first reporting", ar: "تقارير للجوال أولًا" } },
    ],
    related: ["topfan-os", "lale"],
    visual: "hierarchy",
  },
  {
    slug: "topfan-os",
    categories: ["internal-systems", "web-applications"],
    title: { en: "TopFan OS — Sports Operations Platform", ar: "TopFan OS — منصة عمليات رياضية" },
    shortTitle: { en: "TopFan OS", ar: "TopFan OS" },
    category: { en: "Sports Operations Platform", tr: "Spor Operasyon Platformu", ar: "منصة عمليات رياضية" },
    summary: {
      en: "A role-aware operations platform for a community football organisation: tournaments, finance, sponsors, tasks and team administration on one relational data model, with access control enforced in the database.",
      tr: "Bir topluluk futbol organizasyonu için rol tabanlı operasyon platformu: turnuvalar, finans, sponsorlar, görevler ve takım yönetimi tek ilişkisel veri modelinde; erişim denetimi veritabanında uygulanıyor.",
      ar: "منصة عمليات قائمة على الأدوار لمنظمة كرة قدم مجتمعية: البطولات والمالية والرعاة والمهام وإدارة الفريق على نموذج بيانات علائقي واحد، مع فرض الصلاحيات داخل قاعدة البيانات.",
    },
    description: {
      en: [
        "TopFan OS replaces scattered spreadsheets and chat threads with a single web application for running a community football and sports-events organisation. Seventeen modules — from tournaments and standings to an append-only finance ledger and a sponsor CRM — share one PostgreSQL schema, so a match result, an invoice and a task all refer to the same teams, venues and people.",
        "It is a React single-page app on Supabase (PostgreSQL, Auth, Storage and Edge Functions). Permissions are resource.action keys resolved in SQL, and row-level security on every table makes the database — not only the interface — the real gate. The interface is available in Arabic (RTL), English and Turkish, in light and dark themes.",
      ],
      ar: [
        "يحل TopFan OS محل جداول البيانات المتفرقة ومحادثات الدردشة بتطبيق ويب واحد لإدارة منظمة مجتمعية لكرة القدم والفعاليات الرياضية. سبع عشرة وحدة — من البطولات والترتيب إلى دفتر مالي لا يُحذف منه شيء وإدارة علاقات الرعاة — تشترك في مخطط PostgreSQL واحد، فتشير نتيجة المباراة والفاتورة والمهمة إلى الفرق والملاعب والأشخاص أنفسهم.",
        "هو تطبيق React من صفحة واحدة فوق Supabase (PostgreSQL وAuth وStorage وEdge Functions). الصلاحيات مفاتيح بصيغة resource.action تُحسم داخل SQL، وأمان مستوى الصف على كل جدول يجعل قاعدة البيانات — لا الواجهة وحدها — هي البوابة الحقيقية. الواجهة متاحة بالعربية (RTL) والإنجليزية والتركية، بمظهرين فاتح وداكن.",
      ],
    },
    status: "functional",
    statusNote: {
      en: "Functional and feature-complete for its documented scope, and tested manually module by module. The application and its database are private; the public link is a visual sign-in preview with no data. Every screenshot was captured from a demo database that contains only fictional data. There is no automated test suite or CI yet.",
      ar: "يعمل ومكتمل ضمن نطاقه الموثّق، وجرى اختباره يدويًا وحدةً وحدة. التطبيق وقاعدة بياناته خاصان؛ والرابط العام معاينة بصرية لصفحة تسجيل الدخول بلا أي بيانات. جميع لقطات الشاشة أُخذت من قاعدة بيانات تجريبية تحتوي بيانات وهمية فقط. لا توجد حزمة اختبارات آلية ولا CI حتى الآن.",
    },
    role: { en: "Product design, database design and full-stack implementation", ar: "تصميم المنتج وتصميم قاعدة البيانات والتنفيذ الكامل (Full-Stack)" },
    featured: true,
    technologies: ["React 19", "React Router 7", "Vite", "Tailwind CSS 4", "Supabase", "PostgreSQL", { en: "Row-Level Security", ar: "أمان مستوى الصف (RLS)" }, "Edge Functions (Deno)", "pg_cron"],
    challenges: {
      en: [
        "Fixtures, money and sponsor follow-ups normally live in unrelated tools, so information goes stale.",
        "Nobody can tell who is allowed to approve what, and there is no single record of what changed.",
      ],
      ar: [
        "عادةً ما تعيش المباريات والمال ومتابعة الرعاة في أدوات غير مترابطة، فتتقادم المعلومات.",
        "لا أحد يعرف من يحق له الاعتماد، ولا يوجد سجل واحد لما تغيّر.",
      ],
    },
    solutions: {
      en: [
        "Designed the full data model first: 23 ordered migrations define 44 tables, so every module was built on a stable foundation.",
        "Enforced access in PostgreSQL: row-level security on every table (104 policies), multi-role permissions resolved as the union of a user's roles, security-invoker views and an audit trail on 14 sensitive tables.",
        "Derived instead of duplicated data: standings, player statistics and referee averages are computed in views from match and rating data, so they cannot drift.",
        "Kept secrets server-side: account creation and the AI assistant run in Edge Functions that re-check the caller's permissions.",
      ],
      ar: [
        "صممت نموذج البيانات كاملًا أولًا: 23 عملية ترحيل مرتبة تعرّف 44 جدولًا، فبُنيت كل وحدة على أساس مستقر.",
        "فرضت الصلاحيات داخل PostgreSQL: أمان مستوى الصف على كل جدول (104 سياسات)، وصلاحيات متعددة الأدوار تُحسم كاتحاد لأدوار المستخدم، وعروض بصلاحيات المستدعي، وسجل تدقيق على 14 جدولًا حساسًا.",
        "اشتققت البيانات بدل تكرارها: يُحسب الترتيب وإحصاءات اللاعبين ومتوسطات الحكام في عروض من بيانات المباريات والتقييمات، فلا تنحرف.",
        "أبقيت الأسرار في الخادم: إنشاء الحسابات والمساعد الذكي يعملان في Edge Functions تعيد التحقق من صلاحيات المستدعي.",
      ],
    },
    keyFeatures: [
      { title: { en: "Dashboard & analytics", ar: "لوحة المتابعة والتحليلات" }, description: { en: "Headline figures, activity feed and hand-built SVG charts with no charting library.", ar: "أرقام رئيسية وسجل نشاط ومخططات SVG مبنية يدويًا دون مكتبة رسوم." } },
      { title: { en: "Tournaments", ar: "البطولات" }, description: { en: "Teams and rosters, fixtures, results, standings with form, cups and prizes.", ar: "الفرق والتشكيلات والمباريات والنتائج والترتيب مع الأداء الأخير والكؤوس والجوائز." } },
      { title: { en: "Finance", ar: "المالية" }, description: { en: "An append-only ledger; entries are approved separately from being recorded and voided rather than deleted.", ar: "دفتر لا يُحذف منه شيء؛ تُعتمد القيود بشكل منفصل عن تسجيلها وتُلغى بدل أن تُحذف." } },
      { title: { en: "Sponsors & CRM", ar: "الرعاة وإدارة العلاقات" }, description: { en: "Contracts with progress, a pipeline view, invoices and renewals.", ar: "عقود مع تقدمها وعرض لمسار الصفقات والفواتير والتجديدات." } },
      { title: { en: "Tasks, OKRs & strategy", ar: "المهام وOKR والاستراتيجية" }, description: { en: "Tasks per department, quarterly objectives and a week-by-week launch plan.", ar: "مهام لكل قسم وأهداف ربع سنوية وخطة إطلاق أسبوعًا بأسبوع." } },
      { title: { en: "Social & content", ar: "المحتوى ووسائل التواصل" }, description: { en: "Publishing calendar, posts, campaigns and an idea bank.", ar: "تقويم نشر ومنشورات وحملات وبنك أفكار." } },
      { title: { en: "Players, venues & referees", ar: "اللاعبون والملاعب والحكام" }, description: { en: "Records and ratings, with averages derived in views.", ar: "سجلات وتقييمات، مع متوسطات تُشتق في عروض قاعدة البيانات." } },
      { title: { en: "Files & contracts", ar: "الملفات والعقود" }, description: { en: "Uploads to a private storage bucket, linked to the records they belong to.", ar: "رفع ملفات إلى حاوية تخزين خاصة مرتبطة بالسجلات التي تخصها." } },
      { title: { en: "Notifications", ar: "الإشعارات" }, description: { en: "In-app notification centre and a due-soon rule scheduled in PostgreSQL with pg_cron.", ar: "مركز إشعارات داخل التطبيق وقاعدة للمهام القريبة الاستحقاق مجدولة في PostgreSQL عبر pg_cron." } },
      { title: { en: "Team & permissions", ar: "الفريق والصلاحيات" }, description: { en: "Six system roles, seven departments, multi-role members and an admin-only account-creation function.", ar: "ستة أدوار نظامية وسبعة أقسام وأعضاء متعددو الأدوار ووظيفة إنشاء حسابات للمدير فقط." } },
      { title: { en: "AI assistant", ar: "المساعد الذكي" }, description: { en: "Staff-only chat through an Edge Function; it answers from the conversation and is not connected to the database.", ar: "دردشة للموظفين فقط عبر Edge Function؛ يجيب من المحادثة ولا يتصل بقاعدة البيانات." } },
      { title: { en: "Arabic (RTL), English, Turkish", ar: "العربية (RTL) والإنجليزية والتركية" }, description: { en: "Three interface languages with light and dark themes.", ar: "ثلاث لغات للواجهة مع مظهرين فاتح وداكن." } },
    ],
    engineeringDecisions: [
      {
        title: { en: "The database is the real gate", ar: "قاعدة البيانات هي البوابة الحقيقية" },
        body: {
          en: "The interface hides what a user cannot use, but row-level security and has_permission() in SQL decide what they can actually read or change. The frontend checks can('resource.action'), never role names.",
          ar: "تخفي الواجهة ما لا يستطيع المستخدم استخدامه، لكن أمان مستوى الصف ودالة has_permission() في SQL هما اللذان يقرران ما يستطيع قراءته أو تغييره فعلًا. وتفحص الواجهة can('resource.action') لا أسماء الأدوار.",
        },
      },
      {
        title: { en: "Derive, don't duplicate", ar: "اشتقاق البيانات لا تكرارها" },
        body: {
          en: "Standings, player statistics and referee averages come from views over match and rating data, so there is one source of truth.",
          ar: "يأتي الترتيب وإحصاءات اللاعبين ومتوسطات الحكام من عروض فوق بيانات المباريات والتقييمات، فيكون هناك مصدر واحد للحقيقة.",
        },
      },
      {
        title: { en: "Auditable money", ar: "مال قابل للتدقيق" },
        body: {
          en: "Finance is an append-only ledger: recording and approving are separate steps, and mistakes are voided instead of deleted.",
          ar: "المالية دفتر لا يُحذف منه شيء: التسجيل والاعتماد خطوتان منفصلتان، وتُلغى الأخطاء بدل أن تُحذف.",
        },
      },
      {
        title: { en: "One configuration for navigation and permissions", ar: "إعداد واحد للتنقل والصلاحيات" },
        body: {
          en: "The sidebar and the router are generated from a single configuration, and each entry is gated by a permission.",
          ar: "يُولَّد الشريط الجانبي والموجّه من إعداد واحد، ويُقيَّد كل عنصر فيه بصلاحية.",
        },
      },
    ],
    metrics: [
      { value: "17", label: { en: "connected modules", ar: "وحدة مترابطة" } },
      { value: "44", label: { en: "database tables", ar: "جدولًا في قاعدة البيانات" } },
      { value: "104", label: { en: "row-level security policies", ar: "سياسة أمان على مستوى الصف" } },
      { value: "23", label: { en: "ordered SQL migrations", ar: "عملية ترحيل SQL مرتبة" } },
    ],
    architecture: {
      layers: [
        { label: { en: "Interface", ar: "الواجهة" }, items: ["React 19", "React Router 7", "Tailwind CSS 4", "Vite", "i18n (ar / en / tr)"] },
        { label: { en: "Backend services", ar: "خدمات الخلفية" }, items: ["Supabase Auth", "Supabase Storage", "Edge Functions (Deno)", { en: "Google Gemini via Edge Function", ar: "Google Gemini عبر Edge Function" }] },
        { label: { en: "Data & access control", ar: "البيانات وضبط الوصول" }, items: ["PostgreSQL", { en: "Row-Level Security", ar: "أمان مستوى الصف (RLS)" }, { en: "SQL views", ar: "عروض SQL" }, { en: "Audit triggers", ar: "محفزات التدقيق" }, "pg_cron"] },
      ],
    },
    outcomes: {
      en: [
        "Functional across its seventeen modules and exercised manually; screenshots were captured against a demo database with fictional data.",
        "A public sign-in preview (visual replica only — no backend, no data) is deployed separately from the private application.",
        "Known limitations are documented in the repository: no automated test suite or CI yet, and the AI assistant is not connected to the database.",
      ],
      ar: [
        "يعمل عبر وحداته السبع عشرة وجرى اختباره يدويًا؛ وأُخذت لقطات الشاشة من قاعدة بيانات تجريبية ببيانات وهمية.",
        "معاينة عامة لصفحة تسجيل الدخول (نسخة بصرية فقط — بلا خلفية وبلا بيانات) منشورة بمعزل عن التطبيق الخاص.",
        "القيود المعروفة موثّقة في المستودع: لا توجد حزمة اختبارات آلية ولا CI بعد، والمساعد الذكي غير متصل بقاعدة البيانات.",
      ],
    },
    liveUrls: [{ label: { en: "Sign-in preview (no app data)", tr: "Giriş önizlemesi (uygulama verisi yok)", ar: "معاينة تسجيل الدخول (بلا بيانات)" }, url: "https://topfan-os.vercel.app" }],
    cardLinkLabel: { en: "Sign-in preview", tr: "Giriş önizlemesi", ar: "معاينة تسجيل الدخول" },
    visibility: "private",
    coverImage: { src: "/projects/topfan/cover.webp", alt: { en: "TopFan OS dashboard with headline figures, recent activity and urgent tasks (demo data)", ar: "لوحة TopFan OS بالأرقام الرئيسية وآخر النشاطات والمهام العاجلة (بيانات تجريبية)" } },
    gallery: [
      { src: "/projects/topfan/01.webp", alt: { en: "Analytics with revenue, expenses and community growth charts (demo data)", ar: "التحليلات بمخططات الإيرادات والمصروفات ونمو المجتمع (بيانات تجريبية)" }, caption: { en: "Analytics", ar: "التحليلات" } },
      { src: "/projects/topfan/02.webp", alt: { en: "Tournament standings table with form (demo data)", ar: "جدول ترتيب البطولة مع الأداء الأخير (بيانات تجريبية)" }, caption: { en: "Tournament standings", ar: "ترتيب البطولة" } },
      { src: "/projects/topfan/03.webp", alt: { en: "Tournament matches schedule (demo data)", ar: "جدول مباريات البطولة (بيانات تجريبية)" }, caption: { en: "Matches", ar: "المباريات" } },
      { src: "/projects/topfan/04.webp", alt: { en: "Finance ledger with approval status (demo data)", ar: "الدفتر المالي مع حالة الاعتماد (بيانات تجريبية)" }, caption: { en: "Finance ledger", ar: "الدفتر المالي" } },
      { src: "/projects/topfan/05.webp", alt: { en: "Tasks by owner, department and priority (demo data)", ar: "المهام حسب المسؤول والقسم والأولوية (بيانات تجريبية)" }, caption: { en: "Tasks", ar: "المهام" } },
      { src: "/projects/topfan/06.webp", alt: { en: "Sponsors with contract progress (demo data)", ar: "الرعاة مع تقدم العقود (بيانات تجريبية)" }, caption: { en: "Sponsors & CRM", ar: "الرعاة وإدارة العلاقات" } },
      { src: "/projects/topfan/07.webp", alt: { en: "Team members, departments and roles (demo data)", ar: "أعضاء الفريق والأقسام والأدوار (بيانات تجريبية)" }, caption: { en: "Team & permissions", ar: "الفريق والصلاحيات" } },
    ],
    related: ["medmar", "lale"],
    visual: "operations",
  },
  {
    slug: "flyget-travel",
    categories: ["business-websites"],
    title: { en: "Flyget Travel — WordPress Travel & Tourism Website", ar: "Flyget Travel — موقع سياحة وسفر بـ WordPress" },
    shortTitle: { en: "Flyget Travel", ar: "Flyget Travel" },
    category: { en: "Travel & Tourism · WordPress", tr: "Seyahat ve Turizm · WordPress", ar: "السياحة والسفر · WordPress" },
    summary: {
      en: "A bilingual (English / Arabic, RTL) WordPress travel and tourism website: destination and activity browsing, trip search and catalogue filtering, tour pages with pricing and availability, responsive layouts, and WhatsApp and chat contact.",
      tr: "İki dilli (İngilizce / Arapça, RTL) bir WordPress seyahat ve turizm sitesi: destinasyon ve aktivite gezinmesi, gezi arama ve katalog filtreleme, fiyat ve müsaitlik gösteren tur sayfaları, duyarlı yerleşimler, WhatsApp ve sohbet iletişimi.",
      ar: "موقع سياحة وسفر بـ WordPress بالعربية والإنجليزية (مع RTL): تصفح الوجهات والأنشطة، وبحث عن الرحلات وتصفية الكتالوج، وصفحات جولات بالأسعار والمواعيد المتاحة، وتخطيطات متجاوبة، وتواصل عبر واتساب والدردشة.",
    },
    description: {
      en: [
        "Flyget Travel is a tours and travel website for a travel agency based in Istanbul, built on WordPress. Visitors browse destinations and activities from the main menu, search trips by destination, activity, duration and price, and open tour pages with galleries, pricing and upcoming departures.",
        "The site works in English and in Arabic with a right-to-left layout, adapts to phones with a dedicated menu and stacked search, and keeps contact one tap away through a floating contact widget, WhatsApp and social links. It runs on the WP Travel Engine plugin, which the site footer credits.",
      ],
      ar: [
        "Flyget Travel موقع جولات وسفر لوكالة سياحة مقرها إسطنبول، مبني على WordPress. يتصفح الزوار الوجهات والأنشطة من القائمة الرئيسية، ويبحثون عن الرحلات بحسب الوجهة والنشاط والمدة والسعر، ويفتحون صفحات الجولات بمعارضها وأسعارها ومواعيد الانطلاق القادمة.",
        "يعمل الموقع بالإنجليزية وبالعربية بتخطيط من اليمين إلى اليسار، ويتكيف مع الهواتف بقائمة مخصصة وحقول بحث متراصة، ويبقي التواصل على بعد لمسة عبر أداة تواصل عائمة وواتساب وروابط التواصل الاجتماعي. ويعمل بإضافة WP Travel Engine التي يذكرها تذييل الموقع.",
      ],
    },
    status: "client-work",
    statusNote: {
      en: "Live client website. This page describes only what is visible on the public site and its screenshots; it makes no claims about booking, payment processing or performance figures.",
      ar: "موقع حي لعميل. تصف هذه الصفحة ما يظهر في الموقع العام ولقطاته فقط؛ ولا تدّعي شيئًا عن الحجز أو معالجة الدفع أو أرقام الأداء.",
    },
    role: { en: "Web development · WordPress", ar: "تطوير الويب · WordPress" },
    featured: true,
    technologies: ["WordPress", "WP Travel Engine", { en: "RTL (Arabic)", ar: "RTL (العربية)" }, { en: "Responsive design", ar: "تصميم متجاوب" }, { en: "WhatsApp contact", ar: "التواصل عبر واتساب" }],
    keyFeatures: [
      { title: { en: "English & Arabic with RTL", ar: "الإنجليزية والعربية مع RTL" }, description: { en: "A language switcher offers English and Arabic; the Arabic version mirrors the header, menu and search bar.", ar: "يتيح مبدّل اللغة الإنجليزية والعربية؛ وتعكس النسخة العربية الترويسة والقائمة وشريط البحث." } },
      { title: { en: "Destination & activity menus", ar: "قوائم الوجهات والأنشطة" }, description: { en: "Header menus list the destination countries and activity types such as hiking, paragliding and scuba diving.", ar: "تعرض قوائم الترويسة الدول المقصودة وأنواع الأنشطة مثل المشي في الجبال والطيران الشراعي والغوص." } },
      { title: { en: "Destination pages", ar: "صفحات الوجهات" }, description: { en: "A destinations archive with trip counts and sorting; each destination introduces the country and lists its tour packages.", ar: "أرشيف للوجهات مع عدد الرحلات وفرز؛ وتقدّم كل وجهة البلد وتعرض باقات جولاته." } },
      { title: { en: "Trip search", ar: "البحث عن الرحلات" }, description: { en: "The homepage hero searches by destination, activity, duration (4–15 days) and price range.", ar: "يبحث شريط الصفحة الرئيسية بحسب الوجهة والنشاط والمدة (4–15 يومًا) ونطاق السعر." } },
      { title: { en: "Catalogue filtering", ar: "تصفية الكتالوج" }, description: { en: "A results page with destination, price, duration and activity filters, text search, sorting, grid and list views and a trips-found count.", ar: "صفحة نتائج بمرشحات الوجهة والسعر والمدة والنشاط، وبحث نصي وفرز وعرض شبكي وقائمي وعدد الرحلات المطابقة." } },
      { title: { en: "Tour cards", ar: "بطاقات الجولات" }, description: { en: "Each result shows price, duration, a short description, upcoming departures with availability and a month-by-month availability strip.", ar: "تعرض كل نتيجة السعر والمدة ووصفًا موجزًا ومواعيد الانطلاق القادمة مع توفرها وشريطًا لتوفر الأشهر." } },
      { title: { en: "Tour detail & pricing", ar: "تفاصيل الجولة والأسعار" }, description: { en: "An image gallery, a day-count badge and a price panel showing the per-adult price and any discounted price.", ar: "معرض صور وشارة لعدد الأيام ولوحة أسعار تعرض سعر البالغ وأي سعر مخفض." } },
      { title: { en: "Homepage sections", ar: "أقسام الصفحة الرئيسية" }, description: { en: "Popular Packages, a Featured Trip and Deals and Discounts with discount ribbons.", ar: "الباقات الشائعة ورحلة مميزة وعروض وخصومات بشرائط للخصم." } },
      { title: { en: "Contact & WhatsApp", ar: "التواصل وواتساب" }, description: { en: "A Contact Via WhatsApp button on tour pages, a contact page with an enquiry form and contact details in the footer.", ar: "زر للتواصل عبر واتساب في صفحات الجولات وصفحة تواصل بنموذج استفسار وبيانات الاتصال في التذييل." } },
      { title: { en: "Floating contact widget", ar: "أداة التواصل العائمة" }, description: { en: "A “Contact us” widget that opens shortcuts to Snapchat, TikTok, Instagram, WhatsApp and Messenger.", ar: "أداة «تواصل معنا» تفتح اختصارات إلى Snapchat وTikTok وInstagram وواتساب وMessenger." } },
      { title: { en: "Responsive mobile experience", ar: "تجربة جوال متجاوبة" }, description: { en: "A dedicated mobile menu with search and stacked search fields.", ar: "قائمة جوال مخصصة مع بحث وحقول بحث متراصة." } },
      { title: { en: "WordPress ecosystem", ar: "منظومة WordPress" }, description: { en: "Built on WordPress with the WP Travel Engine plugin credited in the footer.", ar: "مبني على WordPress مع إضافة WP Travel Engine المذكورة في التذييل." } },
    ],
    metrics: [
      { value: "2", label: { en: "languages, incl. RTL Arabic", ar: "لغتان، منها العربية بـ RTL" } },
      { value: "4", label: { en: "trip-search criteria", ar: "معايير للبحث عن الرحلات" } },
      { value: "5", label: { en: "chat & social shortcuts", ar: "اختصارات دردشة وتواصل اجتماعي" } },
    ],
    outcomes: {
      en: [
        "Live at fly-get.com in English and Arabic.",
        "Desktop and mobile screenshots on this page come from the live site.",
      ],
      ar: [
        "الموقع حي على fly-get.com بالإنجليزية والعربية.",
        "لقطات سطح المكتب والجوال في هذه الصفحة مأخوذة من الموقع الحي.",
      ],
    },
    liveUrl: "https://fly-get.com/",
    visibility: "public",
    coverImage: { src: "/projects/flyget-travel/cover.webp", alt: { en: "Flyget Travel home page hero with the trip search bar", ar: "واجهة الصفحة الرئيسية لـ Flyget Travel مع شريط البحث عن الرحلات" } },
    gallery: [
      { src: "/projects/flyget-travel/01-destination-menu.webp", alt: { en: "Destination dropdown menu in the header", ar: "قائمة الوجهات المنسدلة في الترويسة" }, caption: { en: "Destination menu", ar: "قائمة الوجهات" } },
      { src: "/projects/flyget-travel/02-activities-menu.webp", alt: { en: "Activities dropdown menu in the header", ar: "قائمة الأنشطة المنسدلة في الترويسة" }, caption: { en: "Activities menu", ar: "قائمة الأنشطة" } },
      { src: "/projects/flyget-travel/03-destinations.webp", alt: { en: "Destinations archive with trip counts", ar: "أرشيف الوجهات مع عدد الرحلات" }, caption: { en: "Destinations", ar: "الوجهات" } },
      { src: "/projects/flyget-travel/04-search-dropdown.webp", alt: { en: "Trip search bar with the destination list open", ar: "شريط البحث عن الرحلات وقائمة الوجهات مفتوحة" }, caption: { en: "Trip search", ar: "البحث عن الرحلات" } },
      { src: "/projects/flyget-travel/05-search-results.webp", alt: { en: "Trip search results with filters, sorting, prices and departures", ar: "نتائج البحث عن الرحلات مع المرشحات والفرز والأسعار ومواعيد الانطلاق" }, caption: { en: "Search results & filters", ar: "نتائج البحث والمرشحات" } },
      { src: "/projects/flyget-travel/06-arabic-rtl.webp", alt: { en: "Arabic right-to-left home page", ar: "الصفحة الرئيسية بالعربية من اليمين إلى اليسار" }, caption: { en: "Arabic, right-to-left", ar: "العربية، من اليمين إلى اليسار" } },
      { src: "/projects/flyget-travel/07-chat-widget.webp", alt: { en: "Floating contact widget with social shortcuts", ar: "أداة التواصل العائمة مع اختصارات التواصل الاجتماعي" }, caption: { en: "Contact widget", ar: "أداة التواصل" } },
      { src: "/projects/flyget-travel/m-01-home.webp", device: "mobile", alt: { en: "Home page on mobile", ar: "الصفحة الرئيسية على الجوال" }, caption: { en: "Mobile — home", ar: "الجوال — الرئيسية" } },
      { src: "/projects/flyget-travel/m-02-menu.webp", device: "mobile", alt: { en: "Mobile menu with search", ar: "قائمة الجوال مع البحث" }, caption: { en: "Mobile — menu", ar: "الجوال — القائمة" } },
      { src: "/projects/flyget-travel/m-03-destinations.webp", device: "mobile", alt: { en: "Destinations on mobile", ar: "الوجهات على الجوال" }, caption: { en: "Mobile — destinations", ar: "الجوال — الوجهات" } },
      { src: "/projects/flyget-travel/m-04-search.webp", device: "mobile", alt: { en: "Trip search on mobile with the destination list open", ar: "البحث عن الرحلات على الجوال وقائمة الوجهات مفتوحة" }, caption: { en: "Mobile — search", ar: "الجوال — البحث" } },
      { src: "/projects/flyget-travel/m-05-tour-prices.webp", device: "mobile", alt: { en: "Tour page on mobile with the price panel open", ar: "صفحة جولة على الجوال ولوحة الأسعار مفتوحة" }, caption: { en: "Mobile — tour pricing", ar: "الجوال — أسعار الجولة" } },
      { src: "/projects/flyget-travel/m-06-chat.webp", device: "mobile", alt: { en: "Contact widget on mobile", ar: "أداة التواصل على الجوال" }, caption: { en: "Mobile — contact widget", ar: "الجوال — أداة التواصل" } },
    ],
    related: ["hair-clinic", "podoclinic"],
    visual: "website",
  },

  /* ───────────────────── CLIENT & PROFESSIONAL WEBSITES ───────────────────── */
  {
    slug: "hair-clinic",
    categories: ["business-websites"],
    title: { en: "Podo Hair Clinic — Bilingual Clinic Website", ar: "Podo Hair Clinic — موقع عيادة ثنائي اللغة" },
    shortTitle: { en: "Hair Clinic", ar: "Hair Clinic" },
    category: { en: "Clinic Website · Next.js", tr: "Klinik Web Sitesi · Next.js", ar: "موقع عيادة · Next.js" },
    summary: {
      en: "A conversion-focused Arabic / English landing website for a hair-transplant clinic in Cologne: consultation lead form, WhatsApp contact, techniques and services, and Arabic RTL as the default.",
      tr: "Köln'deki bir saç ekimi kliniği için dönüşüm odaklı Arapça / İngilizce açılış sitesi: danışma formu, WhatsApp iletişimi, teknikler ve hizmetler; varsayılan olarak RTL Arapça.",
      ar: "موقع هبوط بالعربية والإنجليزية يركز على التحويل لعيادة زراعة شعر في كولن: نموذج طلب استشارة وتواصل عبر واتساب والتقنيات والخدمات، والعربية من اليمين إلى اليسار لغةً افتراضية.",
    },
    description: {
      en: [
        "Podo Hair Clinic is a single-page landing website for a hair-transplant clinic in Cologne, Germany. It presents the clinic's techniques and services and lets visitors request a free consultation through a lead form or WhatsApp.",
        "Arabic (right-to-left) is the default language, with English one click away. The site is built with Next.js and exported as static files; the form posts to a small PHP mail handler (PHPMailer) on the hosting side.",
      ],
      ar: [
        "Podo Hair Clinic موقع هبوط من صفحة واحدة لعيادة زراعة شعر في كولن بألمانيا. يعرض تقنيات العيادة وخدماتها ويتيح للزوار طلب استشارة مجانية عبر نموذج أو واتساب.",
        "العربية (من اليمين إلى اليسار) هي اللغة الافتراضية، والإنجليزية على بعد نقرة. بُني الموقع بـ Next.js وصُدّر ملفات ثابتة؛ ويرسل النموذج بياناته إلى معالج بريد PHP صغير (PHPMailer) على جهة الاستضافة.",
      ],
    },
    status: "client-work",
    statusNote: {
      en: "Delivered to the client and live in production. Screenshots were captured from a local run of the committed static build; patient photos and contact details are intentionally not shown.",
      ar: "سُلّم للعميل وهو يعمل في بيئة الإنتاج. أُخذت اللقطات من تشغيل محلي للنسخة الثابتة المعتمدة؛ ولا تُعرض صور المرضى ولا بيانات الاتصال عن قصد.",
    },
    role: { en: "Design & development", ar: "التصميم والتطوير" },
    featured: true,
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui", "Radix UI", "Framer Motion", "PHPMailer"],
    keyFeatures: [
      { title: { en: "Arabic (RTL) and English", ar: "العربية (RTL) والإنجليزية" }, description: { en: "Arabic is the default; an in-page switcher changes language and direction.", ar: "العربية هي الافتراضية؛ ويغيّر المبدّل داخل الصفحة اللغة والاتجاه." } },
      { title: { en: "Consultation lead form", ar: "نموذج طلب الاستشارة" }, description: { en: "Name, phone with a country-code selector, email, age, gender, hair-loss level and planned timing, submitted as JSON to a PHP mail handler.", ar: "الاسم والهاتف مع محدد رمز الدولة والبريد والعمر والجنس ومستوى تساقط الشعر والتوقيت المخطط، تُرسل بصيغة JSON إلى معالج بريد PHP." } },
      { title: { en: "WhatsApp contact", ar: "التواصل عبر واتساب" }, description: { en: "A floating button opens a pre-filled WhatsApp chat.", ar: "يفتح زر عائم محادثة واتساب معبأة مسبقًا." } },
      { title: { en: "Techniques & services", ar: "التقنيات والخدمات" }, description: { en: "FUE Sapphire and DHI techniques, service offers, why-choose-us and the medical team.", ar: "تقنيتا FUE Sapphire وDHI وعروض الخدمات وأسباب الاختيار والفريق الطبي." } },
      { title: { en: "Results gallery", ar: "معرض النتائج" }, description: { en: "A before/after comparison slider and a filterable photo and video gallery with a lightbox.", ar: "شريط مقارنة قبل وبعد ومعرض صور وفيديو قابل للتصفية مع عارض مكبّر." } },
      { title: { en: "Location & map", ar: "الموقع والخريطة" }, description: { en: "An embedded map with a directions link.", ar: "خريطة مدمجة مع رابط للاتجاهات." } },
      { title: { en: "Month-end offer countdown", ar: "عدّاد تنازلي لعرض نهاية الشهر" }, description: { en: "A promotional banner counts down to the end of the current month.", ar: "شريط ترويجي يعدّ تنازليًا حتى نهاية الشهر الحالي." } },
      { title: { en: "Two landing variants", ar: "نسختان للصفحة" }, description: { en: "The main page and a /cologne variant without the service-offers section.", ar: "الصفحة الرئيسية ونسخة /cologne بلا قسم عروض الخدمات." } },
      { title: { en: "Analytics tags", ar: "وسوم التحليلات" }, description: { en: "Google Analytics and Google Ads tags, loaded in production builds only.", ar: "وسوم Google Analytics وGoogle Ads، تُحمَّل في نسخ الإنتاج فقط." } },
    ],
    engineeringDecisions: [
      { title: { en: "Static export", ar: "تصدير ثابت" }, body: { en: "Next.js is configured with output: export, so the site is plain static files that any host can serve; only the contact form needs PHP.", ar: "تم ضبط Next.js على output: export، فالموقع ملفات ثابتة تقدّمها أي استضافة؛ ولا يحتاج PHP إلا نموذج التواصل." } },
      { title: { en: "One language context", ar: "سياق لغة واحد" }, body: { en: "Translations and text direction are handled in a single language context, so the layout flips between RTL and LTR from one place.", ar: "تُعالج الترجمات واتجاه النص في سياق لغة واحد، فينقلب التخطيط بين RTL وLTR من مكان واحد." } },
      { title: { en: "Tracking only in production", ar: "التتبع في الإنتاج فقط" }, body: { en: "Analytics and ad tags are loaded in production builds only, keeping development and local runs clean.", ar: "تُحمَّل وسوم التحليلات والإعلانات في نسخ الإنتاج فقط، فتبقى بيئة التطوير والتشغيل المحلي نظيفة." } },
    ],
    metrics: [
      { value: "2", label: { en: "languages, Arabic RTL by default", ar: "لغتان، العربية بـ RTL افتراضيًا" } },
      { value: "2", label: { en: "landing page variants", ar: "نسختان لصفحة الهبوط" } },
    ],
    outcomes: {
      en: ["Delivered to the client and live at hair.podoclinik.com."],
      ar: ["سُلّم للعميل وهو يعمل على hair.podoclinik.com."],
    },
    liveUrl: "https://hair.podoclinik.com/",
    visibility: "public",
    coverImage: { src: "/projects/hair-clinic/cover.webp", alt: { en: "Podo Hair Clinic landing page with the consultation form", ar: "صفحة هبوط Podo Hair Clinic مع نموذج الاستشارة" } },
    gallery: [
      { src: "/projects/hair-clinic/01-hero-ar.webp", alt: { en: "Arabic right-to-left hero with the consultation form", ar: "الواجهة العربية من اليمين إلى اليسار مع نموذج الاستشارة" }, caption: { en: "Arabic, right-to-left", ar: "العربية، من اليمين إلى اليسار" } },
      { src: "/projects/hair-clinic/02-techniques.webp", alt: { en: "Hair transplant techniques section", ar: "قسم تقنيات زراعة الشعر" }, caption: { en: "Techniques", ar: "التقنيات" } },
      { src: "/projects/hair-clinic/03-services.webp", alt: { en: "Service offers section", ar: "قسم عروض الخدمات" }, caption: { en: "Services", ar: "الخدمات" } },
      { src: "/projects/hair-clinic/04-why-choose.webp", alt: { en: "Why choose the clinic section", ar: "قسم لماذا تختار العيادة" }, caption: { en: "Why choose us", ar: "لماذا نحن" } },
      { src: "/projects/hair-clinic/m-01-home.webp", device: "mobile", alt: { en: "Mobile hero in English", ar: "الواجهة على الجوال بالإنجليزية" }, caption: { en: "Mobile — English", ar: "الجوال — الإنجليزية" } },
      { src: "/projects/hair-clinic/m-02-home-ar.webp", device: "mobile", alt: { en: "Mobile hero in Arabic", ar: "الواجهة على الجوال بالعربية" }, caption: { en: "Mobile — Arabic", ar: "الجوال — العربية" } },
      { src: "/projects/hair-clinic/m-03-techniques.webp", device: "mobile", alt: { en: "Techniques on mobile", ar: "التقنيات على الجوال" }, caption: { en: "Mobile — techniques", ar: "الجوال — التقنيات" } },
    ],
    related: ["podoclinic", "flyget-travel"],
    visual: "clinic",
  },
  {
    slug: "podoclinic",
    categories: ["business-websites"],
    title: { en: "Podoclinic — Patient Coordination Website", ar: "Podoclinic — موقع تنسيق رعاية المرضى" },
    shortTitle: { en: "Podoclinic", ar: "Podoclinic" },
    category: { en: "Clinic Website · Static site", tr: "Klinik Web Sitesi · Statik site", ar: "موقع عيادة · موقع ثابت" },
    summary: {
      en: "A bilingual (Arabic / English) single-page website for an Istanbul-based international patient coordination service: services, process, techniques, a request form and WhatsApp.",
      tr: "İstanbul merkezli bir uluslararası hasta koordinasyon hizmeti için iki dilli (Arapça / İngilizce) tek sayfalık web sitesi: hizmetler, süreç, teknikler, talep formu ve WhatsApp.",
      ar: "موقع من صفحة واحدة بالعربية والإنجليزية لخدمة دولية لتنسيق رعاية المرضى مقرها إسطنبول: الخدمات والمراحل والتقنيات ونموذج طلب وواتساب.",
    },
    description: {
      en: [
        "Podoclinic presents an international patient coordination service in Istanbul covering hair transplant, cosmetic surgery and non-surgical aesthetic care. The site explains the services, a four-step patient journey and the techniques the company coordinates access to, and lets visitors reach the team through a request form or WhatsApp.",
        "It is deliberately dependency-free: one HTML page, one stylesheet and one JavaScript file. A translation dictionary switches the interface between Arabic (the default, right-to-left) and English (left-to-right) and updates lang and dir in place.",
      ],
      ar: [
        "يقدّم Podoclinic خدمة دولية لتنسيق رعاية المرضى في إسطنبول تشمل زراعة الشعر والجراحات التجميلية والعناية التجميلية غير الجراحية. يشرح الموقع الخدمات ورحلة المريض في أربع خطوات والتقنيات التي تنسّق الشركة الوصول إليها، ويتيح للزوار الوصول إلى الفريق عبر نموذج طلب أو واتساب.",
        "الموقع بلا اعتماديات عن قصد: صفحة HTML واحدة وملف أنماط واحد وملف JavaScript واحد. ويبدّل قاموس ترجمة الواجهة بين العربية (الافتراضية، من اليمين إلى اليسار) والإنجليزية (من اليسار إلى اليمين) ويحدّث lang وdir في مكانهما.",
      ],
    },
    status: "client-work",
    statusNote: {
      en: "Delivered to the client and live. Screenshots were captured from the delivered code served locally; the client's contact details are cropped out. Content and brand belong to the client.",
      ar: "سُلّم للعميل وهو يعمل. أُخذت اللقطات من الشيفرة المسلّمة وهي تعمل محليًا؛ وقُصّت بيانات اتصال العميل. المحتوى والعلامة التجارية ملك للعميل.",
    },
    role: { en: "Website developer", ar: "مطوّر الموقع" },
    featured: true,
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "EmailJS", { en: "Google Maps embed", ar: "خريطة Google مدمجة" }, { en: "WhatsApp click-to-chat", ar: "محادثة واتساب المباشرة" }],
    keyFeatures: [
      { title: { en: "Arabic (RTL) and English", ar: "العربية (RTL) والإنجليزية" }, description: { en: "Arabic by default with a one-click switch; the choice is remembered in the browser.", ar: "العربية افتراضيًا مع تبديل بنقرة واحدة؛ ويُحفظ الاختيار في المتصفح." } },
      { title: { en: "Single-page structure", ar: "بنية الصفحة الواحدة" }, description: { en: "Home, About, Our Process, Services, Techniques and Contact with anchor navigation.", ar: "الرئيسية ومن نحن ومراحل العمل والخدمات والتقنيات والتواصل مع تنقل بالروابط الداخلية." } },
      { title: { en: "Request form", ar: "نموذج الطلب" }, description: { en: "Enquiries are sent by email through EmailJS, with inline validation and success or error messages in the active language.", ar: "تُرسل الاستفسارات بالبريد عبر EmailJS، مع تحقق فوري ورسائل نجاح أو خطأ باللغة الحالية." } },
      { title: { en: "WhatsApp contact", ar: "التواصل عبر واتساب" }, description: { en: "Click-to-chat links in the header and in the process section.", ar: "روابط محادثة مباشرة في الترويسة وقسم مراحل العمل." } },
      { title: { en: "Responsive layout", ar: "تخطيط متجاوب" }, description: { en: "Grids that collapse in steps and a slide-in mobile menu with an animated icon.", ar: "شبكات تنهار تدريجيًا وقائمة جوال منزلقة بأيقونة متحركة." } },
      { title: { en: "Subtle motion", ar: "حركة هادئة" }, description: { en: "Scroll-reveal animations with IntersectionObserver and an image lightbox.", ar: "حركات ظهور عند التمرير عبر IntersectionObserver وعارض مكبّر للصور." } },
      { title: { en: "Localized map", ar: "خريطة بلغة الواجهة" }, description: { en: "The embedded map is re-requested in the selected interface language.", ar: "تُطلب الخريطة المدمجة من جديد بلغة الواجهة المختارة." } },
      { title: { en: "Search & sharing metadata", ar: "بيانات البحث والمشاركة" }, description: { en: "Page title, description and Open Graph tags.", ar: "عنوان الصفحة ووصفها ووسوم Open Graph." } },
    ],
    engineeringDecisions: [
      { title: { en: "Logical CSS properties", ar: "خصائص CSS منطقية" }, body: { en: "Layout uses logical properties such as inset-inline-end, so the design mirrors correctly between RTL and LTR.", ar: "يستخدم التخطيط خصائص منطقية مثل inset-inline-end، فينعكس التصميم بشكل صحيح بين RTL وLTR." } },
      { title: { en: "One translation dictionary", ar: "قاموس ترجمة واحد" }, body: { en: "All strings live in one dictionary applied through data-i18n attributes, with lang and dir updated when the language changes.", ar: "كل النصوص في قاموس واحد يُطبَّق عبر سمات data-i18n، ويُحدَّث lang وdir عند تغيير اللغة." } },
      { title: { en: "No framework, no build step", ar: "بلا إطار عمل وبلا خطوة بناء" }, body: { en: "A static page that any host can serve and that is easy for the client to maintain.", ar: "صفحة ثابتة تقدّمها أي استضافة ويسهل على العميل صيانتها." } },
    ],
    metrics: [
      { value: "1", label: { en: "HTML page, 1 stylesheet, 1 script", ar: "صفحة HTML وملف أنماط وملف سكربت" } },
      { value: "2", label: { en: "languages, Arabic RTL by default", ar: "لغتان، العربية بـ RTL افتراضيًا" } },
    ],
    outcomes: {
      en: ["Delivered to the client and live at podoclinic.podoclinik.com."],
      ar: ["سُلّم للعميل وهو يعمل على podoclinic.podoclinik.com."],
    },
    liveUrl: "https://podoclinic.podoclinik.com/",
    visibility: "public",
    coverImage: { src: "/projects/podoclinic/cover.webp", alt: { en: "Podoclinic home page in English", ar: "الصفحة الرئيسية لـ Podoclinic بالإنجليزية" } },
    gallery: [
      { src: "/projects/podoclinic/01-home-ar.webp", alt: { en: "Arabic right-to-left home page", ar: "الصفحة الرئيسية بالعربية من اليمين إلى اليسار" }, caption: { en: "Arabic, right-to-left", ar: "العربية، من اليمين إلى اليسار" } },
      { src: "/projects/podoclinic/02-services.webp", alt: { en: "Services section", ar: "قسم الخدمات" }, caption: { en: "Services", ar: "الخدمات" } },
      { src: "/projects/podoclinic/03-techniques.webp", alt: { en: "Techniques section on a dark background", ar: "قسم التقنيات على خلفية داكنة" }, caption: { en: "Techniques", ar: "التقنيات" } },
      { src: "/projects/podoclinic/04-process.webp", alt: { en: "Four-step patient journey", ar: "رحلة المريض في أربع خطوات" }, caption: { en: "Patient journey", ar: "رحلة المريض" } },
      { src: "/projects/podoclinic/m-01-home.webp", device: "mobile", alt: { en: "Home page on mobile in English", ar: "الصفحة الرئيسية على الجوال بالإنجليزية" }, caption: { en: "Mobile — English", ar: "الجوال — الإنجليزية" } },
      { src: "/projects/podoclinic/m-02-menu.webp", device: "mobile", alt: { en: "Slide-in mobile menu", ar: "قائمة الجوال المنزلقة" }, caption: { en: "Mobile — menu", ar: "الجوال — القائمة" } },
      { src: "/projects/podoclinic/m-03-home-ar.webp", device: "mobile", alt: { en: "Home page on mobile in Arabic", ar: "الصفحة الرئيسية على الجوال بالعربية" }, caption: { en: "Mobile — Arabic", ar: "الجوال — العربية" } },
    ],
    related: ["hair-clinic", "flyget-travel"],
    visual: "clinic",
  },

  /* ───────────────────────── SHOWCASE & PLATFORMS ───────────────────────── */
  {
    slug: "zain-el-deen-store",
    categories: ["e-commerce", "business-websites"],
    title: { en: "Zain El Deen Store — Then & Now", ar: "متجر زين الدين — الماضي والحاضر" },
    shortTitle: { en: "Zain El Deen Store", ar: "Zain El Deen Store" },
    category: { en: "E-commerce Storefront Showcase", tr: "E-Ticaret Vitrin Çalışması", ar: "عرض واجهة متجر إلكتروني" },
    summary: {
      en: "A bilingual (English / Arabic, RTL) storefront showcase for a family perfume and beauty shop — the 2026 modernization of my first complete website, built in 2020, with the original edition preserved alongside it.",
      tr: "Bir aile parfüm ve güzellik mağazası için iki dilli (İngilizce / Arapça, RTL) vitrin çalışması — 2020'de yaptığım ilk eksiksiz web sitesinin 2026 modernizasyonu; orijinal sürüm de yanında korunuyor.",
      ar: "عرض واجهة متجر ثنائي اللغة (إنجليزي / عربي مع RTL) لمتجر عائلي للعطور والتجميل — تحديث 2026 لأول موقع متكامل بنيته عام 2020، مع الإبقاء على النسخة الأصلية إلى جانبه.",
    },
    description: {
      en: [
        "Zain El Deen Store is a family business selling perfumes, makeup, skincare, pajamas and personal-care devices. In 2020 I built its first complete website by hand in HTML on Bootstrap 3. This project is the second chapter: a modern, responsive, English and Arabic storefront front end that keeps the shop's identity — the name, the Arabic wordmark, the shopfront photo, the burgundy colour heritage and the original category structure.",
        "Both editions are published and linked: the modern 2026 storefront, a sanitised static archive of the original 2020 site, and a Then & Now page that compares them side by side with a before/after slider and a table of measured differences.",
      ],
      ar: [
        "متجر زين الدين نشاط عائلي يبيع العطور والمكياج والعناية بالبشرة والبيجامات وأجهزة العناية الشخصية. في عام 2020 بنيت موقعه الكامل الأول يدويًا بـ HTML وBootstrap 3. وهذا المشروع هو الفصل الثاني: واجهة متجر حديثة ومتجاوبة بالإنجليزية والعربية تحافظ على هوية المتجر — الاسم والشعار العربي وصورة واجهة المحل وإرث اللون العنابي وبنية الأقسام الأصلية.",
        "النسختان منشورتان ومرتبطتان: متجر 2026 الحديث، وأرشيف ثابت منقّح لموقع 2020 الأصلي، وصفحة «الماضي والحاضر» التي تقارن بينهما جنبًا إلى جنب بشريط قبل وبعد وجدول للفروق المقيسة.",
      ],
    },
    status: "demo",
    statusNote: {
      en: "A showcase, not a live shop: there is no checkout, payment, accounts or inventory. Prices are illustrative and the catalog is demo data. Photographs come from the original 2020 site and are used with the owner's permission; brand names belong to their owners.",
      ar: "عرض توضيحي وليس متجرًا فعليًا: لا يوجد دفع ولا حسابات ولا مخزون. الأسعار توضيحية والكتالوج بيانات تجريبية. الصور من موقع 2020 الأصلي وتُستخدم بإذن المالك؛ وأسماء العلامات التجارية لأصحابها.",
    },
    year: "2020 → 2026",
    role: {
      en: "Original 2020 site: author · 2026 modernization: direction and review",
      ar: "موقع 2020 الأصلي: المؤلف · تحديث 2026: التوجيه والمراجعة",
    },
    authorship: {
      en: "The original 2020 website was created by Mohammed Zaineldeen. The 2026 modernization was developed under his direction and review.",
      tr: "Orijinal 2020 web sitesi Mohammed Zaineldeen tarafından oluşturuldu. 2026 modernizasyonu onun yönlendirmesi ve denetimi altında geliştirildi.",
      ar: "أنشأ محمد زين الدين موقع 2020 الأصلي. أما تحديث 2026 فطُوّر بتوجيه منه ومراجعته.",
    },
    featured: true,
    technologies: ["HTML", { en: "CSS (logical properties)", ar: "CSS (خصائص منطقية)" }, "JavaScript (ES modules)", "Vite", "Playwright", "Node test runner"],
    challenges: {
      en: [
        "The 2020 site was 34 near-identical HTML pages with 122 loose image files, 793 hard-coded paths pointing at a single computer and 40 references to outside hosts.",
        "It was English only, and its search box was never connected to anything.",
        "It carried template content and details that don't belong on a public portfolio piece, so the original could not simply be republished.",
      ],
      ar: [
        "كان موقع 2020 مكوّنًا من 34 صفحة HTML شبه متطابقة و122 ملف صورة منفصلًا و793 مسارًا مكتوبًا يدويًا يشير إلى حاسوب واحد و40 إشارة إلى مضيفات خارجية.",
        "كان بالإنجليزية فقط، وصندوق البحث فيه لم يكن موصولًا بأي شيء.",
        "احتوى على محتوى قوالب وتفاصيل لا مكان لها في عمل معروض للعموم، فلم يكن ممكنًا إعادة نشر الأصل كما هو.",
      ],
    },
    solutions: {
      en: [
        "Replaced the copy-pasted pages with three page templates driven by one catalog data file.",
        "Added a complete English and Arabic interface with proper right-to-left layout, in-place language switching and bilingual search.",
        "Built live search, category and brand filters, sorting, shareable URLs, product galleries and a wishlist — with no third-party requests.",
        "Preserved the original as a sanitised static Legacy Showcase, assembled from an allow-list of facts, and linked both editions through a Then & Now page.",
      ],
      ar: [
        "استبدلت الصفحات المنسوخة بثلاثة قوالب صفحات يقودها ملف بيانات واحد للكتالوج.",
        "أضفت واجهة كاملة بالإنجليزية والعربية بتخطيط صحيح من اليمين إلى اليسار وتبديلًا فوريًا للغة وبحثًا ثنائي اللغة.",
        "بنيت بحثًا فوريًا ومرشحات للأقسام والعلامات وفرزًا وروابط قابلة للمشاركة ومعارض منتجات وقائمة أمنيات — بلا أي طلبات لأطراف ثالثة.",
        "حافظت على الأصل كأرشيف ثابت منقّح، جُمع من قائمة حقائق مسموح بها، وربطت النسختين بصفحة «الماضي والحاضر».",
      ],
    },
    keyFeatures: [
      { title: { en: "English / Arabic (RTL)", ar: "الإنجليزية / العربية (RTL)" }, description: { en: "Full translation, direction-aware layout and bilingual search.", ar: "ترجمة كاملة وتخطيط يراعي الاتجاه وبحث ثنائي اللغة." } },
      { title: { en: "Catalog", ar: "الكتالوج" }, description: { en: "Search, category and brand filters with accurate counts, sorting and shareable URLs.", ar: "بحث ومرشحات للأقسام والعلامات بأعداد دقيقة وفرز وروابط قابلة للمشاركة." } },
      { title: { en: "Product pages", ar: "صفحات المنتجات" }, description: { en: "Image gallery with keyboard support, details and related products.", ar: "معرض صور يدعم لوحة المفاتيح وتفاصيل ومنتجات ذات صلة." } },
      { title: { en: "Wishlist", ar: "قائمة الأمنيات" }, description: { en: "Saved in the browser and synced across tabs.", ar: "تُحفظ في المتصفح وتتزامن بين التبويبات." } },
      { title: { en: "Original 2020 edition", ar: "نسخة 2020 الأصلية" }, description: { en: "Sanitised static archive of the first website.", ar: "أرشيف ثابت منقّح للموقع الأول." } },
      { title: { en: "Then & Now", ar: "الماضي والحاضر" }, description: { en: "Before/after slider and a table of measured differences.", ar: "شريط قبل وبعد وجدول للفروق المقيسة." } },
      { title: { en: "Accessibility", ar: "إمكانية الوصول" }, description: { en: "Skip link, visible focus, ARIA states, reduced-motion support, correct lang and dir.", ar: "رابط تخطٍّ وتركيز مرئي وحالات ARIA ودعم تقليل الحركة وlang وdir صحيحان." } },
      { title: { en: "Privacy & performance", ar: "الخصوصية والأداء" }, description: { en: "Self-hosted fonts, WebP with srcset, no analytics, no CDNs.", ar: "خطوط مستضافة ذاتيًا وWebP مع srcset، بلا تحليلات وبلا شبكات توزيع محتوى." } },
    ],
    engineeringDecisions: [
      { title: { en: "Data-driven pages", ar: "صفحات تقودها البيانات" }, body: { en: "Products, categories and translations live in data files, so adding a product means editing data and adding images rather than another HTML page.", ar: "المنتجات والأقسام والترجمات في ملفات بيانات، فإضافة منتج تعني تعديل البيانات وإضافة صور لا صفحة HTML جديدة." } },
      { title: { en: "RTL by construction", ar: "RTL من أساس البناء" }, body: { en: "CSS logical properties and a language switch that updates lang and dir in place, so layouts, icons and the gallery follow the reading direction.", ar: "خصائص CSS منطقية ومبدّل لغة يحدّث lang وdir في مكانهما، فتتبع التخطيطات والأيقونات والمعرض اتجاه القراءة." } },
      { title: { en: "Privacy enforced by tests", ar: "الخصوصية تفرضها الاختبارات" }, body: { en: "An automated scan fails the build if phone numbers, e-mail addresses, password values or tracking scripts reach the source or production output.", ar: "يفشل فحص آلي في البناء إذا وصلت أرقام هواتف أو عناوين بريد أو قيم كلمات مرور أو سكربتات تتبع إلى المصدر أو ناتج الإنتاج." } },
      { title: { en: "Image rights by construction", ar: "حقوق الصور من أساس البناء" }, body: { en: "Only registered photographs and original illustrations are bundled; a test fails if anything else reaches the production build.", ar: "لا تُضمَّن إلا الصور المسجلة والرسوم الأصلية؛ ويفشل اختبار إذا وصل أي شيء آخر إلى نسخة الإنتاج." } },
    ],
    metrics: [
      { value: "34 → 3", label: { en: "HTML pages → page templates", ar: "صفحة HTML ← قوالب صفحات" } },
      { value: "50", label: { en: "demo catalog products", ar: "منتجًا في الكتالوج التجريبي" } },
      { value: "2", label: { en: "languages, incl. RTL Arabic", ar: "لغتان، منها العربية بـ RTL" } },
      { value: "40", label: { en: "unit tests, plus browser tests", ar: "اختبار وحدة، إضافةً إلى اختبارات المتصفح" } },
    ],
    comparison: {
      title: { en: "One shop, two editions of its website", ar: "متجر واحد، نسختان لموقعه" },
      body: {
        en: "Left: the original 2020 website — hand-written HTML, Bootstrap 3 and the hand-drawn banner, archived with private details and unlicensed photos replaced by placeholders. Right: the 2026 storefront, which keeps the name, logos and colour heritage.",
        ar: "اليسار: موقع 2020 الأصلي — HTML مكتوب يدويًا وBootstrap 3 ولافتة مرسومة يدويًا، مؤرشف مع استبدال التفاصيل الخاصة والصور غير المرخصة بصور بديلة. اليمين: متجر 2026 الذي يحافظ على الاسم والشعارات وإرث الألوان.",
      },
      before: { src: "/projects/zain-el-deen-store/07-legacy-2020-home.webp", alt: { en: "Original 2020 Zain El Deen website home page", ar: "الصفحة الرئيسية لموقع زين الدين الأصلي عام 2020" }, label: { en: "Original 2020", ar: "الأصل 2020" } },
      after: { src: "/projects/zain-el-deen-store/cover.webp", alt: { en: "Modern 2026 Zain El Deen Store home page", ar: "الصفحة الرئيسية لمتجر زين الدين الحديث 2026" }, label: { en: "Modern 2026", ar: "الحديث 2026" } },
    },
    outcomes: {
      en: [
        "Modern edition, archived 2020 edition and Then & Now page published together on GitHub Pages.",
        "The repository ships unit tests (bilingual search, filters, dictionary parity, privacy and image-rights rules) and a Playwright browser suite.",
        "Open items listed by the project itself: a native Arabic proofread and device/Lighthouse verification.",
      ],
      ar: [
        "نُشرت النسخة الحديثة ونسخة 2020 المؤرشفة وصفحة «الماضي والحاضر» معًا على GitHub Pages.",
        "يضم المستودع اختبارات وحدة (البحث ثنائي اللغة والمرشحات وتطابق القواميس وقواعد الخصوصية وحقوق الصور) وحزمة اختبارات متصفح بـ Playwright.",
        "بنود مفتوحة يذكرها المشروع نفسه: تدقيق عربي من متحدث أصلي، والتحقق على الأجهزة وبـ Lighthouse.",
      ],
    },
    liveUrls: [
      { label: { en: "Modern 2026 edition", tr: "Modern 2026 sürümü", ar: "نسخة 2026 الحديثة" }, url: "https://mohammedszd.github.io/zaineldeen-store-showcase/" },
      { label: { en: "Original 2020 edition", tr: "Orijinal 2020 sürümü", ar: "نسخة 2020 الأصلية" }, url: "https://mohammedszd.github.io/zaineldeen-store-showcase/legacy/" },
      { label: { en: "Then & Now comparison", tr: "Dünü ve Bugünü karşılaştırması", ar: "مقارنة الماضي والحاضر" }, url: "https://mohammedszd.github.io/zaineldeen-store-showcase/then-and-now.html" },
    ],
    repositoryUrl: "https://github.com/MohammedSZD/zaineldeen-store-showcase",
    visibility: "public",
    coverImage: { src: "/projects/zain-el-deen-store/cover.webp", alt: { en: "Zain El Deen Store modern home page with the shopfront photo and featured products", ar: "الصفحة الرئيسية الحديثة لمتجر زين الدين مع صورة واجهة المحل والمنتجات المميزة" } },
    gallery: [
      { src: "/projects/zain-el-deen-store/01-shop.webp", alt: { en: "Catalog page with search, category and brand filters", ar: "صفحة الكتالوج مع البحث ومرشحات الأقسام والعلامات" }, caption: { en: "Catalog with live filters", ar: "الكتالوج مع مرشحات فورية" } },
      { src: "/projects/zain-el-deen-store/02-product.webp", alt: { en: "Product page with image gallery", ar: "صفحة منتج مع معرض صور" }, caption: { en: "Product page", ar: "صفحة المنتج" } },
      { src: "/projects/zain-el-deen-store/03-arabic-rtl.webp", alt: { en: "Arabic right-to-left home page", ar: "الصفحة الرئيسية بالعربية من اليمين إلى اليسار" }, caption: { en: "Arabic, right-to-left", ar: "العربية، من اليمين إلى اليسار" } },
      { src: "/projects/zain-el-deen-store/04-then-and-now.webp", alt: { en: "Then and Now page introduction", ar: "مقدمة صفحة «الماضي والحاضر»" }, caption: { en: "Then & Now page", ar: "صفحة «الماضي والحاضر»" } },
      { src: "/projects/zain-el-deen-store/05-compare.webp", alt: { en: "Before and after comparison slider", ar: "شريط المقارنة بين قبل وبعد" }, caption: { en: "Before / after slider", ar: "شريط قبل / بعد" } },
      { src: "/projects/zain-el-deen-store/06-measured.webp", alt: { en: "Table of measured differences between the editions", ar: "جدول الفروق المقيسة بين النسختين" }, caption: { en: "What changed, measured", ar: "ما الذي تغيّر، بالأرقام" } },
      { src: "/projects/zain-el-deen-store/07-legacy-2020-home.webp", alt: { en: "Original 2020 edition home page", ar: "الصفحة الرئيسية لنسخة 2020 الأصلية" }, caption: { en: "Original 2020 — home", ar: "الأصل 2020 — الرئيسية" } },
      { src: "/projects/zain-el-deen-store/08-legacy-2020-category.webp", alt: { en: "Original 2020 edition category page", ar: "صفحة قسم من نسخة 2020 الأصلية" }, caption: { en: "Original 2020 — category page", ar: "الأصل 2020 — صفحة قسم" } },
      { src: "/projects/zain-el-deen-store/m-01-home.webp", device: "mobile", alt: { en: "Modern edition on mobile", ar: "النسخة الحديثة على الجوال" }, caption: { en: "Modern — mobile", ar: "الحديثة — جوال" } },
      { src: "/projects/zain-el-deen-store/m-02-arabic.webp", device: "mobile", alt: { en: "Arabic edition on mobile", ar: "النسخة العربية على الجوال" }, caption: { en: "Arabic — mobile", ar: "العربية — جوال" } },
      { src: "/projects/zain-el-deen-store/m-03-legacy-2020.webp", device: "mobile", alt: { en: "Original 2020 edition on mobile", ar: "نسخة 2020 الأصلية على الجوال" }, caption: { en: "Original 2020 — mobile", ar: "الأصل 2020 — جوال" } },
    ],
    related: ["lale", "shop-website"],
    visual: "storefront",
  },
  {
    slug: "lale",
    categories: ["e-commerce", "in-development"],
    title: { en: "LALE — Fashion E-Commerce Platform", ar: "LALE — منصة تجارة إلكترونية للأزياء" },
    shortTitle: { en: "LALE", ar: "LALE" },
    category: { en: "E-Commerce / Product Platform", tr: "E-Ticaret / Ürün Platformu", ar: "تجارة إلكترونية / منصة منتج" },
    summary: {
      en: "A fashion e-commerce platform designed as a monorepo — storefront, admin, API and background worker — with inventory, orders, returns and localization at its core.",
      tr: "Monorepo olarak tasarlanmış bir moda e-ticaret platformu — vitrin, yönetim, API ve arka plan işçisi — merkezinde stok, siparişler, iadeler ve yerelleştirme.",
      ar: "منصة تجارة إلكترونية للأزياء مصممة كمستودع واحد متعدد التطبيقات — متجر ولوحة إدارة وواجهة برمجية وعامل خلفي — في صلبها المخزون والطلبات والمرتجعات والتوطين.",
    },
    description: {
      en: [
        "LALE is a fashion e-commerce platform currently in development. It is architected as a monorepo of Next.js and React front-ends, a NestJS API and a worker service, backed by PostgreSQL through Prisma.",
        "The product scope covers the storefront and an admin area, catalog and inventory management, order and returns workflows, and growth tooling such as coupons, loyalty, analytics, localization and SEO.",
      ],
      ar: [
        "LALE منصة تجارة إلكترونية للأزياء قيد التطوير حاليًا. صُممت كمستودع واحد يضم واجهات Next.js وReact وواجهة برمجية بـ NestJS وخدمة عاملة، مدعومة بـ PostgreSQL عبر Prisma.",
        "يشمل نطاق المنتج المتجر ولوحة إدارة، وإدارة الكتالوج والمخزون، ومسارات الطلبات والمرتجعات، وأدوات النمو مثل القسائم والولاء والتحليلات والتوطين وتحسين محركات البحث.",
      ],
    },
    status: "in-development",
    statusNote: {
      en: "In development. The scope below describes the product design — it is not a list of launched functionality. Integrations and try-on features are planned. No public site or screenshots yet.",
      ar: "قيد التطوير. يصف النطاق أدناه تصميم المنتج — وليس قائمة بوظائف أُطلقت. التكاملات وميزات القياس الافتراضي مخططة. لا يوجد موقع عام ولا لقطات شاشة بعد.",
    },
    role: { en: "Product & engineering", ar: "المنتج والهندسة" },
    featured: false,
    technologies: ["Next.js", "React", "NestJS", "PostgreSQL", "Prisma", { en: "Worker service", ar: "خدمة عاملة" }, "Monorepo"],
    keyFeatures: [
      { title: { en: "Storefront", ar: "المتجر" } },
      { title: { en: "Admin", ar: "لوحة الإدارة" } },
      { title: { en: "API", ar: "الواجهة البرمجية" } },
      { title: { en: "Inventory", ar: "المخزون" } },
      { title: { en: "Product & catalog management", ar: "إدارة المنتجات والكتالوج" } },
      { title: { en: "Order workflows", ar: "مسارات الطلبات" } },
      { title: { en: "Returns", ar: "المرتجعات" } },
      { title: { en: "Coupons", ar: "القسائم" } },
      { title: { en: "Loyalty", ar: "الولاء" } },
      { title: { en: "Analytics", ar: "التحليلات" } },
      { title: { en: "Localization", ar: "التوطين" } },
      { title: { en: "SEO", ar: "تحسين محركات البحث" } },
      { title: { en: "Payment & shipping architecture", ar: "بنية الدفع والشحن" } },
      { title: { en: "Find My Size", ar: "اعثر على مقاسي" } },
      { title: { en: "Trendyol integration", ar: "تكامل Trendyol" }, state: "planned" },
      { title: { en: "Virtual try-on", ar: "القياس الافتراضي" }, state: "planned" },
    ],
    architecture: {
      summary: { en: "A monorepo with separate applications sharing a single data layer.", ar: "مستودع واحد بتطبيقات منفصلة تتشارك طبقة بيانات واحدة." },
      layers: [
        { label: { en: "Front-ends", ar: "الواجهات" }, items: [{ en: "Storefront (Next.js + React)", ar: "المتجر (Next.js + React)" }, { en: "Admin", ar: "لوحة الإدارة" }] },
        { label: { en: "API", ar: "الواجهة البرمجية" }, items: ["NestJS"] },
        { label: { en: "Background", ar: "الخلفية" }, items: [{ en: "Worker service", ar: "خدمة عاملة" }] },
        { label: { en: "Data", ar: "البيانات" }, items: ["PostgreSQL", "Prisma"] },
      ],
    },
    outcomes: {
      en: ["Currently in development — no launch or business results to report yet."],
      ar: ["قيد التطوير حاليًا — لا توجد نتائج إطلاق أو نتائج أعمال لعرضها بعد."],
    },
    visibility: "private",
    coverImage: { src: "/projects/lale/cover.webp", alt: { en: "LALE storefront", ar: "متجر LALE" } },
    gallery: [
      { src: "/projects/lale/01.webp", alt: { en: "LALE storefront", ar: "متجر LALE" }, caption: { en: "Storefront", ar: "المتجر" } },
      { src: "/projects/lale/02.webp", alt: { en: "LALE admin", ar: "لوحة إدارة LALE" }, caption: { en: "Admin", ar: "لوحة الإدارة" } },
    ],
    related: ["zain-el-deen-store", "topfan-os"],
    visual: "storefront",
  },
  {
    slug: "ai-automation",
    categories: ["web-applications"],
    title: { en: "AI-Driven Sales & Real Estate Automation System", ar: "نظام أتمتة المبيعات والعقارات بالذكاء الاصطناعي" },
    shortTitle: { en: "AI Automation", ar: "الأتمتة بالذكاء الاصطناعي" },
    category: { en: "AI / Automation", tr: "Yapay Zekâ / Otomasyon", ar: "الذكاء الاصطناعي / الأتمتة" },
    summary: {
      en: "An n8n-based automation system that turns inbound conversations into structured data, schedules appointments and routes leads to a CRM — reducing manual data entry.",
      tr: "Gelen konuşmaları yapılandırılmış veriye çeviren, randevu planlayan ve potansiyel müşterileri bir CRM'e yönlendiren n8n tabanlı otomasyon sistemi — manuel veri girişini azaltır.",
      ar: "نظام أتمتة مبني على n8n يحوّل المحادثات الواردة إلى بيانات منظمة ويحجز المواعيد ويوجّه العملاء المحتملين إلى نظام CRM — فيقلل الإدخال اليدوي للبيانات.",
    },
    description: {
      en: [
        "A personal technical project exploring how far customer-acquisition and scheduling workflows can be automated. n8n orchestrates conversations across WhatsApp and web channels, database and scheduling integrations, and Claude/GPT API calls that return structured JSON.",
        "Appointments are handled through the Cal.com API — availability checks, booking and reminders — while leads are routed to a CRM or Google Sheets.",
      ],
      ar: [
        "مشروع تقني شخصي يستكشف إلى أي مدى يمكن أتمتة مسارات اكتساب العملاء والجدولة. ينسّق n8n المحادثات عبر قنوات واتساب والويب وتكاملات قواعد البيانات والجدولة واستدعاءات واجهات Claude/GPT التي تعيد JSON منظمًا.",
        "تُدار المواعيد عبر واجهة Cal.com البرمجية — فحص التوفر والحجز والتذكيرات — بينما يُوجَّه العملاء المحتملون إلى CRM أو Google Sheets.",
      ],
    },
    status: "personal",
    statusNote: { en: "Personal technical project. No business results are claimed.", ar: "مشروع تقني شخصي. لا تُدّعى أي نتائج أعمال." },
    role: { en: "Design & implementation", ar: "التصميم والتنفيذ" },
    featured: false,
    technologies: ["n8n", "Claude / GPT APIs", "Cal.com API", "Webhooks", "JSON", "Google Sheets", { en: "WhatsApp / web flows", ar: "مسارات واتساب والويب" }],
    keyFeatures: [
      { title: { en: "Automated customer-acquisition workflows", ar: "مسارات آلية لاكتساب العملاء" } },
      { title: { en: "WhatsApp / web communication flows", ar: "مسارات تواصل عبر واتساب والويب" } },
      { title: { en: "Structured-data processing", ar: "معالجة البيانات المنظمة" }, description: { en: "Claude/GPT API calls returning structured JSON.", ar: "استدعاءات واجهات Claude/GPT التي تعيد JSON منظمًا." } },
      { title: { en: "Appointment scheduling", ar: "حجز المواعيد" }, description: { en: "Cal.com API: availability checks, booking and reminders.", ar: "واجهة Cal.com: فحص التوفر والحجز والتذكيرات." } },
      { title: { en: "Database & scheduling integrations", ar: "تكاملات قواعد البيانات والجدولة" } },
      { title: { en: "CRM / Google Sheets routing", ar: "توجيه إلى CRM / Google Sheets" } },
      { title: { en: "Less manual data entry", ar: "إدخال يدوي أقل للبيانات" } },
    ],
    architecture: {
      layers: [
        { label: { en: "Channels", ar: "القنوات" }, items: ["WhatsApp", { en: "Web", ar: "الويب" }] },
        { label: { en: "Orchestration", ar: "التنسيق" }, items: ["n8n", "Webhooks"] },
        { label: { en: "Intelligence", ar: "الذكاء" }, items: ["Claude / GPT APIs", { en: "Structured JSON output", ar: "مخرجات JSON منظمة" }] },
        { label: { en: "Integrations", ar: "التكاملات" }, items: ["Cal.com API", { en: "Database", ar: "قاعدة بيانات" }, "CRM / Google Sheets"] },
      ],
    },
    visibility: "private",
    coverImage: { src: "/projects/ai-automation/cover.webp", alt: { en: "AI automation workflow diagram", ar: "مخطط سير عمل الأتمتة بالذكاء الاصطناعي" } },
    gallery: [{ src: "/projects/ai-automation/01.webp", alt: { en: "n8n workflow overview", ar: "نظرة عامة على سير عمل n8n" }, caption: { en: "Workflow overview", ar: "نظرة عامة على سير العمل" } }],
    related: ["medmar", "topfan-os"],
    visual: "workflow",
  },
  {
    slug: "houston-performance",
    categories: ["business-websites"],
    title: { en: "Houston Performance", ar: "Houston Performance" },
    shortTitle: { en: "Houston Performance", ar: "Houston Performance" },
    category: { en: "Automotive", tr: "Otomotiv", ar: "السيارات" },
    summary: {
      en: "A premium dark automotive website with a Year → Make → Model vehicle-fitment flow and visual product and service galleries.",
      tr: "Yıl → Marka → Model araç uyumluluk akışı ile ürün ve hizmet galerileri sunan, premium koyu temalı otomotiv web sitesi.",
      ar: "موقع سيارات داكن فاخر بمسار اختيار توافق المركبة (السنة ← الماركة ← الطراز) ومعارض مرئية للمنتجات والخدمات.",
    },
    description: {
      en: ["Lead developer on a premium, dark-themed automotive website. A vehicle-fitment selector walks visitors through Year → Make → Model, alongside visual galleries for products and services."],
      ar: ["مطوّر رئيسي لموقع سيارات فاخر بمظهر داكن. يرشد محدد توافق المركبة الزوار عبر السنة ثم الماركة ثم الطراز، إلى جانب معارض مرئية للمنتجات والخدمات."],
    },
    status: "client-work",
    featured: false,
    role: { en: "Lead Developer", ar: "المطوّر الرئيسي" },
    technologies: [],
    keyFeatures: [
      { title: { en: "Vehicle fitment: Year → Make → Model", ar: "توافق المركبة: السنة ← الماركة ← الطراز" } },
      { title: { en: "Product and service galleries", ar: "معارض المنتجات والخدمات" } },
      { title: { en: "Premium dark automotive presentation", ar: "عرض داكن فاخر لقطاع السيارات" } },
    ],
    visibility: "public",
    coverImage: { src: "/projects/houston/cover.webp", alt: { en: "Houston Performance website", ar: "موقع Houston Performance" } },
    gallery: [{ src: "/projects/houston/01.webp", alt: { en: "Houston Performance vehicle fitment", ar: "توافق المركبة في Houston Performance" }, caption: { en: "Vehicle fitment", ar: "توافق المركبة" } }],
    related: ["podoclinic", "flyget-travel"],
    visual: "automotive",
  },

  /* ───────────────────── WEBSITES, DEMOS & CONCEPTS ───────────────────── */
  {
    slug: "galaxs-team",
    categories: ["business-websites"],
    title: { en: "Galaxs Team — Company Website", ar: "Galaxs Team — موقع شركة" },
    shortTitle: { en: "Galaxs Team", ar: "Galaxs Team" },
    category: { en: "Business Website", tr: "Kurumsal Web Sitesi", ar: "موقع أعمال" },
    summary: {
      en: "A fast, dependency-free website for a software and design team in Istanbul: video hero, services, brand work and partners in a gold-on-black identity.",
      tr: "İstanbul'daki bir yazılım ve tasarım ekibi için hızlı, bağımlılıksız web sitesi: video hero, hizmetler, marka işleri ve iş ortakları; siyah üzerine altın kimlik.",
      ar: "موقع سريع بلا اعتماديات لفريق برمجة وتصميم في إسطنبول: واجهة فيديو وخدمات وأعمال علامات تجارية وشركاء بهوية ذهبية على خلفية سوداء.",
    },
    description: {
      en: [
        "A single-page website for Galaxs Team, a software and design team based in Beşiktaş, Istanbul. It presents the team's services, brand work and partners behind a space-themed looping video hero.",
        "The site is a modernization of an earlier version: the original files are kept in the repository root for reference, while the current site is a lean, accessible rebuild in plain HTML, CSS and JavaScript with no build step.",
      ],
      ar: [
        "موقع من صفحة واحدة لـ Galaxs Team، فريق برمجة وتصميم مقره بشيكتاش في إسطنبول. يعرض خدمات الفريق وأعمال العلامات التجارية والشركاء خلف واجهة فيديو متكررة بطابع فضائي.",
        "الموقع تحديث لنسخة سابقة: تبقى الملفات الأصلية في جذر المستودع للرجوع إليها، بينما الموقع الحالي إعادة بناء خفيفة ويسهل الوصول إليها بـ HTML وCSS وJavaScript بلا خطوة بناء.",
      ],
    },
    status: "production",
    statusNote: {
      en: "Published on GitHub Pages. Hero video, logo samples and partner logos belong to their respective owners.",
      ar: "منشور على GitHub Pages. فيديو الواجهة ونماذج الشعارات وشعارات الشركاء ملك لأصحابها.",
    },
    role: { en: "Front-end development", ar: "تطوير الواجهات الأمامية" },
    featured: false,
    technologies: ["HTML", "CSS", "JavaScript", { en: "WebM / MP4 video", ar: "فيديو WebM / MP4" }, "JSON-LD", "GitHub Pages"],
    challenges: {
      en: ["The original site shipped a 32 MB 4K hero video and unoptimised images.", "It needed to look premium on phones while staying light enough to load quickly."],
      ar: ["كان الموقع الأصلي يحمّل فيديو واجهة بدقة 4K بحجم 32 ميغابايت وصورًا غير محسّنة.", "كان لا بد أن يبدو فاخرًا على الهواتف مع بقائه خفيفًا بما يكفي للتحميل السريع."],
    },
    solutions: {
      en: [
        "Reduced the hero video from 32 MB to about 1.8 MB (1280px, WebM and MP4 with a poster image).",
        "Converted images to cropped WebP with explicit dimensions and lazy loading; self-hosted and preloaded the display font.",
        "Designed mobile-first with a slide-down menu, scroll-reveal animations that respect reduced motion, and a paused hero video when motion is reduced.",
      ],
      ar: [
        "خفّضت فيديو الواجهة من 32 ميغابايت إلى نحو 1.8 ميغابايت (عرض 1280 بكسل، WebM وMP4 مع صورة غلاف).",
        "حوّلت الصور إلى WebP مقصوصة بأبعاد صريحة وتحميل كسول، واستضفت خط العناوين ذاتيًا وحمّلته مسبقًا.",
        "صممت للجوال أولًا بقائمة منسدلة وحركات ظهور عند التمرير تراعي تقليل الحركة، وإيقاف فيديو الواجهة عند تفضيل تقليل الحركة.",
      ],
    },
    keyFeatures: [
      { title: { en: "Looping video hero", ar: "واجهة فيديو متكررة" }, description: { en: "WebM and MP4 sources with a poster image.", ar: "مصادر WebM وMP4 مع صورة غلاف." } },
      { title: { en: "Services & brand work", ar: "الخدمات وأعمال العلامات" }, description: { en: "Web, mobile, logo, graphic and motion design, video editing and digital art.", ar: "تصميم الويب والجوال والشعارات والجرافيك والحركة، وتحرير الفيديو والفن الرقمي." } },
      { title: { en: "Partners", ar: "الشركاء" } },
      { title: { en: "Accessible markup", ar: "ترميز يسهل الوصول إليه" }, description: { en: "Skip link, visible focus, alt text and semantic landmarks.", ar: "رابط تخطٍّ وتركيز مرئي ونصوص بديلة ومعالم دلالية." } },
      { title: { en: "SEO metadata", ar: "بيانات تحسين محركات البحث" }, description: { en: "Open Graph / Twitter cards, JSON-LD, robots.txt and sitemap.xml.", ar: "بطاقات Open Graph / Twitter وJSON-LD وrobots.txt وsitemap.xml." } },
      { title: { en: "No tracking", ar: "بلا تتبع" }, description: { en: "No analytics and no third-party requests.", ar: "بلا تحليلات وبلا طلبات لأطراف ثالثة." } },
    ],
    metrics: [
      { value: "32 → 1.8 MB", label: { en: "hero video size", ar: "حجم فيديو الواجهة" } },
      { value: "~20", label: { en: "small static files in total", ar: "ملفًا ثابتًا صغيرًا في المجموع" } },
    ],
    outcomes: {
      en: ["Live website published on GitHub Pages with a documented deployment workflow.", "No frameworks, libraries or build step to maintain."],
      ar: ["موقع حي منشور على GitHub Pages مع مسار نشر موثّق.", "بلا أطر عمل ولا مكتبات ولا خطوة بناء تحتاج إلى صيانة."],
    },
    liveUrl: "https://mohammedszd.github.io/galaxy-site/",
    repositoryUrl: "https://github.com/MohammedSZD/galaxy-site",
    visibility: "public",
    coverImage: { src: "/projects/galaxs-team/cover.webp", alt: { en: "Galaxs Team website hero with Earth video background", ar: "واجهة موقع Galaxs Team بخلفية فيديو للأرض" } },
    gallery: [
      { src: "/projects/galaxs-team/01-services.webp", alt: { en: "Services section", ar: "قسم الخدمات" }, caption: { en: "Services", ar: "الخدمات" } },
      { src: "/projects/galaxs-team/02-brand-work.webp", alt: { en: "Logo and identity samples", ar: "نماذج الشعارات والهوية" }, caption: { en: "Brand work", ar: "أعمال العلامات التجارية" } },
      { src: "/projects/galaxs-team/03-partners.webp", alt: { en: "Partner logos", ar: "شعارات الشركاء" }, caption: { en: "Partners", ar: "الشركاء" } },
      { src: "/projects/galaxs-team/m-01-hero.webp", device: "mobile", alt: { en: "Galaxs Team hero on mobile", ar: "واجهة Galaxs Team على الجوال" }, caption: { en: "Mobile — hero", ar: "الجوال — الواجهة" } },
      { src: "/projects/galaxs-team/m-02-services.webp", device: "mobile", alt: { en: "Services on mobile", ar: "الخدمات على الجوال" }, caption: { en: "Mobile — services", ar: "الجوال — الخدمات" } },
    ],
    related: ["restaurant-website", "podoclinic"],
    visual: "website",
  },
  {
    slug: "mini-ecommerce",
    categories: ["e-commerce", "web-applications"],
    title: { en: "MiniStore — Mini E-commerce", ar: "MiniStore — متجر إلكتروني مصغّر" },
    shortTitle: { en: "Mini E-commerce", ar: "متجر مصغّر" },
    category: { en: "Web Application / Storefront Demo", tr: "Web Uygulaması / Vitrin Demosu", ar: "تطبيق ويب / عرض واجهة متجر" },
    summary: {
      en: "A responsive, frontend-only product catalog and product-management interface built with React, TypeScript and Tailwind CSS.",
      tr: "React, TypeScript ve Tailwind CSS ile geliştirilmiş, duyarlı ve yalnızca ön yüzlü bir ürün kataloğu ve ürün yönetimi arayüzü.",
      ar: "كتالوج منتجات وواجهة لإدارة المنتجات متجاوبة وأمامية فقط، مبنية بـ React وTypeScript وTailwind CSS.",
    },
    description: {
      en: [
        "MiniStore is a storefront-style interface for browsing a catalog and managing its products. It focuses on clean UI, a mobile-first layout, accessible components and tidy, typed code.",
        "It is a demo: there is no backend, database, authentication, cart or checkout. Data lives in memory and the catalog is fictional.",
      ],
      ar: [
        "MiniStore واجهة بطابع المتاجر لتصفح كتالوج وإدارة منتجاته. تركّز على واجهة نظيفة وتخطيط للجوال أولًا ومكوّنات يسهل الوصول إليها وشيفرة مرتبة بأنواع محددة.",
        "هو نموذج توضيحي: لا يوجد خادم ولا قاعدة بيانات ولا مصادقة ولا سلة ولا دفع. البيانات في الذاكرة والكتالوج خيالي.",
      ],
    },
    status: "demo",
    statusNote: {
      en: "Frontend-only demo. Changes reset on refresh and all products, brands and prices are fictional.",
      ar: "نموذج أمامي فقط. تُعاد التغييرات إلى أصلها عند تحديث الصفحة، وجميع المنتجات والعلامات والأسعار خيالية.",
    },
    role: { en: "Front-end development", ar: "تطوير الواجهات الأمامية" },
    featured: false,
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Headless UI", "react-hot-toast", "ESLint"],
    challenges: {
      en: ["Show that a small catalog UI can be genuinely accessible and responsive, not just good-looking — dialogs, validation and feedback included."],
      ar: ["إظهار أن واجهة كتالوج صغيرة يمكن أن تكون سهلة الوصول ومتجاوبة فعلًا لا جميلة فحسب — بما في ذلك مربعات الحوار والتحقق والتنبيهات."],
    },
    solutions: {
      en: [
        "Accessible add/edit dialog with validation, focus trapping and Esc to close, plus a delete confirmation.",
        "Search, category filter and sorting with empty and no-results states, and toast feedback for every action.",
        "Mobile-first layout checked from 320px up; dialogs become bottom sheets on phones; local SVG product art avoids external image dependencies.",
      ],
      ar: [
        "مربع حوار للإضافة والتعديل يسهل الوصول إليه مع تحقق وحصر للتركيز وإغلاق بـ Esc، وتأكيد للحذف.",
        "بحث ومرشح للأقسام وفرز مع حالات الفراغ وعدم وجود نتائج، وتنبيه منبثق لكل إجراء.",
        "تخطيط للجوال أولًا مفحوص من 320 بكسل فأكثر؛ وتتحول مربعات الحوار إلى أوراق سفلية على الهواتف؛ ورسوم المنتجات SVG محلية فلا اعتماد على صور خارجية.",
      ],
    },
    keyFeatures: [
      { title: { en: "Product grid", ar: "شبكة المنتجات" }, description: { en: "Consistent image ratios, category badges, colour swatches, formatted prices.", ar: "نسب صور متسقة وشارات للأقسام وعينات ألوان وأسعار منسقة." } },
      { title: { en: "Add, edit, delete", ar: "إضافة وتعديل وحذف" }, description: { en: "Dialog form with validation and delete confirmation.", ar: "نموذج في مربع حوار مع تحقق وتأكيد للحذف." } },
      { title: { en: "Search, filter, sort", ar: "بحث وتصفية وفرز" } },
      { title: { en: "Toast feedback", ar: "تنبيهات منبثقة" } },
      { title: { en: "Keyboard friendly", ar: "ملائم للوحة المفاتيح" }, description: { en: "Visible focus, focus-trapped dialogs, reduced-motion support.", ar: "تركيز مرئي ومربعات حوار تحصر التركيز ودعم تقليل الحركة." } },
    ],
    outcomes: { en: ["Deployed on Vercel and documented with run, build and lint instructions."], ar: ["منشور على Vercel وموثّق بتعليمات التشغيل والبناء والفحص."] },
    liveUrl: "https://mini-ecommerce-ruddy-five.vercel.app/",
    repositoryUrl: "https://github.com/MohammedSZD/mini-ecommerce",
    visibility: "public",
    coverImage: { src: "/projects/mini-ecommerce/cover.webp", alt: { en: "MiniStore product catalog", ar: "كتالوج منتجات MiniStore" } },
    gallery: [
      { src: "/projects/mini-ecommerce/01-search.webp", alt: { en: "Search filtering the catalog to a single product", ar: "البحث يصفّي الكتالوج إلى منتج واحد" }, caption: { en: "Search", ar: "البحث" } },
      { src: "/projects/mini-ecommerce/02-edit-dialog.webp", alt: { en: "Edit product dialog", ar: "مربع حوار تعديل منتج" }, caption: { en: "Edit product dialog", ar: "مربع حوار تعديل منتج" } },
      { src: "/projects/mini-ecommerce/m-01-catalog.webp", device: "mobile", alt: { en: "Catalog on mobile", ar: "الكتالوج على الجوال" }, caption: { en: "Mobile — catalog", ar: "الجوال — الكتالوج" } },
      { src: "/projects/mini-ecommerce/m-02-edit.webp", device: "mobile", alt: { en: "Edit product bottom sheet on mobile", ar: "الورقة السفلية لتعديل منتج على الجوال" }, caption: { en: "Mobile — edit sheet", ar: "الجوال — ورقة التعديل" } },
    ],
    related: ["shop-website", "zain-el-deen-store"],
    visual: "storefront",
  },
  {
    slug: "restaurant-website",
    categories: ["business-websites"],
    title: { en: "Food Lover — Restaurant Website Concept", ar: "Food Lover — تصور موقع مطعم" },
    shortTitle: { en: "Restaurant Website", ar: "موقع مطعم" },
    category: { en: "Business Website Concept", tr: "Kurumsal Web Sitesi Konsepti", ar: "تصور موقع أعمال" },
    summary: {
      en: "A responsive single-page restaurant website with a filterable menu, an accessible photo lightbox and a validated reservation form — in plain HTML, CSS and JavaScript.",
      tr: "Filtrelenebilir menü, erişilebilir fotoğraf ışık kutusu ve doğrulanan rezervasyon formu olan duyarlı tek sayfalık restoran sitesi — düz HTML, CSS ve JavaScript ile.",
      ar: "موقع مطعم متجاوب من صفحة واحدة بقائمة طعام قابلة للتصفية وعارض صور يسهل الوصول إليه ونموذج حجز مع تحقق — بـ HTML وCSS وJavaScript الخالصة.",
    },
    description: {
      en: [
        "Food Lover is a design and front-end portfolio project: a restaurant website concept with a hero, about section, special offers, a filterable menu, a photo gallery and contact details.",
        "The restaurant, menu, prices and contact details are fictional, and the reservation form demonstrates validation without sending or storing anything.",
      ],
      ar: [
        "Food Lover مشروع تصميم وواجهات أمامية ضمن أعمالي: تصور لموقع مطعم بواجهة وقسم تعريفي وعروض خاصة وقائمة طعام قابلة للتصفية ومعرض صور وبيانات تواصل.",
        "المطعم والقائمة والأسعار وبيانات التواصل خيالية، ونموذج الحجز يوضّح التحقق دون إرسال أو تخزين أي شيء.",
      ],
    },
    status: "demo",
    statusNote: { en: "Concept project. The business, menu, prices and contact details are fictional.", ar: "مشروع تصوري. النشاط والقائمة والأسعار وبيانات التواصل خيالية." },
    role: { en: "Design & front-end development", ar: "التصميم وتطوير الواجهات الأمامية" },
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", { en: "Self-hosted Fraunces & Inter", ar: "خطوط Fraunces وInter مستضافة ذاتيًا" }, "WebP"],
    solutions: {
      en: [
        "Mobile-first with deliberate breakpoint changes: a full-screen navigation panel, a separate hero crop for phones and a list-style menu that becomes an image grid on desktop.",
        "Photo gallery lightbox on the native dialog element with arrow keys, Escape and focus return.",
        "Optimised WebP imagery (about 1.9 MB total, down from about 25 MB of originals), self-hosted fonts and no third-party requests.",
      ],
      ar: [
        "للجوال أولًا مع تغييرات مقصودة عند نقاط التوقف: لوحة تنقل بملء الشاشة وقص منفصل للواجهة على الهواتف وقائمة طعام نصية تتحول إلى شبكة صور على سطح المكتب.",
        "عارض صور مكبّر على عنصر dialog الأصلي مع مفاتيح الأسهم وEscape وإعادة التركيز.",
        "صور WebP محسّنة (نحو 1.9 ميغابايت في المجموع بدل نحو 25 ميغابايت للأصول) وخطوط مستضافة ذاتيًا وبلا طلبات لأطراف ثالثة.",
      ],
    },
    keyFeatures: [
      { title: { en: "Filterable menu", ar: "قائمة طعام قابلة للتصفية" }, description: { en: "Client-side categories: All, Breakfast, Mains, Bowls & Salads.", ar: "فئات من جهة العميل: الكل والإفطار والأطباق الرئيسية والسلطات والأطباق الخفيفة." } },
      { title: { en: "Accessible lightbox", ar: "عارض صور يسهل الوصول إليه" }, description: { en: "Native dialog with keyboard navigation.", ar: "عنصر dialog أصلي مع تنقل بلوحة المفاتيح." } },
      { title: { en: "Reservation form", ar: "نموذج الحجز" }, description: { en: "Validates input; nothing is submitted or stored.", ar: "يتحقق من المدخلات؛ ولا يُرسل أو يُخزَّن شيء." } },
      { title: { en: "Responsive navigation", ar: "تنقل متجاوب" }, description: { en: "Full-screen mobile menu with active-section highlighting.", ar: "قائمة جوال بملء الشاشة مع إبراز القسم الحالي." } },
      { title: { en: "Scroll reveal", ar: "ظهور عند التمرير" }, description: { en: "Respects reduced-motion preferences.", ar: "يراعي تفضيل تقليل الحركة." } },
    ],
    outcomes: {
      en: ["Published on GitHub Pages; layouts checked at seven widths from 320 to 1920px with no horizontal overflow (per the project README)."],
      ar: ["منشور على GitHub Pages؛ فُحصت التخطيطات عند سبعة عروض من 320 إلى 1920 بكسل دون تمرير أفقي (بحسب README المشروع)."],
    },
    liveUrl: "https://mohammedszd.github.io/restaurant-site/",
    repositoryUrl: "https://github.com/MohammedSZD/restaurant-site",
    visibility: "public",
    coverImage: { src: "/projects/restaurant-website/cover.webp", alt: { en: "Food Lover restaurant website hero", ar: "واجهة موقع المطعم Food Lover" } },
    gallery: [
      { src: "/projects/restaurant-website/01-menu.webp", alt: { en: "Filterable menu", ar: "قائمة الطعام القابلة للتصفية" }, caption: { en: "Menu", ar: "قائمة الطعام" } },
      { src: "/projects/restaurant-website/02-offers.webp", alt: { en: "Special offers", ar: "العروض الخاصة" }, caption: { en: "Special offers", ar: "العروض الخاصة" } },
      { src: "/projects/restaurant-website/03-gallery.webp", alt: { en: "Photo gallery", ar: "معرض الصور" }, caption: { en: "Gallery", ar: "المعرض" } },
      { src: "/projects/restaurant-website/04-lightbox.webp", alt: { en: "Photo lightbox", ar: "عارض الصور المكبّر" }, caption: { en: "Lightbox", ar: "العارض المكبّر" } },
      { src: "/projects/restaurant-website/m-01-hero.webp", device: "mobile", alt: { en: "Hero on mobile", ar: "الواجهة على الجوال" }, caption: { en: "Mobile — hero", ar: "الجوال — الواجهة" } },
      { src: "/projects/restaurant-website/m-02-menu.webp", device: "mobile", alt: { en: "Mobile navigation panel", ar: "لوحة التنقل على الجوال" }, caption: { en: "Mobile — navigation", ar: "الجوال — التنقل" } },
    ],
    related: ["galaxs-team", "shop-website"],
    visual: "website",
  },
  {
    slug: "shop-website",
    categories: ["e-commerce"],
    title: { en: "Stride — Footwear Storefront Concept", ar: "Stride — تصور واجهة متجر أحذية" },
    shortTitle: { en: "Shop Website", ar: "موقع متجر" },
    category: { en: "E-commerce Storefront Concept", tr: "E-Ticaret Vitrin Konsepti", ar: "تصور واجهة متجر إلكتروني" },
    summary: {
      en: "A responsive footwear storefront with search, filters, sorting, saved items and a details dialog — modernized from an early single-page learning project.",
      tr: "Arama, filtreler, sıralama, kaydedilen ürünler ve ayrıntı penceresi olan duyarlı ayakkabı vitrini — erken bir tek sayfalık öğrenme projesinden modernize edildi.",
      ar: "واجهة متجر أحذية متجاوبة ببحث وتصفية وفرز ومنتجات محفوظة ومربع تفاصيل — حُدّثت من مشروع تعلّم مبكر من صفحة واحدة.",
    },
    description: {
      en: [
        "Stride began as an early learning project, a single-page shoe shop, and was modernized into a portfolio-quality front-end concept in plain HTML, CSS and JavaScript.",
        "It is a front-end demo: there is no backend, checkout or real inventory, and the products, prices and policies are illustrative.",
      ],
      ar: [
        "بدأ Stride كمشروع تعلّم مبكر، متجر أحذية من صفحة واحدة، ثم حُدّث إلى تصور واجهات أمامية بجودة تليق بمعرض الأعمال، بـ HTML وCSS وJavaScript الخالصة.",
        "هو نموذج أمامي: لا يوجد خادم ولا دفع ولا مخزون حقيقي، والمنتجات والأسعار والسياسات توضيحية.",
      ],
    },
    status: "demo",
    statusNote: {
      en: "Front-end demo. Product photography shows third-party brand marks and is used for illustration only.",
      ar: "نموذج أمامي. تُظهر صور المنتجات علامات تجارية لأطراف ثالثة وتُستخدم للتوضيح فقط.",
    },
    role: { en: "Front-end development", ar: "تطوير الواجهات الأمامية" },
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "WebP", "GitHub Pages"],
    challenges: {
      en: ["The original was a single page with placeholder text, a non-functional login form, fabricated reviews, an icon CDN dependency and about 10 MB of unoptimised images."],
      ar: ["كان الأصل صفحة واحدة بنصوص بديلة ونموذج دخول لا يعمل وتقييمات مفبركة واعتماد على شبكة أيقونات خارجية ونحو 10 ميغابايت من الصور غير المحسّنة."],
    },
    solutions: {
      en: [
        "Rewrote the content around a coherent store concept and removed the login form and fabricated reviews.",
        "Added search, category filtering and sorting, saved items persisted in the browser, and a product details dialog on the native dialog element.",
        "Replaced the icon CDN with inline SVG and cut about 10 MB of PNG/JPG to about 1 MB of WebP.",
      ],
      ar: [
        "أعدت كتابة المحتوى حول تصور متجر متماسك وحذفت نموذج الدخول والتقييمات المفبركة.",
        "أضفت البحث وتصفية الأقسام والفرز ومنتجات محفوظة تبقى في المتصفح ومربع تفاصيل للمنتج على عنصر dialog الأصلي.",
        "استبدلت شبكة الأيقونات بـ SVG مدمج وقلّصت نحو 10 ميغابايت من PNG/JPG إلى نحو 1 ميغابايت من WebP.",
      ],
    },
    keyFeatures: [
      { title: { en: "Search, filter, sort", ar: "بحث وتصفية وفرز" }, description: { en: "With a live region announcing result counts.", ar: "مع منطقة حية تعلن عدد النتائج." } },
      { title: { en: "Save for later", ar: "الحفظ لوقت لاحق" }, description: { en: "Persisted in localStorage with a header count.", ar: "تُحفظ في localStorage مع عدّاد في الترويسة." } },
      { title: { en: "Details dialog", ar: "مربع التفاصيل" }, description: { en: "Native dialog element.", ar: "عنصر dialog أصلي." } },
      { title: { en: "Featured product gallery", ar: "معرض المنتج المميز" } },
      { title: { en: "Responsive layout", ar: "تخطيط متجاوب" }, description: { en: "Checked from 320px to 1920px.", ar: "مفحوص من 320 إلى 1920 بكسل." } },
    ],
    outcomes: { en: ["Published on GitHub Pages with no third-party runtime dependencies."], ar: ["منشور على GitHub Pages بلا اعتماديات تشغيل لأطراف ثالثة."] },
    liveUrl: "https://mohammedszd.github.io/shop-site/",
    repositoryUrl: "https://github.com/MohammedSZD/shop-site",
    visibility: "public",
    coverImage: { src: "/projects/shop-website/cover.webp", alt: { en: "Stride footwear storefront hero", ar: "واجهة متجر الأحذية Stride" } },
    gallery: [
      { src: "/projects/shop-website/01-collection.webp", alt: { en: "Collection with search and filters", ar: "المجموعة مع البحث والمرشحات" }, caption: { en: "Collection", ar: "المجموعة" } },
      { src: "/projects/shop-website/02-details.webp", alt: { en: "Product details dialog", ar: "مربع تفاصيل المنتج" }, caption: { en: "Details dialog", ar: "مربع التفاصيل" } },
      { src: "/projects/shop-website/m-01-home.webp", device: "mobile", alt: { en: "Home on mobile", ar: "الرئيسية على الجوال" }, caption: { en: "Mobile — home", ar: "الجوال — الرئيسية" } },
      { src: "/projects/shop-website/m-02-collection.webp", device: "mobile", alt: { en: "Collection on mobile", ar: "المجموعة على الجوال" }, caption: { en: "Mobile — collection", ar: "الجوال — المجموعة" } },
    ],
    related: ["mini-ecommerce", "zain-el-deen-store"],
    visual: "storefront",
  },
  {
    slug: "matchara",
    categories: ["web-applications", "in-development"],
    title: { en: "MATCHARA", ar: "MATCHARA" },
    shortTitle: { en: "MATCHARA", ar: "MATCHARA" },
    category: { en: "Sports Platform / Product", tr: "Spor Platformu / Ürün", ar: "منصة رياضية / منتج" },
    tagline: { en: "Your match starts here.", tr: "Maçın burada başlıyor.", ar: "مباراتك تبدأ من هنا." },
    summary: {
      en: "A product concept for a platform where players create, discover and join local matches, build teams and track their own statistics — starting with football and volleyball.",
      tr: "Oyuncuların yerel maçlar oluşturup keşfettiği ve katıldığı, takım kurduğu ve kendi istatistiklerini takip ettiği bir platform konsepti — futbol ve voleybolla başlıyor.",
      ar: "فكرة منتج لمنصة ينشئ فيها اللاعبون المباريات المحلية ويكتشفونها وينضمون إليها ويكوّنون الفرق ويتتبعون إحصاءاتهم — تبدأ بكرة القدم والكرة الطائرة.",
    },
    description: {
      en: [
        "MATCHARA is a sports product concept: a place for players to create local matches, find ones to join, pick positions, form teams and challenge other teams.",
        "Beyond organising matches, the vision includes recording results, tracking goals and assists, building player statistics, rating matches and players, voting for player of the match, and leaderboards. Football and volleyball are the initial sports; Arabic, Turkish and English are the planned languages.",
        "MATCHARA is a separate product from TopFan OS.",
      ],
      ar: [
        "MATCHARA فكرة منتج رياضي: مكان ينشئ فيه اللاعبون مباريات محلية ويجدون ما ينضمون إليه ويختارون المراكز ويكوّنون الفرق ويتحدون فرقًا أخرى.",
        "إلى جانب تنظيم المباريات، تشمل الرؤية تسجيل النتائج وتتبع الأهداف وصناعة الأهداف وبناء إحصاءات اللاعبين وتقييم المباريات واللاعبين والتصويت لأفضل لاعب في المباراة ولوحات المتصدرين. كرة القدم والكرة الطائرة هما الرياضتان الأوليان؛ والعربية والتركية والإنجليزية هي اللغات المخططة.",
        "MATCHARA منتج منفصل عن TopFan OS.",
      ],
    },
    status: "concept",
    statusNote: {
      en: "Product concept / planned. Everything on this page describes the intended product — none of it has launched.",
      ar: "فكرة منتج / مخطط. كل ما في هذه الصفحة يصف المنتج المقصود — ولم يُطلق شيء منه.",
    },
    role: { en: "Product & engineering", ar: "المنتج والهندسة" },
    featured: false,
    technologies: [],
    keyFeatures: [
      { title: { en: "Create & discover local matches", ar: "إنشاء المباريات المحلية واكتشافها" }, state: "planned" },
      { title: { en: "Join matches & select positions", ar: "الانضمام إلى المباريات واختيار المراكز" }, state: "planned" },
      { title: { en: "Create teams & challenge other teams", ar: "تكوين الفرق وتحدي فرق أخرى" }, state: "planned" },
      { title: { en: "Record results, goals and assists", ar: "تسجيل النتائج والأهداف وصناعتها" }, state: "planned" },
      { title: { en: "Player statistics", ar: "إحصاءات اللاعبين" }, state: "planned" },
      { title: { en: "Rate matches & players; vote for player of the match", ar: "تقييم المباريات واللاعبين والتصويت لأفضل لاعب" }, state: "planned" },
      { title: { en: "Leaderboards", ar: "لوحات المتصدرين" }, state: "planned" },
      { title: { en: "Tournaments", ar: "البطولات" }, state: "planned" },
      { title: { en: "Shareable match posters", ar: "ملصقات مباريات قابلة للمشاركة" }, state: "planned" },
      { title: { en: "Team history & match feedback", ar: "تاريخ الفريق وآراء المباريات" }, state: "planned" },
      { title: { en: "Filters by level, location, time and format", ar: "تصفية بالمستوى والموقع والوقت والصيغة" }, state: "planned" },
      { title: { en: "Organizer tools", ar: "أدوات المنظّمين" }, state: "planned" },
    ],
    outcomes: { en: ["Concept stage — no launch, users or results to report."], ar: ["مرحلة الفكرة — لا إطلاق ولا مستخدمين ولا نتائج لعرضها."] },
    visibility: "private",
    coverImage: { src: "/projects/matchara/cover.webp", alt: { en: "MATCHARA concept", ar: "فكرة MATCHARA" } },
    gallery: [
      { src: "/projects/matchara/01.webp", alt: { en: "MATCHARA match discovery concept", ar: "تصور اكتشاف المباريات في MATCHARA" }, caption: { en: "Match discovery (concept)", ar: "اكتشاف المباريات (تصور)" } },
      { src: "/projects/matchara/02.webp", alt: { en: "MATCHARA player profile concept", ar: "تصور ملف اللاعب في MATCHARA" }, caption: { en: "Player profile (concept)", ar: "ملف اللاعب (تصور)" } },
    ],
    related: ["topfan-os", "lale"],
    visual: "matches",
  },
  {
    slug: "yeni-sayfa",
    categories: ["business-websites"],
    title: { en: "Yeni Sayfa Platform", ar: "منصة Yeni Sayfa" },
    shortTitle: { en: "Yeni Sayfa", ar: "Yeni Sayfa" },
    category: { en: "Web Integration / Content Platform", tr: "Web Entegrasyonu / İçerik Platformu", ar: "تكامل ويب / منصة محتوى" },
    summary: {
      en: "Interactive frontend elements and WordPress integrations for a digital content platform.",
      tr: "Dijital bir içerik platformu için etkileşimli ön yüz öğeleri ve WordPress entegrasyonları.",
      ar: "عناصر واجهة تفاعلية وتكاملات WordPress لمنصة محتوى رقمي.",
    },
    description: {
      en: ["Frontend and integration work for a content platform: interactive elements, WordPress integration, third-party visualisations and iframes, digital-media components and responsive HTML blocks."],
      ar: ["عمل على الواجهات والتكامل لمنصة محتوى: عناصر تفاعلية وتكامل مع WordPress وتصويرات مرئية وإطارات iframe من أطراف ثالثة ومكوّنات وسائط رقمية وكتل HTML متجاوبة."],
    },
    status: "client-work",
    featured: false,
    technologies: ["WordPress", "HTML"],
    keyFeatures: [
      { title: { en: "Interactive frontend elements", ar: "عناصر واجهة تفاعلية" } },
      { title: { en: "WordPress integration", ar: "تكامل مع WordPress" } },
      { title: { en: "Third-party visualisations / iframes", ar: "تصويرات مرئية / iframe من أطراف ثالثة" } },
      { title: { en: "Digital-media components", ar: "مكوّنات وسائط رقمية" } },
      { title: { en: "Responsive HTML blocks", ar: "كتل HTML متجاوبة" } },
      { title: { en: "Layout optimisation", ar: "تحسين التخطيط" } },
    ],
    visibility: "public",
    coverImage: { src: "/projects/yeni-sayfa/cover.webp", alt: { en: "Yeni Sayfa platform", ar: "منصة Yeni Sayfa" } },
    related: ["podoclinic", "houston-performance"],
    visual: "content",
  },
];

/** Fill Turkish text from the translation table wherever a field has no explicit `tr`. */
function applyTurkish(node: unknown): void {
  if (Array.isArray(node)) return node.forEach(applyTurkish);
  if (!node || typeof node !== "object") return;
  const n = node as Record<string, unknown>;
  if (typeof n.en === "string" && "ar" in n) {
    if (!n.tr && trProjects[n.en]) n.tr = trProjects[n.en];
    return;
  }
  if (Array.isArray(n.en) && "ar" in n) {
    const tr = (n.en as string[]).map((s) => trProjects[s]);
    if (!n.tr && tr.every(Boolean)) n.tr = tr;
    return;
  }
  Object.values(n).forEach(applyTurkish);
}
projects.forEach(applyTurkish);

export const featuredProjects = projects.filter((p) => p.featured && !p.archived);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
