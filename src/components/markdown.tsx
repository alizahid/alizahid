import { Info } from '@phosphor-icons/react/dist/ssr'
import { Code } from 'bright'
import Image from 'next/image'
import Link from 'next/link'
import { type ComponentProps, isValidElement } from 'react'
import Component from 'react-markdown'
import gfm from 'remark-gfm'
import unwrapImages from 'remark-unwrap-images'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  content: string
}

export function Markdown({ className, content }: Props) {
  return (
    <Component
      className={twMerge('space-y-4', className)}
      components={{
        a({ children, href }) {
          return <Link href={href!}>{children}</Link>
        },
        blockquote({ children }) {
          return (
            <blockquote className="my-6 flex items-center gap-4 rounded-4 border border-amberA6 bg-amberA4 p-4 leading-tight text-amberA12">
              <Info className="size-5" />

              {children}
            </blockquote>
          )
        },
        code({ children }) {
          return <code className="font-medium">{children}</code>
        },
        h1({ children }) {
          return <h1 className="text-9">{children}</h1>
        },
        h2({ children }) {
          return <h2 className="!mt-9 text-8">{children}</h2>
        },
        h3({ children }) {
          return <h3 className="!mt-6 text-6 font-medium">{children}</h3>
        },
        img({ alt, src }) {
          const url = new URL(src!)

          const height = (Number(url.searchParams.get('h')) || 200) / 2
          const width = (Number(url.searchParams.get('w')) || 200) / 2
          const type = url.searchParams.get('type')

          return (
            <figure className="my-6 flex flex-col items-center gap-2">
              <Image
                alt={alt!}
                className={twMerge(
                  'rounded-lg',
                  type === 'chart' && 'bg-whiteA1',
                )}
                height={height}
                src={`https://media.graphassets.com/resize=width:1280${url.pathname}`}
                unoptimized
                width={width}
              />

              <figcaption className="text-center text-sageA11">
                {alt}
              </figcaption>
            </figure>
          )
        },
        li({ children }) {
          return <li className="my-2 pl-2">{children}</li>
        },
        ol({ children }) {
          return (
            <ol className="mx-6 list-decimal marker:tabular-nums">
              {children}
            </ol>
          )
        },
        pre({ children, ...props }) {
          if (isValidElement<ComponentProps<'pre'>>(children)) {
            const lang = children.props.className?.match(/language-(\w+)/)?.[1]
            const code = children.props.children

            return (
              <Code
                className="!rounded-4 text-2"
                lang={lang}
                theme="github-dark-dimmed"
              >
                {typeof code === 'string' ? code.trim() : code}
              </Code>
            )
          }

          return <pre {...props}>{children}</pre>
        },
        ul({ children }) {
          return <ul className="mx-6 list-disc">{children}</ul>
        },
      }}
      remarkPlugins={[gfm, unwrapImages]}
    >
      {content}
    </Component>
  )
}
