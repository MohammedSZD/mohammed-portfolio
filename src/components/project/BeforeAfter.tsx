"use client";

import Image from "next/image";
import { useState } from "react";

/** Before/after slider. Keyboard accessible via a native range input; always laid out LTR. */
export function BeforeAfter({
  before,
  after,
  label,
  priority = false,
}: {
  before: { src: string; alt: string; label: string };
  after: { src: string; alt: string; label: string };
  label: string;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(50);
  return (
    <div dir="ltr" className="relative aspect-[16/10] select-none overflow-hidden rounded-xl border border-line bg-surface-2">
      <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1280px) 1200px, 100vw" priority={priority} className="object-cover object-top" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1280px) 1200px, 100vw" priority={priority} className="object-cover object-top" />
      </div>
      <span className="pointer-events-none absolute start-3 top-3 rounded-full bg-black/75 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white">{before.label}</span>
      <span className="pointer-events-none absolute end-3 top-3 rounded-full bg-black/75 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-white">{after.label}</span>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.35)]" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xs font-bold text-black shadow-lg">⇄</span>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={label}
        className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
      />
    </div>
  );
}
