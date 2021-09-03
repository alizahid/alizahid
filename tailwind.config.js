const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  mode: 'jit',
  plugins: [],
  purge: ['components/**/*.tsx', 'pages/**/*.tsx', 'styles/*.scss'],
  theme: {
    colors,
    extend: {
      colors: {
        primary: colors.emerald
      }
    },
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Satoshi', 'sans-serif']
    }
  },
  variants: {}
}
