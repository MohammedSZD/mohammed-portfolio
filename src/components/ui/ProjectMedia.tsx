import Image from "next/image";
import type { PlaceholderVisual, ProjectImage } from "@/lib/types";
import { publicFileExists } from "@/lib/assets";
import { t } from "@/i18n/localize";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { PlaceholderArt } from "./PlaceholderArt";

/**
 * Renders a real screenshot when the file exists in /public, otherwise a designed placeholder.
 * Drop the file at the configured path and rebuild — no code changes needed.
 */
export function ProjectMedia({
  image,
  visual,
  locale,
  dict,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority = false,
  className = "",
  placeholderLabel,
}: {
  image?: ProjectImage;
  visual: PlaceholderVisual;
  locale: Locale;
  dict: Dictionary;
  sizes?: string;
  priority?: boolean;
  className?: string;
  placeholderLabel?: string;
}) {
  const hasImage = image && publicFileExists(image.src);
  const dev = process.env.NODE_ENV !== "production";
  return (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-surface-2 ${className}`}>
      {hasImage ? (
        <Image src={image.src} alt={t(image.alt, locale)} fill sizes={sizes} priority={priority} className="object-cover" style={image.focus ? { objectPosition: image.focus } : undefined} />
      ) : (
        <>
          <PlaceholderArt visual={visual} />
          <span className="absolute bottom-3 start-3 rounded-full bg-bg/80 px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-subtle backdrop-blur">
            {dev && image ? `${dict.projectPage.placeholderHint} ${image.src}` : (placeholderLabel ?? dict.projectPage.illustrative)}
          </span>
        </>
      )}
    </div>
  );
}
