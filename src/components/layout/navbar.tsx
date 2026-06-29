"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { siteConfig, whatsappUrl } from "@/lib/site";

function useNavLinks() {
  const { t } = useLanguage();
  return [
    { href: "#pricing", label: t.nav.packages },
    { href: "#services", label: t.nav.services },
    { href: "#why", label: t.nav.why },
    { href: "#process", label: t.nav.process },
    { href: "#testimonials", label: t.nav.testimonials },
    { href: "#faq", label: t.nav.faq },
  ];
}

export function Navbar() {
  const { t, locale } = useLanguage();
  const links = useNavLinks();

  const openWhatsApp = () =>
    window.open(
      whatsappUrl(siteConfig.whatsappMessage[locale]),
      "_blank",
      "noopener,noreferrer",
    );
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className="container-page flex h-16 items-center justify-between gap-4 lg:h-18">
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button size="sm" onClick={openWhatsApp}>
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-surface text-foreground"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-surface"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="mt-2 w-full"
                onClick={() => {
                  setOpen(false);
                  openWhatsApp();
                }}
              >
                {t.nav.cta}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
