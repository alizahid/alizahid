/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        destination: '/writings/:slug',
        permanent: true,
        source: '/blog/:slug',
      },
    ]
  },
}
