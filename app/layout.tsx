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
    default: "RestoWeb Pro - Webs + Fotos Profesionales para Restaurantes",
    template: "%s | RestoWeb Pro",
  },
  description:
    "Aumenta las reservas de tu restaurante en menos de 7 días. Web profesional + sesión de fotos de tus platos y local. Todo listo para recibir más clientes. Desde 299€.",
  keywords: [
    "web para restaurantes",
    "fotos profesionales restaurante",
    "diseño web restaurantes",
    "marketing restaurantes",
    "reservas online",
    "SEO local restaurantes",
    "fotografía gastronómica",
    "web responsiva restaurantes",
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
    title: "RestoWeb Pro - Webs + Fotos Profesionales para Restaurantes",
    description:
      "Aumenta las reservas de tu restaurante en menos de 7 días. Web profesional + sesión de fotos. Desde 299€.",
    siteName: "RestoWeb Pro",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RestoWeb Pro - Webs para Restaurantes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RestoWeb Pro - Webs + Fotos Profesionales para Restaurantes",
    description:
      "Aumenta las reservas de tu restaurante en menos de 7 días. Web profesional + sesión de fotos. Desde 299€.",
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
