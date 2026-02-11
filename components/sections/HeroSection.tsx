'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const HeroSection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero mi web profesional para mi restaurante';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToExamples = () => {
    document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="gradient" className="pt-24 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in">
          <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Web + Fotos Profesionales
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight animate-slide-up">
          Más reservas para tu restaurante{' '}
          <span className="text-primary-600">en menos de 7 días</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-secondary-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Web profesional + sesión de fotos de tus platos y local. 
          Todo listo para recibir más clientes desde el primer día. 
          <span className="font-semibold text-secondary-800"> Sin complicaciones técnicas.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="w-full sm:w-auto"
          >
            Quiero mi web <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToExamples}
            className="w-full sm:w-auto"
          >
            <Play size={20} /> Ver ejemplos
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-secondary-600 animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white"
                />
              ))}
            </div>
            <span className="text-sm font-medium">+50 restaurantes confían en nosotros</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-secondary-300 rounded-full" />
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm font-medium ml-1">4.9/5 valoración</span>
          </div>
        </div>
      </div>
    </Section>
  );
};
