import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

type Props = {
  title: string
}

export const Header: FunctionComponent<Props> = ({ title }) => {
  const { asPath } = useRouter()

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <h1 className="text-4xl font-semibold mt-8 lg:mt-0 order-2 lg:order-1">
        {title}
      </h1>
      <nav className="flex items-center order-1 lg:order-2">
        <NavLink href="/" label="About" path={asPath} />
        <NavLink href="/blog" label="Blog" path={asPath} />
        <NavLink href="/playground" label="Playground" path={asPath} />
      </nav>
    </header>
  )
}

type NavLinkProps = {
  href: string
  label: string
  path: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ href, label, path }) => (
  <Link href={href}>
    <a
      className={`font-medium ml-4 first:ml-0 ${
        (href === '/' ? path === href : path.indexOf(href) === 0)
          ? 'text-emerald-500'
          : 'text-gray-700 dark:text-gray-300'
      }`}>
      {label}
    </a>
  </Link>
)
