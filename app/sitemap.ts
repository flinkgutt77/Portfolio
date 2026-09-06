import { MetadataRoute } from 'next'
import { portfolioCategories } from '@/lib/data'
import { locale, siteUrl } from '@/lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...portfolioCategories.map(p => ({
      url: `${siteUrl}/portfolio/${p.slug[locale]}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
