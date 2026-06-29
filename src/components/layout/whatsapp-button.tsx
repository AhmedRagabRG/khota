"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/providers";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function WhatsAppButton() {
  const { t, locale } = useLanguage();
  const href = whatsappUrl(siteConfig.whatsappMessage[locale]);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      title={t.whatsapp.label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 end-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift outline-none ring-offset-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-[#25D366]"
    >
      {/* Pulsing ring */}
      <span
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-25 motion-safe:animate-ping"
        aria-hidden
      />
      <WhatsAppIcon className="size-7" />

      {/* Tooltip label on hover (desktop) */}
      <span className="pointer-events-none absolute end-16 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 lg:block">
        {t.whatsapp.label}
      </span>
    </motion.a>
  );
}
