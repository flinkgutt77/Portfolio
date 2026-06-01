import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
  async redirects() {
    return [
      // Redirect old domains to ujstudio.no permanently
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ujstudionorge.com' }],
        destination: 'https://ujstudio.no/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.ujstudionorge.com' }],
        destination: 'https://ujstudio.no/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ujstudionorge.no' }],
        destination: 'https://ujstudio.no/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
