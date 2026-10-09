"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
  device: "desktop" | "mobile";
}

export interface LightboxLabels {
  open: string;
  close: string;
  next: string;
  previous: string;
  desktop: string;
  mobile: string;
  of: string;
  screenshot: string;
}

const SIZES = { desktop: { w: 1920, h: 1200 }, mobile: { w: 780, h: 1688 } } as const;

/** Thumbnail gallery with a native <dialog> lightbox: arrow keys, Escape, focus return, swipe-free. */
export function Lightbox({ items, labels }: { items: LightboxItem[]; labels: LightboxLabels }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const openAt = (i: number) => {
    setIndex(i);
    ref.current?.showModal();
  };
  const close = () => ref.current?.close();
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      const rtl = document.documentElement.dir === "rtl";
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const desktop = items.map((it, i) => ({ it, i })).filter((x) => x.it.device === "desktop");
  const mobile = items.map((it, i) => ({ it, i })).filter((x) => x.it.device === "mobile");
  const current = index === null ? null : items[index];

  const thumb = (x: { it: LightboxItem; i: number }) => (
    <li key={x.it.src}>
      <button
        type="button"
        onClick={() => openAt(x.i)}
        aria-label={`${labels.open}: ${x.it.caption ?? x.it.alt}`}
        className={`group block w-full overflow-hidden rounded-xl border border-line bg-surface-2 text-start transition-colors hover:border-accent ${x.it.device === "mobile" ? "aspect-[780/1688]" : "aspect-[16/10]"}`}
      >
        <span className="relative block h-full w-full">
          <Image
            src={x.it.src}
            alt={x.it.alt}
            fill
            sizes={x.it.device === "mobile" ? "(min-width: 768px) 15vw, 40vw" : "(min-width: 1024px) 38vw, 100vw"}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </span>
      </button>
      {x.it.caption && <p className="mt-2 text-sm text-subtle">{x.it.caption}</p>}
    </li>
  );

  return (
    <div className="space-y-10">
      {desktop.length > 0 && (
        <div>
          <h3 className="eyebrow mb-4">{labels.desktop}</h3>
          <ul className="grid gap-6 sm:grid-cols-2">{desktop.map(thumb)}</ul>
        </div>
      )}
      {mobile.length > 0 && (
        <div>
          <h3 className="eyebrow mb-4">{labels.mobile}</h3>
          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:max-w-3xl md:grid-cols-4">{mobile.map(thumb)}</ul>
        </div>
      )}

      <dialog
        ref={ref}
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === ref.current && close()}
        aria-label={current?.caption ?? current?.alt ?? labels.screenshot}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/90"
      >
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-3 p-3 sm:p-8" onClick={(e) => e.target === e.currentTarget && close()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={SIZES[current.device].w}
              height={SIZES[current.device].h}
              sizes="100vw"
              className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain"
            />
            <p className="text-center text-sm text-white/80">
              {current.caption && <span>{current.caption} · </span>}
              {(index ?? 0) + 1} {labels.of} {items.length}
            </p>
            <button type="button" onClick={close} aria-label={labels.close} className="absolute end-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
              <X size={20} aria-hidden />
            </button>
            {items.length > 1 && (
              <>
                <button type="button" onClick={() => step(-1)} aria-label={labels.previous} className="absolute start-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
                  <ChevronLeft size={22} aria-hidden />
                </button>
                <button type="button" onClick={() => step(1)} aria-label={labels.next} className="absolute end-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30">
                  <ChevronRight size={22} aria-hidden />
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </div>
  );
}
