import React, { FunctionComponent } from 'react'

import { Icon } from './icon'

export const Footer: FunctionComponent = () => (
  <footer className="flex">
    <a
      className="opacity-25 hover:opacity-100"
      href="https://github.com/alizahid">
      <Icon
        className="h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
        name="github"
      />
    </a>
    <a
      className="opacity-25 hover:opacity-100 ml-4"
      href="https://twitter.com/alizahid0">
      <Icon
        className="h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
        name="twitter"
      />
    </a>
    <a
      className="opacity-25 hover:opacity-100 ml-4"
      href="https://dribbble.com/alizahid">
      <Icon
        className="h-6 w-6 fill-current text-gray-900 dark:text-gray-100"
        name="dribbble"
      />
    </a>
  </footer>
)
