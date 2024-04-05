import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export function SocialLinks({ className }: Props) {
  const links = [
    {
      href: 'https://github.com/alizahid',
      label: 'GitHub',
    },
    {
      href: 'https://twitter.com/alizah1d',
      label: 'Twitter',
    },
    {
      href: 'https://linkedin.com/in/alizahid',
      label: 'LinkedIn',
    },
    {
      href: 'https://dribbble.com/alizahid',
      label: 'Dribbble',
    },
  ]

  return (
    <div className={twMerge('flex gap-4', className)}>
      {links.map((link) => (
        <Link
          className="text-gray-11 hover:text-gray-12"
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
