import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <main className="flex flex-col gap-4 justify-center">
      <h2 className="text-2xl font-semibold">
        Looks like you&#39;re looking for something that doesn&#39;t exist.
      </h2>

      <p className="text-gray-11">Are you sure you got the right link?</p>
    </main>
  )
}
