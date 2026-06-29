"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function FinalCta() {
  const { t, locale } = useLanguage();
  const c = t.finalCta;

  const scrollTo = (hash: string) =>
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });

  const openWhatsApp = () =>
    window.open(
      whatsappUrl(siteConfig.whatsappMessage[locale]),
      "_blank",
      "noopener,noreferrer",
    );

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            {/* Decorative glows + grid */}
            <span
              className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-white/5 blur-3xl"
              aria-hidden
            />

            <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl md:text-5xl">
                {c.title}
              </h2>
              <p className="max-w-xl text-lg text-white/80 text-pretty">
                {c.subtitle}
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" variant="accent" onClick={openWhatsApp}>
                  {c.cta}
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </Button>
                <Button
                  size="lg"
                  onClick={() => scrollTo("#services")}
                  className="border border-white/20 bg-white/10 text-white hover:bg-white/15"
                >
                  {c.secondary}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
