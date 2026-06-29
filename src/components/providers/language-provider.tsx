"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  defaultLocale,
  isLocale,
  localeDirection,
  type Locale,
} from "@/lib/i18n/config";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionaries";

export const LANG_STORAGE_KEY = "khota-lang";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Server + first client paint render the default locale to stay in sync;
  // the stored preference is applied on mount (dir/lang are already correct
  // thanks to the pre-hydration inline script).
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && isLocale(stored) && stored !== locale) {
      setLocaleState(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyToDocument = useCallback((next: Locale) => {
    const root = document.documentElement;
    root.lang = next;
    root.dir = localeDirection[next];
  }, []);

  const setLocale = useCallback(
    (next: Locale) => {
      setLocaleState(next);
      window.localStorage.setItem(LANG_STORAGE_KEY, next);
      applyToDocument(next);
    },
    [applyToDocument],
  );

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

  // Keep <title> in sync with the active language.
  useEffect(() => {
    applyToDocument(locale);
    document.title = getDictionary(locale).meta.title;
  }, [locale, applyToDocument]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: localeDirection[locale],
      t: getDictionary(locale),
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Convenience hook for components that only need the dictionary. */
export function useTranslation() {
  return useLanguage().t;
}
