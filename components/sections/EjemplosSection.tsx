'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

/**
 * Ejemplos Section - Portafolio de trabajos realizados
 * 
 * Características:
 * - Grid responsivo de ejemplos (1 col móvil, 2 cols desktop)
 * - Efectos hover con zoom y sombra para mejor UX
 * - Placeholders de alta calidad que se pueden reemplazar con imágenes reales
 * - Enlaces a demos en vivo
 * 
 * Para modificar en el futuro:
 * - Reemplazar image con URLs de imágenes reales usando Next.js Image
 * - Añadir más ejemplos al array según necesites
 * - Cambiar las URLs de los demos cuando tengas proyectos reales
 */
export const EjemplosSection = () => {
  const ejemplos = [
    {
      name: 'Restaurante Mediterráneo',
      type: 'Pack Básico',
      description: 'Web de una página con carta digital, fotos profesionales y botón de contacto directo. Diseño minimalista y elegante.',
      url: 'https://demo-restaurante-three.vercel.app/',
      image: 'bg-gradient-to-br from-primary-100 via-primary-50 to-white',
      emoji: '🍝',
    },
    {
      name: 'Asador Premium',
      type: 'Pack Premium',
      description: 'Web completa con galería fotográfica, sistema de reservas online, blog y optimización SEO avanzada para máxima visibilidad.',
      url: 'https://demo-restaurante-premium.vercel.app/',
      image: 'bg-gradient-to-br from-secondary-100 via-secondary-50 to-white',
      emoji: '🥩',
    },
  ];

  return (
    <Section background="gradient" id="ejemplos">
      <div className="text-center mb-16 animate-fade-in">
        <span className="inline-block bg-primary-100 text-primary-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6">
          🎨 Nuestro trabajo
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Ve el resultado final
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
          Ejemplos reales de webs profesionales que atraen clientes. Tu restaurante puede lucir así.
        </p>
      </div>

      {/* Grid profesional con hover effects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {ejemplos.map((ejemplo, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-secondary-100"
          >
            {/* Image Placeholder con efecto zoom en hover */}
            <div className="relative overflow-hidden h-80">
              <div className={`${ejemplo.image} h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                <div className="text-center z-10 relative">
                  <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    {ejemplo.emoji}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <p className="text-secondary-700 font-semibold">{ejemplo.type}</p>
                  </div>
                </div>
              </div>
              {/* Overlay oscuro en hover */}
              <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/10 transition-all duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-3">
                <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-bold">
                  {ejemplo.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                {ejemplo.name}
              </h3>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {ejemplo.description}
              </p>
              <Button
                variant="outline"
                size="md"
                className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all"
                onClick={() => window.open(ejemplo.url, '_blank')}
              >
                Ver demo en vivo <ExternalLink size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Nota sobre imágenes reales */}
      <div className="text-center mt-12 animate-fade-in">
        <p className="text-secondary-500 text-sm">
          💡 Las imágenes de tu restaurante serán fotos profesionales reales de tus platos
        </p>
      </div>
    </Section>
  );
};
