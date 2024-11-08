const { range } = require('lodash')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    borderRadius: {
      0: '0px',
      1: '3px',
      2: '4px',
      3: '6px',
      4: '8px',
      5: '12px',
      6: '16px',
      full: '100%',
    },
    colors: {
      accent: generatePalette('violet'),
      amber: generatePalette('amber'),
      black: generatePalette('black'),
      current: 'currentColor',
      gray: generatePalette('sage'),
      indigo: generatePalette('indigo'),
      ruby: generatePalette('ruby'),
      teal: generatePalette('teal'),
      transparent: 'transparent',
      white: generatePalette('white'),
    },
    fontFamily: {
      body: ['var(--font-body)'],
      code: ['var(--font-code)'],
      resume: ['var(--font-resume)'],
    },
    fontSize: {
      1: ['12px', '16px'],
      2: ['14px', '20px'],
      3: ['16px', '24px'],
      4: ['18px', '26px'],
      5: ['20px', '28px'],
      6: ['24px', '30px'],
      7: ['28px', '36px'],
      8: ['35px', '40px'],
      9: ['60px', '60px'],
    },
    spacing: {
      0: '0px',
      1: '4px',
      10: '128px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '64px',
    },
  },
}

function generatePalette(name) {
  const dark = ['sky', 'mint', 'lime', 'yellow', 'amber']

  return Object.fromEntries(
    range(1, 13).flatMap((scale) => [
      [`a${scale}`, `var(--${name}-a${scale})`],
      ['contrast', dark.includes(name) ? '#000' : '#fff'],
    ]),
  )
}
