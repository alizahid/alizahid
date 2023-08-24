'use client'

import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { fetchLinks } from '~/queries/links'

type Props = {
  active?: string
  className?: string
  links: Awaited<ReturnType<typeof fetchLinks>>
}

export function LinksCard({ active, className, links }: Props) {
  const data = active
    ? links.filter(({ tags }) => tags.includes(active))
    : links

  return (
    <div
      className={twMerge('grid gap-12 lg:grid-cols-2 items-start', className)}
    >
      {data.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  )
}

type LinkProps = {
  className?: string
  link: Awaited<ReturnType<typeof fetchLinks>>[number]
}

export function LinkCard({ className, link }: LinkProps) {
  return (
    <Link
      className={twMerge('flex items-center gap-4', className)}
      href={link.url}
      rel="noopener"
      target="_blank"
    >
      <div
        className="w-16 h-16 bg-center bg-cover rounded-full"
        style={{
          backgroundImage: `url(${link.image})`,
        }}
      />

      <div className="flex-1 flex flex-col gap-2">
        <div className="text-lg font-medium">{link.title}</div>

        {link.description && (
          <div className="text-gray-11">{link.description}</div>
        )}
      </div>
    </Link>
  )
}
