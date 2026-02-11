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
    default: "Sherfand Trade - Webs y Fotografía Profesional para Negocios Locales | Especialistas en Restaurantes",
    template: "%s | Sherfand Trade",
  },
  description:
    "Sherfand Trade ofrece webs y fotografía profesional para negocios locales. Especialistas en restaurantes. Consigue más clientes con diseño moderno y fotos que venden. Desde 249€.",
  keywords: [
    "webs para negocios locales",
    "diseño web restaurantes",
    "fotografía profesional negocios",
    "Sherfand Trade",
    "web restaurante moderna",
    "aumentar clientes negocio",
    "fotos profesionales restaurante",
    "web peluquería",
    "web clínica",
    "web gimnasio",
    "web centro estética",
    "marketing negocios locales",
    "SEO negocios locales",
    "web profesional económica",
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
    title: "Sherfand Trade - Webs y Fotografía Profesional para Negocios Locales",
    description:
      "Webs profesionales y fotografía de calidad para negocios locales. Especialistas en restaurantes. Consigue más clientes con Sherfand Trade.",
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
