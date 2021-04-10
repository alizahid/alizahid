import clsx from 'clsx'
import React, { FunctionComponent } from 'react'

import { SocialLinks } from './misc'

type Props = {
  className?: string
}

export const Footer: FunctionComponent<Props> = ({ className }) => (
  <footer className={clsx('flex items-center justify-between', className)}>
    <div className="text-gray-600 dark:text-gray-400 text-sm">
      &#169; {new Date().getFullYear()} Ali Zahid
    </div>
    <SocialLinks size={20} />
  </footer>
)
