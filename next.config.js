/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['media.graphassets.com']
  },
  async redirects() {
    return [
      {
        destination: 'https://willa.app?utm_source=index',
        permanent: true,
        source: '/index'
      }
    ]
  },
  async rewrites() {
    return [
      {
        destination: '/links?tag=:slug',
        source: '/links/:slug'
      }
    ]
  }
}
