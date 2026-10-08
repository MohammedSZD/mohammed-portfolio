/**
 * Captures real screenshots of the sibling project sites, served locally:
 *   :8101 zaineldeen-store-showcase (npm run build → dist/)   :8102 galaxy-site (public/)
 *   :8103 mini-ecommerce (npm run build → dist/)              :8104 restaurant-site   :8105 shop-site
 * Usage: RAW_DIR=.screenshots-raw node scripts/capture-screenshots.mjs  (then: node scripts/process-screenshots.mjs)
 */
import { chromium } from "playwright-core";
import fs from "node:fs";
const OUT=process.env.RAW_DIR ?? ".screenshots-raw"; fs.mkdirSync(OUT,{recursive:true});
const b = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
async function session(vp, fn, mobile=false){
  const ctx = await b.newContext({viewport:vp, deviceScaleFactor: mobile?2:1.5, isMobile:mobile, hasTouch:mobile, reducedMotion:"reduce"});
  const p = await ctx.newPage(); const errs=[]; p.on("pageerror",e=>errs.push(String(e))); p.on("console",m=>m.type()==="error"&&errs.push(m.text()));
  await fn(p); if(errs.length) console.log("ERRORS",errs); await ctx.close();
}
const D={width:1440,height:900}, M={width:390,height:844};
const shot = (p,name)=>p.screenshot({path:`${OUT}/${name}.png`});
const settle = async p=>{ await p.waitForLoadState("load"); await p.waitForTimeout(1200); };
async function revealAll(p){ await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=350){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,60))}window.scrollTo(0,0)}); await p.waitForTimeout(500); }
async function to(p, sel, off=-24){ await p.evaluate(([s,o])=>{const e=document.querySelector(s); const y=e.getBoundingClientRect().top+scrollY+o; scrollTo(0,y)},[sel,off]); await p.waitForTimeout(700); }

// ---- Zain El Deen (modern + legacy)
const Z="http://localhost:8101/";
await session(D, async p=>{
  await p.goto(Z); await settle(p); await shot(p,"zed-d-home");
  await revealAll(p);
  await to(p,"main > section:nth-of-type(3)"); await shot(p,"zed-d-featured");
  await p.goto(Z+"shop.html"); await settle(p); await shot(p,"zed-d-shop");
  await p.goto(Z+"?lang=ar"); await settle(p); await shot(p,"zed-d-home-ar");
  await p.goto(Z+"product.html?id=the-only-one"); await settle(p); await shot(p,"zed-d-product");
  await p.goto(Z+"then-and-now.html"); await settle(p); await shot(p,"zed-d-thenandnow");
  await revealAll(p);
  await p.evaluate(()=>{const h=[...document.querySelectorAll('h2')].find(e=>/compare/i.test(e.textContent)); h.scrollIntoView(); scrollBy(0,-40)}); await p.waitForTimeout(800); await shot(p,"zed-d-compare");
  await p.evaluate(()=>{const h=[...document.querySelectorAll('h2')].find(e=>/measured/i.test(e.textContent)); h.scrollIntoView(); scrollBy(0,-40)}); await p.waitForTimeout(800); await shot(p,"zed-d-measured");
  await p.goto(Z+"legacy/index.html"); await settle(p); await shot(p,"zed-d-legacy-home");
  await p.goto(Z+"legacy/perfumes-women.html"); await settle(p); await shot(p,"zed-d-legacy-category");
});
await session(M, async p=>{
  await p.goto(Z); await settle(p); await shot(p,"zed-m-home");
  await p.goto(Z+"?lang=ar"); await settle(p); await shot(p,"zed-m-home-ar");
  await p.goto(Z+"legacy/index.html"); await settle(p); await shot(p,"zed-m-legacy");
},true);

// ---- Galaxs
const G="http://localhost:8102/";
await session(D, async p=>{
  await p.goto(G); await settle(p); await shot(p,"galaxy-d-hero");
  await revealAll(p);
  for (const [id,n] of [["services","services"],["work","work"],["partners","partners"],["contact","contact"]]) { await to(p,"#"+id,-70); await shot(p,"galaxy-d-"+n); }
});
await session(M, async p=>{
  await p.goto(G); await settle(p); await shot(p,"galaxy-m-hero");
  await revealAll(p); await to(p,"#services",-60); await shot(p,"galaxy-m-services");
  await to(p,"#contact",-60); await shot(p,"galaxy-m-contact");
},true);

// ---- Mini
const MI="http://localhost:8103/";
await session(D, async p=>{
  await p.goto(MI); await settle(p); await shot(p,"mini-d-catalog");
  await p.getByPlaceholder(/search/i).fill("watch"); await p.waitForTimeout(600); await shot(p,"mini-d-search");
  await p.getByPlaceholder(/search/i).fill("");
  await p.getByRole("button",{name:/^Edit /}).first().click(); await p.waitForTimeout(700); await shot(p,"mini-d-edit");
});
await session(M, async p=>{
  await p.goto(MI); await settle(p); await shot(p,"mini-m-catalog");
  await p.getByRole("button",{name:/^Edit /}).first().click(); await p.waitForTimeout(700); await shot(p,"mini-m-edit");
},true);

// ---- Restaurant
const R="http://localhost:8104/";
await session(D, async p=>{
  await p.goto(R); await settle(p); await shot(p,"rest-d-hero");
  await revealAll(p);
  await to(p,"#menu",-70); await shot(p,"rest-d-menu");
  await to(p,"#offers",-70); await shot(p,"rest-d-offers");
  await to(p,"#gallery",-70); await p.waitForTimeout(500); await shot(p,"rest-d-gallery");
  await p.locator("#gallery button, #gallery a").first().click(); await p.waitForTimeout(900); await shot(p,"rest-d-lightbox");
});
await session(M, async p=>{
  await p.goto(R); await settle(p); await shot(p,"rest-m-hero");
  await p.locator("button[aria-controls='primary-nav']").click(); await p.waitForTimeout(700); await shot(p,"rest-m-nav");
},true);

// ---- Shop
const S="http://localhost:8105/";
await session(D, async p=>{
  await p.goto(S); await settle(p); await shot(p,"shop-d-hero");
  await revealAll(p);
  await to(p,"#collection",-70); await shot(p,"shop-d-collection");
  await p.getByRole("button",{name:/Details/i}).first().click(); await p.waitForTimeout(800); await shot(p,"shop-d-details");
});
await session(M, async p=>{
  await p.goto(S); await settle(p); await shot(p,"shop-m-home");
  await to(p,"#collection",-60); await shot(p,"shop-m-collection");
},true);
await b.close();
