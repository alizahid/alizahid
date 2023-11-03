/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx'],
  plugins: [
    require('windy-radix-palette'),
    require('@tailwindcss/typography'),
    require('windy-radix-typography'),
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-geist-mono)'],
        sans: ['var(--font-geist-sans)'],
      },
    },
  },
}
