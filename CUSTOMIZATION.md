# 🎨 Guía de Personalización

## 📝 Contenido

### 1. Información de Contacto

#### WhatsApp
Busca y reemplaza en todos los archivos:
- **Número actual**: `34600000000`
- **Tu número**: Sin `+` ni espacios (ej: `34612345678`)

Archivos a actualizar:
- `components/sections/HeroSection.tsx`
- `components/sections/PacksSection.tsx`
- `components/sections/CTASection.tsx`
- `components/sections/Footer.tsx`
- `components/ui/WhatsAppButton.tsx`

#### Email
- **Email actual**: `info@restowebpro.com`
- **Tu email**: Tu dirección real

Archivos a actualizar:
- `components/sections/Footer.tsx`
- `app/layout.tsx` (metadata)

### 2. Precios

Edita `components/sections/PacksSection.tsx`:

```typescript
{
  name: 'Pack Básico',
  price: '299', // ← Cambia aquí
  // ...
},
{
  name: 'Pack Premium',
  price: '449', // ← Cambia aquí
  // ...
}
```

### 3. Características de los Packs

En el mismo archivo `PacksSection.tsx`, modifica el array `features`:

```typescript
features: [
  'Web responsive de una página',
  // Añade, elimina o modifica características
]
```

### 4. Testimonios

Edita `components/sections/TestimoniosSection.tsx`:

```typescript
const testimonios = [
  {
    name: 'Nombre del Cliente',
    restaurant: 'Nombre del Restaurante',
    location: 'Ciudad',
    rating: 5,
    text: 'El testimonio completo...',
    image: '👩‍🍳', // Emoji o imagen
  },
  // Añade más testimonios
]
```

### 5. Redes Sociales

En `components/sections/Footer.tsx`:

```typescript
<a
  href="https://instagram.com/tu-cuenta" // ← Cambia aquí
  target="_blank"
  rel="noopener noreferrer"
>
```

## 🎨 Diseño

### Colores

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#fef3f2',   // Más claro
    100: '#fde4e1',
    // ...
    900: '#7a2318', // Más oscuro
  },
  secondary: {
    // Colores secundarios (grises/neutros)
  },
}
```

**Generador de colores recomendado**: https://uicolors.app/create

### Tipografía

En `app/layout.tsx`:

```typescript
import { Inter, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});
```

Luego en `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['var(--font-inter)'],
  display: ['var(--font-display)'],
},
```

### Espaciado

Modifica los valores de padding/margin en cada sección:

```typescript
<Section className="py-16 md:py-24"> // ← Ajusta aquí
```

## 📸 Imágenes

### Agregar Imágenes Reales

1. Coloca tus imágenes en `public/images/`

2. En los componentes, reemplaza los placeholders:

```typescript
// Antes (placeholder)
<div className="bg-gradient-to-br from-blue-100 to-blue-200">

// Después (imagen real)
import Image from 'next/image'

<Image
  src="/images/pack-basico-demo.jpg"
  alt="Demo Pack Básico"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### Ejemplos/Demos

Edita `components/sections/EjemplosSection.tsx`:

```typescript
const ejemplos = [
  {
    name: 'Demo Pack Básico',
    url: 'https://demo-basico.tudominio.com', // ← URL real
    // ...
  },
]
```

## 📱 Metadata y SEO

### Título y Descripción

Edita `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Tu Título Personalizado",
  },
  description: "Tu descripción personalizada para SEO",
  keywords: [
    "tus",
    "palabras",
    "clave",
  ],
}
```

### Open Graph

```typescript
openGraph: {
  title: "Título para redes sociales",
  description: "Descripción para redes sociales",
  images: [
    {
      url: "/og-image.jpg", // Crea esta imagen 1200x630px
    },
  ],
}
```

## ✨ Animaciones

### Velocidad de Animaciones

En `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out', // ← Cambia 0.6s
  'slide-up': 'slideUp 0.6s ease-out',
}
```

### Desactivar Animaciones

Elimina las clases:
- `animate-fade-in`
- `animate-slide-up`
- `animate-slide-in-right`

## 🔧 Funcionalidades

### Añadir Google Analytics

1. Instala el paquete:

```bash
npm install @next/third-parties
```

2. En `app/layout.tsx`:

```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

### Añadir Formulario de Contacto

Crea `components/sections/ContactForm.tsx`:

```typescript
'use client';

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Tu lógica aquí
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
    </form>
  );
};
```

### Integrar con API de Email

Puedes usar:
- **Resend**: https://resend.com
- **SendGrid**: https://sendgrid.com
- **Mailgun**: https://mailgun.com

Ejemplo con Resend:

```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  // Lógica de envío
}
```

## 🔒 Configuraciones de Seguridad

Crea `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 📊 Tracking de Conversión

### Eventos de WhatsApp

Modifica `components/ui/WhatsAppButton.tsx`:

```typescript
const handleClick = () => {
  // Google Analytics event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_whatsapp', {
      event_category: 'contact',
      event_label: 'floating_button',
    });
  }
  
  // Abrir WhatsApp
  window.open(url, '_blank');
};
```

## 💡 Tips de Conversión

1. **Headline**: Enfócate en el beneficio principal
2. **CTA**: Usa verbos de acción ("Quiero", "Solicitar", "Empezar")
3. **Urgencia**: "Solo 5 cupos este mes"
4. **Prueba social**: Testimonios reales funcionan mejor
5. **Precio**: Muestra el valor, no solo el precio
6. **Mobile**: El 80% verá tu sitio desde móvil

## 🎯 A/B Testing

Para probar variantes:

1. Crea componentes alternativos
2. Usa feature flags o variables de entorno
3. Herramientas recomendadas:
   - Vercel Edge Config
   - Google Optimize
   - Optimizely

---

**¿Necesitas más ayuda?** Revisa el README.md principal
