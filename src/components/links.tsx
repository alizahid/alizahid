'use client'

import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { fetchLinks } from '~/queries/links'

type Props = {
  active?: string
  className?: string
  links: Awaited<ReturnType<typeof fetchLinks>>
}

export function Links({ active, className, links }: Props) {
  const data = active
    ? links.filter(({ tags }) => tags.includes(active))
    : links

  return (
    <div
      className={twMerge('grid gap-12 lg:grid-cols-2 items-start', className)}
    >
      {data.map((link) => (
        <Link
          className={twMerge('flex items-start gap-4', className)}
          href={link.url}
          key={link.id}
          rel="noopener"
          target="_blank"
        >
          <figure className="w-16 relative h-16">
            <Image
              alt={link.title}
              className="bg-center bg-cover rounded-full"
              fill
              src={link.image}
              unoptimized
            />
          </figure>

          <div className="flex-1 flex flex-col gap-4">
            <div className="text-xl font-semibold">{link.title}</div>

            <div className="text-gray-11">{link.description}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
