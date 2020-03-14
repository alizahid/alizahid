const withSass = require('@zeit/next-sass')

module.exports = withSass({
  env: {
    URI: process.env.URI
  }
})
