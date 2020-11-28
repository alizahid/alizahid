import React, { FunctionComponent, useRef, useState } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import ruby from 'react-syntax-highlighter/dist/cjs/languages/prism/ruby'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import nord from 'react-syntax-highlighter/dist/cjs/styles/prism/nord'

const languages = [
  ['typescript', typescript],
  ['javascript', javascript],
  ['json', json],
  ['ruby', ruby],
  ['bash', bash]
]

languages.forEach(([language, syntax]) =>
  SyntaxHighlighter.registerLanguage(language, syntax)
)

Object.keys(nord).forEach((key) => {
  if (key.includes('[')) {
    delete nord[key]
  }
})

interface Props {
  className?: string
  code: string
  language: 'typescript' | 'javascript' | 'json' | 'ruby' | 'bash' | 'prisma'
}

export const Code: FunctionComponent<Props> = ({
  className,
  code,
  language
}) => {
  const timer = useRef<NodeJS.Timeout>()

  const [copied, setCopied] = useState(false)

  const prettyLanguageName = (language: string): string => {
    switch (language) {
      case 'typescript':
        return 'TypeScript'

      case 'javascript':
        return 'JavaScript'

      case 'json':
        return 'JSON'

      case 'ruby':
        return 'Ruby'

      case 'bash':
        return 'Bash'

      case 'prisma':
        return 'Prisma'

      default:
        return language
    }
  }

  return (
    <div
      className={`rounded-lg overflow-hidden ${className}`}
      style={{
        background: '#2E3440',
        color: '#f8f8f2'
      }}>
      <header className="bg-highlight flex items-stretch leading-none">
        <span className="p-4 text-base font-medium">
          {prettyLanguageName(language)}
        </span>
        <a
          className="text-base font-normal flex items-center justify-center px-4 ml-auto"
          href="#copy"
          onClick={async (event) => {
            event.preventDefault()

            if (timer.current) {
              clearTimeout(timer.current)
            }

            await navigator.clipboard.writeText(code)

            setCopied(true)

            timer.current = setTimeout(() => setCopied(false), 3000)
          }}>
          {copied ? 'Copied' : 'Copy'}
        </a>
      </header>
      <SyntaxHighlighter
        codeTagProps={{
          className: 'font-mono leading-relaxed'
        }}
        customStyle={{
          background: '#2E3440',
          overflowX: 'auto',
          padding: '1rem'
        }}
        language={language}
        style={nord}>
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
