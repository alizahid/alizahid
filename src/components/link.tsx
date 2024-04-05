import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { fetchLinks } from '~/queries/links'

type Props = {
  className?: string
  link: Awaited<ReturnType<typeof fetchLinks>>[number]
}

export function LinkCard({ className, link }: Props) {
  return (
    <Link
      className={twMerge('flex items-start gap-4', className)}
      href={link.url}
      rel="noopener"
      target="_blank"
    >
      <figure className="relative h-16 w-16">
        <Image
          alt={link.title}
          className="rounded-lg bg-cover bg-center"
          fill
          src={link.image}
          unoptimized
        />
      </figure>

      <div className="flex flex-1 flex-col">
        <div className="text-xl font-semibold">{link.title}</div>

        <div className="text-pretty text-gray-11">{link.description}</div>
      </div>
    </Link>
  )
}
