import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | Homotec',
  description: 'Aviso Legal de Homotec, empresa de servicios informáticos y soluciones de inteligencia artificial en Mallorca.',
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">Aviso Legal</h1>
        <div className="mt-8 prose prose-lg text-gray-600 mx-auto">
          <h2>1. Información General</h2>
          <p>
            En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el presente sitio web, www.homotec.es (en adelante, el Sitio Web), es titularidad de:
          </p>
          <ul>
            <li><strong>Denominación Social:</strong> Homotec Servicios Informaticos SLU</li>
            <li><strong>NIF:</strong> B57304636</li>
            <li><strong>Domicilio Social:</strong> Carrer d'Alfons el Magnànim, 38, Palma de Mallorca, Illes Balears, España.</li>
            <li><strong>Teléfono de contacto:</strong> +34 619 920 747</li>
            <li><strong>Correo electrónico de contacto:</strong> info@homotec.es</li>
          </ul>

          <h2>2. Condiciones Generales de Uso</h2>
          <p>
            El acceso y/o uso de este Sitio Web atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
          </p>
          <p>
            El Sitio Web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a Homotec o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
          </p>

          <h2>3. Propiedad Intelectual e Industrial</h2>
          <p>
            Homotec por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
          </p>
          <p>
            Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de Homotec.
          </p>

          <h2>4. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            Homotec no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
          </p>

          <h2>5. Modificaciones</h2>
          <p>
            Homotec se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
          </p>

          <h2>6. Legislación Aplicable y Jurisdicción</h2>
          <p>
            La relación entre Homotec y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Palma de Mallorca, salvo que la Ley aplicable disponga otra cosa.
          </p>
        </div>
      </div>
    </div>
  );
} 