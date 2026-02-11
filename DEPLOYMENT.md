# 🚀 Guía Rápida de Deployment en Vercel

## Opción 1: Deploy desde el Dashboard de Vercel (Recomendado)

### Paso 1: Preparar el proyecto

1. Asegúrate de que tu proyecto esté en GitHub, GitLab o Bitbucket
2. Si no está en Git, inicializa un repositorio:

```bash
git init
git add .
git commit -m "Initial commit: RestoWeb Pro landing page"
git branch -M main
git remote add origin <tu-repositorio-url>
git push -u origin main
```

### Paso 2: Import en Vercel

1. Ve a [vercel.com](https://vercel.com) y haz login
2. Click en "Add New Project"
3. Importa tu repositorio de Git
4. Vercel detectará automáticamente que es Next.js

### Paso 3: Configuración

Vercel detectará automáticamente:
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Paso 4: Variables de Entorno (Opcional)

Si usas variables de entorno, agrégalas en:
- Settings → Environment Variables

```
NEXT_PUBLIC_WHATSAPP_NUMBER=34600000000
NEXT_PUBLIC_EMAIL=info@restowebpro.com
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

### Paso 5: Deploy

1. Click en "Deploy"
2. Espera 2-3 minutos
3. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

## Opción 2: Deploy con Vercel CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Login en Vercel
vercel login

# Deploy en preview
vercel

# Deploy en producción
vercel --prod
```

## Configurar Dominio Personalizado

### En Vercel Dashboard:

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Add Domain
4. Sigue las instrucciones para configurar DNS

### Configuración DNS típica:

**Para dominio raíz (restowebpro.com):**
- Type: A
- Name: @
- Value: 76.76.21.21

**Para www:**
- Type: CNAME
- Name: www
- Value: cname.vercel-dns.com

## Optimizaciones Post-Deploy

### 1. Analytics

En Vercel Dashboard:
- Analytics → Enable Vercel Analytics

### 2. Speed Insights

```bash
npm i @vercel/speed-insights
```

En `app/layout.tsx`:
```typescript
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### 3. Configurar Headers de Seguridad

Crea `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## Configuración de Redirects (si necesario)

En `next.config.ts`:

```typescript
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
```

## Monitoring y Updates

### Automatic Deployments

Cada push a la rama `main` desplegará automáticamente.

Para otras ramas:
- Se crean preview deployments automáticamente
- Perfecto para testing antes de merge

### Preview Deployments

Cada Pull Request genera una URL única de preview:
- `https://tu-proyecto-git-branch-name.vercel.app`

## Rollback

Si algo sale mal:

1. Ve a Deployments en Vercel
2. Encuentra el deployment anterior que funcionaba
3. Click en "..." → "Promote to Production"

## Performance Tips

1. **Edge Functions**: Ya optimizado por defecto
2. **Image Optimization**: Next.js lo hace automáticamente
3. **Caching**: Configurado automáticamente por Vercel
4. **CDN Global**: Tu sitio se sirve desde múltiples ubicaciones

## Checklist Pre-Launch

- [ ] Actualizar número de WhatsApp real
- [ ] Actualizar email de contacto
- [ ] Cambiar URLs de redes sociales
- [ ] Revisar todos los enlaces
- [ ] Probar formularios de contacto
- [ ] Verificar metadata SEO
- [ ] Actualizar precios si es necesario
- [ ] Añadir Google Analytics
- [ ] Configurar dominio personalizado
- [ ] Probar en mobile
- [ ] Probar velocidad (PageSpeed Insights)
- [ ] Revisar en diferentes navegadores
- [ ] Configurar SSL (automático en Vercel)

## Soporte

- Documentación Vercel: https://vercel.com/docs
- Documentación Next.js: https://nextjs.org/docs
- Comunidad Discord de Vercel

---

**¡Tu landing page estará live en minutos! 🚀**
