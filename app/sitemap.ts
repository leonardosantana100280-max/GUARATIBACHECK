import type { MetadataRoute } from 'next'
import { business } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: business.siteUrl, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${business.siteUrl}/politica-de-privacidade`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${business.siteUrl}/termos-de-uso`, lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
