import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? 'https://ny0r.github.io/siftracker' : 'https://sif-tracker-omega.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
