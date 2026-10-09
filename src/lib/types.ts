import type { Locale } from "@/i18n/config";

/**
 * Localized content. `en` is required and is the fallback; add `tr` (or any
 * future locale) only where a reviewed translation exists.
 */
export type Localized<T> = { en: T } & Partial<Record<Exclude<Locale, "en">, T>>;
export type LText = Localized<string>;
export type LList = Localized<string[]>;

export type ProjectStatus =
  | "production"
  | "client-work"
  | "in-development"
  | "concept"
  | "experiment"
  | "personal"
  | "demo"
  /** Complete for its documented scope and used privately; not publicly available. */
  | "functional";

/** Filter categories for the project gallery. "Featured" is derived from `featured`. */
export type ProjectCategory =
  | "e-commerce"
  | "business-websites"
  | "internal-systems"
  | "web-applications"
  | "in-development";

export type Visibility = "public" | "private" | "confidential";

/** Which designed placeholder is shown until a real screenshot exists. */
export type PlaceholderVisual =
  | "hierarchy"
  | "storefront"
  | "matches"
  | "operations"
  | "workflow"
  | "website"
  | "automotive"
  | "clinic"
  | "content";

export interface ProjectImage {
  /** Path inside /public, e.g. "/projects/medmar/cover.webp". */
  src: string;
  /** "mobile" screenshots are 780×1688, "desktop" (default) 1920×1200. */
  device?: "desktop" | "mobile";
  alt: LText;
  caption?: LText;
}

export interface Project {
  slug: string;
  title: LText;
  shortTitle: LText;
  category: LText;
  /** Drives the gallery filters. */
  categories: ProjectCategory[];
  /** Archived projects are kept in the file but not listed or generated. */
  archived?: boolean;
  tagline?: LText;
  /** One or two sentences, used on cards and in metadata. */
  summary: LText;
  /** Paragraphs for the overview section. */
  description: LList;
  status: ProjectStatus;
  /** Extra, plain-language clarification of the status shown on the project page. */
  statusNote?: LText;
  year?: string;
  role?: LText;
  client?: string;
  featured: boolean;
  /** Plain strings are product / technology names shown as-is; `{ en, ar }` entries are descriptive tags. */
  technologies: (string | LText)[];
  responsibilities?: LList;
  challenges?: LList;
  solutions?: LList;
  keyFeatures?: { title: LText; description?: LText; state?: "live" | "in-progress" | "planned" }[];
  engineeringDecisions?: { title: LText; body: LText }[];
  outcomes?: LList;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  liveUrl?: string;
  liveUrls?: { label: LText; url: string }[];
  /** Overrides "Live demo" on cards when the link is something else (e.g. a sign-in preview). */
  cardLinkLabel?: LText;
  repositoryUrl?: string;
  visibility: Visibility;
  confidentialityNote?: LText;
  /** Only verified numbers. */
  metrics?: { value: string; label: LText }[];
  architecture?: { summary?: LText; layers: { label: LText; items: (string | LText)[] }[] };
  /** Accurate authorship wording, shown on the case study. */
  authorship?: LText;
  /** Before / after comparison (rendered as a slider plus side-by-side). */
  comparison?: {
    title: LText;
    body: LText;
    before: ProjectImage & { label: LText };
    after: ProjectImage & { label: LText };
  };
  /** Slugs of related projects. */
  related?: string[];
  visual: PlaceholderVisual;
}

export interface LabProject {
  repo: string;
  kind: "frontend" | "typescript" | "qa" | "test-cases" | "bug-reports" | "project-management" | "experiment";
  description: LText;
  technologies?: string[];
  repositoryUrl?: string;
}

export interface ExperienceEntry {
  id: string;
  company: string | LText;
  role: LText;
  period: LText;
  current?: boolean;
  location?: string;
  summary?: LText;
  /** Grouped highlights; omit for compact entries. */
  highlightGroups?: { title: LText; items: LList }[];
  bullets?: LList;
  tags?: string[];
  /** "primary" renders expanded; "compact" renders as a timeline row. */
  emphasis: "primary" | "compact";
}

export interface SkillGroup {
  id: string;
  title: LText;
  note?: LText;
  /** Marks areas that are being actively developed rather than shipped in production. */
  developing?: boolean;
  /** Plain strings are product / technology names; localized entries are descriptive skills. */
  items: (string | LText)[];
}

export interface EducationEntry {
  id: string;
  institution: LText;
  degree: LText;
  period: string;
  periodLabel: LText;
  status: "in-progress" | "completed";
  details?: { title: LText; items: LList };
}

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  url?: string;
}

export interface LanguageSkill {
  name: LText;
  level: LText;
}
