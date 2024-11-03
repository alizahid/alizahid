'use client'

import { BookmarkSimple, BookOpen, Cube } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const path = usePathname()

  const links = [
    {
      href: '/blog',
      icon: <BookOpen className="size-6 lg:size-5" weight="duotone" />,
      label: 'Blog',
    },
    {
      href: '/playground',
      icon: <Cube className="size-6 lg:size-5" weight="duotone" />,
      label: 'Playground',
    },
    {
      href: '/links',
      icon: <BookmarkSimple className="size-6 lg:size-5" weight="duotone" />,
      label: 'Links',
    },
  ] as const

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

      <nav className="flex gap-4 lg:gap-6">
        {links.map((link) => (
          <Link
            className={twMerge(
              'flex items-center gap-2 font-medium hover:text-accent-a11',
              path.length > 1 && link.href.startsWith(path)
                ? 'text-accent-a11'
                : 'text-gray-a12',
            )}
            href={link.href}
            key={link.href}
          >
            {link.icon}

            <span className="hidden lg:block">{link.label}</span>
          </Link>
        ))}
      </nav>
    </header>
  )
}
