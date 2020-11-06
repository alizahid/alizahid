module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    extend: {
      colors: {
        highlight: 'rgba(0, 0, 0, 0.5)',
        primary: '#48bb78'
      },
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'Consolas',
          'Menlo',
          'Monaco',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        sans: [
          'Rubik',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      },
      padding: {
        hero: 'calc(100% / 3 * 2)'
      },
      screens: {
        dark: {
          raw: '(prefers-color-scheme: dark)'
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'first'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover']
  }
}
