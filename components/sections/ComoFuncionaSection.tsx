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
      number: '1',
      icon: MessageCircle,
      title: 'Analizamos tu negocio',
      description: 'Brief rápido por WhatsApp o teléfono. Nos cuentas sobre tu negocio y objetivos. Sin compromisos.',
    },
    {
      number: '2',
      icon: Palette,
      title: 'Diseñamos tu web y realizamos las fotos',
      description: 'Nuestro equipo diseña tu web profesional y visitamos tu local para la sesión fotográfica. Tú te enfocas en tu negocio.',
    },
    {
      number: '3',
      icon: Rocket,
      title: 'Publicamos y empiezas a recibir clientes',
      description: 'Lanzamos tu web optimizada para Google y móviles. Estás online recibiendo nuevos clientes.',
    },
  ];

  return (
    <Section background="white" id="como-funciona" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Cómo funciona
        </h2>
        <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
          Proceso simple en 3 pasos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="text-center">
              {/* Número y icono */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {step.number}
                </div>
                <Icon size={32} className="text-secondary-900 mx-auto" />
              </div>

              {/* Contenido */}
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
