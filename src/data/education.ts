import type { EducationEntry } from "@/lib/types";

export const education: EducationEntry[] = [
  {
    id: "bau-ms",
    institution: "Bahçeşehir University",
    degree: { en: "M.S. Cybersecurity", tr: "Siber Güvenlik Yüksek Lisansı" },
    period: "2025 – Present",
    status: "in-progress",
    details: {
      title: { en: "Professional study areas", tr: "Mesleki çalışma alanları" },
      items: {
        en: ["Network engineering (Cisco)", "VPNs", "Windows Server and Group Policy", "Offensive security: XSS, SQL injection", "eJPTv2 preparation"],
        tr: ["Ağ mühendisliği (Cisco)", "VPN'ler", "Windows Server ve Grup İlkesi", "Saldırgan güvenlik: XSS, SQL injection", "eJPTv2 hazırlığı"],
      },
    },
  },
  {
    id: "bau-bs",
    institution: "Bahçeşehir University",
    degree: { en: "B.S. Software Engineering", tr: "Yazılım Mühendisliği Lisansı" },
    period: "2019 – 2023",
    status: "completed",
  },
];
