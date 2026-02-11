'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const CTASection = () => {
  const handleContactClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero más información sobre RestoWeb Pro';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Section background="gradient">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24" />

        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Clock size={18} />
            <span className="text-sm font-semibold">Oferta limitada - Solo 5 cupos este mes</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            ¿Listo para llevar tu restaurante al siguiente nivel?
          </h2>

          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Únete a los restaurantes que ya están recibiendo más reservas y destacando en su zona. 
            <span className="font-semibold"> Sin comisiones ocultas. Sin pagos mensuales.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button
              size="lg"
              className="bg-white text-primary-600 hover:bg-secondary-50 w-full sm:w-auto shadow-xl"
              onClick={handleContactClick}
            >
              Solicitar mi web ahora <ArrowRight size={20} />
            </Button>
          </div>

          <p className="text-sm text-white/80">
            ✓ Respuesta en menos de 24 horas &nbsp; | &nbsp; ✓ Sin compromiso &nbsp; | &nbsp; ✓ Consulta gratis
          </p>
        </div>
      </div>
    </Section>
  );
};
