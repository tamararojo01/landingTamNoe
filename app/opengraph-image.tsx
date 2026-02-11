import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'RestoWeb Pro'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #d3321e 0%, #e64f3c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 'bold', marginBottom: 20 }}>
          🍽️ RestoWeb Pro
        </div>
        <div style={{ fontSize: 40, fontWeight: 'normal' }}>
          Webs + Fotos Profesionales
        </div>
        <div style={{ fontSize: 32, fontWeight: 'normal', marginTop: 20 }}>
          para Restaurantes
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
