import clsx from 'clsx'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { Icon } from './icon'

type SocialLinksProps = {
  className?: string
  size?: number
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({
  className,
  size = 32
}) => (
  <div className={clsx('flex', className)}>
    <Link href="https://github.com/alizahid">
      <a className="text-gray-600 dark:text-gray-400">
        <Icon name="github" size={size} />
      </a>
    </Link>
    <Link href="https://twitter.com/alizahid0">
      <a className="ml-4 text-gray-600 dark:text-gray-400">
        <Icon name="twitter" size={size} />
      </a>
    </Link>
    <Link href="https://dribbble.com/alizahid">
      <a className="ml-4 text-gray-600 dark:text-gray-400">
        <Icon name="dribbble" size={size} />
      </a>
    </Link>
  </div>
)
