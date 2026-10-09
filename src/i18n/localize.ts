import type { Localized } from "@/lib/types";
import type { Locale } from "./config";

/** Resolve a list that mixes plain names with localized entries. */
export function tl(items: readonly (string | Localized<string>)[], locale: Locale): string[] {
  return items.map((i) => (typeof i === "string" ? i : t(i, locale)));
}

/** Pick the value for a locale, falling back to English. */
export function t<T>(value: Localized<T>, locale: Locale): T {
  return (value as Partial<Record<Locale, T>>)[locale] ?? value.en;
}
