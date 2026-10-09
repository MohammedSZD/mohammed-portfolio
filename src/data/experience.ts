import type { ExperienceEntry } from "@/lib/types";

/** Display order = array order (prioritised, not strictly chronological). */
export const experience: ExperienceEntry[] = [
  {
    id: "med-mar",
    company: "Med-Mar Tuz San. Tic. A.Ş.",
    role: { en: "R&D Software Engineer", tr: "Ar-Ge Yazılım Mühendisi", ar: "مهندس برمجيات للبحث والتطوير" },
    period: { en: "February 2026 – Present", tr: "Şubat 2026 – Günümüz", ar: "فبراير 2026 – حتى الآن" },
    current: true,
    emphasis: "primary",
    summary: {
      en: "Designing and building the company's web presence and major parts of an internal, Laravel-based factory management platform.",
      tr: "Şirketin web varlığını ve Laravel tabanlı kurum içi fabrika yönetim platformunun önemli bölümlerini tasarlıyor ve geliştiriyorum.",
      ar: "أصمم وأبني الحضور الرقمي للشركة وأجزاء رئيسية من منصة داخلية لإدارة المصنع مبنية على Laravel.",
    },
    highlightGroups: [
      {
        title: { en: "Corporate website", tr: "Kurumsal web sitesi", ar: "الموقع المؤسسي" },
        items: {
          en: ["End-to-end design and development of the company's corporate website."],
          tr: ["Şirketin kurumsal web sitesinin uçtan uca tasarımı ve geliştirilmesi."],
          ar: ["تصميم وتطوير الموقع المؤسسي للشركة من البداية إلى النهاية."],
        },
      },
      {
        title: { en: "Factory management platform", tr: "Fabrika yönetim platformu", ar: "منصة إدارة المصنع" },
        items: {
          en: [
            "Major development on an internal Laravel-based factory management platform. Delivered core modules across 40+ database migrations and 15+ new views and interfaces during an eight-week sprint (May–June 2026).",
            "Designed and built a self-referencing industrial asset hierarchy — Factory → Unit → Section → Machine → Part → Sub-part — with dynamic, category-driven custom attributes, change and movement audit logging, and file/image attachments.",
            "Built maintenance work-order workflows linking jobs to machines, locations and personnel, with photo documentation, cost and spare-parts tracking, personnel assignment and search, and mobile-first reporting for factory staff.",
            "Built preventive-maintenance scheduling with daily, weekly, monthly, quarterly, biannual and annual recurrence, plus checklists and progress tracking, priorities and reminders, historical maintenance logs and reusable templates.",
            "Applied Laravel caching, Axios/AJAX asynchronous data fetching, mobile-first responsive interfaces and middleware-based role-based access control (RBAC).",
          ],
          tr: [
            "Laravel tabanlı kurum içi fabrika yönetim platformunda ağırlıklı geliştirme. Sekiz haftalık bir sprintte (Mayıs–Haziran 2026) 40'tan fazla veritabanı migrasyonu ve 15'ten fazla yeni görünüm ve arayüzle çekirdek modülleri teslim ettim.",
            "Kendine referanslı bir endüstriyel varlık hiyerarşisi tasarlayıp geliştirdim — Fabrika → Birim → Bölüm → Makine → Parça → Alt parça — dinamik ve kategoriye göre tanımlanan özel nitelikler, değişiklik ve hareket denetim kaydı ile dosya/görsel ekleri dahil.",
            "İşleri makinelere, konumlara ve personele bağlayan bakım iş emri akışlarını; fotoğraflı belgelendirme, maliyet ve yedek parça takibi, personel atama ve arama ile fabrika personeli için mobil öncelikli raporlamayla birlikte geliştirdim.",
            "Günlük, haftalık, aylık, üç aylık, altı aylık ve yıllık tekrarlı önleyici bakım planlamasını; kontrol listeleri, ilerleme takibi, öncelikler ve hatırlatmalar, geçmiş bakım kayıtları ve yeniden kullanılabilir şablonlarla birlikte geliştirdim.",
            "Laravel önbellekleme, Axios/AJAX ile asenkron veri çekme, mobil öncelikli duyarlı arayüzler ve middleware tabanlı rol tabanlı erişim denetimi (RBAC) uyguladım.",
          ],
          ar: [
            "تطوير رئيسي في منصة داخلية لإدارة المصنع مبنية على Laravel. سلّمت الوحدات الأساسية عبر أكثر من 40 عملية ترحيل لقاعدة البيانات وأكثر من 15 واجهة وعرضًا جديدًا خلال سبرنت مدته ثمانية أسابيع (مايو–يونيو 2026).",
            "صممت وبنيت تسلسلًا هرميًا ذاتي الإحالة للأصول الصناعية — مصنع ← وحدة ← قسم ← آلة ← قطعة ← قطعة فرعية — مع خصائص مخصصة ديناميكية تحددها فئة المعدّة، وسجل تدقيق للتغييرات والتنقلات، ومرفقات للملفات والصور.",
            "بنيت مسارات أوامر الصيانة التي تربط الأعمال بالآلات والمواقع والعاملين، مع توثيق بالصور وتتبع للتكاليف وقطع الغيار وإسناد للعاملين وبحث، وتقارير مصممة للجوال أولًا لعاملي المصنع.",
            "بنيت جدولة الصيانة الوقائية بتكرار يومي وأسبوعي وشهري وربع سنوي ونصف سنوي وسنوي، مع قوائم تحقق وتتبع للتقدم وأولويات وتذكيرات وسجلات صيانة تاريخية وقوالب قابلة لإعادة الاستخدام.",
            "طبقت التخزين المؤقت في Laravel وجلب البيانات غير المتزامن عبر Axios/AJAX وواجهات متجاوبة للجوال أولًا وضبط الصلاحيات حسب الأدوار (RBAC) عبر الـ middleware.",
          ],
        },
      },
    ],
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap", "Axios / AJAX", "RBAC"],
  },
  {
    id: "nur-plastic",
    company: "Nur Plastic Company",
    role: { en: "Trading & Web Coordinator", tr: "Ticaret ve Web Koordinatörü", ar: "منسق التجارة والويب" },
    period: { en: "2024 – January 2026", tr: "2024 – Ocak 2026", ar: "2024 – يناير 2026" },
    emphasis: "compact",
    bullets: {
      en: ["Corporate website development and maintenance", "Digital identity, social media and content management", "Traffic and engagement analysis"],
      tr: ["Kurumsal web sitesi geliştirme ve bakımı", "Dijital kimlik, sosyal medya ve içerik yönetimi", "Trafik ve etkileşim analizi"],
      ar: ["تطوير الموقع المؤسسي وصيانته", "إدارة الهوية الرقمية ووسائل التواصل الاجتماعي والمحتوى", "تحليل الزيارات والتفاعل"],
    },
  },
  {
    id: "freelance",
    company: { en: "Freelance", tr: "Serbest", ar: "عمل حر" },
    role: { en: "Front-End Development Editor / WordPress", tr: "Front-End Geliştirme Editörü / WordPress", ar: "محرر تطوير الواجهات الأمامية / WordPress" },
    period: { en: "2022 – Present", tr: "2022 – Günümüz", ar: "2022 – حتى الآن" },
    current: true,
    emphasis: "compact",
    bullets: {
      en: ["WordPress websites", "Responsive design and UX improvements", "Ongoing maintenance"],
      tr: ["WordPress web siteleri", "Duyarlı tasarım ve UX iyileştirmeleri", "Sürekli bakım"],
      ar: ["مواقع WordPress", "تصميم متجاوب وتحسينات تجربة المستخدم", "صيانة مستمرة"],
    },
  },
  {
    id: "maf-palestine",
    company: "MAF Palestine Consultative",
    role: { en: "Front-End Development Editor", tr: "Front-End Geliştirme Editörü", ar: "محرر تطوير الواجهات الأمامية" },
    period: { en: "2023 – 2024", tr: "2023 – 2024", ar: "2023 – 2024" },
    emphasis: "compact",
    bullets: {
      en: ["Web performance and browser compatibility", "UI/UX implementation", "API integrations"],
      tr: ["Web performansı ve tarayıcı uyumluluğu", "UI/UX uygulaması", "API entegrasyonları"],
      ar: ["أداء الويب وتوافق المتصفحات", "تنفيذ واجهات وتجربة المستخدم", "تكامل الواجهات البرمجية"],
    },
  },
  {
    id: "unit-one",
    company: "Unit One Company",
    role: { en: "Web / Front-End Developer", tr: "Web / Front-End Geliştirici", ar: "مطور ويب / واجهات أمامية" },
    period: { en: "June 2021 – 2022", tr: "Haziran 2021 – 2022", ar: "يونيو 2021 – 2022" },
    emphasis: "compact",
    bullets: {
      en: ["Website development and backend functionality", "Legacy-code optimisation and debugging", "Responsive, accessibility-focused frontend implementation"],
      tr: ["Web sitesi geliştirme ve arka yüz işlevleri", "Eski kod optimizasyonu ve hata ayıklama", "Duyarlı ve erişilebilirlik odaklı ön yüz uygulaması"],
      ar: ["تطوير المواقع ووظائف الخلفية", "تحسين الشيفرة القديمة وتصحيح الأخطاء", "تنفيذ واجهات متجاوبة تراعي إمكانية الوصول"],
    },
  },
  {
    id: "topfan",
    company: "TopFan League",
    role: { en: "Founder & Logistics Lead", tr: "Kurucu ve Lojistik Sorumlusu", ar: "مؤسس ومسؤول اللوجستيات" },
    period: { en: "December 2023 – Present", tr: "Aralık 2023 – Günümüz", ar: "ديسمبر 2023 – حتى الآن" },
    current: true,
    emphasis: "compact",
    bullets: {
      en: [
        "Football community operations: weekly matches and tournaments",
        "Venue reservations, team coordination and logistics",
        "Media production, and TopFan OS — the operations platform built for the league",
      ],
      tr: [
        "Futbol topluluğu operasyonları: haftalık maçlar ve turnuvalar",
        "Saha rezervasyonları, takım koordinasyonu ve lojistik",
        "Medya prodüksiyonu ve lig için geliştirilen operasyon platformu TopFan OS",
      ],
      ar: [
        "إدارة مجتمع كرة القدم: مباريات أسبوعية وبطولات",
        "حجز الملاعب وتنسيق الفرق واللوجستيات",
        "الإنتاج الإعلامي، وTopFan OS — منصة العمليات التي بُنيت من أجل الدوري",
      ],
    },
  },
];
