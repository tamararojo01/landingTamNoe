'use client';

import React from 'react';
import { TrendingUp, Award, Search, Smartphone, Clock, Shield } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const BeneficiosSection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero aumentar las reservas de mi restaurante';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Más reservas garantizadas',
      description: 'Web optimizada 100% para convertir visitantes en reservas. Formularios simples, botón WhatsApp directo y proceso sin fricción.',
      stat: '+40%',
      statLabel: 'más reservas',
      bullets: [
        'Botón de reserva visible en todo momento',
        'WhatsApp integrado para consultas rápidas',
        'Formulario de contacto que funciona',
      ],
    },
    {
      icon: Search,
      title: 'Visibilidad en Google',
      description: 'Aparece cuando buscan "restaurantes cerca de mí" o tu tipo de cocina. SEO local que te posiciona frente a la competencia.',
      stat: '3x',
      statLabel: 'más búsquedas',
      bullets: [
        'Optimizado para búsquedas locales',
        'Google Maps integrado',
        'Palabras clave de tu zona y cocina',
      ],
    },
    {
      icon: Smartphone,
      title: 'Funciona en móviles',
      description: 'El 85% de tus clientes buscan desde el móvil. Tu web se ve perfecta en cualquier dispositivo y carga en menos de 2 segundos.',
      stat: '85%',
      statLabel: 'buscan mobile',
      bullets: [
        'Diseño responsive profesional',
        'Carga ultrarrápida',
        'Botones grandes y fáciles de tocar',
      ],
    },
    {
      icon: Clock,
      title: 'Listo en 7 días',
      description: 'No esperes meses. En una semana tienes tu web funcionando y empiezas a recibir reservas. Proceso simple y rápido.',
      stat: '7 días',
      statLabel: 'de entrega',
      bullets: [
        'Sin complicaciones técnicas',
        'Nosotros nos encargamos de todo',
        'Tu solo defines tu menú y horarios',
      ],
    },
    {
      icon: Award,
      title: 'Imagen profesional',
      description: 'Fotos de calidad profesional de tus platos que abren el apetito. Primera impresión que genera confianza y deseo.',
      stat: '4.9/5',
      statLabel: 'valoración',
      bullets: [
        'Fotógrafo profesional incluido',
        'Fotos editadas y optimizadas',
        'Tu restaurante en su mejor versión',
      ],
    },
    {
      icon: Shield,
      title: 'Sin sorpresas',
      description: 'Precio único, todo incluido. Hosting gratis 1 año. Sin costes ocultos ni pagos mensuales sorpresa. Total transparencia.',
      stat: '0€',
      statLabel: 'mensuales',
      bullets: [
        'Pago único, sin mensualidades',
        'Hosting incluido 1 año',
        'Sin letra pequeña',
      ],
    },
  ];

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
