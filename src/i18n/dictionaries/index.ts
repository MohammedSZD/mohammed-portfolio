import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { tr } from "./tr";
import { ar } from "./ar";

const dictionaries: Record<Locale, Dictionary> = { en, tr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
export type { Dictionary };
