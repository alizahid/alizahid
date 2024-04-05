import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <main className="flex flex-col justify-center gap-2 text-pretty">
      <h2 className="text-4xl font-bold">
        Looks like you&#39;re looking for something that doesn&#39;t exist.
      </h2>

      <p className="text-gray-11">Are you sure you got the right link?</p>
    </main>
  )
}
