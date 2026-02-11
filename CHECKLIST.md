# ✅ Checklist de Personalización

Usa este archivo para marcar lo que vas completando antes del deploy.

## 🔴 CRÍTICO - Hacer ANTES de deploy

- [ ] **Número de WhatsApp** - Cambiar `34600000000` en:
  - [ ] `components/ui/WhatsAppButton.tsx`
  - [ ] `components/sections/HeroSection.tsx`
  - [ ] `components/sections/PacksSection.tsx`
  - [ ] `components/sections/CTASection.tsx`
  - [ ] `components/sections/Footer.tsx`
  - [ ] `app/page.tsx`

- [ ] **Email** - Cambiar `info@restowebpro.com` en:
  - [ ] `components/sections/Footer.tsx`
  - [ ] `app/layout.tsx`

## 🟡 IMPORTANTE - Personalizar Contenido

- [ ] **Precios** (`components/sections/PacksSection.tsx`)
  - [ ] Verificar precio Pack Básico: 299€
  - [ ] Verificar precio Pack Premium: 449€
  - [ ] Ajustar si es necesario

- [ ] **Características de Packs** (`components/sections/PacksSection.tsx`)
  - [ ] Revisar features Pack Básico
  - [ ] Revisar features Pack Premium
  - [ ] Añadir/quitar según lo que ofrezcas

- [ ] **Testimonios** (`components/sections/TestimoniosSection.tsx`)
  - [ ] Reemplazar con testimonios reales
  - [ ] Actualizar nombres
  - [ ] Actualizar restaurantes
  - [ ] Actualizar ciudades

- [ ] **Ejemplos/Demos** (`components/sections/EjemplosSection.tsx`)
  - [ ] Actualizar URL demo Pack Básico
  - [ ] Actualizar URL demo Pack Premium

- [ ] **Redes Sociales** (`components/sections/Footer.tsx`)
  - [ ] Instagram URL
  - [ ] Facebook URL
  - [ ] LinkedIn URL

## 🟢 OPCIONAL - Mejorar el Diseño

- [ ] **Colores** (`tailwind.config.ts`)
  - [ ] Revisar colores primarios (rojos)
  - [ ] Ajustar si prefieres otra paleta
  - [ ] Usar: https://uicolors.app/create

- [ ] **Textos del Hero** (`components/sections/HeroSection.tsx`)
  - [ ] Headline principal
  - [ ] Subheadline
  - [ ] Texto de los botones

- [ ] **Metadata SEO** (`app/layout.tsx`)
  - [ ] Title
  - [ ] Description
  - [ ] Keywords
  - [ ] Open Graph title/description

- [ ] **Imágenes**
  - [ ] Crear `public/og-image.jpg` (1200x630px)
  - [ ] Añadir imágenes reales de proyectos
  - [ ] Actualizar `EjemplosSection.tsx` con imágenes

## 🧪 TESTING - Antes de Lanzar

- [ ] **Funcionalidad**
  - [ ] Probar botón WhatsApp flotante
  - [ ] Probar todos los CTAs
  - [ ] Verificar que todos los links funcionen
  - [ ] Probar navegación entre secciones

- [ ] **Responsive**
  - [ ] Mobile (< 768px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Desktop (> 1024px)

- [ ] **Navegadores**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari (si tienes Mac)
  - [ ] Edge

- [ ] **Performance**
  - [ ] PageSpeed Insights: https://pagespeed.web.dev/
  - [ ] Objetivo: > 90 en mobile
  - [ ] Objetivo: > 95 en desktop

## 🚀 PRE-DEPLOY

- [ ] **Git Setup**
  - [ ] `git init`
  - [ ] `git add .`
  - [ ] `git commit -m "Initial commit"`
  - [ ] Push a GitHub/GitLab

- [ ] **Vercel Setup**
  - [ ] Crear cuenta en vercel.com
  - [ ] Importar repositorio
  - [ ] Configurar variables de entorno (si usas)

- [ ] **Dominio** (opcional)
  - [ ] Comprar dominio
  - [ ] Configurar DNS
  - [ ] Añadir a Vercel

## 📊 POST-DEPLOY

- [ ] **Analytics**
  - [ ] Configurar Google Analytics
  - [ ] Configurar Vercel Analytics

- [ ] **SEO**
  - [ ] Verificar sitemap.xml accesible
  - [ ] Verificar robots.txt accesible
  - [ ] Submit a Google Search Console
  - [ ] Submit a Bing Webmaster Tools

- [ ] **Social Media**
  - [ ] Probar cómo se ve compartido en Facebook
  - [ ] Probar cómo se ve compartido en LinkedIn
  - [ ] Probar cómo se ve compartido en Twitter

- [ ] **Marketing**
  - [ ] Configurar pixel de Facebook (opcional)
  - [ ] Configurar Google Ads remarketing (opcional)

## 🎯 OPTIMIZACIONES FUTURAS

- [ ] Añadir formulario de contacto
- [ ] Integrar con CRM
- [ ] Crear blog para SEO
- [ ] A/B testing de headlines
- [ ] Añadir chat en vivo
- [ ] Sistema de reservas online
- [ ] Galería de proyectos reales
- [ ] Video testimonios

## 📝 NOTAS

Anota aquí cualquier cosa que necesites recordar:

```
- 
- 
- 
```

---

## ✅ COMPLETADO

Cuando hayas terminado todo:

- [ ] ✅ Proyecto personalizado y testeado
- [ ] ✅ Desplegado en Vercel
- [ ] ✅ Dominio configurado (si aplica)
- [ ] ✅ Analytics configurado
- [ ] ✅ SEO verificado

**¡Felicidades! Tu landing page está LIVE 🎉**

---

**Fecha de inicio**: _______________  
**Fecha de deploy**: _______________  
**URL final**: _______________
