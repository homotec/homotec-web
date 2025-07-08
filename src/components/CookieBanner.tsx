"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-300 mb-4 md:mb-0">
          Utilizamos cookies técnicas para asegurar el funcionamiento de la web. No utilizamos cookies de análisis o publicitarias. Para más información, consulta nuestra{' '}
          <Link href="/politica-de-cookies" className="font-bold text-cyan-400 hover:underline">
            Política de Cookies
          </Link>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 flex-shrink-0"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner; 