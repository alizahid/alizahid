import Image from 'next/image'
import Link from 'next/link'

export function Header() {
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
  ]

  return (
    <header className="flex items-start justify-between gap-4">
      <Link href="/">
        <Image
          alt="Ali Zahid"
          className="rounded-full bg-sageA3"
          height={48}
          src="https://media.graphcms.com/resize=width:96/GJrB3pURnqRlaj61Z3Qp"
          unoptimized
          width={48}
        />
      </Link>

      <nav className="flex gap-3">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
