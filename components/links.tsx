import clsx from 'clsx'
import Hyperlink from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, useMemo } from 'react'

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
    <div className={clsx('grid gap-12 lg:grid-cols-2', className)}>
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
      className={clsx('flex items-center', className)}
      rel="noopener"
      target="_blank">
      <div
        className="w-12 h-12 bg-gray-200 bg-center bg-cover rounded-full dark:bg-gray-800"
        style={{
          backgroundImage: `url(${link.image})`
        }}
      />

      <div className="flex-1 ml-4">
        <div className="font-medium">{link.title}</div>
        {link.description && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {link.description}
          </div>
        )}
      </div>
    </a>
  </Hyperlink>
)
