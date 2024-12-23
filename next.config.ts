import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // domains: ['github.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '**'
      }
    ]
  }
}

export default nextConfig
