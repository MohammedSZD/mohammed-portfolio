import type { LabProject } from "@/lib/types";

/**
 * Smaller builds and QA artifacts, each verified against its public repository.
 * Add `repositoryUrl` (https://github.com/…) to link an entry.
 */
const gh = "https://github.com/MohammedSZD";

export const labs: LabProject[] = [
  {
    repo: "alert-project",
    kind: "typescript",
    description: {
      en: "Reusable React + TypeScript alert component: success, error, warning and info types with auto-dismiss.",
      tr: "Yeniden kullanılabilir React + TypeScript uyarı bileşeni: başarı, hata, uyarı ve bilgi türleri ve otomatik kapanma.",
      ar: "مكوّن تنبيه قابل لإعادة الاستخدام بـ React وTypeScript: أنواع النجاح والخطأ والتحذير والمعلومات مع إغلاق تلقائي.",
    },
    technologies: ["React", "TypeScript", "Vite", "SCSS"],
    repositoryUrl: `${gh}/alert-project`,
  },
  {
    repo: "Test-Alerts",
    kind: "typescript",
    description: {
      en: "React + TypeScript sandbox used to try out the alert component.",
      tr: "Uyarı bileşenini denemek için kullanılan React + TypeScript deneme alanı.",
      ar: "بيئة تجريبية بـ React وTypeScript لتجربة مكوّن التنبيه.",
    },
    technologies: ["React", "TypeScript", "Vite", "Sass"],
    repositoryUrl: `${gh}/Test-Alerts`,
  },
  {
    repo: "Test-ng-_TheInternet",
    kind: "test-cases",
    description: {
      en: "Manual QA of the-internet.herokuapp.com: test plan, test cases and a bug report (two defects logged).",
      tr: "the-internet.herokuapp.com için manuel QA: test planı, test senaryoları ve hata raporu (iki kusur kaydedildi).",
      ar: "اختبار يدوي لموقع the-internet.herokuapp.com: خطة اختبار وحالات اختبار وتقرير أخطاء (سُجّل عيبان).",
    },
    repositoryUrl: `${gh}/Test-ng-_TheInternet`,
  },
  {
    repo: "manual-testing-todoapp",
    kind: "test-cases",
    description: {
      en: "Manual QA of a to-do web app: test plan, test cases and bug report.",
      tr: "Bir yapılacaklar web uygulaması için manuel QA: test planı, test senaryoları ve hata raporu.",
      ar: "اختبار يدوي لتطبيق ويب لإدارة المهام: خطة اختبار وحالات اختبار وتقرير أخطاء.",
    },
    repositoryUrl: `${gh}/manual-testing-todoapp`,
  },
  {
    repo: "Jira-Project-Management",
    kind: "project-management",
    description: {
      en: "Jira project report and sprint report for a user-authentication feature set.",
      tr: "Kullanıcı kimlik doğrulama özellikleri için Jira proje raporu ve sprint raporu.",
      ar: "تقرير مشروع وتقرير سبرنت في Jira لمجموعة ميزات مصادقة المستخدمين.",
    },
    technologies: ["Jira"],
    repositoryUrl: `${gh}/Jira-Project-Management`,
  },
];
