'use client';

import React from 'react';
import { Mail, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@restowebpro.com';
  };

  const handleWhatsAppClick = () => {
    const phone = '34600000000';
    const message = 'Hola! Me gustaría obtener más información';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4">RestoWeb Pro</h3>
            <p className="text-secondary-300 leading-relaxed mb-4">
              Webs profesionales + fotos de calidad para restaurantes que quieren destacar y crecer.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors group"
                >
                  <Mail
                    size={20}
                    className="text-primary-500 group-hover:text-primary-400"
                  />
                  info@restowebpro.com
                </button>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-3 text-secondary-300 hover:text-primary-400 transition-colors group"
                >
                  <Phone
                    size={20}
                    className="text-primary-500 group-hover:text-primary-400"
                  />
                  +34 600 000 000
                </button>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="text-lg font-bold mb-4">Información</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#ofrecemos"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Qué ofrecemos
                </a>
              </li>
              <li>
                <a
                  href="#packs"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                >
                  Precios
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

        {/* Bottom bar */}
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-400">
            <p>
              © {currentYear} RestoWeb Pro. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href="#aviso-legal"
                className="hover:text-primary-400 transition-colors"
              >
                Aviso Legal
              </a>
              <a
                href="#privacidad"
                className="hover:text-primary-400 transition-colors"
              >
                Privacidad
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
