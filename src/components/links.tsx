'use client'

import Link from 'next/link'
import { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { fetchLinks } from '~/queries/links'

type Props = {
  active?: string
  className?: string
  links: Awaited<ReturnType<typeof fetchLinks>>
}

export const LinksCard: FunctionComponent<Props> = ({
  active,
  className,
  links,
}) => {
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

export const LinkCard: FunctionComponent<LinkProps> = ({ className, link }) => (
  <Link
    className={twMerge('flex items-center', className)}
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

    <div className="flex-1 ml-4">
      <div className="text-lg font-medium">{link.title}</div>

      {link.description && (
        <div className="mt-2 text-neutral-600 dark:text-neutral-400">
          {link.description}
        </div>
      )}
    </div>
  </Link>
)
