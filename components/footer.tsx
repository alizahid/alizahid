import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  const date = new Date()

  let year = date.getFullYear()

  if (date.getMonth() > 10) {
    year++
  }

  return (
    <footer className="flex flex-row items-center justify-between m-8">
      <span className="text-sm text-gray-600 text-center lg:text-left">
        &copy; {year}
      </span>
      <nav className="flex items-center justify-center mt-4 lg:mt-0">
        <a
          className="opacity-25 hover:opacity-100"
          href="https://github.com/alizahid">
          <img alt="GitHub" className="h-6 w-6" src="/social/github.svg" />
        </a>
        <a
          className="opacity-25 hover:opacity-100 ml-4"
          href="https://twitter.com/alizahid0">
          <img alt="Twitter" className="h-6 w-6" src="/social/twitter.svg" />
        </a>
        <a
          className="opacity-25 hover:opacity-100 ml-4"
          href="https://dribbble.com/alizahid">
          <img alt="Dribbble" className="h-6 w-6" src="/social/dribbble.svg" />
        </a>
      </nav>
    </footer>
  )
}
