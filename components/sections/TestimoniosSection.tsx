import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Section } from '../ui/Section';

/**
 * Testimonios Section - Reseñas de clientes satisfechos
 * 
 * Características:
 * - 2-3 testimonios con nombre, foto (emoji) y reseña
 * - Diseño moderno con tarjetas y sombra suave
 * - Animación fade-in al aparecer
 * - Rating con estrellas visuales
 * 
 * Para modificar en el futuro:
 * - Actualizar los testimonios en el array con casos reales
 * - Añadir fotos reales en lugar de emojis
 * - Ajustar el número de testimonios según necesites (recomendado 2-4)
 */
export const TestimoniosSection = () => {
  const testimonios = [
    {
      name: 'María López',
      restaurant: 'La Terraza del Mar',
      location: 'Barcelona',
      rating: 5,
      text: 'En solo 2 semanas teníamos nuestra web funcionando. Las fotos profesionales son espectaculares y las reservas han aumentado un 40%. Totalmente recomendable.',
      image: '👩‍🍳',
    },
    {
      name: 'Carlos Ruiz',
      restaurant: 'Asador Don Carlos',
      location: 'Madrid',
      rating: 5,
      text: 'Mejor inversión que he hecho para mi restaurante. Ahora aparezco en Google y los clientes me encuentran fácilmente. El proceso fue súper fácil y rápido.',
      image: '👨‍🍳',
    },
    {
      name: 'Laura Martínez',
      restaurant: 'Tapas & Co',
      location: 'Valencia',
      rating: 5,
      text: 'Me encanta lo fácil que es actualizar el menú desde mi móvil. Las fotos quedaron increíbles y los clientes siempre comentan lo profesional que se ve todo.',
      image: '👩‍💼',
    },
  ];

  return (
    <Section background="white" id="testimonios">
      <div className="text-center mb-16 animate-fade-in">
        <span className="inline-block bg-primary-100 text-primary-700 px-5 py-2.5 rounded-full text-sm font-bold mb-6">
          💬 Testimonios
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
          Restaurantes reales que ya están viendo resultados con nuestra web y fotos profesionales
        </p>
      </div>

      {/* Grid de testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-secondary-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-secondary-100 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Quote icon */}
            <Quote
              size={40}
              className="text-primary-200 absolute opacity-30"
            />

            {/* Rating con estrellas */}
            <div className="flex gap-1 mb-4 relative z-10">
              {Array.from({ length: testimonio.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Testimonio text */}
            <p className="text-secondary-700 leading-relaxed mb-6 relative z-10">
              &ldquo;{testimonio.text}&rdquo;
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 pt-4 border-t border-secondary-200">
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

      {/* Social proof adicional */}
      <div className="text-center mt-12 animate-fade-in">
        <div className="inline-flex items-center gap-6 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-full px-8 py-4 shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-2xl">4.9</span>
            <Star size={20} className="text-yellow-500 fill-yellow-500" />
          </div>
          <div className="h-8 w-px bg-secondary-300"></div>
          <p className="text-sm text-secondary-700 font-medium">
            Más de 50 restaurantes satisfechos
          </p>
        </div>
      </div>
    </Section>
  );
};
