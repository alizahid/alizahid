import React, { FunctionComponent } from 'react'

import { Icon } from './icon'

export const Footer: FunctionComponent = () => (
  <footer className="flex">
    <a
      className="h-8 w-8 relative overflow-hidden opacity-25 hover:opacity-100"
      href="https://github.com/alizahid">
      <Icon
        className="h-8 w-8 fill-current text-trueGray-900 dark:text-trueGray-100"
        name="github"
      />
      <span className="absolute text-black dark:text-white">GitHub</span>
    </a>
    <a
      className="h-8 w-8 relative overflow-hidden opacity-25 hover:opacity-100 ml-4"
      href="https://twitter.com/alizahid0">
      <Icon
        className="h-8 w-8 fill-current text-trueGray-900 dark:text-trueGray-100"
        name="twitter"
      />
      <span className="absolute text-black dark:text-white">Twitter</span>
    </a>
    <a
      className="h-8 w-8 relative overflow-hidden opacity-25 hover:opacity-100 ml-4"
      href="https://dribbble.com/alizahid">
      <Icon
        className="h-8 w-8 fill-current text-trueGray-900 dark:text-trueGray-100"
        name="dribbble"
      />
      <span className="absolute text-black dark:text-white">Dribbble</span>
    </a>
  </footer>
)
