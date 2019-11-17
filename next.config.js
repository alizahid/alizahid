const withSass = require('@zeit/next-sass')

module.exports = withSass({
  env: {
    uri: process.env.uri
  }
})
