import React from 'react';
import { Star, Quote, TrendingUp, Shield } from 'lucide-react';
import { Section } from '../ui/Section';

export const TestimoniosSection = () => {
  const testimonios = [
    {
      name: 'María García',
      restaurant: 'La Terraza del Mar',
      location: 'Barcelona',
      rating: 5,
      text: 'En 2 semanas teníamos el doble de reservas. Las fotos profesionales marcaron la diferencia. Ahora los clientes nos llaman directamente desde Google.',
      image: '👩‍🍳',
      resultado: '+120% reservas',
      tiempo: 'En 3 semanas',
    },
    {
      name: 'Carlos Ruiz',
      restaurant: 'Asador Don Carlos',
      location: 'Madrid',
      rating: 5,
      text: 'Invertí 349€ y en el primer mes recuperé la inversión. Ahora aparezco primero cuando buscan "asador en Madrid". Increíble el cambio.',
      image: '👨‍🍳',
      resultado: 'ROI 300%',
      tiempo: 'Primer mes',
    },
    {
      name: 'Laura Martínez',
      restaurant: 'Tapas & Co',
      location: 'Valencia',
      rating: 5,
      text: 'Lo mejor fue lo fácil que fue todo. En una semana tenía mi web funcionando. Las reservas online me han cambiado el negocio completamente.',
      image: '👩‍💼',
      resultado: '+85% reservas',
      tiempo: 'En 1 mes',
    },
  ];

  const stats = [
    { value: '4.9/5', label: 'Valoración media', icon: '⭐' },
    { value: '+50', label: 'Restaurantes activos', icon: '🍽️' },
    { value: '+40%', label: 'Aumento reservas', icon: '📈' },
    { value: '7 días', label: 'Tiempo de entrega', icon: '⚡' },
  ];

  return (
    <Section background="gradient" id="testimonios">
      <div className="text-center mb-12 md:mb-16">
        <span className="inline-block bg-white/80 backdrop-blur-sm text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
          💬 Casos de éxito reales
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Resultados que hablan por sí solos
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Restaurantes como el tuyo que ya están recibiendo más reservas
        </p>
      </div>

      {/* Estadísticas destacadas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-primary-600 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-secondary-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative transform hover:-translate-y-2"
          >
            <Quote
              size={40}
              className="text-primary-200 absolute top-4 right-4 opacity-50"
            />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonio.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Resultados destacados */}
            <div className="bg-green-50 rounded-lg p-3 mb-4 border border-green-200">
              <div className="flex items-center gap-2 justify-between">
                <div>
                  <div className="text-sm text-green-800 font-semibold">
                    {testimonio.resultado}
                  </div>
                  <div className="text-xs text-green-600">
                    {testimonio.tiempo}
                  </div>
                </div>
                <TrendingUp className="text-green-600" size={24} />
              </div>
            </div>

            {/* Testimonio */}
            <p className="text-secondary-700 leading-relaxed mb-6 relative z-10">
              &ldquo;{testimonio.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-secondary-100">
              <div className="text-4xl">{testimonio.image}</div>
              <div>
                <p className="font-bold text-secondary-900">{testimonio.name}</p>
                <p className="text-sm text-secondary-600">{testimonio.restaurant}</p>
                <p className="text-xs text-secondary-500">{testimonio.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Badge de confianza */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
          <Shield className="text-green-500" size={20} />
          <span className="text-sm font-semibold text-secondary-700">
            Garantía de satisfacción 100% · Pago seguro
          </span>
        </div>
      </div>
    </Section>
  );
};

  return (
    <Section background="white" id="testimonios">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
          Restaurantes reales que ya están viendo resultados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
          >
            <Quote
              size={48}
              className="text-primary-200 absolute top-4 right-4 opacity-50"
            />

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonio.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Testimonio */}
            <p className="text-secondary-700 leading-relaxed mb-6 relative z-10">
              &ldquo;{testimonio.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="text-4xl">{testimonio.image}</div>
              <div>
                <p className="font-bold text-secondary-900">{testimonio.name}</p>
                <p className="text-sm text-secondary-600">{testimonio.restaurant}</p>
                <p className="text-xs text-secondary-500">{testimonio.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
