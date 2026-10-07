import type { Localized } from "@/lib/types";
import type { Locale } from "./config";

/** Pick the value for a locale, falling back to English. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return (value as Partial<Record<Locale, T>>)[locale] ?? value.en;
}
