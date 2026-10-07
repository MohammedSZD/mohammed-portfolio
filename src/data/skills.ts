import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: { en: "Frontend", tr: "Ön Yüz" },
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Sass", "jQuery", "Responsive UI", "UI/UX implementation"],
  },
  {
    id: "backend",
    title: { en: "Backend & APIs", tr: "Arka Yüz ve API" },
    items: ["PHP", "Laravel", "REST APIs", "Axios", "JWT", "CRUD", "JSON / CSV processing"],
  },
  {
    id: "data",
    title: { en: "Data", tr: "Veri" },
    items: ["MySQL / SQL", "PostgreSQL", "MongoDB"],
  },
  {
    id: "ai",
    title: { en: "AI & Automation", tr: "Yapay Zekâ ve Otomasyon" },
    items: ["n8n", "AI-assisted workflows", "API integrations", "Webhooks", "Structured prompt engineering", "Claude / GPT APIs", "Scheduling integrations", "CRM integrations"],
  },
  {
    id: "development",
    title: { en: "Development workflow", tr: "Geliştirme Süreci" },
    items: ["Git", "GitHub", "Vite", "Postman", "VS Code", "Jira", "Agile / Scrum"],
  },
  {
    id: "qa",
    title: { en: "Quality assurance", tr: "Kalite Güvencesi" },
    items: ["Manual testing", "Selenium WebDriver", "SDLC / STLC", "Test-case design", "Bug reporting"],
  },
  {
    id: "security",
    title: { en: "Cybersecurity", tr: "Siber Güvenlik" },
    note: { en: "Currently developing — M.S. studies and eJPTv2 learning track.", tr: "Gelişim aşamasında — yüksek lisans ve eJPTv2 öğrenme yolu." },
    developing: true,
    items: ["Network security", "Threat analysis", "OWASP Top 10", "Nmap", "Wireshark", "Linux / Kali", "Vulnerability assessment", "Active Directory", "TCP/IP", "VLANs", "Secure API design", "eJPTv2 learning track"],
  },
  {
    id: "other",
    title: { en: "Also", tr: "Ayrıca" },
    items: ["Python", "Java (OOP)"],
  },
];
