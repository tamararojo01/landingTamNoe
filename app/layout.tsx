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
    default: "RestoWeb Pro - Webs y Fotos Profesionales para Restaurantes | Atraer Más Clientes",
    template: "%s | RestoWeb Pro",
  },
  description:
    "Webs profesionales y fotografía de calidad que atraen más clientes para tu restaurante. Diseño moderno, optimizado para móvil y SEO. Desde 199€.",
  keywords: [
    "web para restaurantes",
    "diseño web restaurantes",
    "fotos profesionales restaurante",
    "fotografía gastronómica",
    "web restaurante moderna",
    "aumentar clientes restaurante",
    "marketing restaurantes",
    "SEO restaurantes",
    "página web restaurante",
    "reservas online restaurante",
    "web restaurante móvil",
    "web restaurante barata",
    "diseño profesional restaurante",
    "fotos comida profesional",
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
    title: "Webs y Fotos Profesionales que Atraen Más Clientes | RestoWeb Pro",
    description:
      "Transforma tu restaurante con diseño web moderno y fotos irresistibles. Optimizado para móvil y SEO. Más de 50 restaurantes confiaron en nosotros.",
    siteName: "RestoWeb Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RestoWeb Pro - Webs y Fotos Profesionales para Restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webs y Fotos Profesionales para Restaurantes | RestoWeb Pro",
    description:
      "Diseño web moderno + fotografía profesional que atraen más clientes. Optimizado para móvil y SEO.",
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
