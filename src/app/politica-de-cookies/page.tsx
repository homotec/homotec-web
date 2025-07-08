import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Cookies | Homotec',
  description: 'Información sobre el uso de cookies en el sitio web de Homotec.',
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">Política de Cookies</h1>
        <div className="mt-8 prose prose-lg text-gray-600 mx-auto">
          <p className="text-sm text-gray-500">Última modificación: 24 de julio de 2024</p>

          <h2>¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño fichero de texto que un sitio web guarda en su ordenador o dispositivo móvil cuando usted visita el sitio. Permite que el sitio web recuerde sus acciones y preferencias (como el inicio de sesión, el idioma, el tamaño de la fuente y otras preferencias de visualización) durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que vuelva al sitio o navegue de una página a otra.
          </p>

          <h2>¿Cómo utilizamos las cookies?</h2>
          <p>
            En www.homotec.com, utilizamos principalmente cookies técnicas y esenciales que son necesarias para el correcto funcionamiento del sitio web. Estas cookies no requieren el consentimiento informado del usuario según la normativa vigente.
          </p>
          <ul>
            <li>
              <strong>Cookies técnicas o esenciales:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan. Por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, o utilizar elementos de seguridad durante la navegación.
            </li>
          </ul>
          <p>
            Actualmente, este sitio web no utiliza cookies de análisis, publicitarias o de seguimiento de terceros que requieran su consentimiento explícito. En el caso de que en el futuro se implementen este tipo de cookies, se le solicitará su consentimiento a través de un banner informativo y podrá gestionarlas a través de un panel de configuración.
          </p>

          <h2>Control de las cookies</h2>
          <p>
            Usted puede controlar y/o eliminar las cookies como lo desee. Para más información, consulte <a href="https://aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">aboutcookies.org</a>.
          </p>
          <p>
            Puede eliminar todas las cookies que ya están en su ordenador y puede configurar la mayoría de los navegadores para que dejen de aceptarlas. Pero si lo hace, es posible que tenga que ajustar manualmente algunas preferencias cada vez que visite un sitio y que algunos servicios y funcionalidades no funcionen.
          </p>
          <p>
            A continuación, le proporcionamos enlaces a las guías de los principales navegadores para que pueda gestionar las cookies:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">Internet Explorer / Edge</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">Safari</a></li>
          </ul>

          <h2>Más información</h2>
          <p>
            Para más información sobre el tratamiento de sus datos personales, puede consultar nuestra <Link href="/politica-de-privacidad" className="text-indigo-600 hover:text-indigo-800">Política de Privacidad</Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 