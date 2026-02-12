'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';

/**
 * Header - Navegación optimizada para conversión
 * 
 * Características:
 * - Header simplificado: solo logo + CTA
 * - Foco total en la acción principal
 * - Sticky con efecto al scroll
 * - Sin menú de navegación para maximizar conversión
 */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero una consulta gratis sobre mi web profesional';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand - Simplificado */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center group"
          >
            <span className="text-xl md:text-2xl font-bold text-secondary-900 tracking-wide">
              SHERFAND TRADE
            </span>
          </button>

          {/* CTA Destacado - Foco principal */}
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="px-4 md:px-8 py-2 md:py-3 text-sm md:text-base font-bold bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all"
          >
            <span className="hidden md:inline">Consulta gratis</span>
            <span className="md:hidden">Consulta</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
