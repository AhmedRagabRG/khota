"use client";

import type { LucideIcon } from "lucide-react";
import { FileUp, Rocket, Search, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const stepIcons: LucideIcon[] = [FileUp, Search, Sparkles, Rocket];

export function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <Section id="process">
      <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <div className="relative mt-16">
        {/* Connecting line (desktop) */}
        <div
          className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          aria-hidden
        />

        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {p.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? FileUp;
            return (
              <StaggerItem key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-card text-primary shadow-soft">
                    <Icon className="size-6" />
                    <span className="absolute -top-2 -end-2 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-bold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
