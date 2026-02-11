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
    const message = 'Hola! Quiero conseguir mi web + fotos profesionales';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToExamples = () => {
    document.getElementById('ejemplos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section background="white" className="pt-40 md:pt-48 pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título Principal - Máximo impacto, 12 palabras */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-900 mb-6 leading-tight">
          Web + Fotos Profesionales para tu Restaurante
        </h1>

        {/* Subtítulo - Beneficio claro, 20 palabras */}
        <p className="text-xl md:text-2xl text-secondary-600 mb-10 font-light max-w-3xl mx-auto">
          Atrae más clientes con una web moderna y fotografía que vende. Todo listo en 7 días.
        </p>

        {/* 3 Bullets de valor concreto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 text-base md:text-lg text-secondary-700">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-green-600 text-2xl">✓</span>
            <span>Web lista en 7 días</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span className="text-green-600 text-2xl">✓</span>
            <span>Incluye sesión de fotos</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span className="text-green-600 text-2xl">✓</span>
            <span>Desde 249€ todo incluido</span>
          </div>
        </div>

        {/* CTA Principal - Accionable y destacado */}
        <div className="mb-16">
          <Button
            size="lg"
            onClick={handleContactClick}
            className="px-16 py-6 text-xl font-bold bg-primary-600 hover:bg-primary-700 shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-105"
          >
            Consigue web + fotos ahora
          </Button>
          <p className="text-sm text-secondary-500 mt-4">⭐ Más de 30 proyectos entregados · Valoración 4.9/5</p>
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
