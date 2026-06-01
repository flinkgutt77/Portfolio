import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  // Redirects to ujstudio.no re-enabled once Norid activates the domain
  // async redirects() { ... }
}

export default nextConfig
