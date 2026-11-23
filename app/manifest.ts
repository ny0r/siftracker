export const dynamic = 'force-static'

import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SIF Tracker',
    short_name: 'SIF Tracker',
    description: 'Production workload and clock-out time calculator.',
    start_url: process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/siftracker/' : '/',
    scope: process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/siftracker/' : '/',
    display: 'standalone',
    background_color: '#0A0A0B',
    theme_color: '#2563EB',
    icons: [
      { src: `${process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/siftracker' : ''}/icon-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/siftracker' : ''}/icon-512.png`, sizes: '512x512', type: 'image/png' },
      { src: `${process.env.NEXT_PUBLIC_GITHUB_PAGES === 'true' ? '/siftracker' : ''}/icon-maskable-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
