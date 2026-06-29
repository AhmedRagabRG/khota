"use client";

import type { ComponentType } from "react";
import {
  ArrowUpRight,
  FileText,
  MessagesSquare,
  Sparkles,
} from "lucide-react";
import { LinkedInIcon } from "@/components/icons/brand-icons";
import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  cv: FileText,
  linkedin: LinkedInIcon,
  branding: Sparkles,
  consultation: MessagesSquare,
};

export function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={s.eyebrow}
        title={s.title}
        subtitle={s.subtitle}
      />

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
        {s.items.map((item, index) => {
          const Icon = icons[item.id] ?? FileText;
          return (
            <StaggerItem key={item.id}>
              <a
                href="#contact"
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-card sm:p-8"
              >
                <span
                  className="pointer-events-none absolute -top-16 end-[-3rem] size-40 rounded-full bg-accent/5 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/8 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-7" />
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary">
                    <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                    {item.description}
                  </p>
                </div>

                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {s.cta}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                </span>
              </a>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
