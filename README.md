# 🍽️ RestoWeb Pro - Landing Page

Landing page profesional de alta conversión para **RestoWeb Pro**, un servicio que ofrece webs + fotografía profesional para restaurantes.

## 🚀 Características

- ✅ **Next.js 14** con App Router
- ✅ **TypeScript** para código robusto
- ✅ **Tailwind CSS** para diseño responsive
- ✅ **SEO Optimizado** con metadata completa
- ✅ **Mobile-First** diseño adaptativo
- ✅ **Iconos Lucide React** modernos y ligeros
- ✅ **Animaciones suaves** con Tailwind
- ✅ **WhatsApp flotante** siempre visible
- ✅ **Alto rendimiento** y velocidad de carga
- ✅ **Diseño orientado a conversión**

## 📦 Stack Tecnológico

- **Framework**: Next.js 14.2.3
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 3.4.3
- **Iconos**: Lucide React 0.378.0
- **React**: 18.3.1

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn, pnpm o bun

### Pasos de instalación

1. **Clonar o descargar el proyecto**

```bash
cd landingTamNoe
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno** (opcional)

Crea un archivo `.env.local` si necesitas variables personalizadas:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=34600000000
NEXT_PUBLIC_EMAIL=info@restowebpro.com
```

4. **Ejecutar el servidor de desarrollo**

```bash
npm run dev
```

5. **Abrir en el navegador**

Visita [http://localhost:3000](http://localhost:3000)

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Lint del código
npm run lint
```

## 🎨 Estructura del Proyecto

```
landingTamNoe/
├── app/
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout principal con SEO
│   └── page.tsx             # Página principal
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Componente botón reutilizable
│   │   ├── Card.tsx         # Componente tarjeta
│   │   ├── Section.tsx      # Componente sección
│   │   └── WhatsAppButton.tsx # Botón flotante WhatsApp
│   └── sections/
│       ├── HeroSection.tsx         # Hero principal
│       ├── OfrecemosSection.tsx    # Qué ofrecemos
│       ├── ComoFuncionaSection.tsx # Cómo funciona
│       ├── PacksSection.tsx        # Packs de precios
│       ├── EjemplosSection.tsx     # Ejemplos/demos
│       ├── BeneficiosSection.tsx   # Beneficios
│       ├── TestimoniosSection.tsx  # Testimonios
│       ├── CTASection.tsx          # Call to action final
│       └── Footer.tsx              # Footer
├── public/                  # Archivos estáticos
├── tailwind.config.ts       # Configuración Tailwind
├── tsconfig.json           # Configuración TypeScript
├── next.config.ts          # Configuración Next.js
└── package.json            # Dependencias
```

## 🎯 Secciones de la Landing

1. **Hero Section** - Headline potente con CTA principal
2. **Qué Ofrecemos** - Servicios incluidos
3. **Cómo Funciona** - 3 pasos claros
4. **Packs** - Básico (199€) y Premium (349€)
5. **Ejemplos** - Demos de trabajos
6. **Beneficios** - Por qué elegir el servicio
7. **Testimonios** - Reseñas de clientes
8. **CTA Final** - Última llamada a la acción
9. **Footer** - Contacto y enlaces

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Colores principales (rojos)
  },
  secondary: {
    // Colores secundarios (grises)
  },
}
```

### Información de Contacto

Actualiza los siguientes valores en los componentes:

- **WhatsApp**: `34600000000` → Tu número real
- **Email**: `info@restowebpro.com` → Tu email
- **Redes sociales**: Enlaces en `Footer.tsx`

### Precios

Modifica los precios en `components/sections/PacksSection.tsx`

## 🚀 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube el proyecto a GitHub
2. Visita [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará Next.js automáticamente
5. Click en "Deploy"

### Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Configuración en Vercel

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Node Version**: 18.x

## 🔧 Configuración de Variables en Vercel

En el dashboard de Vercel → Settings → Environment Variables:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=34600000000
NEXT_PUBLIC_EMAIL=info@restowebpro.com
```

## 📱 Características Mobile

- Diseño mobile-first
- Navegación táctil optimizada
- Botón WhatsApp flotante siempre accesible
- Imágenes y tipografía responsive
- Menús y formularios optimizados para móvil

## ⚡ Optimizaciones SEO

- Metadata completa en `layout.tsx`
- Open Graph tags para redes sociales
- Twitter Cards
- Schema.org markup (puede añadirse)
- Sitemap y robots.txt
- URLs semánticas
- Imágenes con alt text
- Headings jerarquizados

## 🎯 Conversión

Elementos orientados a conversión:

- Headlines orientadas a beneficios
- CTAs claros y visibles
- Prueba social (testimonios)
- Urgencia y escasez
- Propuesta de valor clara
- Sin fricción para contactar
- Elementos de confianza

## 📊 Próximos Pasos Recomendados

1. **Analytics**: Integrar Google Analytics o Plausible
2. **Pixel de Facebook**: Para remarketing
3. **CRM**: Conectar formularios a CRM
4. **A/B Testing**: Probar variantes de headlines
5. **Chatbot**: Integrar chatbot si es necesario
6. **Blog**: Añadir sección de blog para SEO
7. **Testimonios reales**: Reemplazar mocks con testimonios reales
8. **Fotos reales**: Añadir imágenes reales de proyectos

## 🤝 Soporte

Para preguntas o soporte:

- Email: info@restowebpro.com
- WhatsApp: +34 600 000 000

## 📄 Licencia

Este proyecto es de uso privado para RestoWeb Pro.

---

**Desarrollado con ❤️ para RestoWeb Pro**
