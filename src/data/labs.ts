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
    description: { en: "Reusable React + TypeScript alert component: success, error, warning and info types with auto-dismiss." },
    technologies: ["React", "TypeScript", "Vite", "SCSS"],
    repositoryUrl: `${gh}/alert-project`,
  },
  {
    repo: "Test-Alerts",
    kind: "typescript",
    description: { en: "React + TypeScript sandbox used to try out the alert component." },
    technologies: ["React", "TypeScript", "Vite", "Sass"],
    repositoryUrl: `${gh}/Test-Alerts`,
  },
  {
    repo: "Test-ng-_TheInternet",
    kind: "test-cases",
    description: { en: "Manual QA of the-internet.herokuapp.com: test plan, test cases and a bug report (two defects logged)." },
    repositoryUrl: `${gh}/Test-ng-_TheInternet`,
  },
  {
    repo: "manual-testing-todoapp",
    kind: "test-cases",
    description: { en: "Manual QA of a to-do web app: test plan, test cases and bug report." },
    repositoryUrl: `${gh}/manual-testing-todoapp`,
  },
  {
    repo: "Jira-Project-Management",
    kind: "project-management",
    description: { en: "Jira project report and sprint report for a user-authentication feature set." },
    technologies: ["Jira"],
    repositoryUrl: `${gh}/Jira-Project-Management`,
  },
];
