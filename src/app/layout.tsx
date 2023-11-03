import '~/styles/global.css'

import { Analytics } from '@vercel/analytics/react'
import { GeistMono, GeistSans } from 'geist/font'
import { ReactNode } from 'react'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body className="min-h-screen flex flex-col p-8 max-w-6xl mx-auto">
        <Header />

        {children}

        <Footer />

        <Analytics />
      </body>
    </html>
  )
}
