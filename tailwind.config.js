const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    colors,
    extend: {
      colors: {
        highlight: 'rgba(0, 0, 0, 0.5)'
      },
      padding: {
        hero: 'calc(100% / 3 * 2)'
      }
    },
    fontFamily: {
      body: ['Rubik', 'system-ui', 'sans-serif'],
      mono: ['IBM Plex Mono', 'system-ui-monospace', 'monospace']
    }
  },
  variants: {
    margin: ['responsive', 'first']
  }
}
