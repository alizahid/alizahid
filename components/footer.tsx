import React, { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
  const date = new Date()

  let year = date.getFullYear()

  if (date.getMonth() > 10) {
    year++
  }

  return (
    <footer className="flex flex-col lg:flex-row lg:items-center lg:justify-between my-8">
      <span className="text-gray-600 text-center lg:text-left">
        &copy; {year} / Powered by&nbsp;
        <a href="https://www.mongodb.com/cloud/stitch">Stitch</a> and&nbsp;
        <a href="https://nextjs.org/">Next</a>
      </span>
      <nav className="flex items-center justify-center mt-4 lg:mt-0">
        <a
          className="opacity-25 hover:opacity-100"
          href="https://github.com/alizahid">
          <img className="h-6" src="/social/github.svg" alt="GitHub" />
        </a>
        <a
          className="opacity-25 hover:opacity-100 ml-4"
          href="https://twitter.com/alizahid0">
          <img className="h-6" src="/social/twitter.svg" alt="Twitter" />
        </a>
        <a
          className="opacity-25 hover:opacity-100 ml-4"
          href="https://dribbble.com/alizahid">
          <img className="h-6" src="/social/dribbble.svg" alt="Dribbble" />
        </a>
      </nav>
    </footer>
  )
}
