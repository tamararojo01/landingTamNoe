'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const CTASection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero aumentar las reservas de mi restaurante con RestoWeb Pro';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="gradient" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 opacity-10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 opacity-10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Urgencia */}
        <div className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full mb-6 font-bold text-sm animate-pulse shadow-lg">
          <Clock size={18} />
          <span>⚠️ ÚLTIMOS CUPOS DE FEBRERO - Solo quedan 3 espacios</span>
        </div>

        {/* Headline fuerte */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
          ¿Listo para dejar de perder clientes frente a tu competencia?
        </h2>

        <p className="text-xl md:text-2xl text-secondary-700 mb-8 font-medium">
          Cada día que esperas, <span className="text-primary-600 font-bold">pierdes reservas</span> que van a otros restaurantes
        </p>

        {/* Beneficios rápidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl mb-1">⚡</div>
            <div className="font-bold text-secondary-900">Listo en 7 días</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl mb-1">📈</div>
            <div className="font-bold text-secondary-900">+40% más reservas</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="text-3xl mb-1">💰</div>
            <div className="font-bold text-secondary-900">Desde 199€</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto text-xl px-12 py-6 shadow-2xl transform hover:scale-105 bg-gradient-to-r from-primary-600 to-primary-700"
          >
            Solicitar mi web ahora <ArrowRight size={24} />
          </Button>
        </div>

        {/* Garantías finales */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Sin compromiso</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Respuesta en 24h</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Garantía total</span>
            </div>
          </div>
        </div>

        {/* Nota de urgencia */}
        <p className="text-sm text-secondary-600 mt-6 italic">
          * Los cupos se asignan por orden de solicitud. Una vez llenos, la próxima disponibilidad será en Marzo.
        </p>
      </div>
    </Section>
  );
};
