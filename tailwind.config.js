const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  darkMode: 'media',
  mode: 'jit',
  plugins: [typography],
  purge: ['components/**/*.tsx', 'pages/**/*.tsx', 'styles/*.scss'],
  theme: {
    colors,
    extend: {},
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Inter', 'sans-serif']
    }
  },
  variants: {}
}
