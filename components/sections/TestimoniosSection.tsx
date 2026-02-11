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
      business: 'Restaurante La Terraza del Mar',
      businessType: 'Restaurante',
      location: 'Barcelona',
      rating: 5,
      result: '+40% reservas en 2 meses',
      text: 'En solo 2 semanas teníamos nuestra web funcionando. Las fotos profesionales son espectaculares y las reservas han aumentado un 40%. Totalmente recomendable.',
      image: 'https://ui-avatars.com/api/?name=Maria+Lopez&background=0284c7&color=fff&size=128',
    },
    {
      name: 'Carlos Ruiz',
      business: 'Asador Don Carlos',
      businessType: 'Asador',
      location: 'Madrid',
      rating: 5,
      result: '3x más visibilidad en Google',
      text: 'Mejor inversión que he hecho para mi restaurante. Ahora aparezco en Google y los clientes me encuentran fácilmente. El proceso fue súper fácil y rápido.',
      image: 'https://ui-avatars.com/api/?name=Carlos+Ruiz&background=0284c7&color=fff&size=128',
    },
    {
      name: 'Laura Martínez',
      business: 'Tapas & Co',
      businessType: 'Tapería',
      location: 'Valencia',
      rating: 5,
      result: '+50% consultas online',
      text: 'Me encanta lo fácil que es actualizar el menú. Las fotos quedaron increíbles y los clientes siempre comentan lo profesional que se ve todo. Altamente profesional.',
      image: 'https://ui-avatars.com/api/?name=Laura+Martinez&background=0284c7&color=fff&size=128',
    },
  ];

  return (
    <Section background="white" id="testimonios" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
          Casos de éxito reales
        </h2>
        <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
          Negocios locales que ya están consiguiendo resultados con Sherfand Trade
        </p>
      </div>

      {/* Grid de testimonios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 border border-secondary-200 hover:border-primary-600 hover:shadow-lg transition-all duration-200"
          >
            {/* Rating con estrellas */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonio.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Resultado destacado */}
            <div className="mb-4 inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded text-sm font-semibold">
              {testimonio.result}
            </div>

            {/* Testimonio text */}
            <p className="text-secondary-700 leading-relaxed mb-6 text-sm">
              &ldquo;{testimonio.text}&rdquo;
            </p>

            {/* Author info con foto real */}
            <div className="flex items-center gap-3 pt-4 border-t border-secondary-200">
              <img 
                src={testimonio.image} 
                alt={testimonio.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold text-secondary-900 text-sm">{testimonio.name}</p>
                <p className="text-xs text-secondary-600">{testimonio.businessType} · {testimonio.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social proof adicional */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center gap-6 bg-secondary-50 rounded-lg px-8 py-4 border border-secondary-200">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-secondary-900">4.9</span>
            <Star size={20} className="text-yellow-500 fill-yellow-500" />
          </div>
          <div className="h-8 w-px bg-secondary-300"></div>
          <p className="text-sm text-secondary-700 font-medium">
            Más de 50 negocios satisfechos
          </p>
        </div>
      </div>
    </Section>
  );
};
