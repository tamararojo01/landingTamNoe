'use client';

import React from 'react';
import { TrendingUp, Camera, Settings, Smartphone } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

/**
 * Beneficios Section - Muestra los beneficios clave del servicio
 * 
 * Características:
 * - 4 beneficios principales con iconos
 * - Diseño en grid responsivo (1 col móvil, 2 cols tablet, 4 cols desktop)
 * - Cada beneficio tiene icono, título y descripción persuasiva
 * - CTA intermedio para reducir fricción
 * - Animaciones hover para mejor UX
 * 
 * Para modificar en el futuro:
 * - Cambiar los beneficios en el array 'beneficios'
 * - Ajustar los iconos importados de lucide-react
 * - Modificar el copy del CTA según la estrategia
 */
export const BeneficiosSection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero mi web + fotos profesionales para mi restaurante';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Más reservas con una web moderna y atractiva',
      description: 'Diseño profesional optimizado para convertir visitantes en clientes. Botones de reserva visibles, proceso simple y rápido que genera confianza.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Camera,
      title: 'Fotografía profesional que vende tu comida',
      description: 'Sesión de fotos incluida con fotógrafo experto. Imágenes de alta calidad que abren el apetito y muestran tus platos en su mejor versión.',
      color: 'from-primary-600 to-primary-700',
    },
    {
      icon: Settings,
      title: 'Fácil de gestionar y actualizar',
      description: 'Panel simple para editar menú, horarios y promociones. No necesitas conocimientos técnicos. Actualizaciones rápidas cuando lo necesites.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Smartphone,
      title: 'Optimizado para móvil y SEO básico',
      description: 'El 85% de clientes buscan desde el móvil. Tu web se ve perfecta en todos los dispositivos y está optimizada para aparecer en Google.',
      color: 'from-primary-600 to-primary-700',
    },
  ];

  return (
    <Section background="white" id="beneficios">
      <div className="text-center mb-16 animate-fade-in">
        <span className="inline-block bg-primary-100 text-primary-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6">
          ✨ Beneficios del servicio
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Todo lo que necesitas para destacar online
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
          No solo creamos una web bonita. Te entregamos una{' '}
          <span className="font-bold text-primary-600">herramienta completa</span> para atraer más clientes
        </p>
      </div>

      {/* Grid de 4 beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {beneficios.map((beneficio, index) => {
          const Icon = beneficio.icon;
          return (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100"
            >
              {/* Icono con fondo degradado */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${beneficio.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon size={32} className="text-white" />
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-secondary-900 mb-4 leading-tight">
                {beneficio.title}
              </h3>

              {/* Descripción */}
              <p className="text-secondary-600 leading-relaxed">
                {beneficio.description}
              </p>

              {/* Línea decorativa que aparece en hover */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 rounded-full"></div>
            </div>
          );
        })}
      </div>

      {/* CTA Intermedio */}
      <div className="text-center animate-fade-in">
        <Button
          size="lg"
          onClick={handleContactClick}
          className="text-lg px-10 py-6 bg-primary-600 hover:bg-primary-700 shadow-xl hover:shadow-primary-500/50 transform hover:scale-105 transition-all"
        >
          Quiero mi web + fotos ahora
        </Button>
        <p className="text-sm text-secondary-600 mt-4">
          💬 Respuesta en menos de 24h · ⚡ Sin compromiso · ✅ Garantía de satisfacción
        </p>
      </div>
    </Section>
  );
};

  return (
    <Section background="white" id="beneficios">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
          ¿Por qué elegir RestoWeb Pro?
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Todo lo que necesitas para tener éxito online
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          No solo creamos una web bonita. Creamos una <span className="font-bold text-primary-600">máquina de generar reservas</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
        {beneficios.map((beneficio, index) => {
          const Icon = beneficio.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-secondary-100"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {beneficio.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    {beneficio.stat}
                  </span>
                  <span className="text-secondary-500 text-sm font-medium">
                    {beneficio.statLabel}
                  </span>
                </div>
              </div>

              <p className="text-secondary-600 mb-4 leading-relaxed">
                {beneficio.description}
              </p>

              <ul className="space-y-2">
                {beneficio.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-secondary-700">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* CTA Intermedio */}
      <div className="text-center">
        <Button
          size="lg"
          onClick={handleContactClick}
          className="text-xl px-12 py-6 shadow-xl"
        >
          Quiero aumentar mis reservas ahora
        </Button>
        <p className="text-sm text-secondary-600 mt-4">
          💬 Respuesta en menos de 24h · Sin compromiso
        </p>
      </div>
    </Section>
  );
};
