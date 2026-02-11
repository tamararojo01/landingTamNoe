import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://restowebpro.com"),
  title: {
    default: "RestoWeb Pro - Aumenta las Reservas de tu Restaurante en 7 Días | Web + Fotos Profesionales",
    template: "%s | RestoWeb Pro",
  },
  description:
    "¿Tu restaurante no recibe suficientes reservas? Web profesional + fotografía de tus platos desde 199€. Multiplica tus reservas online en menos de 7 días. Sin complicaciones. Sin pagos mensuales.",
  keywords: [
    "reservas online restaurante",
    "web restaurante",
    "aumentar reservas restaurante",
    "web para restaurantes",
    "diseño web restaurantes",
    "fotos profesionales restaurante",
    "fotografía gastronómica",
    "SEO local restaurantes",
    "marketing restaurantes",
    "más clientes restaurante",
    "página web restaurante barata",
    "web restaurante rápida",
    "visibilidad online restaurante",
    "Google Maps restaurante",
  ],
  authors: [{ name: "RestoWeb Pro" }],
  creator: "RestoWeb Pro",
  publisher: "RestoWeb Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://restowebpro.com",
    title: "Aumenta las Reservas de tu Restaurante en 7 Días | RestoWeb Pro",
    description:
      "Web profesional + fotos que venden. Multiplica tus reservas online desde 199€. Sin complicaciones, sin pagos mensuales. Más de 50 restaurantes ya confían en nosotros.",
    siteName: "RestoWeb Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RestoWeb Pro - Web + Fotos para Restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumenta las Reservas de tu Restaurante en 7 Días | RestoWeb Pro",
    description:
      "Web profesional + fotos de tus platos. Multiplica tus reservas desde 199€. Listo en 7 días.",
    images: ["/og-image.jpg"],
    creator: "@restowebpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://restowebpro.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://restowebpro.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
