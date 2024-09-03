import { type Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex min-h-screen flex-col justify-center gap-6 text-pretty p-6">
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
