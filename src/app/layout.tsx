import '~/styles/global.css'

import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

const sans = localFont({
  display: 'swap',
  src: [
    {
      path: '../assets/fonts/sans-book.woff2',
      weight: '400',
    },
    {
      path: '../assets/fonts/sans-medium.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/sans-bold.woff2',
      weight: '700',
    },
    {
      path: '../assets/fonts/sans-black.woff2',
      weight: '900',
    },
  ],
  variable: '--font-sans',
})

const mono = localFont({
  display: 'swap',
  src: '../assets/fonts/mono-regular.woff2',
  variable: '--font-mono',
})

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html className={`${sans.variable} ${mono.variable}`} lang="en">
      <body className="min-h-screen flex flex-col p-8 max-w-6xl mx-auto">
        <Header />

        {children}

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}
