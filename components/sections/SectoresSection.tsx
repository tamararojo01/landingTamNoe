'use client';

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
    },
    {
      icon: Scissors,
      name: 'Peluquerías',
    },
    {
      icon: Stethoscope,
      name: 'Clínicas',
    },
    {
      icon: Sparkles,
      name: 'Centros de estética',
    },
    {
      icon: Dumbbell,
      name: 'Gimnasios',
    },
  ];

  return (
    <Section background="white" id="sectores" className="py-16 md:py-20 bg-secondary-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
          Trabajamos con
        </h2>
        <p className="text-base text-secondary-600">
          Restaurantes · Peluquerías · Clínicas · Centros de estética · Gimnasios
        </p>
      </div>

      {/* Grid simple de sectores */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {sectores.map((sector, index) => {
          const Icon = sector.icon;
          return (
            <div
              key={index}
              className="inline-flex items-center gap-3 bg-white rounded-lg px-6 py-3 border border-secondary-200 hover:border-primary-600 transition-all duration-200"
            >
              <Icon size={20} className="text-secondary-600" />
              <span className="text-secondary-900 font-medium">{sector.name}</span>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
