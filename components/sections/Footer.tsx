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
    window.location.href = 'mailto:info@sherfandtrade.com';
  };

  const handleWhatsAppClick = () => {
    const phone = '34660666706';
    const message = 'Hola! Me gustaría obtener más información sobre SherfandTrade';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          
          {/* Branding y descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
              SherfandTrade
            </h3>
            <p className="text-secondary-300 leading-relaxed mb-6">
              SherfandTrade — Webs y fotografía profesional para negocios locales. Especialistas en restaurantes.
            </p>
            
            {/* Redes sociales - iconos minimalistas */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/sherfandtrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Visitanos en Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/sherfandtrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Visitanos en Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com/company/sherfandtrade"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Visitanos en LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors group w-full text-left"
                  aria-label="Enviar email a info@sherfandtrade.com"
                >
                  <Mail
                    size={20}
                    className="text-primary-500 group-hover:text-primary-400 flex-shrink-0"
                  />
                  <span>info@sherfandtrade.com</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors group w-full text-left"
                  aria-label="Llamar al +34 660 666 706"
                >
                  <Phone
                    size={20}
                    className="text-primary-500 group-hover:text-primary-400 flex-shrink-0"
                  />
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
            <p className="text-center md:text-left">
              © {currentYear} SherfandTrade. Todos los derechos reservados.
            </p>
            
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
