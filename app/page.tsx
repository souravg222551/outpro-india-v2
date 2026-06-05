export const dynamic = "force-static";
import HeroSection from "./components/HeroSection";

import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialsSection from "./components/TestimonialsSection";

import KeyMetrics from "./components/KeyMetrics";
import ContactSection from "./components/ContactSection";




export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <KeyMetrics />
      <ContactSection />


    
    </main>
  );
}