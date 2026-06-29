import type { Locale } from "../config";
import { en, type Dictionary } from "./en";
import { ar } from "./ar";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

/** Synchronous dictionary lookup — content is bundled, no async needed. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}

export type { Dictionary };
