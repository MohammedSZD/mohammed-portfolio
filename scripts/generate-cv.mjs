/**
 * Renders /resume to public/cv/Mohammed-Zaineldeen-CV.pdf (A4, light theme).
 * The résumé page is built from src/data, so the PDF always matches the site.
 * Usage: npm run build && npx next start -p 3000 &   then   npm run cv
 * Env: CV_BASE_URL (default http://localhost:3000), CHROMIUM_PATH (optional chromium binary).
 */
import { chromium } from "playwright-core";

const base = process.env.CV_BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const context = await browser.newContext({ colorScheme: "light" });
await context.addInitScript(() => localStorage.setItem("theme", "light"));
const page = await context.newPage();
await page.goto(`${base}/resume`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print", colorScheme: "light" });
await page.pdf({ path: "public/cv/Mohammed-Zaineldeen-CV.pdf", format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("Wrote public/cv/Mohammed-Zaineldeen-CV.pdf");
