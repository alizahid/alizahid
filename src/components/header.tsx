'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

import { Highlight } from './highlight'

export function Header() {
  const path = usePathname()

  const links = [
    {
      href: '/blog',
      label: 'Blog',
    },
    {
      href: '/playground',
      label: 'Playground',
    },
    {
      href: '/links',
      label: 'Links',
    },
  ] as const

  return (
    <header className="flex items-start justify-between gap-4">
      <Link className="rounded-full outline-none focus-visible:ring-2" href="/">
        <Image
          alt="Ali Zahid"
          className="rounded-full bg-neutral-100"
          height={48}
          src="https://media.graphcms.com/resize=width:96/GJrB3pURnqRlaj61Z3Qp"
          unoptimized
          width={48}
        />
      </Link>

      <nav className="flex gap-4">
        {links.map((link) => (
          <Link
            className={twMerge(
              'font-medium leading-tight outline-none hover:text-neutral-800 focus-visible:bg-neutral-200',
              path.length > 1 && path.startsWith(link.href)
                ? ''
                : 'text-neutral-600',
            )}
            href={link.href}
            key={link.href}
          >
            <Highlight show={path.length > 1 && path.startsWith(link.href)}>
              {link.label}
            </Highlight>
          </Link>
        ))}
      </nav>
    </header>
  )
}
