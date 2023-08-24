/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['media.graphassets.com', 'media.graphcms.com'],
  },
  async rewrites() {
    return [
      {
        destination: '/links?tag=:slug',
        source: '/links/:slug',
      },
    ]
  },
}
