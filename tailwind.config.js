const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', 'src/styles/*.scss'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,
      },
    },
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      sans: ['Satoshi', 'sans-serif'],
    },
  },
}
