export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? 'https://ny0r.github.io/siftracker/' : 'https://sif-tracker-omega.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ]
}
