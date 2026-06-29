"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Stagger, StaggerItem } from "@/components/motion/reveal";

function initials(name: string) {
  return name.trim().charAt(0);
}

export function Testimonials({ reviews = [] }: { reviews?: string[] }) {
  const { t } = useLanguage();
  const tt = t.testimonials;
  const hasImages = reviews.length > 0;

  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow={tt.eyebrow}
        title={tt.title}
        subtitle={tt.subtitle}
      />

      {hasImages ? (
        <ReviewGallery reviews={reviews} />
      ) : (
        <TextTestimonials items={tt.items} />
      )}
    </Section>
  );
}

/** Masonry of real review screenshots dropped into /public/reviews. */
function ReviewGallery({ reviews }: { reviews: string[] }) {
  return (
    <Stagger className="mt-14 gap-5 [column-fill:_balance] sm:columns-2 lg:columns-3">
      {reviews.map((src, i) => (
        <StaggerItem key={src} className="mb-5 break-inside-avoid">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Client review ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </a>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

function TextTestimonials({
  items,
}: {
  items: { quote: string; name: string; role: string }[];
}) {
  return (
    <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <StaggerItem key={item.name}>
          <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-card sm:p-8">
            <div className="flex items-center justify-between">
              <Quote className="size-8 text-accent/40 rtl:-scale-x-100" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
            <blockquote className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-foreground text-pretty">
              {item.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex size-11 items-center justify-center rounded-full bg-primary/8 font-heading text-base font-bold text-primary">
                {initials(item.name)}
              </span>
              <div>
                <div className="font-semibold text-foreground">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
            </figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
