export const en = {
  // NOTE: intentionally not `as const` — we want widened `string` types so the
  // Arabic dictionary can satisfy the same `Dictionary` shape.
  meta: {
    title: "KHOTA — Take the First Step Toward a Better Career",
    description:
      "KHOTA helps professionals across the MENA region win interviews with ATS-optimized CVs, standout LinkedIn profiles, and strategic personal branding.",
  },
  brand: {
    name: "KHOTA",
    tagline: "Every successful career begins with a single step.",
  },
  nav: {
    services: "Services",
    why: "Why KHOTA",
    process: "Process",
    packages: "Packages",
    testimonials: "Clients",
    faq: "FAQ",
    cta: "Get Started",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  langSwitcher: {
    label: "Language",
    en: "English",
    ar: "العربية",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light",
    dark: "Dark",
  },
  whatsapp: {
    label: "Chat on WhatsApp",
    cta: "Message us on WhatsApp",
  },
  hero: {
    eyebrow: "Career branding, done properly",
    title: "Take the First Step Toward a Better Career.",
    subtitle:
      "We craft recruiter-ready CVs, magnetic LinkedIn profiles, and a personal brand that makes hiring managers stop scrolling — so your next opportunity finds you.",
    primaryCta: "Get Your Professional CV",
    secondaryCta: "View Services",
    note: "Trusted by professionals across Saudi Arabia, the UAE, Qatar & beyond.",
    card: {
      role: "Senior Product Manager",
      match: "ATS Match",
      keywords: "Keywords aligned",
      readyTitle: "Profile ready",
      readyDesc: "Recruiter-optimized",
    },
  },
  trust: {
    title: "Results our clients can measure",
    stats: [
      { value: "500+", label: "CVs Created" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "20+", label: "Industries Served" },
      { value: "8", label: "Countries Reached" },
    ],
  },
  services: {
    eyebrow: "What we do",
    title: "Everything you need to stand out",
    subtitle:
      "Focused, premium services designed around how modern recruitment actually works.",
    cta: "Learn more",
    items: [
      {
        id: "cv",
        title: "ATS-Optimized CV Writing",
        description:
          "Beat the applicant tracking systems and impress the human behind them with a clean, keyword-aligned, results-driven CV.",
      },
      {
        id: "linkedin",
        title: "LinkedIn Profile Enhancement",
        description:
          "A fully optimized profile that surfaces in recruiter searches and turns your headline into your strongest first impression.",
      },
      {
        id: "branding",
        title: "Personal Branding",
        description:
          "Define your professional narrative, positioning, and voice so every touchpoint tells one consistent, credible story.",
      },
      {
        id: "consultation",
        title: "Career Consultation",
        description:
          "One-on-one strategic guidance on direction, market positioning, and the next deliberate step in your career.",
      },
    ],
  },
  pricing: {
    eyebrow: "Packages",
    title: "Choose the step that fits you",
    subtitle:
      "Transparent bundles — every package saves you more than ordering each service on its own.",
    currency: "EGP",
    popular: "Most popular",
    valueLabel: "Actual value",
    saveLabel: "You save",
    cta: "Get this package",
    packages: [
      {
        id: "starter",
        emoji: "👣",
        name: "First Steps",
        price: "449",
        popular: false,
        tagline:
          "Perfect for fresh graduates and first-time job seekers.",
        features: [
          "Professional CV (Arabic or English)",
          "LinkedIn profile enhancement",
          "CV QR Code",
        ],
        actualValue: "497",
        save: "48",
      },
      {
        id: "steady",
        emoji: "🚶",
        name: "Steady Steps",
        price: "599",
        popular: true,
        tagline: "Everything you need to apply for jobs with confidence.",
        features: [
          "Professional CV (Arabic or English)",
          "Professional cover letter",
          "LinkedIn profile enhancement",
          "Account on a job site (Indeed / Wuzzuf or similar)",
          "CV QR Code",
        ],
        actualValue: "796",
        save: "197",
      },
      {
        id: "confident",
        emoji: "📈",
        name: "Confident Steps",
        price: "799",
        popular: false,
        tagline: "A complete professional identity that gives you an edge.",
        features: [
          "CV in Arabic",
          "CV in English",
          "Cover letter",
          "LinkedIn profile enhancement",
          "Two job-site accounts",
          "CV QR Code",
        ],
        actualValue: "995",
        save: "196",
      },
      {
        id: "success",
        emoji: "🏆",
        name: "Success Steps",
        price: "1,549",
        popular: false,
        tagline:
          "The all-in-one solution to build a standout presence and compete for the best roles.",
        features: [
          "CV in Arabic",
          "CV in English",
          "Cover letter",
          "LinkedIn profile enhancement",
          "Two job-site accounts",
          "CV QR Code",
          "LinkedIn Premium subscription",
        ],
        actualValue: "1,794",
        save: "245",
      },
    ],
    servicesTitle: "Individual service pricing",
    servicesSubtitle: "Prefer to pick and choose? Order any service on its own.",
    servicesCta: "Request a service",
    services: [
      { name: "Professional CV (Arabic or English)", price: "199" },
      { name: "LinkedIn enhancement", price: "249" },
      { name: "Job-site account (e.g. Indeed)", price: "199" },
      { name: "Cover letter", price: "99" },
      { name: "CV QR Code", price: "49" },
      { name: "LinkedIn Premium", price: "799" },
    ],
  },
  why: {
    eyebrow: "Why KHOTA",
    title: "Built on how recruiters actually hire",
    subtitle:
      "We pair recruitment insight with premium craft — no templates, no guesswork.",
    items: [
      {
        title: "ATS Optimized",
        description:
          "Structured and keyworded to pass automated screening with confidence.",
      },
      {
        title: "Recruiter Friendly",
        description:
          "Scannable in seconds, written the way hiring managers want to read.",
      },
      {
        title: "Professional Formatting",
        description:
          "Clean, modern layouts that look as senior as your experience.",
      },
      {
        title: "Personalized Approach",
        description:
          "Every document is built around your story — never a copy-paste.",
      },
      {
        title: "Fast Delivery",
        description:
          "A clear timeline and dependable turnaround, without cutting corners.",
      },
      {
        title: "Bilingual Expertise",
        description:
          "Polished Arabic and English that reads naturally in both markets.",
      },
    ],
  },
  process: {
    eyebrow: "How it works",
    title: "A simple path to a stronger career",
    subtitle: "Four clear steps — you stay informed at every stage.",
    steps: [
      {
        title: "Submit Information",
        description:
          "Share your current CV, goals, and target roles through a short, guided intake.",
      },
      {
        title: "We Review",
        description:
          "Our specialists assess your positioning, gaps, and the opportunities to amplify.",
      },
      {
        title: "We Create",
        description:
          "We craft your ATS-ready CV, LinkedIn, and brand assets with care and precision.",
      },
      {
        title: "You Apply with Confidence",
        description:
          "Step into the market with materials built to convert and a clear plan to act.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "The difference",
    title: "From overlooked to shortlisted",
    subtitle:
      "See how a focused rewrite turns a generic CV into a recruiter magnet.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeTitle: "Generic CV",
    afterTitle: "KHOTA CV",
    before: [
      "Dense wall of responsibilities",
      "No measurable impact",
      "Keywords missed by ATS",
      "Inconsistent, dated formatting",
      "Unclear professional identity",
    ],
    after: [
      "Achievement-led, results in numbers",
      "Quantified impact in every role",
      "Keyword-aligned for ATS parsing",
      "Clean, modern, senior layout",
      "A sharp, memorable positioning",
    ],
  },
  testimonials: {
    eyebrow: "Client stories",
    title: "Careers, moved forward",
    subtitle: "Real outcomes from professionals who took the first step.",
    items: [
      {
        quote:
          "Within two weeks of using my new CV and LinkedIn, I had three interview calls. The difference was night and day.",
        name: "Layla A.",
        role: "Marketing Manager · Dubai",
      },
      {
        quote:
          "They understood exactly what recruiters in the Gulf look for. My profile finally reflects the level I'm operating at.",
        name: "Omar K.",
        role: "Software Engineer · Riyadh",
      },
      {
        quote:
          "As a fresh graduate I had no idea how to present myself. KHOTA gave me clarity, confidence, and a CV I'm proud of.",
        name: "Sara M.",
        role: "Graduate · Amman",
      },
      {
        quote:
          "Professional, fast, and genuinely strategic. This felt like working with a top-tier consulting firm.",
        name: "Hassan T.",
        role: "Finance Lead · Doha",
      },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently asked questions",
    subtitle: "Everything you need to know before taking the first step.",
    items: [
      {
        question: "What is an ATS-optimized CV?",
        answer:
          "An ATS-optimized CV is structured and worded so that Applicant Tracking Systems — the software most employers use to filter applications — can read and rank it correctly, while still being compelling for the human recruiter who reviews it.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Most CVs and LinkedIn profiles are delivered within 3–5 business days after your intake. We'll confirm a precise timeline once we understand your scope and goals.",
      },
      {
        question: "Do you work in both Arabic and English?",
        answer:
          "Yes. We craft polished, natural documents in both Arabic and English, with proper typography and tone for each market — never machine-translated.",
      },
      {
        question: "Who do you work with?",
        answer:
          "We support fresh graduates, students, young and mid-level professionals, as well as senior managers and executives across the MENA region.",
      },
      {
        question: "Will my CV be unique to me?",
        answer:
          "Always. We never reuse templates as-is. Every document is built around your experience, achievements, and target roles to reflect your individual story.",
      },
      {
        question: "What do you need from me to get started?",
        answer:
          "Your current CV (if you have one), the roles or industries you're targeting, and a short brief on your goals. Our guided intake makes it quick and simple.",
      },
      {
        question: "Do you offer revisions?",
        answer:
          "Yes. Each project includes a revision round so we can refine the details together until you're fully confident in the result.",
      },
      {
        question: "Can you help if I'm changing careers?",
        answer:
          "Absolutely. Career transitions are one of our specialties — we reframe your transferable skills and reposition your story for your new direction.",
      },
    ],
  },
  finalCta: {
    title: "Ready to take your next step?",
    subtitle:
      "Let's build the CV, profile, and personal brand your career deserves.",
    cta: "Contact Us",
    secondary: "View Services",
  },
  footer: {
    tagline:
      "Premium career branding for ambitious professionals across the MENA region.",
    servicesTitle: "Services",
    companyTitle: "Company",
    contactTitle: "Contact",
    company: {
      why: "Why KHOTA",
      process: "Process",
      testimonials: "Clients",
      faq: "FAQ",
    },
    rights: "All rights reserved.",
    madeWith: "Designed for careers that deserve more.",
  },
};

export type Dictionary = typeof en;
