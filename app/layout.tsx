import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sherfandtrade.com"),
  title: {
    default: "Web + Fotos para Restaurantes Madrid | Sherfand Trade - Desde 249€",
    template: "%s | Sherfand Trade",
  },
  description:
    "Web profesional + sesión de fotos para tu restaurante en Madrid. Lista en 7 días. Atrae más clientes con diseño moderno y fotografía que vende. Desde 249€ todo incluido.",
  keywords: [
    "webs para restaurantes Madrid",
    "fotografía profesional restaurante Madrid",
    "diseño web restaurantes Barcelona",
    "web restaurante económica",
    "páginas web negocios locales",
    "sesión fotos restaurante profesional",
    "web restaurante moderna Madrid",
    "aumentar clientes restaurante",
    "fotos profesionales negocio local",
    "web + fotografía restaurante",
    "marketing restaurantes Madrid",
    "diseño web gastronómico",
    "SEO restaurantes Madrid",
    "web profesional 249 euros",
  ],
  authors: [{ name: "Sherfand Trade" }],
  creator: "Sherfand Trade",
  publisher: "Sherfand Trade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sherfandtrade.com",
    title: "Web + Fotos para Restaurantes Madrid | Desde 249€ | Sherfand Trade",
    description:
      "Web profesional + fotografía para restaurantes en Madrid. Lista en 7 días. Atrae más clientes con diseño moderno y fotos que venden. Desde 249€.",
    siteName: "Sherfand Trade",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sherfand Trade - Webs y Fotografía Profesional para Negocios Locales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sherfand Trade - Webs y Fotografía Profesional para Negocios Locales",
    description:
      "Diseño web moderno + fotografía profesional para restaurantes y negocios locales. Consigue más clientes con Sherfand Trade.",
    images: ["/og-image.jpg"],
    creator: "@sherfandtrade",
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
    canonical: "https://sherfandtrade.com",
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
        <link rel="canonical" href="https://sherfandtrade.com" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
