import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Header: FunctionComponent = () => {
  const { asPath } = useRouter()

  return (
    <header className="flex items-center justify-between">
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

      <nav className="flex">
        <NavLink asPath={asPath} className="hidden lg:block" href="/">
          Home
        </NavLink>
        <NavLink asPath={asPath} href="/blog">
          Blog
        </NavLink>
        <NavLink asPath={asPath} href="/links">
          Links
        </NavLink>
        <NavLink asPath={asPath} href="/playground">
          Playground
        </NavLink>
      </nav>
    </header>
  )
}

type NavLinkProps = {
  asPath: string
  children: ReactNode
  className?: string
  href: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({
  asPath,
  children,
  className,
  href,
}) => (
  <Link href={href}>
    <a
      className={twMerge(
        'dark:text-white font-medium p-3',
        (href.slice(-1) === '/' ? asPath === href : asPath.startsWith(href))
          ? 'text-primary-600 dark:text-primary-400 font-semibold'
          : 'text-black',
        className
      )}
    >
      {children}
    </a>
  </Link>
)
