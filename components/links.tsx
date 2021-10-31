import Hyperlink from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import { Link } from '../types'

type Props = {
  className?: string
  links: Array<Link>
}

export const LinksCard: FunctionComponent<Props> = ({ className, links }) => {
  const { query } = useRouter()

  const data = useMemo(() => {
    if (query.tag) {
      return links.filter(({ tags }) => tags.includes(String(query.tag)))
    }

    return links
  }, [links, query.tag])

  return (
    <div
      className={twMerge('grid gap-12 lg:grid-cols-2 items-start', className)}>
      {data.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  )
}

type LinkProps = {
  className?: string
  link: Link
}

export const LinkCard: FunctionComponent<LinkProps> = ({ className, link }) => (
  <Hyperlink href={link.url}>
    <a
      className={twMerge('flex items-center', className)}
      rel="noopener"
      target="_blank">
      <div
        className="w-16 h-16 bg-center bg-cover rounded-full"
        style={{
          backgroundImage: `url(${link.image})`
        }}
      />

      <div className="flex-1 ml-4">
        <div className="text-lg font-medium">{link.title}</div>
        {link.description && (
          <div className="mt-2 text-gray-600 dark:text-gray-400">
            {link.description}
          </div>
        )}
      </div>
    </a>
  </Hyperlink>
)
