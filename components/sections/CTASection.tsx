'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

/**
 * CTA Section - Llamada a la acción final profesional
 * 
 * Características:
 * - Botón grande premium con gradiente
 * - Copy persuasivo y profesional
 * - Diseño premium de alto contraste
 * - Garantías de confianza
 */
export const CTASection = () => {
  const handleContactClick = () => {
    const phone = '694278962';
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
          </div>
        </div>
      </div>
    </Section>
  );
};
