module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [],
  purge: ['./**/*.tsx', './assets/global.scss'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'IBM Plex Mono',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji'
        ]
      }
    }
  },
  variants: {
    margin: ['responsive', 'first', 'last']
  }
}
