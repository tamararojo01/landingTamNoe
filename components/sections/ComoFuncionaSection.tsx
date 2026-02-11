import React from 'react';
import { MessageCircle, Palette, Rocket } from 'lucide-react';
import { Section } from '../ui/Section';

/**
 * Cómo Trabajamos Section - Proceso en 3 pasos
 * 
 * Características:
 * - 3 pasos claros con iconos descriptivos de SherfandTrade
 * - Diseño con líneas conectoras entre pasos (desktop)
 * - Números destacados en badge
 * - Responsive: 1 columna en móvil, 3 columnas en desktop
 * 
 * Para modificar en el futuro:
 * - Actualizar los pasos en el array 'steps'
 * - Cambiar los iconos según el proceso (importar de lucide-react)
 * - Ajustar colores del degradado si es necesario
 */
export const ComoFuncionaSection = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Cuéntanos tu negocio',
      description: 'Brief rápido por WhatsApp o teléfono. Nos cuentas sobre tu negocio, tus objetivos y qué quieres transmitir. Sin compromisos ni letra pequeña.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: '02',
      icon: Palette,
      title: 'Diseñamos tu web y realizamos la sesión de fotos',
      description: 'Nuestro equipo de SherfandTrade diseña tu web profesional y visitamos tu local para la sesión fotográfica. Tú te enfocas en tu negocio.',
      color: 'from-primary-600 to-primary-700',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Publicamos tu web y empiezas a recibir clientes',
      description: 'Lanzamos tu web optimizada para Google y móviles. En 7 días estás online recibiendo consultas, reservas y nuevos clientes cada día.',
      color: 'from-primary-700 to-primary-800',
    },
  ];

  return (
    <Section background="gray" id="como-funciona">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Cómo funciona
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Proceso simple en 3 pasos. Sin complicaciones técnicas para ti
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-primary-200" />
              )}

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Step Number */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-6">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color}`}>
                    <Icon size={32} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
