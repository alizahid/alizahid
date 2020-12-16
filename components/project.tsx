import NextImage from 'next/image'
import React, { FunctionComponent } from 'react'

import { ProjectMeta } from '../types'

type Props = {
  content: unknown
  meta: ProjectMeta
}

export const Project: FunctionComponent<Props> = ({ content, meta }) => (
  <article className="mt-16 first:mt-0">
    <header className="flex items-center">
      <NextImage
        alt={meta.name}
        height={64}
        priority
        src={`/playground/${meta.slug}.png`}
        width={64}
      />
      <h2 className="text-xl font-semibold ml-4">{meta.name}</h2>
    </header>
    {content}
  </article>
)

export const ProjectContent: FunctionComponent = ({ children }) => (
  <div className="my-4 text-gray-700 dark:text-gray-300">{children}</div>
)

export const ProjectFooter: FunctionComponent = ({ children }) => (
  <footer className="text-sm">{children}</footer>
)

type LinkProps = {
  href: string
}

export const ProjectLink: FunctionComponent<LinkProps> = ({
  children,
  href
}) => (
  <a className="text-emerald-500 font-medium ml-4 first:ml-0" href={href}>
    {children}
  </a>
)
