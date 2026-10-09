import type { EducationEntry } from "@/lib/types";

const bau = { en: "Bahçeşehir University", tr: "Bahçeşehir Üniversitesi", ar: "جامعة بهتشه شهير" };

export const education: EducationEntry[] = [
  {
    id: "bau-ms",
    institution: bau,
    degree: { en: "M.S. Cybersecurity", tr: "Siber Güvenlik Yüksek Lisansı", ar: "ماجستير الأمن السيبراني" },
    period: "2025 – Present",
    periodLabel: { en: "2025 – Present", tr: "2025 – Günümüz", ar: "2025 – حتى الآن" },
    status: "in-progress",
    details: {
      title: { en: "Professional study areas", tr: "Mesleki çalışma alanları", ar: "مجالات الدراسة المهنية" },
      items: {
        en: ["Network engineering (Cisco)", "VPNs", "Windows Server and Group Policy", "Offensive security: XSS, SQL injection", "eJPTv2 preparation"],
        tr: ["Ağ mühendisliği (Cisco)", "VPN'ler", "Windows Server ve Grup İlkesi", "Saldırgan güvenlik: XSS, SQL injection", "eJPTv2 hazırlığı"],
        ar: ["هندسة الشبكات (Cisco)", "الشبكات الافتراضية الخاصة VPN", "Windows Server وسياسات المجموعة", "الأمن الهجومي: XSS وSQL injection", "التحضير لشهادة eJPTv2"],
      },
    },
  },
  {
    id: "bau-bs",
    institution: bau,
    degree: { en: "B.S. Software Engineering", tr: "Yazılım Mühendisliği Lisansı", ar: "بكالوريوس هندسة البرمجيات" },
    period: "2019 – 2023",
    periodLabel: { en: "2019 – 2023", tr: "2019 – 2023", ar: "2019 – 2023" },
    status: "completed",
  },
];
