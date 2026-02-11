'use client';

import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const PacksSection = () => {
  const handleContactClick = (packName: string) => {
    const phone = '34660666706';
    const message = `Hola! Me interesa el ${packName} de RestoWeb Pro`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const packs = [
    {
      name: 'Pack Básico',
      price: '199',
      originalPrice: '299',
      description: 'Perfecto para empezar tu presencia online',
      features: [
        'Web responsive de una página',
        '1 hora de sesión de fotos (hasta 15 fotos editadas)',
        'Tu carta digital',
        'Información de contacto y ubicación',
        'Botón de WhatsApp integrado',
        'SEO básico',
        'Hosting incluido 1 año',
      ],
      popular: false,
      cta: 'Contratar Pack Básico',
    },
    {
      name: 'Pack Premium',
      price: '349',
      originalPrice: '449',
      description: 'La solución completa para destacar al máximo',
      features: [
        'Web responsive multipágina',
        '2 horas de sesión de fotos (hasta 30 fotos editadas)',
        'Tu carta digital con categorías',
        'Galería de fotos profesional',
        'Blog/sección noticias',
        'Formulario de reservas integrado',
        'Google Maps + botón WhatsApp',
        'SEO local optimizado',
        'Integración redes sociales',
        'Hosting incluido 1 año',
        'Soporte prioritario 3 meses',
      ],
      popular: true,
      cta: 'Contratar Pack Premium',
    },
  ];

  return (
    <Section background="gradient" id="packs">
      <div className="text-center mb-12 md:mb-16">
        {/* Badge de Oferta */}
        <div className="inline-block mb-4">
          <span className="bg-green-500 text-white px-5 py-2 rounded-full text-sm font-bold animate-pulse">
            🚀 OFERTA DE LANZAMIENTO - Precios especiales
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Elige tu pack
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          <span className="font-bold text-primary-600">¡Hasta 100€ de descuento!</span> Inversión única. Sin pagos mensuales. Todo incluido
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {packs.map((pack, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-xl p-8 md:p-10 ${
              pack.popular
                ? 'ring-4 ring-primary-500 scale-105 lg:scale-110'
                : ''
            }`}
          >
            {pack.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Sparkles size={16} /> Más popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">
                {pack.name}
              </h3>
              <p className="text-secondary-600 mb-4">{pack.description}</p>
              
              {/* Badge de Oferta */}
              <div className="mb-4">
                <span className="inline-block bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  🎉 Oferta de Lanzamiento
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-2 mb-2">
                {/* Precio Original Tachado */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-secondary-400 line-through">
                    {pack.originalPrice}€
                  </span>
                </div>
                
                {/* Precio de Oferta */}
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-primary-600">
                    {pack.price}€
                  </span>
                  <span className="text-secondary-500">pago único</span>
                </div>
                
                {/* Ahorro */}
                <span className="text-green-600 font-semibold text-sm">
                  ¡Ahorras {parseInt(pack.originalPrice) - parseInt(pack.price)}€!
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {pack.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-green-500 flex-shrink-0 mt-0.5"
                  />
                  <span className="text-secondary-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={pack.popular ? 'primary' : 'secondary'}
              size="lg"
              className="w-full"
              onClick={() => handleContactClick(pack.name)}
            >
              {pack.cta}
            </Button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-secondary-600">
          ¿Necesitas algo personalizado?{' '}
          <button
            onClick={() => handleContactClick('solución personalizada')}
            className="text-primary-600 font-semibold hover:underline"
          >
            Contáctanos
          </button>
        </p>
      </div>
    </Section>
  );
};
