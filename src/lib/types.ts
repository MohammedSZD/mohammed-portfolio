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
  | "personal";

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
  alt: LText;
  caption?: LText;
}

export interface Project {
  slug: string;
  title: LText;
  shortTitle: string;
  category: LText;
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
  technologies: string[];
  responsibilities?: LList;
  challenges?: LList;
  solutions?: LList;
  keyFeatures?: { title: LText; description?: LText; state?: "live" | "in-progress" | "planned" }[];
  engineeringDecisions?: { title: LText; body: LText }[];
  outcomes?: LList;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  liveUrl?: string;
  liveUrls?: { label: string; url: string }[];
  repositoryUrl?: string;
  visibility: Visibility;
  confidentialityNote?: LText;
  /** Only verified numbers. */
  metrics?: { value: string; label: LText }[];
  architecture?: { summary?: LText; layers: { label: LText; items: string[] }[] };
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
  company: string;
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
  items: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: LText;
  period: string;
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
