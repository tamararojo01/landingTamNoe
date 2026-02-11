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
    const message = 'Hola! Quiero solicitar mi web profesional con SherfandTrade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToExamples = () => {
    document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="white" className="pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge discreto */}
        <div className="inline-block mb-8 animate-fade-in">
          <span className="bg-secondary-50 text-secondary-700 px-5 py-2 rounded-full text-sm font-medium border border-secondary-200">
            SherfandTrade · Especialistas en restaurantes
          </span>
        </div>

        {/* Título Principal - Limpio y directo */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight">
          Webs y fotografía profesional para negocios locales
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-secondary-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Consigue más clientes con una web moderna y fotos que venden.
        </p>

        {/* CTAs - Principal y Secundario */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="w-full sm:w-auto text-base px-8 py-4 bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Solicitar presupuesto <ArrowRight size={20} className="ml-2" />
          </Button>
          <button
            onClick={scrollToExamples}
            className="text-secondary-600 hover:text-secondary-900 font-medium flex items-center gap-2 transition-colors px-6 py-3"
          >
            Ver ejemplos
          </button>
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
