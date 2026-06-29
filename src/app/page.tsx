import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { Why } from "@/components/sections/why";
import { Process } from "@/components/sections/process";
import { BeforeAfter } from "@/components/sections/before-after";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { getReviewImages } from "@/lib/reviews";

export default function Home() {
  const reviews = getReviewImages();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Pricing />
        <Services />
        <Why />
        <Process />
        <BeforeAfter />
        <Testimonials reviews={reviews} />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
