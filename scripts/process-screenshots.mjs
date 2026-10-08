/**
 * Converts raw PNG captures into optimised WebP files under public/projects/<slug>/.
 * Desktop: 1920×1200 (16:10). Mobile: 780×1688. Also writes og.jpg (1200×630) from each cover.
 * Usage: RAW_DIR=.screenshots-raw node scripts/process-screenshots.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const RAW = process.env.RAW_DIR ?? ".screenshots-raw";
const OUT = "public/projects";

// [raw name, output file]
const manifest = {
  "zain-el-deen-store": [
    ["zed-d-home", "cover"], ["zed-d-shop", "01-shop"], ["zed-d-product", "02-product"], ["zed-d-home-ar", "03-arabic-rtl"],
    ["zed-d-thenandnow", "04-then-and-now"], ["zed-d-compare", "05-compare"], ["zed-d-measured", "06-measured"],
    ["zed-d-legacy-home", "07-legacy-2020-home"], ["zed-d-legacy-category", "08-legacy-2020-category"],
    ["zed-m-home", "m-01-home"], ["zed-m-home-ar", "m-02-arabic"], ["zed-m-legacy", "m-03-legacy-2020"],
  ],
  "galaxs-team": [
    ["galaxy-d-hero", "cover"], ["galaxy-d-services", "01-services"], ["galaxy-d-work", "02-brand-work"], ["galaxy-d-partners", "03-partners"],
    ["galaxy-m-hero", "m-01-hero"], ["galaxy-m-services", "m-02-services"],
  ],
  "mini-ecommerce": [
    ["mini-d-catalog", "cover"], ["mini-d-search", "01-search"], ["mini-d-edit", "02-edit-dialog"],
    ["mini-m-catalog", "m-01-catalog"], ["mini-m-edit", "m-02-edit"],
  ],
  "restaurant-website": [
    ["rest-d-hero", "cover"], ["rest-d-menu", "01-menu"], ["rest-d-offers", "02-offers"], ["rest-d-gallery", "03-gallery"], ["rest-d-lightbox", "04-lightbox"],
    ["rest-m-hero", "m-01-hero"], ["rest-m-nav", "m-02-menu"],
  ],
  "shop-website": [
    ["shop-d-hero", "cover"], ["shop-d-collection", "01-collection"], ["shop-d-details", "02-details"],
    ["shop-m-home", "m-01-home"], ["shop-m-collection", "m-02-collection"],
  ],
};

for (const [slug, files] of Object.entries(manifest)) {
  const dir = path.join(OUT, slug);
  fs.mkdirSync(dir, { recursive: true });
  for (const [raw, name] of files) {
    const src = path.join(RAW, `${raw}.png`);
    const mobile = name.startsWith("m-");
    const img = sharp(src).resize(mobile ? { width: 780, height: 1688, fit: "cover", position: "top" } : { width: 1920, height: 1200, fit: "cover", position: "top" });
    await img.webp({ quality: 80, effort: 5 }).toFile(path.join(dir, `${name}.webp`));
    if (name === "cover") {
      await sharp(src).resize(1200, 630, { fit: "cover", position: "top" }).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(dir, "og.jpg"));
    }
  }
}
console.log("done");
