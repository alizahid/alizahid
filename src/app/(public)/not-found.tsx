import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <main className="flex-1">
      <h1 className="font-bold text-6xl md:text-9xl">Nothing here</h1>
    </main>
  )
}
