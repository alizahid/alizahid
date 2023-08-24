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
        className="text-gray-11 hover:text-gray-12"
        href="https://github.com/alizahid"
      >
        <Icon name="github" size={size} />

        <span className="hidden">GitHub</span>
      </Link>

      <Link
        className="ml-4 text-gray-11 hover:text-[#1db954]"
        href="https://open.spotify.com/user/alizahid"
      >
        <Icon name="spotify" size={size} />

        <span className="hidden">Spotify</span>
      </Link>

      <Link
        className="ml-4 text-gray-11 hover:text-[#1da1f2]"
        href="https://twitter.com/alizahid0"
      >
        <Icon name="twitter" size={size} />

        <span className="hidden">Twitter</span>
      </Link>

      <Link
        className="ml-4 text-gray-11 hover:text-[#ea4c89]"
        href="https://dribbble.com/alizahid"
      >
        <Icon name="dribbble" size={size} />

        <span className="hidden">Dribbble</span>
      </Link>
    </div>
  )
}
