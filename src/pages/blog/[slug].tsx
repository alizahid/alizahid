import { format, isSameYear, parseISO } from 'date-fns'
import Markdown from 'markdown-to-jsx'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Zoom from 'react-medium-image-zoom'
import { RoughNotation } from 'react-rough-notation'
import { twMerge } from 'tailwind-merge'

import { highlight } from '../../lib/highlight'
import { fetchPost } from '../../queries/post'
import { fetchSlugs } from '../../queries/posts'
import { Post } from '../../types/graph-cms'

type Props = {
  post: Post
}

type Params = {
  slug: string
}

const Blog: NextPage<Props> = ({ post }) => {
  const date = parseISO(post.date)

  useEffect(() => {
    highlight()
  }, [])

  const title = `${post.title} &#215; Blog &#215; Ali Zahid`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={post.title} property="og:title" />
        <meta content={post.excerpt} name="description" />
        <meta content={post.excerpt} property="og:description" />
        <meta
          content={`https://alizahid.dev/blog/${post.slug}`}
          property="og:url"
        />
        <meta content={post.image.url} property="og:image" />
      </Head>

      <main>
        <Image
          alt={post.title}
          className="bg-gray-100 rounded-lg dark:bg-gray-900"
          height={1200}
          src={post.image.url}
          width={1800}
        />

        <h1 className="mt-4 text-2xl font-bold lg:text-4xl">{post.title}</h1>
        <div className="mt-2 text-gray-800 dark:text-gray-200">
          {post.excerpt}
        </div>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
        </div>

        <Markdown
          className="mt-12 text-gray-700 dark:text-gray-300"
          options={{
            overrides: {
              a: {
                component: ({ children, href }) => {
                  const isExternal = href.startsWith('http')

                  return (
                    <Link href={href}>
                      {isExternal ? (
                        <a rel="noopener" target="_blank">
                          {children}
                        </a>
                      ) : (
                        <a>{children}</a>
                      )}
                    </Link>
                  )
                },
              },
              blockquote: {
                props: {
                  className:
                    'rounded-lg font-medium p-4 bg-primary-100 dark:bg-primary-900',
                },
              },
              code: {
                props: {
                  className: 'rounded-lg',
                },
              },
              del: {
                component: ({ children }) => (
                  <RoughNotation color="#f43f5e" show type="strike-through">
                    {children}
                  </RoughNotation>
                ),
              },
              em: {
                component: ({ children }) => (
                  <RoughNotation color="#10b981" show type="underline">
                    {children}
                  </RoughNotation>
                ),
              },
              h2: {
                props: {
                  className:
                    'mt-12 mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white first:mt-0',
                },
              },
              h3: {
                props: {
                  className:
                    'mt-8 mb-4 text-lg font-semibold text-gray-900 lg:text-xl dark:text-gray-100 first:mt-0',
                },
              },
              h4: {
                props: {
                  className:
                    'mt-4 mb-2 text-base font-semibold text-gray-700 lg:text-lg dark:text-gray-300 first:mt-0',
                },
              },
              img: {
                component: ({ alt, src }) => {
                  const url = new URL(src)

                  const height = (Number(url.searchParams.get('h')) || 200) / 2
                  const width = (Number(url.searchParams.get('w')) || 200) / 2
                  const type = url.searchParams.get('type')

                  const [source] = src.split('?')

                  return (
                    <figure
                      className={twMerge(
                        'flex flex-col items-center my-8',
                        type === 'chart' && '-mx-8'
                      )}
                    >
                      <Zoom
                        overlayBgColorEnd="rgba(0, 0, 0, 0.8)"
                        overlayBgColorStart="rgba(0, 0, 0, 0)"
                        zoomMargin={64}
                      >
                        <Image
                          alt={alt}
                          className={twMerge(
                            'rounded-lg',
                            type === 'chart' && 'bg-white'
                          )}
                          height={height}
                          src={source}
                          unoptimized
                          width={width}
                        />
                      </Zoom>

                      <figcaption className="mt-4 text-center text-black dark:text-white">
                        {alt}
                      </figcaption>
                    </figure>
                  )
                },
              },
              li: {
                props: {
                  className: 'my-2',
                },
              },
              ol: {
                props: {
                  className: 'my-4 ml-8 list-decimal',
                },
              },
              p: {
                props: {
                  className: 'my-4 first:mt-0 last:mb-0',
                },
              },
              pre: {
                props: {
                  className: 'mt-4 text-sm',
                },
              },
              strong: {
                component: ({ children }) => (
                  <RoughNotation color="#0ea5e9" show type="box">
                    {children}
                  </RoughNotation>
                ),
              },
              ul: {
                props: {
                  className: 'my-4 ml-8 list-disc',
                },
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchSlugs()

  const paths = posts.map(({ slug }) => ({
    params: {
      slug,
    },
  }))

  return {
    fallback: false,
    paths,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const slug = params?.slug

  if (!slug) {
    return {
      notFound: true,
    }
  }

  const post = await fetchPost(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

export default Blog
