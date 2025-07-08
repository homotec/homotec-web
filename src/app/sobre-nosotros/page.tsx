import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Empresa de Servicios Informáticos en Mallorca',
  description: 'Conoce la historia de Homotec, tu empresa de servicios informáticos en Mallorca. Desde 2004 ofreciendo soluciones tecnológicas y ahora, como Agente Digitalizador.',
};

const AboutUsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" style={{ backgroundSize: 'cover' }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Innovación y Experiencia al{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Servicio de tu Empresa
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Somos un equipo de expertos en tecnología y negocios, apasionados por transformar 
            empresas a través de la Inteligencia Artificial y la digitalización.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/hero-ai-illustration.jpg"
                alt="Concepto visual de la historia y misión de Homotec"
                fill
                className="rounded-2xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestra Historia y Misión</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fundada en 2004 como <strong>Homotec Servicios Informáticos SLU</strong>, y con un fuerte arraigo en <strong>Mallorca</strong>, 
                nuestra trayectoria es un testimonio de experiencia, resiliencia y una profunda adaptación a los cambios tecnológicos. 
                Esta base nos permite democratizar el acceso a la Inteligencia Artificial para empresas de todos los tamaños. 
                Creemos que la tecnología es la clave para desbloquear el potencial humano, automatizar lo tedioso 
                y permitir que las personas se centren en lo que realmente importa: la creatividad y la estrategia.
              </p>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-xl text-blue-900 mb-2">Innovación Constante</h3>
                  <p className="text-gray-700">
                    Investigamos y aplicamos las últimas tecnologías para ofrecer soluciones de vanguardia.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                  <h3 className="font-bold text-xl text-green-900 mb-2">Enfoque en el Cliente</h3>
                  <p className="text-gray-700">
                    Tu éxito es nuestro éxito. Trabajamos como un socio estratégico para alcanzar tus objetivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Estos principios guían cada una de nuestras acciones y decisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="text-center group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Integridad</h3>
              <p className="text-gray-600">Actuamos con honestidad y transparencia en cada interacción.</p>
            </div>

            {/* Value 2 */}
            <div className="text-center group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colaboración</h3>
              <p className="text-gray-600">Fomentamos el trabajo en equipo, tanto interno como con nuestros clientes.</p>
            </div>

            {/* Value 3 */}
            <div className="text-center group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M4 17v4m-1-2h4m1-4a8 8 0 1116 0 8 8 0 01-16 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excelencia</h3>
              <p className="text-gray-600">Buscamos la máxima calidad en todo lo que hacemos, superando expectativas.</p>
            </div>

            {/* Value 4 */}
            <div className="text-center group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pasión por la Tecnología</h3>
              <p className="text-gray-600">Nos encanta la tecnología y su poder para resolver problemas complejos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para Unirte a la Revolución de la IA?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Hablemos de cómo podemos transformar tu negocio juntos.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Contacta con Nosotros
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 