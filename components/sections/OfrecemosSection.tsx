import React from 'react';
import { Globe, Camera, MapPin, Smartphone, TrendingUp } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const OfrecemosSection = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web profesional responsive',
      description: 'Diseño moderno optimizado para móviles. Tu carta, horarios, ubicación y botón de reserva todo en un solo lugar.',
    },
    {
      icon: Camera,
      title: 'Sesión de fotos profesional',
      description: 'Fotógrafo profesional captura tus mejores platos y el ambiente de tu local. Imágenes que despiertan el apetito.',
    },
    {
      icon: MapPin,
      title: 'Google Maps integrado',
      description: 'Facilita que tus clientes te encuentren. Ubicación clara con mapa interactivo en tu web.',
    },
    {
      icon: Smartphone,
      title: 'Botón WhatsApp / Reservas',
      description: 'Conversión directa. Tus clientes pueden reservar mesa o consultar con un solo clic desde cualquier dispositivo.',
    },
    {
      icon: TrendingUp,
      title: 'SEO local básico',
      description: 'Optimización para que aparezcas en búsquedas de "restaurantes cerca de mí" y búsquedas locales de Google.',
    },
  ];

  return (
    <Section background="white" id="ofrecemos">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Todo lo que tu restaurante necesita
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Solución completa para que tu negocio destaque online y atraiga más clientes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
};
