import React from 'react';
import { TrendingUp, Award, Search, Smartphone } from 'lucide-react';
import { Section } from '../ui/Section';

export const BeneficiosSection = () => {
  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Más reservas y consultas',
      description: 'Aumenta tus reservas hasta un 40% con una web profesional que convierte visitantes en clientes.',
      stat: '+40%',
      statLabel: 'más reservas',
    },
    {
      icon: Award,
      title: 'Imagen profesional',
      description: 'Destaca frente a la competencia con fotos de calidad y un diseño moderno que transmite confianza.',
      stat: '4.9/5',
      statLabel: 'valoración',
    },
    {
      icon: Search,
      title: 'Más visibilidad en Google',
      description: 'Aparece en las búsquedas locales de Google cuando clientes buscan "restaurantes cerca de mí".',
      stat: '3x',
      statLabel: 'más búsquedas',
    },
    {
      icon: Smartphone,
      title: 'Conversión móvil',
      description: 'El 80% de tus clientes buscan desde el móvil. Tu web estará perfectamente optimizada para todos los dispositivos.',
      stat: '80%',
      statLabel: 'móviles',
    },
  ];

  return (
    <Section background="gray" id="beneficios">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Por qué tu restaurante necesita esto
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Resultados reales que impactan directamente en tu negocio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {beneficios.map((beneficio, index) => {
          const Icon = beneficio.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                    {beneficio.title}
                  </h3>
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {beneficio.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary-600">
                      {beneficio.stat}
                    </span>
                    <span className="text-secondary-500 text-sm">
                      {beneficio.statLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
