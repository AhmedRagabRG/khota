"use client";

import { useLanguage } from "@/components/providers";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

export function Trust() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.trust.title} className="relative">
      <div className="container-page">
        <div className="rounded-3xl border border-border bg-surface px-6 py-10 sm:px-10 sm:py-12">
          <Stagger className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {t.trust.stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <div className="font-heading text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
