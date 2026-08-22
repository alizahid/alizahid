import { type Metadata } from 'next'

import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-32 p-6 lg:p-8">
      <Header />

      <main className="flex-1">
        <h1 className="font-bold text-6xl md:text-9xl">Nothing here</h1>
      </main>

      <Footer />
    </div>
  )
}
