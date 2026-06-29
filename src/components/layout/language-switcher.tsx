"use client";

import { useLanguage } from "@/components/providers";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

const options: { value: Locale; short: string }[] = [
  { value: "en", short: "EN" },
  { value: "ar", short: "ع" },
];

/** Segmented two-option control that swaps the whole site language. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langSwitcher.label}
      className={cn(
        "relative inline-flex items-center rounded-full border border-border bg-surface p-0.5",
        className,
      )}
    >
      {options.map((option) => {
        const active = locale === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={active}
            className={cn(
              "relative z-10 inline-flex h-7 min-w-9 items-center justify-center rounded-full px-2.5 text-sm font-semibold transition-colors duration-200",
              active
                ? "bg-primary text-primary-foreground shadow-soft"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}
