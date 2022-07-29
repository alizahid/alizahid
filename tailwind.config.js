const colors = require('tailwindcss/colors')

module.exports = {
  content: ['components/**/*.tsx', 'pages/**/*.tsx', 'styles/*.scss'],
  plugins: [],
  theme: {
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
