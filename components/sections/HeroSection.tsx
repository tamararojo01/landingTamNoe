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
    <Section background="gradient" className="pt-32 md:pt-40 pb-16 md:pb-24 relative overflow-hidden">
      {/* Imagen de fondo con overlay - puedes cambiar la URL de la imagen */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 opacity-60"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge de propuesta de valor */}
        <div className="inline-block mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all">
            ✨ SherfandTrade - Especialistas en negocios locales
          </span>
        </div>

        {/* Título Principal - Hero Statement */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight animate-slide-up">
          Webs y fotografía profesional{' '}
          <span className="text-primary-600 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
            para negocios locales
          </span>
        </h1>

        {/* Subtítulo - Especialización */}
        <p className="text-xl md:text-2xl text-secondary-700 mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up font-medium">
          Especialistas en restaurantes. Consigue más clientes con una web moderna y fotos que venden.
        </p>

        {/* Beneficios clave en una línea */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-secondary-600 animate-slide-up">
          <div className="flex items-center gap-2">
            <span className="text-primary-600">✓</span>
            <span className="font-medium">Diseño profesional</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-600">✓</span>
            <span className="font-medium">Fotografía de calidad</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-600">✓</span>
            <span className="font-medium">Soporte real</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-600">✓</span>
            <span className="font-medium">Empresa profesional</span>
          </div>
        </div>

        {/* CTAs - Principal y Secundario */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="w-full sm:w-auto text-lg px-10 py-6 bg-primary-600 hover:bg-primary-700 shadow-2xl hover:shadow-primary-500/50 transform hover:scale-105 transition-all duration-300"
          >
            Solicitar mi web profesional <ArrowRight size={22} className="ml-2" />
          </Button>
          <button
            onClick={scrollToExamples}
            className="text-secondary-700 hover:text-primary-600 font-medium flex items-center gap-2 transition-colors px-6 py-3"
          >
            <Play size={18} className="text-primary-600" />
            Ver ejemplos
          </button>
        </div>

        {/* Social Proof - Estadísticas */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto shadow-xl animate-fade-in border border-secondary-100">
          <p className="text-sm text-secondary-600 mb-4 font-medium">
            Más de 50 negocios ya confían en SherfandTrade
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary-600 mb-1">4.9★</div>
              <div className="text-sm text-secondary-600">Valoración media</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary-600 mb-1">+40%</div>
              <div className="text-sm text-secondary-600">Más clientes</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-primary-600 mb-1">7 días</div>
              <div className="text-sm text-secondary-600">Tiempo de entrega</div>
            </div>
          </div>
        </div>

        {/* Garantía breve */}
        <p className="text-sm text-secondary-600 mt-6 animate-fade-in">
          ⚡ Sin compromiso · 📞 Respuesta en 24h · ✅ Trato cercano de empresa profesional
        </p>
      </div>
    </Section>
  );
};
