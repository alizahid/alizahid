import React, { FunctionComponent } from 'react'
import { twMerge } from 'tailwind-merge'

import { SocialLinks } from './social'

type Props = {
  className?: string
}

export const Footer: FunctionComponent<Props> = ({ className }) => (
  <footer className={twMerge('flex items-center justify-between', className)}>
    <div className="text-sm text-gray-600 dark:text-gray-400">
      &#169; {new Date().getFullYear()} &#215; Ali Zahid
    </div>

    <SocialLinks size={24} />
  </footer>
)
