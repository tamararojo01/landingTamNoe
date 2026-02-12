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
      name: 'Ana Velasco',
      business: 'Salón Belleza Moderna',
      businessType: 'Peluquería',
      location: 'Madrid',
      rating: 5,
      result: '+65% reservas online',
      text: 'Desde que tenemos la web, las reservas se han disparado. Los clientes ven las fotos y quieren reservar al instante. La inversión se pagó sola en el primer mes.',
      image: 'https://ui-avatars.com/api/?name=Ana+Velasco&background=ec4899&color=fff&size=128&bold=true',
    },
    {
      name: 'Dr. Miguel Sánchez',
      business: 'Clínica Dental Sonrisa',
      businessType: 'Clínica Dental',
      location: 'Barcelona',
      rating: 5,
      result: '3x más pacientes nuevos',
      text: 'Profesionalismo absoluto. La web transmite confianza y mis pacientes me felicitan constantemente. Hemos triplicado las consultas de nuevos pacientes.',
      image: 'https://ui-avatars.com/api/?name=Miguel+Sanchez&background=3b82f6&color=fff&size=128&bold=true',
    },
    {
      name: 'Patricia Gómez',
      business: 'Centro Wellness Armonía',
      businessType: 'Centro de Estética',
      location: 'Valencia',
      rating: 5,
      result: '+80% ventas de tratamientos',
      text: 'Las fotos profesionales hacen que los tratamientos se vendan solos. Mis clientas reservan directamente desde la web. Increíble retorno de inversión.',
      image: 'https://ui-avatars.com/api/?name=Patricia+Gomez&background=14b8a6&color=fff&size=128&bold=true',
    },
  ];

  return (
    <Section background="gradient" id="testimonios" className="py-20 md:py-28">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Resultados reales de negocios como el tuyo
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          Descubre cómo otros negocios locales han multiplicado sus ventas con una web profesional
        </p>
      </div>

      {/* Grid de testimonios premium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-secondary-100 hover:border-primary-400 transform hover:-translate-y-1"
          >
            {/* Header con foto y rating */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <img 
                  src={testimonio.image} 
                  alt={testimonio.name}
                  className="w-16 h-16 rounded-full shadow-lg ring-4 ring-white"
                />
                <div>
                  <p className="font-bold text-secondary-900 text-lg">{testimonio.name}</p>
                  <p className="text-sm text-secondary-600 font-medium">{testimonio.businessType}</p>
                </div>
              </div>
            </div>

            {/* Rating con estrellas */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonio.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Resultado destacado premium */}
            <div className="mb-6">
              <div className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                {testimonio.result}
              </div>
            </div>

            {/* Testimonio text */}
            <p className="text-secondary-700 leading-relaxed mb-6 text-base italic">
              &ldquo;{testimonio.text}&rdquo;
            </p>

            {/* Business info */}
            <div className="pt-4 border-t border-secondary-200">
              <p className="text-sm font-semibold text-secondary-900">{testimonio.business}</p>
              <p className="text-xs text-secondary-500 mt-1">{testimonio.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social proof adicional premium */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-6 bg-white rounded-2xl px-10 py-6 border-2 border-primary-200 shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-black text-primary-600">4.9</span>
            <Star size={28} className="text-yellow-500 fill-yellow-500" />
          </div>
          <div className="h-12 w-px bg-secondary-300"></div>
          <div className="text-left">
            <p className="text-lg font-bold text-secondary-900">
              Más de 50 negocios creciendo
            </p>
            <p className="text-sm text-secondary-600">
              Valoración media de clientes satisfechos
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
