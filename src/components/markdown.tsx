import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Code } from 'bright'
import Image from 'next/image'
import Link from 'next/link'
import { isValidElement } from 'react'
import Render from 'react-markdown'
import gfm from 'remark-gfm'
import unwrapImages from 'remark-unwrap-images'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: string
}

export function Markdown({ children }: Props) {
  return (
    <Render
      components={{
        a({ children, href }) {
          return <Link href={href!}>{children}</Link>
        },
        blockquote({ children }) {
          return (
            <blockquote className="not-prose flex items-center gap-3 rounded-lg border border-yellow-a6 bg-yellow-a4 p-3 leading-tight text-yellow-12">
              <InfoCircledIcon className="size-5" />

              {children}
            </blockquote>
          )
        },
        h1({ children }) {
          return <h1 className="text-6xl font-bold">{children}</h1>
        },
        img({ alt, src }) {
          const url = new URL(src!)

          const height = (Number(url.searchParams.get('h')) ?? 200) / 2
          const width = (Number(url.searchParams.get('w')) ?? 200) / 2
          const type = url.searchParams.get('type')

          return (
            <figure className="not-prose flex flex-col items-center gap-2">
              <Image
                alt={alt!}
                className={twMerge(
                  'rounded-lg',
                  type === 'chart' && 'bg-white',
                )}
                height={height}
                src={`https://media.graphassets.com/resize=width:1280${url.pathname}`}
                unoptimized
                width={width}
              />

              <figcaption className="text-center text-gray-11">
                {alt}
              </figcaption>
            </figure>
          )
        },
        pre({ children, ...props }) {
          if (isValidElement(children)) {
            const language =
              children.props.className.match(/language-(\w+)/)?.[1]
            const content = children.props.children

            return (
              <Code lang={language} theme="github-dark-dimmed">
                {typeof content === 'string' ? content.trim() : content}
              </Code>
            )
          }

          return <pre {...props}>{children}</pre>
        },
      }}
      remarkPlugins={[gfm, unwrapImages]}
    >
      {children}
    </Render>
  )
}
