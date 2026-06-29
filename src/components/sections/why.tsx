"use client";

import type { LucideIcon } from "lucide-react";
import {
  Eye,
  Languages,
  LayoutPanelTop,
  ScanLine,
  UserRoundCheck,
  Zap,
} from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

const iconOrder: LucideIcon[] = [
  ScanLine,
  Eye,
  LayoutPanelTop,
  UserRoundCheck,
  Zap,
  Languages,
];

export function Why() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <Section id="why" className="bg-surface">
      <SectionHeading eyebrow={w.eyebrow} title={w.title} subtitle={w.subtitle} />

      <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {w.items.map((item, i) => {
          const Icon = iconOrder[i] ?? ScanLine;
          return (
            <StaggerItem key={item.title}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
