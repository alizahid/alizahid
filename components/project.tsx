import React, { FunctionComponent } from 'react'

import { Link } from '../types'

interface Props {
  links: Link[]
  name: string
}

export const Project: FunctionComponent<Props> = ({
  children,
  links,
  name
}) => (
  <article className="mt-16 first:mt-0">
    <h2 className="text-xl font-semibold leading-tight">{name}</h2>
    <div className="my-4 text-gray-700 dark:text-gray-300">{children}</div>
    <footer>
      {links.map(({ label, link }) => (
        <a className="text-red-500 ml-4 first:ml-0" href={link} key={label}>
          {label}
        </a>
      ))}
    </footer>
  </article>
)
