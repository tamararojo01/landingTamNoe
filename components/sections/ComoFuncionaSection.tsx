import React from 'react';
import { Palette, Camera, Rocket } from 'lucide-react';
import { Section } from '../ui/Section';

/**
 * Cómo Funciona Section - Proceso en 3 pasos premium
 * 
 * Características:
 * - 3 pasos con números grandes y visuales contrastantes
 * - Diseño premium con gradientes y sombras
 * - Copy persuasivo enfocado en resultados
 * - Responsive: 1 columna en móvil, 3 columnas en desktop
 */
export const ComoFuncionaSection = () => {
  const steps = [
    {
      number: '1',
      icon: Palette,
      title: 'Elegimos el diseño perfecto para tu negocio',
      description: 'Analizamos tu marca y sector para crear un diseño web que convierta visitas en clientes.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      number: '2',
      icon: Camera,
      title: 'Creamos fotos profesionales y subimos tu contenido',
      description: 'Sesión fotográfica en tu local y creación de contenido optimizado para vender más.',
      gradient: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-50 to-primary-100',
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Tu web está lista para atraer clientes y pedidos',
      description: 'Lanzamos tu web optimizada para Google y móviles. Empieza a recibir clientes desde el día 1.',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
    },
  ];

  return (
    <Section background="white" id="como-funciona" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Cómo funciona
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          3 pasos simples para tener tu web profesional lista
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={index} 
              className={`relative bg-gradient-to-br ${step.bgGradient} rounded-2xl p-8 border-2 border-${step.gradient.split('-')[1]}-200 shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Número grande premium */}
              <div className={`absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-5xl font-black text-white">{step.number}</span>
              </div>

              {/* Icono en esquina superior derecha */}
              <div className="flex justify-end mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                  <Icon size={28} className="text-white" />
                </div>
              </div>

              {/* Contenido */}
              <h3 className="text-xl md:text-2xl font-bold text-secondary-900 mb-4 mt-6 leading-tight">
                {step.title}
              </h3>
              <p className="text-secondary-700 leading-relaxed text-base">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
