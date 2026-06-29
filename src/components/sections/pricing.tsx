"use client";

import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig, whatsappUrl } from "@/lib/site";

export function Pricing() {
  const { t, locale } = useLanguage();
  const p = t.pricing;

  const orderPackage = (name: string, price: string) => {
    const msg =
      locale === "ar"
        ? `مرحباً خُطى، مهتم بباقة «${name}» (${price} ${p.currency}).`
        : `Hello KHOTA, I'm interested in the "${name}" package (${price} ${p.currency}).`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
  };

  const orderService = () =>
    window.open(
      whatsappUrl(siteConfig.whatsappMessage[locale]),
      "_blank",
      "noopener,noreferrer",
    );

  return (
    <Section id="pricing" className="bg-surface">
      <SectionHeading eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      {/* Packages */}
      <Stagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {p.packages.map((pkg) => (
          <StaggerItem key={pkg.id} className="h-full">
            <div
              className={
                "relative flex h-full flex-col rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 " +
                (pkg.popular
                  ? "border-primary/40 shadow-card ring-1 ring-primary/20"
                  : "border-border shadow-soft hover:shadow-card")
              }
            >
              {pkg.popular ? (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                  <Sparkles className="size-3.5" />
                  {p.popular}
                </span>
              ) : null}

              {/* Head */}
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-surface text-2xl">
                  {pkg.emoji}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {pkg.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mt-5 flex items-end gap-1.5">
                <span className="font-heading text-4xl font-extrabold tracking-tight text-foreground">
                  {pkg.price}
                </span>
                <span className="mb-1 text-sm font-medium text-muted-foreground">
                  {p.currency}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {pkg.tagline}
              </p>

              {/* Features */}
              <ul className="mt-5 flex flex-col gap-3 border-t border-border pt-5">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full " +
                        (pkg.popular
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent/15 text-accent")
                      }
                    >
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Value + savings */}
              <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                <span className="text-muted-foreground">
                  {p.valueLabel}:{" "}
                  <span className="line-through">
                    {pkg.actualValue} {p.currency}
                  </span>
                </span>
                <span className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">
                  {p.saveLabel} {pkg.save} {p.currency}
                </span>
              </div>

              <Button
                className="mt-5 w-full"
                variant={pkg.popular ? "primary" : "secondary"}
                onClick={() => orderPackage(pkg.name, pkg.price)}
              >
                {p.cta}
              </Button>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      {/* Individual services */}
      <Reveal className="mt-12">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground">
                {p.servicesTitle}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.servicesSubtitle}
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="self-start sm:self-auto"
              onClick={orderService}
            >
              {p.servicesCta}
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {p.services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5"
              >
                <span className="text-sm text-foreground">{service.name}</span>
                <span className="shrink-0 font-heading text-sm font-bold text-primary">
                  {service.price} {p.currency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
