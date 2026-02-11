'use client';

import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export const ContactoSection = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    restaurante: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Enviar a WhatsApp
    const phone = '34660666706';
    const message = `Hola! Soy ${formData.nombre} del restaurante ${formData.restaurante}. Mi teléfono es ${formData.telefono}. Me interesa RestoWeb Pro.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsAppDirect = () => {
    const phone = '34660666706';
    const message = 'Hola! Quiero información sobre RestoWeb Pro';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <Section background="white" id="contacto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            📞 Hablemos de tu restaurante
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
            Solicita tu consulta gratuita
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
            Te llamamos en menos de 24 horas para entender tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulario */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              Déjanos tus datos
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-secondary-700 mb-2">
                  Tu nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ej: María García"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-secondary-700 mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ej: 666 123 456"
                />
              </div>

              <div>
                <label htmlFor="restaurante" className="block text-sm font-semibold text-secondary-700 mb-2">
                  Nombre de tu restaurante *
                </label>
                <input
                  type="text"
                  id="restaurante"
                  name="restaurante"
                  required
                  value={formData.restaurante}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Ej: Restaurante La Terraza"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full mt-6"
              >
                {submitted ? '✅ ¡Enviado!' : 'Solicitar consulta gratuita'}
              </Button>

              <p className="text-xs text-center text-secondary-500 mt-3">
                Al enviar aceptas que te contactemos. Sin spam, prometido.
              </p>
            </form>
          </div>

          {/* Contacto Directo */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                O contáctanos directamente
              </h3>

              <div className="space-y-4">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp directo</span>
                </button>

                <a
                  href="tel:+34660666706"
                  className="w-full flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone size={24} />
                  <span>+34 660 666 706</span>
                </a>

                <a
                  href="mailto:info@restowebpro.com"
                  className="w-full flex items-center justify-center gap-3 bg-secondary-800 hover:bg-secondary-900 text-white px-6 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  <Mail size={24} />
                  <span>Email</span>
                </a>
              </div>
            </div>

            {/* Beneficios del contacto */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-200">
              <h4 className="font-bold text-secondary-900 mb-4">
                ¿Qué pasa después de contactar?
              </h4>
              <ul className="space-y-3 text-sm text-secondary-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">1.</span>
                  <span>Te llamamos en menos de 24h (normalmente en 2-3 horas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">2.</span>
                  <span>Hablamos 15 min sobre tus necesidades y objetivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">3.</span>
                  <span>Te proponemos la mejor solución para tu restaurante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">4.</span>
                  <span>Si te convence, empezamos en 24-48 horas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
