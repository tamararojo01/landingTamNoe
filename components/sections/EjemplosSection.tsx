'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const EjemplosSection = () => {
  const ejemplos = [
    {
      name: 'Demo Pack Básico',
      type: 'Pack Básico',
      description: 'Web de una página con carta digital, fotos profesionales y botón de contacto directo.',
      url: '#demo-basico',
      image: 'bg-gradient-to-br from-blue-100 to-blue-200',
    },
    {
      name: 'Demo Pack Premium',
      type: 'Pack Premium',
      description: 'Web completa con galería, blog, formulario de reservas y optimización SEO avanzada.',
      url: '#demo-premium',
      image: 'bg-gradient-to-br from-purple-100 to-purple-200',
    },
  ];

  return (
    <Section background="white" id="ejemplos">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Ve el resultado final
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Explora ejemplos reales de webs que hemos creado para restaurantes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {ejemplos.map((ejemplo, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            {/* Image Placeholder */}
            <div className={`${ejemplo.image} h-64 flex items-center justify-center`}>
              <div className="text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-secondary-700 font-semibold">{ejemplo.type}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="mb-2">
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {ejemplo.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                {ejemplo.name}
              </h3>
              <p className="text-secondary-600 mb-6">{ejemplo.description}</p>
              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => window.open(ejemplo.url, '_blank')}
              >
                Ver demo en vivo <ExternalLink size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
