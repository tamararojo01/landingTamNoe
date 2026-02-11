import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Section } from '../ui/Section';

export const TestimoniosSection = () => {
  const testimonios = [
    {
      name: 'María García',
      restaurant: 'La Terraza del Mar',
      location: 'Barcelona',
      rating: 5,
      text: 'Increíble el cambio. Antes nos costaba llenar el local entre semana. Ahora recibimos reservas todos los días gracias a la web y las fotos profesionales. Inversión totalmente recuperada.',
      image: '👩‍🍳',
    },
    {
      name: 'Carlos Ruiz',
      restaurant: 'Asador Don Carlos',
      location: 'Madrid',
      rating: 5,
      text: 'El servicio fue impecable. En una semana teníamos la web lista y las fotos quedaron espectaculares. Nuestros clientes nos felicitan por la presentación profesional.',
      image: '👨‍🍳',
    },
    {
      name: 'Laura Martínez',
      restaurant: 'Tapas & Co',
      location: 'Valencia',
      rating: 5,
      text: 'Lo mejor fue lo fácil que fue todo. Ellos se encargaron de todo mientras yo seguía con mi restaurante. Ahora aparezco en Google y recibo muchas más consultas.',
      image: '👩‍💼',
    },
  ];

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
              "{testimonio.text}"
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
