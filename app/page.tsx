import { HeroSection } from '@/components/sections/HeroSection';
import { OfrecemosSection } from '@/components/sections/OfrecemosSection';
import { ComoFuncionaSection } from '@/components/sections/ComoFuncionaSection';
import { PacksSection } from '@/components/sections/PacksSection';
import { EjemplosSection } from '@/components/sections/EjemplosSection';
import { BeneficiosSection } from '@/components/sections/BeneficiosSection';
import { TestimoniosSection } from '@/components/sections/TestimoniosSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* WhatsApp Floating Button */}
      <WhatsAppButton 
        phoneNumber="34600000000" 
        message="Hola! Me interesa RestoWeb Pro para mi restaurante"
      />

      {/* Main Content */}
      <HeroSection />
      <OfrecemosSection />
      <ComoFuncionaSection />
      <PacksSection />
      <EjemplosSection />
      <BeneficiosSection />
      <TestimoniosSection />
      <CTASection />
      <Footer />
    </main>
  );
}
