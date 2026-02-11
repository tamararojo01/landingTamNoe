'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

/**
 * Header - Navegación principal de la landing page
 * 
 * Características:
 * - Logo/Branding "SherfandTrade" destacado
 * - Menú de navegación responsive
 * - CTA "Solicitar presupuesto" visible
 * - Sticky header con efecto al hacer scroll
 * - Menú móvil con hamburger menu
 * 
 * Para modificar en el futuro:
 * - Actualizar los enlaces de navegación según las secciones
 * - Cambiar el número de WhatsApp en el CTA
 * - Ajustar colores del header según el branding
 */
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero solicitar presupuesto para mi negocio';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Servicios', sectionId: 'beneficios' },
    { label: 'Cómo funciona', sectionId: 'como-funciona' },
    { label: 'Casos', sectionId: 'ejemplos' },
    { label: 'Contacto', sectionId: 'contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col group"
          >
            <span className="text-lg md:text-xl font-bold text-secondary-900 tracking-wider">
              SHERFAND TRADE
            </span>
            <span className="text-[9px] text-secondary-600 tracking-widest font-medium">
              PROFESSIONAL SERVICES
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-secondary-700' : 'text-secondary-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button
              size="md"
              onClick={handleCTAClick}
              className="bg-primary-600 hover:bg-primary-700 shadow-md"
            >
              Solicitar presupuesto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-secondary-900" />
            ) : (
              <Menu size={24} className="text-secondary-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-secondary-200 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollToSection(item.sectionId)}
                className="text-left py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              size="md"
              onClick={handleCTAClick}
              className="w-full bg-primary-600 hover:bg-primary-700"
            >
              Solicitar presupuesto
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
