import { write } from 'clipboardy'
import React, { FunctionComponent, useRef, useState } from 'react'
import Highlight from 'react-highlight.js'

interface Props {
  className?: string
  code: string
  language: string
}

export const Code: FunctionComponent<Props> = ({
  className,
  code,
  language
}) => {
  const timer = useRef<NodeJS.Timeout>()

  const [copied, setCopied] = useState(false)

  return (
    <div className={`relative ${className}`}>
      <a
        className="absolute top-0 right-0 text-gray-500 leading-none p-4 z-10"
        href="#copy"
        onClick={async (event) => {
          event.preventDefault()

          if (timer.current) {
            clearTimeout(timer.current)
          }

          await write(code)

          setCopied(true)

          timer.current = setTimeout(() => setCopied(false), 3000)
        }}>
        {copied ? 'Copied' : 'Copy'}
      </a>
      <Highlight language={language}>{code}</Highlight>
    </div>
  )
}
