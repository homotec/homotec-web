import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs'; // Importar el módulo de sistema de archivos

// --- INICIO DE CÓDIGO DE DEPURACIÓN AVANZADA ---
try {
  const envPath = path.resolve(process.cwd(), '.env.local');
  console.log('Intentando leer el archivo desde la ruta:', envPath);
  const fileContent = fs.readFileSync(envPath, 'utf8');
  console.log('--- Contenido del archivo .env.local ---');
  console.log(fileContent);
  console.log('------------------------------------');
} catch (error) {
  console.error('ERROR AL LEER EL ARCHIVO .env.local:', error);
}
// --- FIN DE CÓDIGO DE DEPURACIÓN AVANZADA ---

// Forzar la carga de variables de entorno desde .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export async function POST(request: NextRequest) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  console.log("Valor de GMAIL_USER después de dotenv:", user);

  const { name, email, message, phone } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
  }

  // Asegúrate de tener estas variables en tu archivo .env.local
  if (!user || !pass) {
    console.error('Faltan credenciales de Gmail en las variables de entorno');
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: user,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `"Formulario Web Homotec" <${user}>`,
    to: user, // El correo se enviará a tu propia cuenta de Gmail
    replyTo: email,
    subject: `Nuevo mensaje de contacto de: ${name}`,
    html: `
      <h1>Nuevo mensaje desde la web</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ''}
      <hr>
      <h2>Mensaje:</h2>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 });
  }
} 