import { Code } from 'bright'
import { format, isSameYear, parseISO } from 'date-fns'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { isValidElement } from 'react'
import remarkUnwrapImages from 'remark-unwrap-images'
import { twMerge } from 'tailwind-merge'

import { Prose } from '~/components/prose'
import { fetchPost } from '~/queries/post'
import { fetchSlugs } from '~/queries/posts'

export async function generateStaticParams() {
  const posts = await fetchSlugs()

  return posts.map(({ slug }) => ({
    slug,
  }))
}

type Props = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await fetchPost(params.slug)

  if (!post) {
    notFound()
  }

  return {
    description: post.excerpt,
    metadataBase: new URL('https://alizahid.dev'),
    openGraph: {
      images: post.image,
      type: 'article',
      url: `/blog/${post.slug}`,
    },
    title: `${post.title} × Blog × Ali Zahid`,
  }
}

export default async function Page({ params }: Props) {
  const post = await fetchPost(params.slug)

  const date = parseISO(post.date)

  return (
    <main>
      <Image
        alt={post.title}
        className="rounded-lg bg-neutral-100 dark:bg-neutral-900"
        height={1200}
        src={post.image.url}
        unoptimized
        width={1800}
      />

      <h1 className="mt-4 text-2xl font-bold lg:text-4xl">{post.title}</h1>

      <div className="mt-2 text-neutral-800 dark:text-neutral-200">
        {post.excerpt}
      </div>

      <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
      </div>

      <Prose as="div" className="mt-12">
        <MDXRemote
          components={{
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
            pre: ({ children }) => {
              if (isValidElement(children)) {
                const lang =
                  children.props.className.match(/language-(\w+)/)?.[1]

                return (
                  <Code lang={lang} theme="github-dark">
                    {children.props.children.trim()}
                  </Code>
                )
              }
            },
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkUnwrapImages],
            },
          }}
          source={post.content}
        />
      </Prose>
    </main>
  )
}
