"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers";
import { cn } from "@/lib/utils";

/** The real KHOTA mark — navy on light surfaces, white on dark. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("relative inline-block size-10 shrink-0", className)}
      aria-hidden
    >
      <Image
        src="/khota-mark.png"
        alt=""
        fill
        sizes="40px"
        priority
        className="object-contain dark:hidden"
      />
      <Image
        src="/khota-mark-white.png"
        alt=""
        fill
        sizes="40px"
        className="hidden object-contain dark:block"
      />
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  const { t, locale } = useLanguage();
  return (
    <a
      href="#home"
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={t.brand.name}
    >
      <LogoMark className="transition-transform duration-300 group-hover:-translate-y-0.5" />
      <span
        className={cn(
          "font-heading font-extrabold tracking-tight text-foreground",
          locale === "ar" ? "text-2xl" : "text-xl",
        )}
      >
        {t.brand.name}
      </span>
    </a>
  );
}
