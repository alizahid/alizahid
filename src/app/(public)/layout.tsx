import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider attribute="class">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 p-6 lg:p-8">
        <Header />

        {children}

        <Footer />
      </div>
    </ThemeProvider>
  )
}
