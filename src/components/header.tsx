'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const path = usePathname()

  const links = [
    {
      href: '#writings',
      label: 'Writings',
    },
    {
      href: '#works',
      label: 'Works',
    },
    {
      href: '#bookmarks',
      label: 'Bookmarks',
    },
  ]

  return (
    <header className="flex items-start justify-between gap-4">
      <Link href="/">
        <Image
          alt="Ali Zahid"
          className="rounded-full bg-gray-a3"
          height={48}
          src="https://media.graphcms.com/resize=width:96/GJrB3pURnqRlaj61Z3Qp"
          unoptimized
          width={48}
        />
      </Link>

      <nav className="flex gap-3">
        {links.map((link) => (
          <Link
            className={twMerge(
              'font-medium',
              link.href === path ? 'text-accent-a11' : 'text-gray-a11',
            )}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
