import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Homotec',
  description: 'Política de Privacidad de Homotec. Conozca cómo tratamos sus datos personales y sus derechos al respecto.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">Política de Privacidad</h1>
        <div className="mt-8 prose prose-lg text-gray-600 mx-auto">
          <p className="text-sm text-gray-500">Última modificación: 24 de julio de 2024</p>

          <h2>1. Responsable del Tratamiento</h2>
          <p>
            Los datos de carácter personal que se pudieran recabar directamente del interesado serán tratados de forma confidencial y quedarán incorporados a la correspondiente actividad de tratamiento titularidad de:
          </p>
          <ul>
            <li><strong>Denominación Social:</strong> Homotec Servicios Informaticos SLU</li>
            <li><strong>NIF:</strong> B57304636</li>
            <li><strong>Domicilio Social:</strong> Carrer d&apos;Alfons el Magnànim, 38, Palma de Mallorca, Illes Balears, España.</li>
            <li><strong>Correo electrónico de contacto:</strong> info@homotec.es</li>
          </ul>

          <h2>2. Finalidad del Tratamiento</h2>
          <p>
            La finalidad del tratamiento de los datos corresponde a cada una de las actividades de tratamiento que realiza Homotec. Principalmente, los datos recabados a través del formulario de contacto se utilizarán para gestionar su consulta o petición de información. No se tomarán decisiones automatizadas ni se elaborarán perfiles con sus datos.
          </p>

          <h2>3. Legitimación</h2>
          <p>
            El tratamiento de sus datos se realiza para el cumplimiento de la relación precontractual o contractual, así como cuando la finalidad del tratamiento requiera su consentimiento, que habrá de ser prestado mediante una clara acción afirmativa (por ejemplo, al enviar el formulario de contacto). Puede consultar la base legal para cada una de las actividades de tratamiento que lleva a cabo Homotec contactándonos directamente.
          </p>

          <h2>4. Conservación de Datos</h2>
          <p>
            Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recaban y para determinar las posibles responsabilidades que se pudieran derivar de la finalidad, además de los períodos establecidos en la normativa de archivos y documentación.
          </p>

          <h2>5. Comunicación de Datos</h2>
          <p>
            Con carácter general, no se comunicarán los datos personales a terceros, salvo obligación legal. No se prevén transferencias internacionales de datos.
          </p>

          <h2>6. Derechos de las Personas Interesadas</h2>
          <p>
            Cualquier persona tiene derecho a obtener confirmación sobre los tratamientos que de sus datos se llevan a cabo por Homotec.
          </p>
          <p>
            Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, ante:
          </p>
          <p>
            Homotec Servicios Informaticos SLU, en Carrer d&apos;Alfons el Magnànim, 38, Palma de Mallorca, o en la dirección de correo electrónico info@homotec.es.
          </p>
          <p>
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si considera que el tratamiento de sus datos no se ajusta a la normativa.
          </p>
        </div>
      </div>
    </div>
  );
} 