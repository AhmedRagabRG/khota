"use client";

import { useLanguage } from "@/components/providers";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <Section id="faq" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <SectionHeading
          eyebrow={f.eyebrow}
          title={f.title}
          subtitle={f.subtitle}
          align="start"
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <Reveal>
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {f.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
