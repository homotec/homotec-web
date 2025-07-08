'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // success, error, loading
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('Enviando...');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Hubo un problema al enviar el mensaje.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Hubo un problema al conectar con el servidor.');
    }
  };

  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Envíanos un Mensaje</h2>
      <form
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="Tu nombre y apellidos"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="tu.email@ejemplo.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono <span className="text-gray-500">(Opcional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="Tu número de teléfono"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="Cuéntanos más sobre tu proyecto o tus dudas..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
            {status !== 'loading' && (
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            )}
          </button>
        </div>
        {status && (
          <div className={`mt-4 text-center p-3 rounded-lg ${
              status === 'success' ? 'bg-green-100 text-green-800' : ''
            } ${
              status === 'error' ? 'bg-red-100 text-red-800' : ''
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm; 