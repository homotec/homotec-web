import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto | Agente Digitalizador en Mallorca | Homotec',
  description: 'Contacta con Homotec, tu empresa de servicios informáticos y Agente Digitalizador en Mallorca. Llámanos o visita nuestra oficina en Palma.',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hablemos de tu{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Próximo Proyecto
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Estamos aquí para responder a tus preguntas y ayudarte a dar el siguiente paso en la 
            transformación digital de tu empresa.
          </p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 mb-1">
                      Para consultas generales y propuestas de proyectos.
                    </p>
                    <a href="mailto:info@homotec.com" className="text-lg text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      info@homotec.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                    <p className="text-gray-600 mb-1">
                      Llámanos para una atención más directa.
                    </p>
                    <a href="tel:+34619920747" className="text-lg text-green-600 hover:text-green-700 font-medium transition-colors">
                      +34 619 920 747
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Oficina</h3>
                    <p className="text-gray-600 mb-1">
                      Visítanos en nuestra sede de Palma de Mallorca.
                    </p>
                    <p className="text-lg text-purple-600 font-medium">
                      Carrer d&apos;Alfons el Magnànim, 38<br/>Palma de Mallorca, España
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.786381283294!2d2.666611315335198!3d39.56942697947211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297926e02613e59%3A0x1334f3c2f2be34d0!2sCarrer%20d'Alfons%20el%20Magn%C3%A0nim%2C%2038%2C%2007004%20Palma%2C%20Illes%20Balears!5e0!3m2!1ses!2ses!4v1678886400000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Homotec"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 