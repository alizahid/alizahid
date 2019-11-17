const env = require('postcss-preset-env')
const tailwind = require('tailwindcss')

module.exports = {
  plugins: [tailwind, env]
}
