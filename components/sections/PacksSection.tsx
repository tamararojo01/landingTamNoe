'use client';

import React from 'react';
import { Check, X, Shield, MessageCircle, Users } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const PacksSection = () => {
  const handleContactClick = (packName: string) => {
    const phone = '34660666706';
    const message = `Hola! Quiero una consulta gratis sobre el ${packName}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const features = [
    { name: 'Diseño web profesional', basico: true, premium: true },
    { name: 'Web responsive (móvil, tablet, PC)', basico: true, premium: true },
    { name: 'Sesión de fotografía profesional', basico: '1 hora (15 fotos)', premium: '2 horas (30 fotos)' },
    { name: 'Páginas incluidas', basico: '1 página', premium: 'Hasta 5 páginas' },
    { name: 'Catálogo de productos/servicios', basico: true, premium: true },
    { name: 'Formulario de contacto', basico: true, premium: true },
    { name: 'Integración WhatsApp y redes sociales', basico: true, premium: true },
    { name: 'Google Maps integrado', basico: true, premium: true },
    { name: 'SEO básico optimizado', basico: true, premium: false },
    { name: 'SEO avanzado y local', basico: false, premium: true },
    { name: 'Sistema de reservas/citas online', basico: false, premium: true },
    { name: 'Blog o sección de noticias', basico: false, premium: true },
    { name: 'Galería de imágenes profesional', basico: false, premium: true },
    { name: 'Hosting profesional incluido', basico: '1 año', premium: '1 año' },
    { name: 'Certificado SSL de seguridad', basico: true, premium: true },
    { name: 'Soporte técnico', basico: '1 mes', premium: '3 meses' },
    { name: 'Tiempo de entrega', basico: '7 días', premium: '10 días' },
  ];

  return (
    <Section background="white" id="packs" className="py-20 md:py-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
          Elige tu pack perfecto
        </h2>
        <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
          Comparativa completa para que elijas la opción que mejor se adapta a tu negocio
        </p>
      </div>

      {/* Tabla comparativa premium */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-secondary-100">
          {/* Header de la tabla */}
          <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-secondary-900 to-secondary-800 p-6 md:p-8">
            <div className="text-white font-bold text-sm md:text-base">Características</div>
            <div className="text-center">
              <div className="text-white font-bold text-xl md:text-2xl mb-2">Básico</div>
              <div className="text-white/80 text-sm">Ideal para empezar</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-4 -m-2">
              <div className="text-white font-bold text-xl md:text-2xl mb-2">Premium</div>
              <div className="text-white/90 text-sm font-semibold">Más completo</div>
            </div>
          </div>

          {/* Precio */}
          <div className="grid grid-cols-3 gap-4 p-6 md:p-8 bg-secondary-50 border-b-2 border-secondary-200">
            <div className="flex items-center">
              <span className="font-bold text-secondary-900 text-base md:text-lg">Precio</span>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-secondary-900">399€</div>
              <div className="text-sm text-secondary-600 mt-1">Pago único</div>
            </div>
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-4 -m-2">
              <div className="text-4xl font-black text-primary-600">249€</div>
              <div className="text-sm text-primary-700 mt-1 font-semibold">¡Oferta lanzamiento!</div>
            </div>
          </div>

          {/* Features */}
          <div className="divide-y divide-secondary-200">
            {features.map((feature, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 md:p-6 hover:bg-secondary-50 transition-colors">
                <div className="flex items-center">
                  <span className="text-secondary-700 text-sm md:text-base">{feature.name}</span>
                </div>
                <div className="flex items-center justify-center">
                  {typeof feature.basico === 'boolean' ? (
                    feature.basico ? (
                      <Check className="text-green-600" size={24} />
                    ) : (
                      <X className="text-secondary-300" size={24} />
                    )
                  ) : (
                    <span className="text-secondary-900 font-semibold text-sm text-center">{feature.basico}</span>
                  )}
                </div>
                <div className="flex items-center justify-center">
                  {typeof feature.premium === 'boolean' ? (
                    feature.premium ? (
                      <Check className="text-primary-600" size={24} />
                    ) : (
                      <X className="text-secondary-300" size={24} />
                    )
                  ) : (
                    <span className="text-primary-700 font-bold text-sm text-center">{feature.premium}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="grid grid-cols-3 gap-4 p-6 md:p-8 bg-gradient-to-r from-secondary-50 to-white">
            <div></div>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="lg"
                className="w-full font-bold hover:bg-secondary-900 hover:text-white hover:border-secondary-900"
                onClick={() => handleContactClick('Pack Básico')}
              >
                Elegir Básico
              </Button>
              <p className="text-xs text-secondary-600 text-center">Perfecto para comenzar</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full font-bold bg-gradient-to-r from-primary-600 to-primary-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => handleContactClick('Pack Premium')}
              >
                Elegir Premium
              </Button>
              <p className="text-xs text-primary-700 text-center font-semibold">+150€ de descuento</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA principal con urgencia */}
      <div className="text-center mb-16">
        <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-bold mb-6 animate-pulse shadow-lg">
          🔥 Solo 5 webs a precio de lanzamiento este mes
        </div>
        <div>
          <Button
            variant="primary"
            size="lg"
            className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all"
            onClick={() => handleContactClick('cualquier pack')}
          >
            Elige tu pack → Consulta gratis
          </Button>
        </div>
      </div>

      {/* Garantías de confianza */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary-900 mb-8">
          Garantías que te protegen
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 text-center hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="text-white" size={32} />
            </div>
            <h4 className="font-bold text-secondary-900 text-lg mb-2">Devolución de dinero</h4>
            <p className="text-secondary-700 text-sm leading-relaxed">
              Si no estás satisfecho con tu web, te devolvemos el 100% de tu inversión
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 text-center hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="text-white" size={32} />
            </div>
            <h4 className="font-bold text-secondary-900 text-lg mb-2">Soporte rápido por WhatsApp</h4>
            <p className="text-secondary-700 text-sm leading-relaxed">
              Respuesta en menos de 24 horas. Atención personalizada cuando la necesites
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-200 text-center hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="text-white" size={32} />
            </div>
            <h4 className="font-bold text-secondary-900 text-lg mb-2">+50 negocios confían</h4>
            <p className="text-secondary-700 text-sm leading-relaxed">
              Más de 50 negocios locales ya están creciendo con nuestras webs profesionales
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
