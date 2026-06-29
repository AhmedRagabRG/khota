"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CheckCircle2,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t, dir, locale } = useLanguage();
  const h = t.hero;

  const scrollTo = (hash: string) => {
    document
      .querySelector(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openWhatsApp = () =>
    window.open(
      whatsappUrl(siteConfig.whatsappMessage[locale]),
      "_blank",
      "noopener,noreferrer",
    );

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-40"
    >
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0 -z-10 opacity-70" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[520px] bg-gradient-to-b from-surface/80 to-transparent"
        aria-hidden
      />
      <div
        className="absolute end-[-10%] top-[-10%] -z-10 size-[480px] rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-soft backdrop-blur"
          >
            <Sparkles className="size-4 text-accent" />
            {h.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {h.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
            className="max-w-xl text-lg text-muted-foreground text-pretty"
          >
            {h.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button size="lg" onClick={openWhatsApp}>
              {h.primaryCta}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollTo("#services")}
            >
              {h.secondaryCta}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <BadgeCheck className="size-4 text-accent" />
            {h.note}
          </motion.p>
        </div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <ProfileCard
            dir={dir}
            role={h.card.role}
            match={h.card.match}
            keywords={h.card.keywords}
            readyTitle={h.card.readyTitle}
            readyDesc={h.card.readyDesc}
          />
        </motion.div>
      </div>
    </section>
  );
}

function ProfileCard({
  dir,
  role,
  match,
  keywords,
  readyTitle,
  readyDesc,
}: {
  dir: "ltr" | "rtl";
  role: string;
  match: string;
  keywords: string;
  readyTitle: string;
  readyDesc: string;
}) {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="relative rounded-3xl border border-border bg-card p-6 shadow-lift sm:p-7">
        <div className="flex items-center gap-4">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-xl font-bold text-primary-foreground">
            خُ
          </div>
          <div className="flex-1">
            <div className="h-3 w-28 rounded-full bg-foreground/85" />
            <div className="mt-2 text-sm font-medium text-muted-foreground">
              {role}
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
            <TrendingUp className="size-3.5" />
            Pro
          </span>
        </div>

        {/* ATS match */}
        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-surface p-4">
          <MatchRing value={95} />
          <div>
            <div className="text-sm font-semibold text-foreground">{match}</div>
            <div className="text-xs text-muted-foreground">{keywords}</div>
          </div>
        </div>

        {/* Skill lines */}
        <div className="mt-5 space-y-3">
          {[88, 72, 94].map((w, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="size-4 shrink-0 text-accent" />
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${w}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: EASE, delay: 0.3 + i * 0.15 }}
                  className="h-full rounded-full bg-primary/80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating "ready" badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
        className="absolute -bottom-5 z-10 flex items-center gap-3 rounded-2xl border border-border bg-card p-3.5 shadow-card"
        style={dir === "rtl" ? { right: "-1rem" } : { left: "-1rem" }}
      >
        <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <BadgeCheck className="size-5" />
        </span>
        <div className="pe-1">
          <div className="text-sm font-semibold text-foreground">
            {readyTitle}
          </div>
          <div className="text-xs text-muted-foreground">{readyDesc}</div>
        </div>
      </motion.div>

      {/* Floating LinkedIn chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.75, ease: EASE }}
        className="absolute -top-5 z-10 flex items-center gap-2 rounded-2xl border border-border bg-card px-3.5 py-2.5 text-sm font-semibold shadow-card"
        style={dir === "rtl" ? { left: "-0.5rem" } : { right: "-0.5rem" }}
      >
        <span className="flex size-6 items-center justify-center rounded-md bg-[#0a66c2] text-[0.7rem] font-bold text-white">
          in
        </span>
        +3 <ArrowUpRight className="size-4 text-accent" />
      </motion.div>
    </div>
  );
}

function MatchRing({ value }: { value: number }) {
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative size-14 shrink-0">
      <svg viewBox="0 0 56 56" className="size-14 -rotate-90">
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          strokeWidth="6"
          className="stroke-border"
        />
        <motion.circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          className="stroke-accent"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (value / 100) * c }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
        {value}%
      </span>
    </div>
  );
}
