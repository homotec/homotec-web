'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/images/logo3.png"
                alt="Logo de Homotec"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                Inicio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/soluciones-ia" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                Soluciones IA
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/odoo" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                Odoo
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/#kitdigital" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                Kit Digital
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/sobre-nosotros" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
              >
                Sobre Nosotros
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link 
                href="/contacto" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Contacto
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
            <nav className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
              <Link 
                href="/" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/soluciones-ia" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Soluciones IA
              </Link>
              <Link 
                href="/odoo" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Odoo
              </Link>
              <Link 
                href="/#kitdigital" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Kit Digital
              </Link>
              <Link 
                href="/sobre-nosotros" 
                className="px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link 
                href="/contacto" 
                className="mx-4 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      </header>
      {pathname === '/#kitdigital' && (
        <div className="bg-white py-10 w-full border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <Image 
                src="/images/kit-digital/logo-kit-digital.svg" 
                alt="Logos del programa Kit Digital y fondos Europeos"
                width={900}
                height={108}
                className="w-full max-w-5xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header; 