import { HouseIcon } from '@phosphor-icons/react/dist/ssr'
import { type Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Not found × Ali Zahid',
}

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-start justify-center gap-6 text-pretty">
      <Link href="/">
        <HouseIcon className="size-16" weight="duotone" />
      </Link>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">
          Looks like you&#39;re looking for something that doesn&#39;t exist.
        </h1>

        <p className="text-neutral-600">Are you sure you got the right link?</p>
      </div>
    </main>
  )
}
