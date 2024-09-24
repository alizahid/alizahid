import { House } from '@phosphor-icons/react/dist/ssr'
import { type Metadata } from 'next'
import Link from 'next/link'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen max-w-4xl flex-col items-start justify-center gap-6 text-pretty p-6 lg:p-8">
        <Link href="/">
          <House className="size-6" />
        </Link>

        <h2 className="text-9 font-bold">
          Looks like you&#39;re looking for something that doesn&#39;t exist.
        </h2>

        <p className="text-6 text-gray-a11">
          Are you sure you got the right link?
        </p>
      </main>
    </ThemeProvider>
  )
}
