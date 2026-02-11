import React from 'react';
import { Section } from '../ui/Section';
import { Building2, Target, Award, Users } from 'lucide-react';

/**
 * Quiénes Somos Section - Presenta la empresa de forma corporativa
 */
export const QuienesSomosSection = () => {
  const valores = [
    {
      icon: Building2,
      title: 'Empresa sólida',
      description: 'Profesionales con experiencia',
    },
    {
      icon: Target,
      title: 'Enfoque en resultados',
      description: 'Orientados a conversión',
    },
    {
      icon: Award,
      title: 'Calidad garantizada',
      description: 'Servicio premium',
    },
    {
      icon: Users,
      title: 'Soporte cercano',
      description: 'Trato personalizado',
    },
  ];

  return (
    <Section background="white" id="quienes-somos" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Sobre Sherfand Trade
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        {/* Contenido en dos columnas */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Columna de texto */}
          <div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Especialistas en soluciones digitales para negocios locales
            </h3>
            <div className="space-y-4 text-secondary-600 leading-relaxed">
              <p>
                <strong className="text-secondary-900">Sherfand Trade</strong> es una empresa especializada en soluciones digitales para negocios locales.
              </p>
              <p>
                Ayudamos a restaurantes y comercios físicos a conseguir más clientes con webs profesionales y fotografía estratégica orientada a resultados.
              </p>
              <p>
                Nuestro enfoque combina diseño web moderno, fotografía de alta calidad y estrategia digital para maximizar la conversión y visibilidad de tu negocio.
              </p>
              <p className="font-medium text-secondary-900">
                Trabajamos únicamente con negocios locales porque conocemos sus necesidades específicas y sabemos exactamente qué funciona.
              </p>
            </div>
          </div>

          {/* Columna visual - Imagen profesional */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-secondary-100 to-secondary-50 rounded-2xl overflow-hidden border border-secondary-200">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-primary-600 rounded-full flex items-center justify-center">
                    <Building2 size={64} className="text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-secondary-900 mb-2">
                    SHERFAND TRADE
                  </h4>
                  <p className="text-sm text-secondary-600 tracking-widest">
                    PROFESSIONAL SERVICES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de valores corporativos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-secondary-50 rounded-lg border border-secondary-200 hover:border-primary-600 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon size={24} className="text-white" />
                </div>
                <h4 className="font-bold text-secondary-900 text-sm mb-1">
                  {valor.title}
                </h4>
                <p className="text-xs text-secondary-600">
                  {valor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
