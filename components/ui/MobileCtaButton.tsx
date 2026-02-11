'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * MobileCtaButton - Botón CTA fijo en la parte inferior para móviles
 * 
 * Características:
 * - Fijo en la parte inferior de la pantalla
 * - Solo visible en dispositivos móviles (hidden en md)
 * - Diseño sticky que permite scroll
 * - Click to WhatsApp para conversión rápida
 * - Animación suave de entrada
 */
export const MobileCtaButton = () => {
  const handleClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero conseguir mi web + fotos profesionales';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        onClick={handleClick}
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-6 rounded-lg shadow-xl flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-2xl pointer-events-auto active:scale-95"
        aria-label="Conseguir web y fotos ahora"
      >
        <span>Consigue web + fotos ahora</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};
