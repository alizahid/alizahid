import localFont from 'next/font/local'

export const body = localFont({
  src: './body.woff2',
  variable: '--font-body',
  weight: '100 900',
})

export const code = localFont({
  src: './code.woff2',
  variable: '--font-code',
  weight: '100 900',
})

export const resume = localFont({
  src: './resume.woff2',
  variable: '--font-resume',
  weight: '100 900',
})
