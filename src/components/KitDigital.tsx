import Image from 'next/image';

export default function KitDigital() {
  return (
    <section id="kitdigital" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image 
              src="/images/kit-digital/logo-kit-digital.svg" 
              alt="Logo Kit Digital" 
              width={1200} 
              height={600}
              className="h-auto w-full max-w-6xl"
            />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Acelera tu Digitalización con Homotec y el Programa Kit Digital
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En Homotec, somos Agente Digitalizador Adherido al Programa Kit Digital, una iniciativa del Gobierno de España financiada por la Unión Europea – Next Generation EU. Te ayudamos a conseguir tu "bono digital" para acceder a soluciones de digitalización clave y mejorar tu competitividad en cualquier sector y lugar de España.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Sitio Web y Presencia Básica en Internet */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Sitio Web y Presencia Básica</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Expandir tu presencia online con una página web y posicionamiento básico.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una floristería local que necesita una web con sus productos y horarios para ser encontrada en Google.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos I, II, III: 2.000 €</li>
              </ul>
            </div>
          </div>

          {/* 2. Comercio Electrónico */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Comercio Electrónico</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Crear una tienda online para vender tus productos o servicios.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una tienda de artesanías que quiere vender a toda España con pagos seguros y gestión de envíos.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos I, II, III: 2.000 €</li>
                <li>Segmentos IV, V: 5.000 €</li>
              </ul>
            </div>
          </div>
          
          {/* 3. Gestión de Redes Sociales */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Gestión de Redes Sociales</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Promocionar tu empresa en redes sociales para conectar con clientes.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Un restaurante que busca aumentar su visibilidad con publicaciones semanales y contenido atractivo.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos I, II: 2.500 €</li>
                <li>Segmento III: 2.000 €</li>
                <li>Segmentos IV, V: 5.000 €</li>
              </ul>
            </div>
          </div>

          {/* 4. Gestión de Clientes (CRM) */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Gestión de Clientes (CRM)</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Digitalizar y optimizar la gestión de relaciones con clientes.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una fontanería que necesita un CRM para centralizar datos de clientes y seguir oportunidades de venta.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmento I: 4.000 € (3 usuarios)</li>
                <li>Segmentos II, III: 2.000 € (1 usuario)</li>
              </ul>
            </div>
          </div>

          {/* 5. Business Intelligence y Analítica */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Business Intelligence y Analítica</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Explotar los datos de tu empresa para mejorar la toma de decisiones.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una distribuidora que necesita analizar datos de ventas y stock para optimizar su inventario.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmento I: 4.000 € (3 usuarios)</li>
                <li>Segmentos II, III: 1.500 € (1 usuario)</li>
              </ul>
            </div>
          </div>

          {/* 6. Gestión de Procesos (ERP/BPM) */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Gestión de Procesos (ERP)</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Digitalizar y automatizar procesos de negocio clave (operativos o productivos).</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Un hotel que busca una plataforma para gestionar nóminas, inventario y suministros de forma unificada.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmento I: 6.000 € (10 usuarios)</li>
                <li>Segmento II: 3.000 € (3 usuarios)</li>
                <li>Segmento III: 2.000 € (1 usuario)</li>
                <li>Segmento IV: 15.000 € (20 usuarios)</li>
                <li>Segmento V: 18.000 € (25 usuarios)</li>
              </ul>
            </div>
          </div>
          
          {/* 7. Factura Electrónica */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Factura Electrónica</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Digitalizar el flujo de facturas emitidas y recibidas cumpliendo la normativa.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Un consultor autónomo que necesita automatizar la emisión de facturas en formato FACTURA-E.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos I, II: 2.000 € (3 usuarios)</li>
                <li>Segmento III: 1.000 € (1 usuario)</li>
              </ul>
            </div>
          </div>

          {/* 8. Oficina Virtual */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Oficina Virtual</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Implantar soluciones para una colaboración más eficiente entre empleados.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Un equipo de marketing híbrido que necesita una plataforma para compartir documentos y gestionar proyectos.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Todos los Segmentos: 250 €/usuario</li>
              </ul>
            </div>
          </div>

          {/* 9. Comunicaciones Seguras */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Comunicaciones Seguras</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Asegurar las conexiones entre los dispositivos de los empleados y la red de la empresa.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una consultora con empleados en remoto que necesita conexiones cifradas (VPN) para proteger datos.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Todos los Segmentos: 125 €/usuario</li>
              </ul>
            </div>
          </div>

          {/* 10. Ciberseguridad */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Ciberseguridad</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Proporcionar seguridad básica y avanzada para los dispositivos de los empleados.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una startup que necesita antimalware, correo seguro y navegación segura para proteger su código.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Todos los Segmentos: 125 €/dispositivo</li>
              </ul>
            </div>
          </div>

          {/* 11. Presencia Avanzada en Internet */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Presencia Avanzada en Internet</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Mejorar el posicionamiento en internet para aumentar el alcance y tráfico web.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una empresa de turismo rural que quiere optimizar su SEO para atraer más reservas directas.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos I, II, III: 2.000 €</li>
                <li>Segmentos IV, V: 5.000 €</li>
              </ul>
            </div>
          </div>

          {/* 12. Marketplace */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Marketplace</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Incrementar ventas dirigiendo tus productos a plataformas de Marketplace.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Un productor de aceite de oliva que busca expandir su mercado dándose de alta en marketplaces.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos I, II, III: 2.000 €</li>
              </ul>
            </div>
          </div>

          {/* 13. Servicio de Ciberseguridad Gestionada */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">13. Ciberseguridad Gestionada</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Proteger a medianas empresas con un servicio de ciberseguridad integral y gestionado.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una ingeniería que requiere firewall, SIEM/SOC y monitoreo 24/7 para proteger su propiedad intelectual.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmento IV: 14.000 €</li>
                <li>Segmento V: 15.000 €</li>
              </ul>
            </div>
          </div>

          {/* 14. Gestión de Clientes con IA */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">14. Gestión de Clientes con IA</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Optimizar la gestión de clientes y agilizar interacciones usando inteligencia artificial.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una empresa online que desea implementar "lead scoring" predictivo y automatizar "journeys de venta".</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos IV, V: 24.000 €</li>
              </ul>
            </div>
          </div>
          
          {/* 15. Business Intelligence con IA */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">15. BI y Analítica con IA</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Impulsar la explotación de datos con IA para mejorar la toma de decisiones.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una cadena de gimnasios que necesita IA para predecir la retención de clientes y personalizar ofertas.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmento IV: 7.000 € (10 usuarios)</li>
                <li>Segmento V: 8.000 € (15 usuarios)</li>
              </ul>
            </div>
          </div>

          {/* 16. Gestión de Procesos con IA */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">16. Gestión de Procesos con IA</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Digitalizar procesos de negocio incorporando capacidades de inteligencia artificial.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Una empresa de distribución que busca un ERP con IA para optimizar inventario y rutas de entrega.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmentos IV, V: 24.000 €</li>
              </ul>
            </div>
          </div>

          {/* 17. Puesto de Trabajo Seguro */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">17. Puesto de Trabajo Seguro</h3>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Objetivo:</strong> Proveer a autónomos y pymes de herramientas de seguridad, movilidad y colaboración.</p>
            <p className="text-gray-600 mb-4"><strong className="font-semibold text-gray-800">Caso de Uso:</strong> Un diseñador gráfico autónomo que busca un portátil con ciberseguridad integrada para trabajar seguro.</p>
            <div className="mt-auto pt-4 border-t border-gray-200">
              <p className="font-semibold text-gray-800 mb-2">Importes Máximos de Ayuda:</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Segmento III: 1.000 € (1 dispositivo)</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
} 