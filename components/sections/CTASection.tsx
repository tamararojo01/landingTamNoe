'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

/**
 * CTA Section - Llamada a la acción final con urgencia
 * 
 * Características:
 * - Urgencia y exclusividad destacada
 * - Botón grande premium con gradiente
 * - Copy persuasivo con escasez
 * - Diseño profesional de alto contraste
 */
export const CTASection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero conseguir mi web que convierte clientes';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Section background="white" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        {/* Card con gradiente premium */}
        <div className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 rounded-3xl shadow-2xl p-10 md:p-16 text-center relative overflow-hidden">
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            {/* Badge de urgencia */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold mb-8 animate-pulse shadow-lg">
              <Clock size={20} />
              <span>Solo 5 webs a precio de lanzamiento este mes</span>
            </div>

            {/* Headline principal */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Consigue tu web que convierte clientes
            </h2>

            <p className="text-xl md:text-2xl text-secondary-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              No pierdas más clientes por no tener presencia online profesional. Empieza hoy mismo.
            </p>

            {/* CTA Principal GRANDE */}
            <div className="mb-8">
              <Button
                size="lg"
                onClick={handleContactClick}
                className="px-16 py-7 text-xl md:text-2xl font-black bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-2xl"
              >
                Quiero mi consulta gratis ahora <ArrowRight size={28} className="ml-3" />
              </Button>
            </div>

            {/* Info de confianza */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-secondary-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Sin compromiso</span>
              </div>
              <span className="hidden md:inline text-secondary-600">·</span>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Respuesta en menos de 24h</span>
              </div>
              <span className="hidden md:inline text-secondary-600">·</span>
              <div className="flex items-center gap-2">
                <span className="text-green-400 font-bold">✓</span>
                <span>Garantía 100% devolución</span>
              </div>
            </div>

            {/* Contador de urgencia visual */}
            <div className="mt-10 pt-8 border-t border-secondary-700">
              <p className="text-secondary-400 text-base mb-4">
                🔥 <span className="font-bold text-white">Solo quedan 5 espacios</span> disponibles este mes a precio especial
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
                      num <= 2
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-white/10 text-secondary-500'
                    }`}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
