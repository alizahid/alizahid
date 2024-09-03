/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        destination: '/writings/:slug',
        permanent: true,
        source: '/blog/:slug',
      },
      {
        destination: '/works',
        permanent: true,
        source: '/playground',
      },
    ]
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
