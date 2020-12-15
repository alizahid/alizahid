import Image from 'next/image'
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
    <header className="flex items-center">
      <Image
        alt={name}
        height={64}
        priority
        src={`/playground/${name.toLowerCase()}.png`}
        width={64}
      />
      <h2 className="text-xl font-semibold leading-tight ml-4">{name}</h2>
    </header>
    <div className="my-4 text-trueGray-700 dark:text-trueGray-300">
      {children}
    </div>
    <footer>
      {links.map(({ label, link }) => (
        <a className="text-emerald-500 ml-4 first:ml-0" href={link} key={label}>
          {label}
        </a>
      ))}
    </footer>
  </article>
)
