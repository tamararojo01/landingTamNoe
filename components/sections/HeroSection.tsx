'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

/**
 * Hero Section - Encabezado principal de la landing page
 * 
 * Características:
 * - Título principal con propuesta de valor clara de SherfandTrade
 * - Subtítulo explicativo enfocado en negocios locales
 * - CTA destacado con animación hover
 * - Social proof con estadísticas
 * - Diseño responsivo y optimizado para móvil
 * 
 * Para modificar en el futuro:
 * - Cambiar el copy del título/subtítulo según el mensaje deseado
 * - Ajustar el número de WhatsApp en handleContactClick
 * - Modificar las estadísticas de social proof según los datos reales
 */
export const HeroSection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero una consulta gratis sobre mi web profesional';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToExamples = () => {
    document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="white" className="pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título Principal - Enfocado en resultados medibles */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight tracking-tight">
          Convierte tu web en clientes: más ventas, reservas y visibilidad para tu negocio
        </h1>

        {/* Subtítulo - Servicio persuasivo */}
        <p className="text-xl md:text-2xl text-secondary-600 mb-10 font-light max-w-3xl mx-auto leading-relaxed">
          Webs + fotos profesionales que atraen clientes y hacen crecer tu negocio
        </p>

        {/* 3 Bullets de valor profesional */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-base md:text-lg text-secondary-700">
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-primary-600 text-2xl">●</span>
            <span>Diseño que convierte visitas en ventas</span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-primary-600 text-2xl">●</span>
            <span>Fotografía profesional incluida</span>
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <span className="text-primary-600 text-2xl">●</span>
            <span>Entrega garantizada en 7 días</span>
          </div>
        </div>

        {/* CTA Principal - Premium y accionable */}
        <div className="mb-16">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="px-12 py-6 text-lg md:text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 rounded-xl"
          >
            Consigue tu web que convierte clientes → Gratis consulta
          </Button>
          <p className="text-sm text-secondary-500 mt-5 font-medium">
            ⭐ Más de 50 negocios creciendo con nosotros · 4.9/5 valoración
          </p>
        </div>

        {/* Social Proof premium */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center py-10 px-8 bg-gradient-to-br from-secondary-50 to-white rounded-2xl border border-secondary-200 shadow-sm">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">50+</div>
              <div className="text-sm font-medium text-secondary-700">Negocios activos</div>
              <div className="text-xs text-secondary-500">Creciendo cada mes</div>
            </div>
            <div className="space-y-2 border-l border-r border-secondary-200 md:border-0">
              <div className="text-4xl font-bold text-primary-600">4.9★</div>
              <div className="text-sm font-medium text-secondary-700">Valoración media</div>
              <div className="text-xs text-secondary-500">De clientes satisfechos</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-600">24h</div>
              <div className="text-sm font-medium text-secondary-700">Tiempo de respuesta</div>
              <div className="text-xs text-secondary-500">Soporte personalizado</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
