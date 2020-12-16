const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'media',
  plugins: [],
  purge: ['./**/*.tsx', './**/*.mdx', './styles/global.scss'],
  theme: {
    colors,
    extend: {
      colors: {
        highlight: 'rgba(0, 0, 0, 0.5)',
        one: '#e1567c',
        three: '#584674',
        two: '#362d59'
      }
    },
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      display: ['Poppins', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace']
    }
  },
  variants: {
    extend: {
      margin: ['first']
    }
  }
}
