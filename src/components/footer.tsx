import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export function Footer() {
  const links = [
    {
      href: 'https://github.com/alizahid',
      icon: <GithubLogo className="size-[20px]" />,
    },
    {
      href: 'https://twitter.com/alizah1d',
      icon: <TwitterLogo className="size-[20px]" />,
    },
    {
      href: 'https://linkedin.com/in/alizahid',
      icon: <LinkedinLogo className="size-[20px]" />,
    },
  ]

  return (
    <footer className="lg flex items-center justify-between gap-4">
      <div className="text-2 text-gray-a11">
        &#169; {new Date().getFullYear()} &#215; Ali Zahid
      </div>

      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.icon}
          </Link>
        ))}
      </div>
    </footer>
  )
}
