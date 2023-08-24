import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Icon } from './icon'

type Props = {
  className?: string
  size?: number
}

export function SocialLinks({ className, size = 32 }: Props) {
  return (
    <div className={twMerge('flex', className)}>
      <Link
        className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white"
        href="https://github.com/alizahid"
      >
        <Icon name="github" size={size} />

        <span className="hidden">GitHub</span>
      </Link>

      <Link
        className="ml-4 text-neutral-600 dark:text-neutral-400 hover:text-[#1db954]"
        href="https://open.spotify.com/user/alizahid"
      >
        <Icon name="spotify" size={size} />

        <span className="hidden">Spotify</span>
      </Link>

      <Link
        className="ml-4 text-neutral-600 dark:text-neutral-400 hover:text-[#1da1f2]"
        href="https://twitter.com/alizahid0"
      >
        <Icon name="twitter" size={size} />

        <span className="hidden">Twitter</span>
      </Link>

      <Link
        className="ml-4 text-neutral-600 dark:text-neutral-400 hover:text-[#ea4c89]"
        href="https://dribbble.com/alizahid"
      >
        <Icon name="dribbble" size={size} />

        <span className="hidden">Dribbble</span>
      </Link>
    </div>
  )
}
