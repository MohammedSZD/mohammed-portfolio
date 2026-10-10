/**
 * Regression check: the chosen theme must survive client-side language switches.
 * Usage: build and serve the site (`npm run build && npx next start -p 3100`), then
 *   BASE_URL=http://localhost:3100 CHROMIUM_PATH=/path/to/chrome node scripts/check-theme-persistence.mjs
 */
import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL ?? "http://localhost:3100";
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
let failures = 0;
const check = (ok, label) => {
  console.log(ok ? "PASS" : "FAIL", label);
  if (!ok) failures++;
};
const state = (p) => p.evaluate(() => [document.documentElement.dataset.theme, document.documentElement.lang].join("/"));

for (const scheme of ["light", "dark"]) {
  const ctx = await browser.newContext({ colorScheme: scheme });
  const page = await ctx.newPage();
  await page.goto(`${BASE}/projects`);

  // 1. No stored choice: the OS preference must be kept across locale switches.
  const seen = [];
  for (const locale of ["ar", "tr", "en"]) {
    await page.click(`nav a[hreflang="${locale}"]`);
    await page.waitForTimeout(900);
    seen.push(await state(page));
  }
  check(seen.every((s) => s.startsWith(`${scheme}/`)), `OS ${scheme}: theme kept across ar → tr → en (${seen.join(", ")})`);

  // 2. Explicit choice (the opposite of the OS): must also be kept and persisted.
  const other = scheme === "light" ? "dark" : "light";
  await page.click(`button[aria-label*="${other}" i]`);
  for (const locale of ["ar", "tr", "en"]) {
    await page.click(`nav a[hreflang="${locale}"]`);
    await page.waitForTimeout(900);
    check((await state(page)).startsWith(`${other}/`), `explicit ${other} (OS ${scheme}): kept after switching to ${locale}`);
  }
  await ctx.close();
}
await browser.close();
process.exit(failures ? 1 : 0);
