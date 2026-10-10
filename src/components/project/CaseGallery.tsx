"use client";

import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode, type PointerEvent as ReactPointerEvent } from "react";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, ScrollText, X } from "lucide-react";

export interface CaseImage {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  category?: string;
  device: "desktop" | "mobile";
  kind: "viewport" | "full";
  ownership?: "personal" | "shared";
  width: number;
  height: number;
}

export interface CaseGroup {
  id: string;
  title: string;
  intro?: string;
}

export interface CaseGalleryLabels {
  close: string;
  next: string;
  previous: string;
  of: string;
  zoomIn: string;
  zoomOut: string;
  fullPage: string;
  fullPageHint: string;
  swipeHint: string;
  all: string;
  device: string;
  desktop: string;
  mobile: string;
  count: string;
  personal: string;
  shared: string;
  open: string;
  screenshot: string;
}

interface Ctx {
  open: (src: string, nav: string[]) => void;
  labels: CaseGalleryLabels;
  images: Map<string, CaseImage>;
}
const GalleryContext = createContext<Ctx | null>(null);
const useGallery = () => {
  const c = useContext(GalleryContext);
  if (!c) throw new Error("Gallery components must be rendered inside <GalleryProvider>");
  return c;
};

/* ───────────────────────────── Provider + lightbox ───────────────────────────── */

export function GalleryProvider({ images, labels, children }: { images: CaseImage[]; labels: CaseGalleryLabels; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const byId = useMemo(() => new Map(images.map((i) => [i.src, i])), [images]);
  const [nav, setNav] = useState<string[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const current = index === null ? null : byId.get(nav[index]) ?? null;

  const open = useCallback((src: string, list: string[]) => {
    const i = list.indexOf(src);
    setNav(list);
    setIndex(i < 0 ? 0 : i);
    setZoom(false);
    dialogRef.current?.showModal();
  }, []);

  const step = useCallback(
    (d: number) => {
      setZoom(false);
      setIndex((i) => (i === null || nav.length === 0 ? i : (i + d + nav.length) % nav.length));
    },
    [nav.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      const rtl = document.documentElement.dir === "rtl";
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
      if (e.key === "+" || e.key === "=" || e.key.toLowerCase() === "z") setZoom((z) => !z);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0, left: 0 });
  }, [index, zoom]);

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse") return;
    swipe.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: ReactPointerEvent) => {
    const s = swipe.current;
    swipe.current = null;
    if (!s || zoom || current?.kind === "full") return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      const rtl = document.documentElement.dir === "rtl";
      step((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
    }
  };

  const ctx = useMemo(() => ({ open, labels, images: byId }), [open, labels, byId]);
  const full = current?.kind === "full";

  return (
    <GalleryContext.Provider value={ctx}>
      {children}
      <dialog
        ref={dialogRef}
        onClose={() => {
          setIndex(null);
          setZoom(false);
        }}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current?.close()}
        aria-label={current?.caption ?? current?.alt ?? labels.screenshot}
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-black/92"
      >
        {current && (
          <div className="flex h-full flex-col text-white" onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}>
            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
              <p className="min-w-0 truncate text-sm text-white/75" aria-live="polite">
                {(index ?? 0) + 1} {labels.of} {nav.length}
                {current.ownership && (
                  <span className="ms-3 rounded-full border border-white/25 px-2.5 py-0.5 text-[0.7rem] text-white/85">
                    {current.ownership === "personal" ? labels.personal : labels.shared}
                  </span>
                )}
              </p>
              <div className="flex items-center gap-2">
                {!full && (
                  <button
                    type="button"
                    onClick={() => setZoom((z) => !z)}
                    aria-pressed={zoom}
                    aria-label={zoom ? labels.zoomOut : labels.zoomIn}
                    title={zoom ? labels.zoomOut : labels.zoomIn}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/15 hover:bg-white/30"
                  >
                    {zoom ? <Minimize2 size={18} aria-hidden /> : <Maximize2 size={18} aria-hidden />}
                  </button>
                )}
                <button type="button" onClick={() => dialogRef.current?.close()} aria-label={labels.close} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 hover:bg-white/30">
                  <X size={20} aria-hidden />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-stretch">
              {nav.length > 1 && (
                <button type="button" onClick={() => step(-1)} aria-label={labels.previous} className="absolute start-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 hover:bg-white/30 sm:start-4">
                  <ChevronLeft size={22} aria-hidden />
                </button>
              )}
              <div
                ref={bodyRef}
                onPointerDown={onPointerDown}
                onPointerUp={onPointerUp}
                onPointerCancel={() => (swipe.current = null)}
                onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
                className={`mx-auto flex w-full min-w-0 justify-center px-14 sm:px-20 ${full || zoom ? "overflow-auto" : "items-center overflow-hidden"}`}
                style={{ touchAction: full || zoom ? "pan-x pan-y pinch-zoom" : "pan-y pinch-zoom" }}
              >
                {full ? (
                  <Image
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    sizes="(min-width: 1280px) 1100px, 100vw"
                    className="h-auto self-start"
                    style={{ width: current.device === "mobile" ? "min(100%, 420px)" : "min(100%, 1100px)" }}
                  />
                ) : zoom ? (
                  <Image key={current.src + "z"} src={current.src} alt={current.alt} width={current.width} height={current.height} unoptimized className="h-auto max-w-none self-start" style={{ width: current.width }} />
                ) : (
                  <Image
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    sizes="100vw"
                    className="h-auto max-h-full w-auto max-w-full rounded-lg object-contain"
                    onDoubleClick={() => setZoom(true)}
                  />
                )}
              </div>
              {nav.length > 1 && (
                <button type="button" onClick={() => step(1)} aria-label={labels.next} className="absolute end-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 hover:bg-white/30 sm:end-4">
                  <ChevronRight size={22} aria-hidden />
                </button>
              )}
            </div>

            <div className="mx-auto w-full max-w-3xl px-4 pb-5 pt-3 text-center sm:px-6">
              {current.caption && <p className="font-medium">{current.caption}</p>}
              {current.description && <p className="mt-1 text-sm text-white/70 text-pretty">{current.description}</p>}
              <p className="mt-2 text-xs text-white/45">{full ? labels.fullPageHint : labels.swipeHint}</p>
            </div>
          </div>
        )}
      </dialog>
    </GalleryContext.Provider>
  );
}

/* ───────────────────────────── Thumbnails ───────────────────────────── */

function Badge({ children, tone }: { children: ReactNode; tone: "mine" | "shared" | "info" }) {
  const cls =
    tone === "mine"
      ? "border-accent/50 bg-accent-soft text-accent"
      : tone === "shared"
        ? "border-line-strong bg-surface-2 text-muted"
        : "border-line-strong bg-bg/85 text-fg backdrop-blur";
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium leading-tight ${cls}`}>{children}</span>;
}

function Thumb({ image, nav, priority = false, sizes, showOwner }: { image: CaseImage; nav: string[]; priority?: boolean; sizes: string; showOwner: boolean }) {
  const { open, labels } = useGallery();
  const mobile = image.device === "mobile";
  const full = image.kind === "full";
  // Full-page captures are shown as a top slice (with a badge) and open in a scrollable viewer; everything else keeps its natural ratio.
  const ratio = full ? (mobile ? "9 / 16" : "16 / 10") : `${image.width} / ${image.height}`;
  return (
    <li className="min-w-0">
      <button
        type="button"
        onClick={() => open(image.src, nav)}
        aria-label={`${labels.open}: ${image.caption ?? image.alt}`}
        className="group relative block w-full overflow-hidden rounded-xl border border-line bg-surface-2 text-start shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:border-accent focus-visible:border-accent"
        style={{ aspectRatio: ratio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          priority={priority}
          className={`h-full w-full ${full ? "object-cover object-top" : "object-contain"} transition-transform duration-500 group-hover:scale-[1.015]`}
        />
        <span className="pointer-events-none absolute start-2 top-2 flex flex-wrap gap-1">
          {full && (
            <Badge tone="info">
              <ScrollText size={11} aria-hidden /> {labels.fullPage}
            </Badge>
          )}
          {showOwner && image.ownership && <Badge tone={image.ownership === "personal" ? "mine" : "shared"}>{image.ownership === "personal" ? labels.personal : labels.shared}</Badge>}
        </span>
      </button>
      {image.caption && <p className="mt-2 text-sm font-medium leading-snug">{image.caption}</p>}
      {image.description && !mobile && <p className="mt-0.5 text-xs leading-relaxed text-subtle text-pretty">{image.description}</p>}
    </li>
  );
}

/* ───────────────────────────── Highlights strip ───────────────────────────── */

export function HighlightStrip({ srcs, title }: { srcs: string[]; title: string }) {
  const { images } = useGallery();
  const items = srcs.map((s) => images.get(s)).filter((i): i is CaseImage => !!i);
  if (!items.length) return null;
  return (
    <section aria-label={title} className="mt-2 md:mt-4">
      <h2 className="eyebrow mb-4">{title}</h2>
      <ul className="-mx-5 flex snap-x snap-mandatory items-start gap-4 overflow-x-auto px-5 pb-3 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0">
        {items.map((img, i) => (
          <HighlightItem key={img.src} image={img} nav={srcs} index={i} />
        ))}
      </ul>
    </section>
  );
}

function HighlightItem({ image, nav, index }: { image: CaseImage; nav: string[]; index: number }) {
  const { open, labels } = useGallery();
  const mobile = image.device === "mobile";
  const full = image.kind === "full";
  return (
    <li className="h-44 shrink-0 snap-start sm:h-52" style={{ aspectRatio: mobile ? "9 / 16" : full ? "4 / 3" : "16 / 10" }}>
      <button
        type="button"
        onClick={() => open(image.src, nav)}
        aria-label={`${labels.open}: ${image.caption ?? image.alt}`}
        className="group relative block h-full w-full overflow-hidden rounded-xl border border-line bg-surface-2 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-0.5 hover:border-accent"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="320px"
          className={`h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]`}
          priority={index < 2}
        />
      </button>
    </li>
  );
}

/* ───────────────────────────── Categorized explorer ───────────────────────────── */

export function GalleryExplorer({ groups, images, showOwner }: { groups: CaseGroup[]; images: CaseImage[]; showOwner: boolean }) {
  const { labels } = useGallery();
  const [group, setGroup] = useState("all");
  const [device, setDevice] = useState<"all" | "desktop" | "mobile">("all");

  const hasDesktop = images.some((i) => i.device === "desktop");
  const hasMobile = images.some((i) => i.device === "mobile");

  const matches = (i: CaseImage) => (group === "all" || i.category === group) && (device === "all" || i.device === device);
  const nav = useMemo(() => images.filter(matches).map((i) => i.src), [images, group, device]); // eslint-disable-line react-hooks/exhaustive-deps
  const visibleGroups = groups.filter((g) => (group === "all" || g.id === group) && images.some((i) => i.category === g.id && matches(i)));
  const countFor = (id: string) => images.filter((i) => i.category === id && (device === "all" || i.device === device)).length;

  const chip = (active: boolean) =>
    `rounded-full border px-3.5 py-1.5 text-sm transition-colors ${active ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-fg hover:text-fg"}`;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        <div role="group" aria-label={labels.all} className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={group === "all"} onClick={() => setGroup("all")} className={chip(group === "all")}>
            {labels.all} <span className="ms-1 text-xs">{images.filter((i) => device === "all" || i.device === device).length}</span>
          </button>
          {groups.map((g) => (
            <button key={g.id} type="button" aria-pressed={group === g.id} onClick={() => setGroup(g.id)} className={chip(group === g.id)} disabled={countFor(g.id) === 0}>
              {g.title} <span className="ms-1 text-xs">{countFor(g.id)}</span>
            </button>
          ))}
        </div>
        {hasDesktop && hasMobile && (
          <div role="group" aria-label={labels.device} className="flex flex-wrap items-center gap-2">
            <span className="eyebrow me-1">{labels.device}</span>
            {(["all", "desktop", "mobile"] as const).map((d) => (
              <button key={d} type="button" aria-pressed={device === d} onClick={() => setDevice(d)} className={chip(device === d)}>
                {d === "all" ? labels.all : d === "desktop" ? labels.desktop : labels.mobile}
              </button>
            ))}
          </div>
        )}
        <p className="sr-only" role="status" aria-live="polite">
          {nav.length} {nav.length === 1 ? "" : labels.count}
        </p>
      </div>

      <div className="space-y-14">
        {visibleGroups.map((g) => {
          const items = images.filter((i) => i.category === g.id && matches(i));
          const desktop = items.filter((i) => i.device === "desktop");
          const mobile = items.filter((i) => i.device === "mobile");
          return (
            <section key={g.id} aria-labelledby={`gal-${g.id}`}>
              <header className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line pb-3">
                <h3 id={`gal-${g.id}`} className="font-serif text-2xl leading-tight">
                  {g.title}
                </h3>
                <p className="text-xs text-subtle">
                  {items.length}{items.length === 1 ? "" : ` ${labels.count}`}
                </p>
                {g.intro && <p className="basis-full text-sm text-muted">{g.intro}</p>}
              </header>
              {desktop.length > 0 && (
                <ul className="grid items-start gap-x-6 gap-y-8 sm:grid-cols-2">
                  {desktop.map((img) => (
                    <Thumb key={img.src} image={img} nav={nav} sizes="(min-width: 1024px) 38vw, (min-width: 640px) 45vw, 100vw" showOwner={showOwner} />
                  ))}
                </ul>
              )}
              {mobile.length > 0 && (
                <ul className={`grid grid-cols-2 items-start gap-x-4 gap-y-7 sm:grid-cols-3 lg:grid-cols-5 ${desktop.length ? "mt-10" : ""}`}>
                  {mobile.map((img) => (
                    <Thumb key={img.src} image={img} nav={nav} sizes="(min-width: 1024px) 15vw, (min-width: 640px) 28vw, 45vw" showOwner={showOwner} />
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
