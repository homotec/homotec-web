import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "Homotec | Desarrollo de Aplicaciones con IA y Kit Digital",
  description: "Transformamos tu empresa con Inteligencia Artificial. Desarrollamos aplicaciones a medida para optimizar tus procesos y multiplicar tu eficiencia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {process.env.NODE_ENV === "production" && <Analytics />}
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
