import { HeroSection } from '@/components/sections/HeroSection';
import { OfrecemosSection } from '@/components/sections/OfrecemosSection';
import { BeneficiosSection } from '@/components/sections/BeneficiosSection';
import { ComoFuncionaSection } from '@/components/sections/ComoFuncionaSection';
import { PacksSection } from '@/components/sections/PacksSection';
import { TestimoniosSection } from '@/components/sections/TestimoniosSection';
import { EjemplosSection } from '@/components/sections/EjemplosSection';
import { ContactoSection } from '@/components/sections/ContactoSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="34660666706" 
        message="Hola! Quiero aumentar las reservas de mi restaurante"
      />

      {/* Main Content - Optimizado para conversión */}
      <HeroSection />
      <BeneficiosSection />
      <OfrecemosSection />
      <ComoFuncionaSection />
      <TestimoniosSection />
      <PacksSection />
      <EjemplosSection />
      <ContactoSection />
      <CTASection />
      <Footer />
    </main>
  );
}
