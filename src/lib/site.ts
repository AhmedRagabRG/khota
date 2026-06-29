/** Central place for contact details — update here to change them everywhere. */
export const siteConfig = {
  email: "khotakh12@gmail.com",
  // Display format with country code.
  phoneDisplay: "+20 120 396 0836",
  // E.164 without the leading "+" for tel: and wa.me links.
  phoneE164: "201203960836",
  whatsappMessage: {
    en: "Hello KHOTA, I'd like to learn more about your services.",
    ar: "مرحباً خُطى، أود معرفة المزيد عن خدماتكم.",
  },
  social: {
    facebook: "https://www.facebook.com/khotakh",
    instagram: "https://www.instagram.com/khotakh12/",
  },
} as const;

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${siteConfig.phoneE164}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
