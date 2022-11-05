import { type FunctionComponent } from 'react'

import { SocialLinks } from './social'

export const Footer: FunctionComponent = () => (
  <footer className="flex items-center justify-between">
    <div className="text-sm text-neutral-600 dark:text-neutral-400">
      &#169; {new Date().getFullYear()} &#215; Ali Zahid
    </div>

    <SocialLinks size={24} />
  </footer>
)
