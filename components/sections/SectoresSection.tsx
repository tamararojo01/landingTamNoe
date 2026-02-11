import React from 'react';
import { Utensils, Scissors, Stethoscope, Sparkles, Dumbbell } from 'lucide-react';
import { Section } from '../ui/Section';

/**
 * Sectores Section - Muestra los sectores/negocios con los que trabaja SherfandTrade
 * 
 * Características:
 * - Grid de 5 sectores principales
 * - Iconos representativos para cada sector
 * - Diseño limpio tipo badges/cards
 * - Hover effects suaves
 * - Responsive (2 cols mobile, 3 tablet, 5 desktop)
 * 
 * Para modificar en el futuro:
 * - Añadir más sectores al array 'sectores'
 * - Cambiar los iconos según necesites (importar de lucide-react)
 * - Ajustar el diseño de las tarjetas
 */
export const SectoresSection = () => {
  const sectores = [
    {
      icon: Utensils,
      name: 'Restaurantes',
      description: 'Especialistas en gastronomía',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Scissors,
      name: 'Peluquerías',
      description: 'Salones de belleza',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Stethoscope,
      name: 'Clínicas',
      description: 'Centros de salud',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      name: 'Centros de estética',
      description: 'Belleza y bienestar',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Dumbbell,
      name: 'Gimnasios',
      description: 'Centros fitness',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <Section background="gradient" id="sectores">
      <div className="text-center mb-16 animate-fade-in">
        <span className="inline-block bg-white/90 backdrop-blur-sm text-primary-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6 shadow-md">
          🏢 Sectores con los que trabajamos
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Especialistas en negocios locales
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
          En <span className="font-bold text-primary-600">SherfandTrade</span> ayudamos a diferentes tipos de negocios 
          a conseguir más clientes con presencia digital profesional
        </p>
      </div>

      {/* Grid de sectores */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {sectores.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-secondary-100 text-center"
            >
              {/* Icono con gradiente */}
              <div className={`w-16 h-16 bg-gradient-to-br ${sector.color} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <Icon size={32} className="text-white" />
              </div>

              {/* Nombre del sector */}
              <h3 className="text-lg font-bold text-secondary-900 mb-2">
                {sector.name}
              </h3>

              {/* Descripción */}
              <p className="text-sm text-secondary-600">
                {sector.description}
              </p>

              {/* Línea decorativa en hover */}
              <div className={`mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r ${sector.color} transition-all duration-500 rounded-full mx-auto`}></div>
            </div>
          );
        })}
      </div>

      {/* Nota adicional */}
      <div className="text-center mt-12 animate-fade-in">
        <p className="text-secondary-600 text-sm">
          💡 ¿Tu negocio no está en la lista?{' '}
          <button
            onClick={() => {
              const phone = '34660666706';
              const message = 'Hola! Quiero saber si SherfandTrade puede ayudar a mi negocio';
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="text-primary-600 font-semibold hover:text-primary-700 underline"
          >
            Consúltanos
          </button>
        </p>
      </div>
    </Section>
  );
};
