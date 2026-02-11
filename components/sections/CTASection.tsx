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
 * - Copy persuasivo final de SherfandTrade
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
    const message = 'Hola! Quiero solicitar presupuesto en SherfandTrade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Section background="white" className="py-20 md:py-28 bg-secondary-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Listo para conseguir más clientes con una web profesional?
        </h2>

        <p className="text-xl text-secondary-300 mb-10 max-w-2xl mx-auto">
          Solicita presupuesto en SherfandTrade
        </p>

        {/* CTA Principal */}
        <div className="mb-8">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="px-10 py-5 bg-white text-secondary-900 hover:bg-secondary-100 shadow-lg hover:shadow-xl transition-al duration-200"
          >
            Solicitar presupuesto en SherfandTrade <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>

        {/* Info breve */}
        <p className="text-sm text-secondary-400">
          Sin compromiso · Respuesta en 24h
        </p>
      </div>
    </Section>
  );
};
