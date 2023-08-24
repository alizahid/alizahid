'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const path = usePathname()

  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        <Image
          alt="Ali Zahid"
          className="bg-gray-3 rounded-full"
          height={48}
          src="https://media.graphcms.com/resize=width:96/GJrB3pURnqRlaj61Z3Qp"
          unoptimized
          width={48}
        />
      </Link>

      <nav className="flex">
        <NavLink className="hidden lg:block" href="/" path={path}>
          Home
        </NavLink>

        <NavLink href="/blog" path={path}>
          Blog
        </NavLink>

        <NavLink href="/playground" path={path}>
          Playground
        </NavLink>

        <NavLink href="/links" path={path}>
          Links
        </NavLink>
      </nav>
    </header>
  )
}

type NavLinkProps = {
  children: ReactNode
  className?: string
  href: string
  path: string
}

function NavLink({ children, className, href, path }: NavLinkProps) {
  return (
    <Link
      className={twMerge(
        'font-medium p-3',
        (href.slice(-1) === '/' ? path === href : path.startsWith(href))
          ? 'text-grass-11 font-semibold'
          : 'text-gray-11',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
