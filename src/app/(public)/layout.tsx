import { type ReactNode } from 'react'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-9 p-6 lg:p-8">
      <Header />

      {children}

      <Footer />
    </div>
  )
}
