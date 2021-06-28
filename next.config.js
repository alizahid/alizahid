module.exports = {
  images: {
    domains: ['media.graphcms.com']
  },
  async redirects() {
    return [
      {
        destination: 'https://willa.app?utm_source=index',
        permanent: true,
        source: '/index'
      }
    ]
  }
}
