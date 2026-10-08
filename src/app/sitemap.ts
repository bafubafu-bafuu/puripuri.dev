import { MetadataRoute } from 'next'

export const dynamic = "force-static";
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://puripuri.dev',
      lastModified: new Date('2026-10-09'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
