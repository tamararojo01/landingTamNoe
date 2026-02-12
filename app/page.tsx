import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { QuienesSomosSection } from '@/components/sections/QuienesSomosSection';
import { OfrecemosSection } from '@/components/sections/OfrecemosSection';
import { BeneficiosSection } from '@/components/sections/BeneficiosSection';
import { SectoresSection } from '@/components/sections/SectoresSection';
import { ComoFuncionaSection } from '@/components/sections/ComoFuncionaSection';
import { PacksSection } from '@/components/sections/PacksSection';
import { TestimoniosSection } from '@/components/sections/TestimoniosSection';
import { EjemplosSection } from '@/components/sections/EjemplosSection';
import { ContactoSection } from '@/components/sections/ContactoSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { MobileCtaButton } from '@/components/ui/MobileCtaButton';

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Header />
      
      <main className="min-h-screen bg-white">
        {/* WhatsApp Floating Button */}
        <WhatsAppButton 
          phoneNumber="694278962" 
          message="Hola! Quiero solicitar presupuesto para mi negocio"
        />

        {/* Main Content - Empresa sólida y profesional */}
        <HeroSection />
        <QuienesSomosSection />
        <BeneficiosSection />
        <SectoresSection />
        <ComoFuncionaSection />
        <EjemplosSection />
        <TestimoniosSection />
        <PacksSection />
        <ContactoSection />
        <CTASection />
        <Footer />

        {/* Mobile Sticky CTA */}
        <MobileCtaButton />
      </main>
    </>
  );
}
