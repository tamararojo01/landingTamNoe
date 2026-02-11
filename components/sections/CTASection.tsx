'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

/**
 * CTA Section - Llamada a la acción final
 * 
 * Características:
 * - Botón grande y destacado con azul eléctrico
 * - Animación hover para llamar atención
 * - Copy persuasivo final
 * - Fondo degradado para destacar la sección
 * 
 * Para modificar en el futuro:
 * - Actualizar el copy del CTA según la estrategia de marketing
 * - Cambiar el número de WhatsApp en handleContactClick
 * - Ajustar el mensaje predeterminado de WhatsApp
 */
export const CTASection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero solicitar mi web + fotos profesionales';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Section background="gradient" className="relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 opacity-10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 opacity-10 rounded-full -ml-48 -mb-48 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        {/* Headline fuerte */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
          ¿Listo para atraer más clientes?
        </h2>

        <p className="text-xl md:text-2xl text-secondary-700 mb-10 font-medium max-w-2xl mx-auto">
          Solicita tu web + fotos profesionales hoy y empieza a recibir más reservas en menos de 7 días
        </p>

        {/* CTA Principal - Botón grande con azul eléctrico */}
        <div className="mb-8">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="text-xl px-14 py-7 bg-primary-600 hover:bg-primary-700 shadow-2xl hover:shadow-primary-500/50 transform hover:scale-110 transition-all duration-300 animate-pulse"
          >
            Solicita tu web + fotos hoy <ArrowRight size={26} className="ml-2" />
          </Button>
        </div>

        {/* Garantías */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Respuesta en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Garantía de satisfacción</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-secondary-700 font-medium">Entrega en 7 días</span>
            </div>
          </div>
        </div>

        {/* Social proof final */}
        <p className="text-sm text-secondary-600 mt-8">
          👥 Más de 50 restaurantes ya confiaron en nosotros · ⭐ 4.9/5 de valoración
        </p>
      </div>
    </Section>
  );
};
