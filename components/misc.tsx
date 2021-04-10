import clsx from 'clsx'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { Icon } from './icon'

type SocialLinksProps = {
  className?: string
}

export const SocialLinks: FunctionComponent<SocialLinksProps> = ({
  className
}) => (
  <div className={clsx('flex', className)}>
    <Link href="https://github.com/alizahid">
      <a className="text-gray-400 dark:text-gray-600">
        <Icon name="github" />
      </a>
    </Link>
    <Link href="https://twitter.com/alizahid0">
      <a className="ml-4 text-gray-400 dark:text-gray-600">
        <Icon name="twitter" />
      </a>
    </Link>
    <Link href="https://dribbble.com/alizahid">
      <a className="ml-4 text-gray-400 dark:text-gray-600">
        <Icon name="dribbble" />
      </a>
    </Link>
  </div>
)

type HomeTitleProps = {
  className?: string
  href: string
}

export const HomeTitle: FunctionComponent<HomeTitleProps> = ({
  children,
  className,
  href
}) => (
  <Link href={href}>
    <a className={className}>
      <h2 className="text-xl lg:text-lg font-semibold">{children}</h2>
    </a>
  </Link>
)

type HomeMoreLinkProps = {
  className?: string
  href: string
}

export const HomeMoreLink: FunctionComponent<HomeMoreLinkProps> = ({
  className,
  href
}) => (
  <Link href={href}>
    <a
      className={clsx(
        'font-medium text-sm leading-none -ml-2 p-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-5 dark:hover:bg-opacity-10',
        className
      )}>
      More
    </a>
  </Link>
)
