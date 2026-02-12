'use client';

import React from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

/**
 * Footer - Pie de página con información de contacto y legales
 * 
 * Características:
 * - Branding "SherfandTrade" destacado
 * - Diseño minimalista y limpio
 * - Información de contacto (email y teléfono)
 * - Enlaces a redes sociales con iconos
 * - Enlaces legales (Aviso Legal, Privacidad, Cookies)
 * - Responsive y optimizado para móvil
 * 
 * Para modificar en el futuro:
 * - Actualizar la información de contacto (email, teléfono)
 * - Añadir o quitar redes sociales según necesites
 * - Modificar los enlaces legales si tienes páginas específicas
 * - Cambiar el copy de la descripción de marca
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = 'mailto:sherfandtrade@gmail.com';
  };

  const handleWhatsAppClick = () => {
    const phone = '694278962';
    const message = 'Hola! Me gustaría obtener más información sobre Sherfand Trade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          
          {/* Branding y descripción */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white tracking-wider">
                SHERFAND TRADE
              </h3>
              <p className="text-xs text-secondary-400 tracking-widest mt-1">
                PROFESSIONAL SERVICES
              </p>
            </div>
            <p className="text-secondary-300 leading-relaxed text-sm max-w-xs font-medium mb-4">
              Sherfand Trade — Webs y fotografía profesional para negocios locales.
            </p>
            <p className="text-secondary-400 leading-relaxed text-sm max-w-xs">
              Especialistas en soluciones digitales para restaurantes y comercios físicos.
            </p>
            
            {/* Redes sociales */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com/sherfandtrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary-800 hover:bg-secondary-700 rounded flex items-center justify-center transition-colors duration-200"
                aria-label="Visitanos en Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com/sherfandtrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary-800 hover:bg-secondary-700 rounded flex items-center justify-center transition-colors duration-200"
                aria-label="Visitanos en Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/company/sherfandtrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary-800 hover:bg-secondary-700 rounded flex items-center justify-center transition-colors duration-200"
                aria-label="Visitanos en LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-base font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 text-secondary-400 hover:text-white transition-colors w-full text-left"
                  aria-label="Enviar email a sherfandtrade@gmail.com"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  <span>sherfandtrade@gmail.com</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-2 text-secondary-400 hover:text-white transition-colors w-full text-left"
                  aria-label="Llamar al +34 660 666 706"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  <span>+34 660 666 706</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Enlaces de navegación */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#beneficios"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Cómo funciona
                </a>
              </li>
              <li>
                <a
                  href="#ejemplos"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Ejemplos
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Testimonios
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior - Copyright y legales */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
            <div className="text-center md:text-left">
              <p className="font-medium">
                © {currentYear} Sherfand Trade S.L. Todos los derechos reservados.
              </p>
              <p className="text-xs text-secondary-500 mt-1">
                sherfandtrade@gmail.com · Barcelona, España
              </p>
            </div>
            
            {/* Enlaces legales */}
            <div className="flex gap-6 flex-wrap justify-center">
              <a
                href="#aviso-legal"
                className="hover:text-primary-400 transition-colors"
              >
                Aviso Legal
              </a>
              <a
                href="#politica-privacidad"
                className="hover:text-primary-400 transition-colors"
              >
                Política de Privacidad
              </a>
              <a
                href="#cookies"
                className="hover:text-primary-400 transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
