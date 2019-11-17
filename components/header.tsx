import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => {
  const { route } = useRouter()

  return (
    <header className="flex items-center justify-between my-8">
      <Link href="/">
        <a>
          <img
            className="h-12"
            src={`/${Date.now() % 2 === 0 ? 'square' : 'circle'}.svg`}
          />
        </a>
      </Link>
      <nav>
        <Link href="/playground">
          <a
            className={clsx(
              'text-gray-500',

              'hover:text-primary',

              route === '/playground' && 'text-primary'
            )}>
            Playground
          </a>
        </Link>
        <Link href="/about">
          <a
            className={clsx(
              'ml-4',
              'text-gray-500',

              'hover:text-primary',

              route === '/about' && 'text-primary'
            )}>
            About
          </a>
        </Link>
      </nav>
    </header>
  )
}
