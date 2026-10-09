/**
 * Validates src/data/*.ts content before every build (`npm run validate`).
 * Fails with a readable list of problems; prints notes for things that are allowed but worth knowing.
 */
import fs from "node:fs";
import path from "node:path";

const { projects } = await import("../src/data/projects.ts");
const { labs } = await import("../src/data/labs.ts");
const { services } = await import("../src/data/services.ts");
const { experience } = await import("../src/data/experience.ts");
const { skills } = await import("../src/data/skills.ts");
const { education } = await import("../src/data/education.ts");
const { languages } = await import("../src/data/languages.ts");
const { profile } = await import("../src/data/profile.ts");

const STATUSES = ["production", "client-work", "in-development", "concept", "experiment", "personal", "demo", "functional"];
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
  if (!p.shortTitle?.en) err("missing shortTitle.en");
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

/* ── Arabic coverage: every localized value ({ en, … }) must also have `ar`. ── */
const isEmptyL = (v) => v == null || v === "" || (Array.isArray(v) && v.length === 0);
function walk(node, where, visit) {
  if (Array.isArray(node)) return node.forEach((n, i) => walk(n, `${where}[${i}]`, visit));
  if (node && typeof node === "object") {
    if ("en" in node && (typeof node.en === "string" || Array.isArray(node.en))) return visit(node, where);
    for (const [k, v] of Object.entries(node)) walk(v, `${where}.${k}`, visit);
  }
}
const missingAr = [];
const missingTr = [];
const check = (root, where) =>
  walk(root, where, (node, at) => {
    if (isEmptyL(node.ar)) missingAr.push(at);
    else if (Array.isArray(node.en) && node.ar.length !== node.en.length) errors.push(`${at}: ar has ${node.ar.length} items, en has ${node.en.length}`);
    if (isEmptyL(node.tr)) missingTr.push(at);
    else if (Array.isArray(node.en) && node.tr.length !== node.en.length) errors.push(`${at}: tr has ${node.tr.length} items, en has ${node.en.length}`);
  });
for (const p of projects) check({ ...p, related: undefined }, `project ${p.slug}`);
check(services, "services");
check(experience, "experience");
check(skills, "skills");
check(education, "education");
check(languages, "languages");
check(labs, "labs");
check({ ...profile, displayName: undefined }, "profile");
if (missingAr.length) errors.push(`missing Arabic translation (${missingAr.length}):\n     ` + missingAr.slice(0, 40).join("\n     "));

if (missingTr.length) errors.push(`missing Turkish translation (${missingTr.length}):\n     ` + missingTr.slice(0, 40).join("\n     "));

if (process.env.VALIDATE_VERBOSE) for (const n of notes) console.log("note:", n);
if (errors.length) {
  console.error(`\nContent validation failed (${errors.length}):\n` + errors.map((e) => " - " + e).join("\n") + "\n");
  process.exit(1);
}
console.log(`Content OK — ${projects.length} projects, Arabic and Turkish coverage complete, ${notes.length} note(s) (VALIDATE_VERBOSE=1 to list).`);
