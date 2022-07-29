import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { Icon } from './icon'

type SocialLinksProps = {
  className?: string
  size?: number
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({
  className,
  size = 32
}) => (
  <div className={twMerge('flex', className)}>
    <Link href="https://github.com/alizahid">
      <a className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
        <Icon name="github" size={size} />
        <span className="hidden">GitHub</span>
      </a>
    </Link>
    <Link href="https://open.spotify.com/user/alizahid">
      <a className="ml-4 text-gray-600 dark:text-gray-400 hover:text-[#1db954]">
        <Icon name="spotify" size={size} />
        <span className="hidden">Spotify</span>
      </a>
    </Link>
    <Link href="https://twitter.com/alizahid0">
      <a className="ml-4 text-gray-600 dark:text-gray-400 hover:text-[#1da1f2]">
        <Icon name="twitter" size={size} />
        <span className="hidden">Twitter</span>
      </a>
    </Link>
    <Link href="https://dribbble.com/alizahid">
      <a className="ml-4 text-gray-600 dark:text-gray-400 hover:text-[#ea4c89]">
        <Icon name="dribbble" size={size} />
        <span className="hidden">Dribbble</span>
      </a>
    </Link>
  </div>
)
