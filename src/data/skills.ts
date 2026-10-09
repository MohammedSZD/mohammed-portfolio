import type { SkillGroup } from "@/lib/types";

/** Strings are product / technology names (shown as-is in every language); `{ en, tr, ar }` entries are descriptive skills. */
export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Frontend", tr: "Ön Yüz", ar: "الواجهات الأمامية" },
    items: [
      "JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass", "jQuery",
      { en: "Responsive UI", tr: "Duyarlı arayüz", ar: "واجهات متجاوبة" },
      { en: "UI/UX implementation", tr: "UI/UX uygulaması", ar: "تنفيذ واجهات وتجربة المستخدم" },
    ],
  },
  {
    id: "backend",
    title: { en: "Backend & APIs", tr: "Arka Yüz ve API", ar: "الخلفية والواجهات البرمجية" },
    items: ["PHP", "Laravel", "REST APIs", "Axios", "JWT", "CRUD", "JSON / CSV processing"],
  },
  {
    id: "data",
    title: { en: "Data", tr: "Veri", ar: "البيانات" },
    items: ["MySQL / SQL", "PostgreSQL", "Supabase", "MongoDB"],
  },
  {
    id: "ai",
    title: { en: "AI & Automation", tr: "Yapay Zekâ ve Otomasyon", ar: "الذكاء الاصطناعي والأتمتة" },
    items: [
      "n8n", "Webhooks", "Claude / GPT APIs",
      { en: "AI-assisted workflows", tr: "Yapay zekâ destekli iş akışları", ar: "سير عمل مدعوم بالذكاء الاصطناعي" },
      { en: "API integrations", tr: "API entegrasyonları", ar: "تكامل الواجهات البرمجية" },
      { en: "Structured prompt engineering", tr: "Yapılandırılmış prompt mühendisliği", ar: "هندسة الأوامر المنظمة" },
      { en: "Scheduling integrations", tr: "Planlama entegrasyonları", ar: "تكاملات الجدولة" },
      { en: "CRM integrations", tr: "CRM entegrasyonları", ar: "تكاملات CRM" },
    ],
  },
  {
    id: "development",
    title: { en: "Development workflow", tr: "Geliştirme Süreci", ar: "سير العمل التطويري" },
    items: ["Git", "GitHub", "Vite", "Postman", "VS Code", "Jira", "Agile / Scrum"],
  },
  {
    id: "qa",
    title: { en: "Quality assurance", tr: "Kalite Güvencesi", ar: "ضمان الجودة" },
    items: [
      "Selenium WebDriver", "SDLC / STLC",
      { en: "Manual testing", tr: "Manuel test", ar: "الاختبار اليدوي" },
      { en: "Test-case design", tr: "Test senaryosu tasarımı", ar: "تصميم حالات الاختبار" },
      { en: "Bug reporting", tr: "Hata raporlama", ar: "الإبلاغ عن الأخطاء" },
    ],
  },
  {
    id: "security",
    title: { en: "Cybersecurity", tr: "Siber Güvenlik", ar: "الأمن السيبراني" },
    note: {
      en: "Currently developing — M.S. studies and eJPTv2 learning track.",
      tr: "Gelişim aşamasında — yüksek lisans ve eJPTv2 öğrenme yolu.",
      ar: "قيد التطوير حاليًا — دراسة الماجستير ومسار تعلم eJPTv2.",
    },
    developing: true,
    items: [
      "OWASP Top 10", "Nmap", "Wireshark", "Linux / Kali", "Active Directory", "TCP/IP", "VLANs",
      { en: "Network security", tr: "Ağ güvenliği", ar: "أمن الشبكات" },
      { en: "Threat analysis", tr: "Tehdit analizi", ar: "تحليل التهديدات" },
      { en: "Vulnerability assessment", tr: "Zafiyet değerlendirmesi", ar: "تقييم الثغرات" },
      { en: "Secure API design", tr: "Güvenli API tasarımı", ar: "تصميم واجهات برمجية آمنة" },
      { en: "eJPTv2 learning track", tr: "eJPTv2 öğrenme yolu", ar: "مسار تعلم eJPTv2" },
    ],
  },
  {
    id: "other",
    title: { en: "Also", tr: "Ayrıca", ar: "إضافةً إلى ذلك" },
    items: ["Python", "Java (OOP)"],
  },
];
