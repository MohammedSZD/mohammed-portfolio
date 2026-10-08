/**
 * Validates src/data/*.ts content before every build (`npm run validate`).
 * Fails with a readable list of problems; prints notes for things that are allowed but worth knowing.
 */
import fs from "node:fs";
import path from "node:path";

const { projects } = await import("../src/data/projects.ts");
const { labs } = await import("../src/data/labs.ts");

const STATUSES = ["production", "client-work", "in-development", "concept", "experiment", "personal", "demo"];
const CATEGORIES = ["e-commerce", "business-websites", "internal-systems", "web-applications", "in-development"];
const VIS = ["public", "private", "confidential"];
const errors = [];
const notes = [];
const exists = (p) => fs.existsSync(path.join("public", p));
const slugs = new Set();

for (const p of projects) {
  const at = `project "${p.slug ?? "?"}"`;
  const err = (m) => errors.push(`${at}: ${m}`);
  if (!p.slug || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) err("slug must be lowercase-kebab-case");
  if (slugs.has(p.slug)) err("duplicate slug");
  slugs.add(p.slug);
  for (const f of ["title", "summary", "description", "category"]) if (!p[f]?.en || (Array.isArray(p[f].en) && !p[f].en.length)) err(`missing ${f}.en`);
  if (!p.shortTitle) err("missing shortTitle");
  if (!STATUSES.includes(p.status)) err(`status must be one of ${STATUSES.join(", ")}`);
  if (!VIS.includes(p.visibility)) err(`visibility must be one of ${VIS.join(", ")}`);
  if (!Array.isArray(p.categories) || !p.categories.length || p.categories.some((c) => !CATEGORIES.includes(c))) err(`categories must be a non-empty subset of ${CATEGORIES.join(", ")}`);
  if (!Array.isArray(p.technologies)) err("technologies must be an array");
  for (const u of [p.liveUrl, p.repositoryUrl, ...(p.liveUrls ?? []).map((l) => l.url)].filter(Boolean)) if (!/^https:\/\//.test(u)) err(`URL must be https: ${u}`);
  if (p.repositoryUrl && p.visibility !== "public") err("repositoryUrl set but visibility is not 'public'");
  if (p.visibility === "confidential" && (p.repositoryUrl || p.liveUrl || p.liveUrls?.length)) err("confidential projects must not have links");
  const images = [p.coverImage, ...(p.gallery ?? []), p.comparison?.before, p.comparison?.after].filter(Boolean);
  for (const img of images) {
    if (!img.src?.startsWith("/projects/")) err(`image path must start with /projects/: ${img.src}`);
    if (!img.alt?.en) err(`image missing alt text: ${img.src}`);
  }
  if (p.comparison) for (const side of ["before", "after"]) if (!exists(p.comparison[side].src)) err(`comparison.${side} image missing on disk: ${p.comparison[side].src}`);
  const coverOk = p.coverImage && exists(p.coverImage.src);
  if (p.featured && !p.archived && !coverOk && p.visibility !== "confidential") err("featured projects need a real cover screenshot (or visibility: 'confidential')");
  if (!coverOk) notes.push(`${p.slug}: no cover screenshot yet — an illustrative placeholder is shown`);
  const missing = (p.gallery ?? []).filter((g) => !exists(g.src));
  if (missing.length) notes.push(`${p.slug}: ${missing.length} gallery image(s) not on disk are skipped`);
  for (const r of p.related ?? []) if (!projects.some((x) => x.slug === r)) err(`related slug not found: ${r}`);
}
for (const l of labs) if (l.repositoryUrl && !/^https:\/\/github\.com\//.test(l.repositoryUrl)) errors.push(`lab "${l.repo}": repositoryUrl must be a github.com https URL`);

if (process.env.VALIDATE_VERBOSE) for (const n of notes) console.log("note:", n);
if (errors.length) {
  console.error(`\nContent validation failed (${errors.length}):\n` + errors.map((e) => " - " + e).join("\n") + "\n");
  process.exit(1);
}
console.log(`Content OK — ${projects.length} projects, ${notes.length} note(s) (VALIDATE_VERBOSE=1 to list).`);
