import type { LText, ProjectImage } from "@/lib/types";
import { galleryDims } from "./gallery-dims.ts";

/** [English, Turkish, Arabic] */
export type Tri = [string, string, string];

export const L = (t: Tri): LText => ({ en: t[0], tr: t[1], ar: t[2] });
export const LL = (en: string[], tr: string[], ar: string[]) => ({ en, tr, ar });

export interface ShotSpec {
  id: string;
  cat: string;
  title: Tri;
  desc: Tri;
  own?: "personal" | "shared";
  /** Tall full-page capture. */
  full?: boolean;
}

/** Turns compact screenshot specs into gallery images (dimensions come from the asset pipeline). */
export function shots(slug: string, specs: ShotSpec[]): ProjectImage[] {
  return specs.map((s) => {
    const src = `/projects/${slug}/${s.id}.webp`;
    const dims = galleryDims[src];
    if (!dims) throw new Error(`No dimensions for ${src}; run the screenshot pipeline`);
    return {
      src,
      device: s.id.startsWith("m-") ? "mobile" : "desktop",
      alt: L(s.title),
      caption: L(s.title),
      description: L(s.desc),
      category: s.cat,
      width: dims[0],
      height: dims[1],
      kind: s.full ? "full" : "viewport",
      ownership: s.own,
    } satisfies ProjectImage;
  });
}
