import React, { FunctionComponent } from 'react'

import { SocialLinks } from './social'

export const Footer: FunctionComponent = () => (
  <footer className="flex items-center justify-between">
    <div className="text-sm text-gray-600 dark:text-gray-400">
      &#169; {new Date().getFullYear()} &#215; Ali Zahid
    </div>

    <SocialLinks size={24} />
  </footer>
)
