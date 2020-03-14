import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent = () => {
  const { route } = useRouter()

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-8">
      <Link href="/">
        <a className="flex items-center">
          <img
            alt="Ali Zahid"
            className="h-10 w-10 rounded-full mr-4"
            src="/ali-zahid.jpg"
          />
          <h1 className="text-2xl font-semibold text-black">Ali Zahid</h1>
        </a>
      </Link>
      <nav className="mt-8 lg:mt-0">
        <Link href="/learning">
          <a
            className={clsx(
              'text-gray-500 hover:text-primary',
              route === '/learning' && 'text-primary'
            )}>
            Learning
          </a>
        </Link>
        <Link href="/playground">
          <a
            className={clsx(
              'ml-4 text-gray-500 hover:text-primary',
              route === '/playground' && 'text-primary'
            )}>
            Playground
          </a>
        </Link>
        <Link href="/about">
          <a
            className={clsx(
              'ml-4 text-gray-500 hover:text-primary',
              route === '/about' && 'text-primary'
            )}>
            About
          </a>
        </Link>
      </nav>
    </header>
  )
}
