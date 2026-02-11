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
    const message = 'Hola! Quiero solicitar presupuesto con Sherfand Trade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Especialistas en negocios físicos',
      description: 'Conocemos las necesidades específicas de restaurantes y comercios locales. Experiencia probada en conversión de visitas a clientes reales.',
    },
    {
      icon: Camera,
      title: 'Web + fotografía en un solo servicio',
      description: 'Solución completa integrada. Diseño web profesional y sesión fotográfica incluida. Todo coordinado por un solo equipo.',
    },
    {
      icon: Smartphone,
      title: 'Entrega rápida y soporte cercano',
      description: 'Tu web lista en días, no meses. Soporte personalizado en español. Siempre disponibles para cambios y consultas.',
    },
    {
      icon: Settings,
      title: 'Imagen profesional orientada a conversión',
      description: 'No solo diseño bonito. Cada elemento optimizado para convertir visitantes en clientes. Enfoque 100% en resultados.',
    },
  ];

  return (
    <Section background="white" id="beneficios" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Por qué elegirnos
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Una solución completa profesional para atraer más clientes
        </p>
      </div>

      {/* Grid de 4 beneficios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
        {beneficios.map((beneficio, index) => {
          const Icon = beneficio.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-secondary-200 hover:border-primary-600 hover:shadow-lg transition-all duration-200"
            >
              {/* Icono simple */}
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
              </div>

              {/* Título */}
              <h3 className="text-lg font-bold text-secondary-900 mb-3 leading-tight">
                {beneficio.title}
              </h3>

              {/* Descripción */}
              <p className="text-secondary-600 text-sm leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA Intermedio */}
      <div className="text-center">
        <Button
          size="lg"
          onClick={handleContactClick}
          className="px-8 py-4 bg-primary-600 hover:bg-primary-700 shadow-md hover:shadow-lg transition-all duration-200"
        >
          Solicitar presupuesto
        </Button>
      </div>
    </Section>
  );
};
