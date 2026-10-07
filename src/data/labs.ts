import type { LabProject } from "@/lib/types";

/**
 * Smaller builds, experiments and QA artifacts. Add `repositoryUrl` to any entry
 * once you want it to link out.
 */
export const labs: LabProject[] = [
  { repo: "mini-ecommerce", kind: "frontend", description: { en: "Small e-commerce front-end build." } },
  { repo: "shop-site", kind: "frontend", description: { en: "Storefront-style website build." } },
  { repo: "restaurant-site", kind: "frontend", description: { en: "Restaurant website build." } },
  { repo: "galaxy-site", kind: "experiment", description: { en: "Themed front-end experiment." } },
  { repo: "alert-project", kind: "typescript", description: { en: "Alert component work in TypeScript." }, technologies: ["TypeScript"] },
  { repo: "Test-Alerts", kind: "qa", description: { en: "Test automation around alert handling." } },
  { repo: "Test-ng-_TheInternet", kind: "qa", description: { en: "Selenium / TestNG automation practice against a public test site." }, technologies: ["Selenium", "TestNG"] },
  { repo: "manual-testing-todoapp", kind: "test-cases", description: { en: "Manual test cases and bug reports for a to-do app." } },
  { repo: "Jira-Project-Management", kind: "project-management", description: { en: "Jira project-management and issue-tracking practice." }, technologies: ["Jira"] },
];
