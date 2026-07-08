import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { BigStatement } from "@/components/sections/BigStatement";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <SocialProofMarquee />
      
      {/* Coaches Section */}
      <Testimonials />
      
      {/* Disciplines Section */}
      <ProductShowcase />
      
      {/* Institutes Section */}
      <HowItWorks />
      
      {/* Shop Section */}
      <Pricing />
      
      {/* <BigStatement /> */}
      {/* <FAQ /> */}
      
      <Footer />
    </main>
  );
}
