const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  mode: 'jit',
  plugins: [],
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
