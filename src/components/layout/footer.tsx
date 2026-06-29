"use client";

import { Mail, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/icons/brand-icons";
import { useLanguage } from "@/components/providers";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";

export function Footer() {
  const { t, locale } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  const serviceLinks = t.services.items.map((item) => ({
    label: item.title,
    href: "#services",
  }));

  const companyLinks = [
    { label: f.company.why, href: "#why" },
    { label: f.company.process, href: "#process" },
    { label: f.company.testimonials, href: "#testimonials" },
    { label: f.company.faq, href: "#faq" },
  ];

  const socials = [
    { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
    {
      label: "Instagram",
      href: siteConfig.social.instagram,
      Icon: InstagramIcon,
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
              {f.tagline}
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <FooterColumn title={f.servicesTitle} links={serviceLinks} />

          {/* Company */}
          <FooterColumn title={f.companyTitle} links={companyLinks} />

          {/* Contact */}
          <div className="flex flex-col gap-3.5">
            <h3 className="text-sm font-semibold text-foreground">
              {f.contactTitle}
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:+${siteConfig.phoneE164}`}
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 shrink-0" />
              <span dir="ltr" className="tabular-nums">
                {siteConfig.phoneDisplay}
              </span>
            </a>
            <a
              href={whatsappUrl(siteConfig.whatsappMessage[locale])}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-[#25D366]"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              {t.whatsapp.label}
            </a>
            <div className="pt-1.5">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year} {t.brand.name}. {f.rights}
          </p>
          <p>{f.madeWith}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
