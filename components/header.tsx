import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

type Props = {
  className?: string
}

export const Header: FunctionComponent<Props> = ({ className }) => {
  const { asPath } = useRouter()

  const isHome = asPath === '/'

  return (
    <header
      className={clsx(
        !isHome && 'flex items-center justify-between',
        className
      )}>
      <Link href="/">
        <a>
          <Image
            alt="Ali Zahid"
            className="bg-white dark:bg-black rounded-full"
            height={64}
            priority
            src="https://media.graphcms.com/GJrB3pURnqRlaj61Z3Qp"
            width={64}
          />
        </a>
      </Link>

      {isHome ? (
        <h1 className="text-2xl font-semibold mt-8">
          I have a patent on blowing minds with epic design.
        </h1>
      ) : (
        <nav className="flex">
          <Link href="/">
            <a
              className={clsx(
                'dark:text-white font-medium',
                asPath === '/'
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-black'
              )}>
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={clsx(
                'dark:text-white font-medium ml-4',
                asPath.startsWith('/blog')
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-black'
              )}>
              Blog
            </a>
          </Link>
          <Link href="/playground">
            <a
              className={clsx(
                'dark:text-white font-medium ml-4',
                asPath.startsWith('/playground')
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-black'
              )}>
              Playground
            </a>
          </Link>
        </nav>
      )}
    </header>
  )
}
