import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

export function SocialLinks({ className }: Props) {
  const links = [
    {
      href: 'https://github.com/alizahid',
      icon: <GitHubLogoIcon className="size-5" />,
    },
    {
      href: 'https://twitter.com/alizah1d',
      icon: <TwitterLogoIcon className="size-5" />,
    },
    {
      href: 'https://linkedin.com/in/alizahid',
      icon: <LinkedInLogoIcon className="size-5" />,
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
          {link.icon}
        </Link>
      ))}
    </div>
  )
}
