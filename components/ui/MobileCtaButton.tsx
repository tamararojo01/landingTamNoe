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
    const phone = '694278962';
    const message = 'Hola! Quiero una consulta gratis sobre mi web profesional';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <button
        onClick={handleClick}
        className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-6 rounded-xl shadow-2xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-3xl pointer-events-auto active:scale-95"
        aria-label="Conseguir consulta gratis"
      >
        <span>Consulta gratis →</span>
      </button>
    </div>
  );
};
