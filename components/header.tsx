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

  return (
    <header className={clsx('flex items-center justify-between', className)}>
      <Link href="/">
        <a>
          <Image
            alt="Ali Zahid"
            className="bg-white rounded-full dark:bg-black"
            height={48}
            src="https://media.graphcms.com/resize=width:96/GJrB3pURnqRlaj61Z3Qp"
            unoptimized
            width={48}
          />
        </a>
      </Link>

      <nav className="flex text-sm">
        <Link href="/">
          <a
            className={clsx(
              'dark:text-white font-medium p-3 hidden lg:block',
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
              'dark:text-white font-medium p-3',
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
              'dark:text-white font-medium p-3',
              asPath.startsWith('/playground')
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-black'
            )}>
            Playground
          </a>
        </Link>
      </nav>
    </header>
  )
}
