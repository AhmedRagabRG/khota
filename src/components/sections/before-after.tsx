"use client";

import { ArrowRight, Check, X } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

export function BeforeAfter() {
  const { t } = useLanguage();
  const b = t.beforeAfter;

  return (
    <Section id="before-after" className="bg-surface">
      <SectionHeading eyebrow={b.eyebrow} title={b.title} subtitle={b.subtitle} />

      <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr]">
        {/* Before */}
        <Reveal>
          <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 sm:p-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {b.beforeLabel}
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold text-muted-foreground">
              {b.beforeTitle}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {b.before.map((line) => (
                <li key={line} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
                    <X className="size-3" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Arrow */}
        <div className="flex items-center justify-center">
          <div className="flex size-12 items-center justify-center rounded-full border border-border bg-card text-primary shadow-soft">
            <ArrowRight className="size-5 rotate-90 rtl:-scale-x-100 lg:rotate-0" />
          </div>
        </div>

        {/* After */}
        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-primary p-7 text-primary-foreground shadow-card sm:p-8">
            <span
              className="pointer-events-none absolute -top-20 end-[-4rem] size-56 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {b.afterLabel}
            </span>
            <h3 className="mt-4 font-heading text-xl font-bold text-white">
              {b.afterTitle}
            </h3>
            <ul className="mt-5 space-y-3.5">
              {b.after.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" />
                  </span>
                  <span className="text-[0.95rem] leading-relaxed text-white/90">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
