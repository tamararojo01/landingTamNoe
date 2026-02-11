'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export const HeroSection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero aumentar las reservas de mi restaurante';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="gradient" className="pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge con urgencia */}
        <div className="inline-block mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            🚀 OFERTA DE LANZAMIENTO - Últimos cupos disponibles
          </span>
        </div>

        {/* Headline - Problema y Solución */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight animate-slide-up">
          ¿Tu restaurante no recibe suficientes reservas?
        </h1>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 mb-8 leading-tight animate-slide-up">
          Aumenta tus reservas en menos de 7 días
        </h2>

        {/* Subheadline - El problema */}
        <p className="text-xl md:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up font-medium">
          Sin presencia online profesional, pierdes clientes cada día. Ellos te buscan, pero encuentran a tu competencia.
        </p>

        {/* La solución */}
        <p className="text-lg md:text-xl text-secondary-600 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          <span className="font-bold text-secondary-900">Web profesional + Fotos que venden</span>
          <br />
          Todo listo para recibir reservas desde el primer día.
          <span className="block mt-2 text-primary-600 font-semibold">Sin complicaciones. Sin conocimientos técnicos.</span>
        </p>

        {/* CTA Principal - MUY destacado */}
        <div className="flex flex-col items-center gap-4 mb-10 animate-slide-up">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="w-full sm:w-auto text-xl px-12 py-6 shadow-2xl transform hover:scale-105"
          >
            Solicita tu web ahora <ArrowRight size={24} />
          </Button>
          <p className="text-sm text-secondary-600">
            ⚡ Sin compromiso · 📞 Te llamamos en 24h · ✅ Garantía de satisfacción
          </p>
        </div>

        {/* Social Proof Mejorada */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">+50</div>
              <div className="text-sm text-secondary-600">Restaurantes activos</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl font-bold text-primary-600">4.9</span>
                <span className="text-yellow-500 text-2xl">★★★★★</span>
              </div>
              <div className="text-sm text-secondary-600">Valoración media</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-1">+40%</div>
              <div className="text-sm text-secondary-600">Más reservas de media</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
