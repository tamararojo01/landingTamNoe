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
    const message = 'Hola! Quiero solicitar presupuesto con SherfandTrade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const beneficios = [
    {
      icon: TrendingUp,
      title: 'Más clientes y reservas desde tu web',
      description: 'Diseño optimizado para convertir visitantes en clientes reales. Formularios de contacto eficaces y sistema de reservas integrado.',
    },
    {
      icon: Camera,
      title: 'Fotografía profesional que aumenta conversiones',
      description: 'Sesión de fotos con fotógrafo experto incluida. Imágenes de alta calidad que muestran tu negocio en su mejor versión.',
    },
    {
      icon: Smartphone,
      title: 'Diseño moderno, rápido y optimizado para móvil',
      description: 'Web perfecta en todos los dispositivos. Carga rápida y optimizada para buscadores. El 85% de clientes buscan desde el móvil.',
    },
    {
      icon: Settings,
      title: 'Soporte real de empresa profesional',
      description: 'Equipo de SherfandTrade disponible para resolver dudas y hacer cambios. Trato personalizado y cercano cuando lo necesites.',
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
