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
    const message = 'Hola! Quiero solicitar mi web profesional con Sherfand Trade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToExamples = () => {
    document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="white" className="pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título Principal - Corporativo y de alto impacto */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-8 leading-tight tracking-tight">
          Webs profesionales y fotografía estratégica para negocios locales
        </h1>

        {/* Subtítulo - Especialización clara */}
        <p className="text-xl md:text-2xl text-secondary-600 mb-8 font-light">
          Especialistas en soluciones digitales para restaurantes
        </p>

        {/* Línea de confianza */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-secondary-700 mb-16">
          <div className="flex items-center gap-2">
            <span className="text-primary-600 font-bold">✔</span>
            <span>Atención personalizada</span>
          </div>
          <span className="hidden md:inline text-secondary-400">·</span>
          <div className="flex items-center gap-2">
            <span className="text-primary-600 font-bold">✔</span>
            <span>Entrega rápida</span>
          </div>
          <span className="hidden md:inline text-secondary-400">·</span>
          <div className="flex items-center gap-2">
            <span className="text-primary-600 font-bold">✔</span>
            <span>Proyectos profesionales</span>
          </div>
        </div>

        {/* CTA Principal - Sólido y directo */}
        <div className="mb-20">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="px-12 py-5 text-lg bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Solicitar presupuesto
          </Button>
        </div>

        {/* Social Proof discreto */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center py-8 border-t border-b border-secondary-200">
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-1">50+</div>
              <div className="text-sm text-secondary-600">Negocios confían en nosotros</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-1">4.9★</div>
              <div className="text-sm text-secondary-600">Valoración media</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary-900 mb-1">24h</div>
              <div className="text-sm text-secondary-600">Tiempo de respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
