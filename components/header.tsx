import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'

interface NavLinkProps {
  href: string
  label: string
  route: string
}

const NavLink: FunctionComponent<NavLinkProps> = ({ href, label, route }) => (
  <Link href={href}>
    <a
      className={`text-gray-800 font-medium hover:text-red-500 ml-4 first:ml-0 ${
        route === href ? 'text-red-500' : ''
      }`}>
      {label}
    </a>
  </Link>
)

export const Header: FunctionComponent = () => {
  const { route } = useRouter()

  return (
    <header className="flex flex-col lg:flex-row lg:items-center lg:justify-between m-8">
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
        <NavLink href="/sale" label="Sale" route={route} />
        <NavLink href="/learning" label="Learning" route={route} />
        <NavLink href="/playground" label="Playground" route={route} />
        <NavLink href="/about" label="About" route={route} />
      </nav>
    </header>
  )
}
