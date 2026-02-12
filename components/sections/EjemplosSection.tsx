'use client';

import React, { useState } from 'react';
import { ExternalLink, UtensilsCrossed, Scissors, Sparkles, Stethoscope, Fuel } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

/**
 * Ejemplos Section - Demos por Sector con Pestañas
 * 
 * Características:
 * - 5 sectores con pestañas interactivas
 * - 2 demos por sector (Básico y Premium)
 * - Diseño limpio y profesional
 * - Copy persuasivo adaptado a cada sector
 */
export const EjemplosSection = () => {
  const [activeTab, setActiveTab] = useState('restaurantes');

  const sectores = [
    {
      id: 'restaurantes',
      name: 'Restaurantes',
      icon: UtensilsCrossed,
      demos: [
        {
          name: 'Demo Restaurante',
          type: 'Básico',
          price: '249€',
          description: 'Web de una página con carta digital, fotos de platos y botón WhatsApp integrado.',
          features: ['Carta digital', 'Fotos profesionales', 'Botón de reservas'],
          gradient: 'from-orange-50 to-orange-100',
          color: 'orange',
          demoUrl: 'https://github.com/tamararojo01/demoRestaurante',
        },
        {
          name: 'Restaurante Premium',
          type: 'Premium',
          price: '399€',
          description: 'Web completa con galería, sistema de reservas online y SEO optimizado.',
          features: ['Web multipágina', 'Reservas online', 'Blog de recetas', 'SEO avanzado'],
          gradient: 'from-red-50 to-red-100',
          color: 'red',
          demoUrl: 'https://demo-restaurante-premium.vercel.app/',
        },
      ],
    },
    {
      id: 'peluquerias',
      name: 'Peluquerías',
      icon: Scissors,
      demos: [
        {
          name: 'Salón Moderno',
          type: 'Básico',
          price: '249€',
          description: 'Web elegante con galería de cortes, servicios y contacto directo.',
          features: ['Galería de estilos', 'Lista de servicios', 'Horarios'],
          gradient: 'from-pink-50 to-pink-100',
          color: 'pink',
        },
        {
          name: 'Hair Studio Premium',
          type: 'Premium',
          price: '399€',
          description: 'Web con sistema de citas online, blog de tendencias y portfolio completo.',
          features: ['Reservas automáticas', 'Portfolio amplio', 'Blog de moda'],
          gradient: 'from-purple-50 to-purple-100',
          color: 'purple',
        },
      ],
    },
    {
      id: 'estetica',
      name: 'Centros de Estética',
      icon: Sparkles,
      demos: [
        {
          name: 'Centro Wellness',
          type: 'Básico',
          price: '249€',
          description: 'Web profesional con tratamientos, fotos del centro y formulario de contacto.',
          features: ['Catálogo de tratamientos', 'Fotos instalaciones', 'Contacto rápido'],
          gradient: 'from-teal-50 to-teal-100',
          color: 'teal',
        },
        {
          name: 'Spa Premium',
          type: 'Premium',
          price: '399€',
          description: 'Web completa con reservas de tratamientos, promociones y área de clientes.',
          features: ['Reservas online', 'Promociones activas', 'Área clientes', 'SEO local'],
          gradient: 'from-cyan-50 to-cyan-100',
          color: 'cyan',
        },
      ],
    },
    {
      id: 'clinicas',
      name: 'Clínicas',
      icon: Stethoscope,
      demos: [
        {
          name: 'Clínica Dental',
          type: 'Básico',
          price: '249€',
          description: 'Web profesional con servicios médicos, equipo profesional y citas.',
          features: ['Servicios médicos', 'Equipo profesional', 'Formulario citas'],
          gradient: 'from-blue-50 to-blue-100',
          color: 'blue',
        },
        {
          name: 'Centro Médico Premium',
          type: 'Premium',
          price: '399€',
          description: 'Web avanzada con reserva de citas online, blog médico y área pacientes.',
          features: ['Sistema de citas', 'Blog informativo', 'Portal pacientes', 'SEO médico'],
          gradient: 'from-indigo-50 to-indigo-100',
          color: 'indigo',
        },
      ],
    },
    {
      id: 'gasolineras',
      name: 'Gasolineras',
      icon: Fuel,
      demos: [
        {
          name: 'Estación de Servicio',
          type: 'Básico',
          price: '249€',
          description: 'Web con precios actualizados, servicios y ubicación con mapas.',
          features: ['Precios combustible', 'Servicios disponibles', 'Mapa ubicación'],
          gradient: 'from-green-50 to-green-100',
          color: 'green',
        },
        {
          name: 'Gasolinera Premium',
          type: 'Premium',
          price: '399€',
          description: 'Web completa con actualización de precios, tienda online y área clientes.',
          features: ['Actualización precios', 'Tienda online', 'Tarjeta fidelidad', 'App móvil'],
          gradient: 'from-lime-50 to-lime-100',
          color: 'lime',
        },
      ],
    },
  ];

  const activeSector = sectores.find(s => s.id === activeTab) || sectores[0];

  return (
    <Section background="white" id="ejemplos" className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Demos por sector
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          Mira cómo puede quedar tu negocio en línea, adaptado a tu sector
        </p>
      </div>

      {/* Pestañas de sectores */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
        {sectores.map((sector) => {
          const Icon = sector.icon;
          return (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                activeTab === sector.id
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg scale-105'
                  : 'bg-white border-2 border-secondary-200 text-secondary-700 hover:border-primary-400 hover:shadow-md'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm md:text-base">{sector.name}</span>
            </button>
          );
        })}
      </div>

      {/* Demos del sector activo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {activeSector.demos.map((demo, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${demo.gradient} rounded-2xl p-8 border-2 border-${demo.color}-200 shadow-lg hover:shadow-2xl transition-all duration-300`}
          >
            {/* Badge tipo */}
            <div className="flex items-center justify-between mb-6">
              <span className={`inline-block bg-gradient-to-r from-${demo.color}-500 to-${demo.color}-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md`}>
                {demo.type}
              </span>
              <span className="text-2xl font-black text-secondary-900">{demo.price}</span>
            </div>

            {/* Título */}
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              {demo.name}
            </h3>

            {/* Descripción */}
            <p className="text-secondary-700 mb-6 leading-relaxed">
              {demo.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-6">
              {demo.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-secondary-800">
                  <span className={`text-${demo.color}-600 font-bold`}>✓</span>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="space-y-3">
              {/* Botón Ver Demo (solo si hay demoUrl) */}
              {(demo as any).demoUrl && (
                <Button
                  variant="primary"
                  size="md"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold shadow-md"
                  onClick={() => window.open((demo as any).demoUrl, '_blank')}
                >
                  Ver demo en vivo <ExternalLink size={18} className="ml-2" />
                </Button>
              )}
              
              {/* Botón Solicitar */}
              <Button
                variant="outline"
                size="md"
                className={`w-full bg-white hover:bg-gradient-to-r hover:from-${demo.color}-500 hover:to-${demo.color}-600 hover:text-white hover:border-transparent transition-all font-bold`}
                onClick={() => {
                  const phone = '694278962';
                  const message = `Hola! Me interesa el pack ${demo.type} para ${activeSector.name}`;
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
              >
                Solicitar este diseño <ExternalLink size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Nota final */}
      <div className="text-center mt-12">
        <p className="text-secondary-600 text-base font-medium max-w-2xl mx-auto">
          💡 Todos los diseños incluyen fotografía profesional de tu negocio y contenido optimizado para Google
        </p>
      </div>
    </Section>
  );
};
