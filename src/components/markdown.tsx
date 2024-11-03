import { Info } from '@phosphor-icons/react/dist/ssr'
import { Code } from 'bright'
import Image from 'next/image'
import Link from 'next/link'
import { type ReactNode } from 'react'
import Component, { type Components } from 'react-markdown'
import unwrapImages from 'rehype-unwrap-images'
import gfm from 'remark-gfm'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  components?: Components
  content: string
}

export function Markdown({ className, components, content }: Props) {
  return (
    <Component
      className={twMerge('space-y-5', className)}
      components={{
        a({ children, href }: { children: ReactNode; href: string }) {
          return (
            <Link className="font-medium" href={href}>
              {children}
            </Link>
          )
        },
        blockquote({ children }) {
          return (
            <blockquote className="flex items-center gap-4 rounded-4 border border-amber-a6 bg-amber-a4 p-4 leading-tight text-amber-a12">
              <Info className="size-5" />

              <div className="flex-1">{children}</div>
            </blockquote>
          )
        },
        code({ children }) {
          return <code className="font-medium">{children}</code>
        },
        h1({ children }) {
          return <h1 className="text-9 font-bold">{children}</h1>
        },
        h2({ children }) {
          return <h2 className="!mt-9 text-8 font-bold">{children}</h2>
        },
        h3({ children }) {
          return <h3 className="!mt-6 text-7 font-bold">{children}</h3>
        },
        img({ alt, src }: { alt: string; src: string }) {
          const url = new URL(src)

          const height = (Number(url.searchParams.get('h')) || 200) / 2
          const width = (Number(url.searchParams.get('w')) || 200) / 2
          const type = url.searchParams.get('type')

          return (
            <figure className="!my-8 flex flex-col items-center gap-4">
              <Image
                alt={alt}
                className={twMerge(
                  'rounded-4',
                  type === 'chart' && 'bg-[#fff]',
                )}
                height={height}
                src={`https://media.graphassets.com/resize=width:1280${url.pathname}`}
                unoptimized
                width={width}
              />

              <figcaption className="text-center text-gray-a11">
                {alt}
              </figcaption>
            </figure>
          )
        },
        li({ children }) {
          return <li className="!my-2 pl-2">{children}</li>
        },
        ol({ children }) {
          return (
            <ol className="mx-6 list-decimal marker:tabular-nums">
              {children}
            </ol>
          )
        },
        pre(props) {
          return (
            <Code
              {...props}
              className="!rounded-4"
              theme={{
                dark: 'github-dark',
                light: 'github-light',
                lightSelector: 'html.light',
              }}
            />
          )
        },
        ul({ children }) {
          return <ul className="mx-6 list-disc">{children}</ul>
        },
        ...components,
      }}
      rehypePlugins={[unwrapImages]}
      remarkPlugins={[gfm]}
    >
      {content}
    </Component>
  )
}
