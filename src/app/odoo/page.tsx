import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Soluciones Odoo | Homotec',
  description: 'Descubre cómo Odoo puede transformar tu negocio. Homotec es tu partner experto en la implementación, personalización y soporte de Odoo en Mallorca.',
};

const OdooPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" style={{ backgroundSize: 'cover' }}></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Transforma tu Gestión con{' '}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Odoo
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unifica todas las operaciones de tu negocio en una única plataforma potente, flexible y escalable.
          </p>
        </div>
      </section>

      {/* What is Odoo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/hero-ai-illustration.jpg" // Placeholder - consider a specific Odoo image
                alt="Diagrama conceptual de Odoo integrando diferentes áreas de negocio"
                fill
                className="rounded-2xl shadow-2xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Qué es Odoo?</h2>
              <p className="text-xl text-gray-600 mb-4 leading-relaxed">
                <strong>Odoo</strong> es un software de gestión empresarial (ERP) todo en uno que integra todas las áreas de tu negocio. Desde ventas y contabilidad hasta inventario y recursos humanos, Odoo centraliza tus operaciones, eliminando la necesidad de múltiples programas inconexos.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Su arquitectura modular te permite empezar con las aplicaciones que necesitas y añadir más a medida que tu empresa crece. Es la solución definitiva para simplificar la complejidad y potenciar la eficiencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Odoo helps Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Cómo Impulsa Odoo a tu Empresa?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Información Unificada</h3>
              <p className="text-gray-600">
                Odoo conecta ventas, contabilidad e inventario. Una venta actualiza la factura y el stock automáticamente, eliminando datos duplicados y errores manuales.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automatización Inteligente</h3>
              <p className="text-gray-600">
                Libera a tu equipo de tareas repetitivas. Odoo automatiza flujos de trabajo como el envío de facturas o el seguimiento de proyectos, aumentando la productividad.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión de Negocio 360°</h3>
              <p className="text-gray-600">
                Con todos los datos en un solo lugar, Odoo ofrece informes en tiempo real para tomar decisiones estratégicas basadas en datos, no en intuiciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homotec Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-800 to-blue-900 rounded-2xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Por Qué Homotec para tu Implementación de Odoo?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Una herramienta potente necesita un partner experto. Nuestra profunda experiencia en procesos de negocio, combinada con el dominio técnico de Odoo, nos permite no solo instalar un software, sino construir una solución a tu medida.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Análisis y Consultoría:</strong> Entendemos tu negocio antes de tocar una línea de código.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Personalización y Desarrollo:</strong> Adaptamos y extendemos Odoo para que se ajuste a tus flujos de trabajo únicos.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span><strong>Formación y Soporte:</strong> Te acompañamos en todo el proceso de adopción y resolvemos tus dudas.</span>
                  </li>
                </ul>
              </div>
              <div className="relative w-full h-auto" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="/images/partners.png"
                  alt="Partners de Homotec"
                  fill
                  className="rounded-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para dar el salto?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contacta con nuestros consultores y descubre cómo Odoo puede revolucionar tu empresa.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Solicita una Consultoría Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OdooPage; 