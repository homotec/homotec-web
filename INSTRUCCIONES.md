# Instrucciones Finales de Configuración y Puesta en Marcha

¡Felicidades! La estructura y el contenido base de tu nuevo sitio web están listos. Antes de lanzar el sitio, por favor sigue estas instrucciones para completar la configuración técnica.

## 1. Google Analytics 4

Para que las visitas al sitio web se registren en tu cuenta de Google Analytics, necesitas conectar tu ID de Medición.

1.  En la raíz del proyecto (`homotec-web`), crea un nuevo archivo llamado `.env.local`.
2.  Abre el archivo y añade la siguiente línea, reemplazando `G-XXXXXXXXXX` con tu ID de Medición de Google Analytics 4:

    ```
    NEXT_PUBLIC_GA_ID='G-XXXXXXXXXX'
    ```

3.  Guarda el archivo. El script de Google Analytics se activará automáticamente en el sitio cuando esté en producción.

## 2. Google Search Console

Para que Google indexe tu sitio correctamente y puedas monitorizar su rendimiento en los resultados de búsqueda, debes verificar la propiedad de tu dominio en Google Search Console.

Google te ofrecerá varias opciones. Te recomendamos una de estas dos:

*   **Verificación por Registro DNS (Recomendado):** Es el método más robusto. Deberás añadir un registro TXT a la configuración DNS de tu dominio (`homotec.com`). Sigue las instrucciones que te proporcione Google Search Console.
*   **Verificación por Etiqueta HTML:** Si prefieres este método, Google te dará una etiqueta `<meta>` para que la añadas al `head` de tu página de inicio. Para ello, abre el archivo `src/app/layout.tsx` y añade la etiqueta que te proporcionó Google dentro del objeto `metadata` de la siguiente manera:

    ```typescript
    // en homotec-web/src/app/layout.tsx

    export const metadata: Metadata = {
      title: "Homotec | Desarrollo de Aplicaciones con IA y Kit Digital",
      description: "...",
      // ... otras propiedades
      verification: {
        google: 'AQUÍ_VA_EL_CÓDIGO_DE_VERIFICACIÓN_DE_GOOGLE',
      },
    };
    ```

## 3. Formulario de Contacto

El formulario de la página de "Contacto" está visualmente implementado, pero no es funcional todavía. Para que los mensajes se envíen, se necesita conectar a un servicio de envío de correos.

Algunas opciones populares son:
*   **Resend:** Ofrece un nivel gratuito generoso y se integra muy bien con Next.js.
*   **Formspree:** Un servicio sencillo que te da un endpoint al que apuntar tu formulario.

La implementación de uno de estos servicios requerirá pasos adicionales de desarrollo.

## 4. Despliegue

Una vez completados los pasos anteriores, el sitio está listo para ser desplegado. Te recomendamos usar **Vercel**, la plataforma de los creadores de Next.js, para un rendimiento y una experiencia de despliegue óptimos. 