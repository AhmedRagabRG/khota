"use client";

import { LanguageProvider } from "./language-provider";
import { ThemeProvider } from "./theme-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}

export { useLanguage, useTranslation } from "./language-provider";
export { useTheme } from "./theme-provider";
