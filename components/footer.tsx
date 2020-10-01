import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => (
  <footer className="flex justify-center">
    <a
      className="opacity-25 hover:opacity-100"
      href="https://github.com/alizahid">
      <img alt="GitHub" className="h-12 w-12" src="/social/github.svg" />
    </a>
    <a
      className="opacity-25 hover:opacity-100 ml-4"
      href="https://twitter.com/alizahid0">
      <img alt="Twitter" className="h-12 w-12" src="/social/twitter.svg" />
    </a>
    <a
      className="opacity-25 hover:opacity-100 ml-4"
      href="https://dribbble.com/alizahid">
      <img alt="Dribbble" className="h-12 w-12" src="/social/dribbble.svg" />
    </a>
  </footer>
)
