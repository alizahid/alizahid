import { Code } from 'bright'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { isValidElement } from 'react'
import remarkUnwrapImages from 'remark-unwrap-images'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: string
}

export function Markdown({ children }: Props) {
  return (
    <MDXRemote
      components={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        a: Link,
        img: ({ alt, src }) => {
          const url = new URL(src!)

          const height = (Number(url.searchParams.get('h')) ?? 200) / 2
          const width = (Number(url.searchParams.get('w')) ?? 200) / 2
          const type = url.searchParams.get('type')

          return (
            <figure className="flex flex-col items-center">
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

              <figcaption className="text-center">{alt}</figcaption>
            </figure>
          )
        },
        pre: ({ children, ...props }) => {
          if (isValidElement(children)) {
            const lang = children.props.className.match(/language-(\w+)/)?.[1]

            return (
              <Code lang={lang} theme="github-dark">
                {children.props.children.trim()}
              </Code>
            )
          }

          return <pre {...props}>{children}</pre>
        },
      }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkUnwrapImages],
        },
      }}
      source={children}
    />
  )
}
