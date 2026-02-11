# ⚡ Quick Start Guide

## Para empezar en 3 minutos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo
```bash
npm run dev
```

### 3. Abrir en el navegador
Visita: http://localhost:3000

¡Eso es todo! Ya tienes la landing page corriendo localmente.

## 🎯 Checklist de Personalización Rápida

Antes de publicar, actualiza estos elementos clave:

### ✅ Contacto (IMPORTANTE)
- [ ] Número de WhatsApp → Buscar `34600000000` y reemplazar
- [ ] Email → Buscar `info@restowebpro.com` y reemplazar
- [ ] URLs de redes sociales en Footer

### ✅ Contenido
- [ ] Revisar precios en `PacksSection.tsx`
- [ ] Personalizar características de los packs
- [ ] Actualizar testimonios con casos reales
- [ ] Cambiar URLs de ejemplos/demos

### ✅ Branding
- [ ] Ajustar colores en `tailwind.config.ts` (opcional)
- [ ] Personalizar textos del Hero
- [ ] Revisar metadata SEO en `layout.tsx`

## 🚀 Deploy Rápido en Vercel

### Opción más rápida (3 pasos):

1. **Sube a GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push
```

2. **Importa en Vercel**
- Ve a https://vercel.com
- Click "Import Project"
- Selecciona tu repo

3. **Deploy**
- Click "Deploy"
- ¡Listo en 2 minutos!

Tu URL será: `https://tu-proyecto.vercel.app`

## 📚 Documentación Completa

- **README.md** - Documentación principal y estructura
- **DEPLOYMENT.md** - Guía detallada de deployment
- **CUSTOMIZATION.md** - Cómo personalizar todo

## 🆘 Problemas Comunes

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 3000 en uso
```bash
# Usa otro puerto
npm run dev -- -p 3001
```

### Errores de TypeScript
```bash
# Limpia la caché
rm -rf .next
npm run dev
```

## 📞 Archivos Clave para Personalizar

| Archivo | Qué cambiar |
|---------|-------------|
| `components/sections/HeroSection.tsx` | Headline, subheadline, CTAs |
| `components/sections/PacksSection.tsx` | Precios y características |
| `components/sections/Footer.tsx` | Contacto y redes sociales |
| `components/ui/WhatsAppButton.tsx` | Número de WhatsApp |
| `app/layout.tsx` | SEO metadata |
| `tailwind.config.ts` | Colores y diseño |

## ✨ Features Incluidas

- ✅ Mobile-first responsive
- ✅ SEO optimizado
- ✅ WhatsApp flotante
- ✅ Animaciones suaves
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Next.js 14 App Router
- ✅ Optimizado para conversión

## 🎨 Secciones de la Landing

1. **Hero** - Primera impresión con CTAs
2. **Qué Ofrecemos** - Servicios incluidos
3. **Cómo Funciona** - 3 pasos
4. **Packs** - Precios y planes
5. **Ejemplos** - Demos de trabajo
6. **Beneficios** - Por qué elegir
7. **Testimonios** - Prueba social
8. **CTA Final** - Última oportunidad
9. **Footer** - Contacto e info legal

## 💡 Próximos Pasos Sugeridos

1. Personaliza el contenido (contacto, precios, textos)
2. Prueba localmente
3. Deploy en Vercel
4. Configura dominio personalizado
5. Añade Google Analytics
6. Actualiza con testimonios reales
7. Añade fotos reales de proyectos

## 🔗 Links Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Lucide Icons](https://lucide.dev)

---

**¿Listo para lanzar?** Sigue la guía en DEPLOYMENT.md 🚀
