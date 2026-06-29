import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { initScript } from "@/lib/init-script";
import { Providers } from "@/components/providers";
import { en } from "@/lib/i18n/dictionaries/en";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khota.example"),
  title: {
    default: en.meta.title,
    template: "%s · KHOTA",
  },
  description: en.meta.description,
  applicationName: "KHOTA",
  keywords: [
    "CV writing",
    "ATS CV",
    "LinkedIn optimization",
    "personal branding",
    "career consultation",
    "resume MENA",
    "خُطى",
    "كتابة سيرة ذاتية",
  ],
  openGraph: {
    title: en.meta.title,
    description: en.meta.description,
    siteName: "KHOTA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: en.meta.title,
    description: en.meta.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1622" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={fontVariables}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
