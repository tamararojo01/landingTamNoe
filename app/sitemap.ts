export async function generateSitemaps() {
  return [{ id: 0 }]
}

export default async function sitemap() {
  const baseUrl = 'https://restowebpro.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]
}
