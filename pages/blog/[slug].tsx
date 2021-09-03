import 'react-medium-image-zoom/dist/styles.css'

import clsx from 'clsx'
import { format, isSameYear, parseISO } from 'date-fns'
import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import React from 'react'
import Markdown from 'react-markdown'
import Zoom from 'react-medium-image-zoom'
import { RoughNotation } from 'react-rough-notation'
import gfm from 'remark-gfm'
import unwrapImages from 'remark-unwrap-images'

import { Post, Query } from '../../types'

type Props = {
  post: Post
}

type Params = {
  slug: string
}

const Blog: NextPage<Props> = ({ post }) => {
  const date = parseISO(post.date)

  return (
    <>
      <Head>
        <title>{post.title} &#8226; Blog &#8226; Ali Zahid</title>
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
          components={{
            a({ children, href }) {
              const isExternal = String(href).startsWith('https')

              return (
                <Link href={String(href)}>
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
            code({ children, className, inline }) {
              if (inline) {
                return (
                  <code className="font-medium text-black dark:text-white">
                    {children}
                  </code>
                )
              }

              const language = String(className).slice(9) as Language

              return (
                <Highlight
                  {...defaultProps}
                  code={String(children).trim()}
                  language={language}
                  theme={theme}>
                  {({
                    className,
                    getLineProps,
                    getTokenProps,
                    style,
                    tokens
                  }) => (
                    <pre
                      className={clsx(
                        'rounded-lg p-4 text-sm overflow-auto',
                        className
                      )}
                      style={style}>
                      {tokens.map((line, i) => (
                        <div
                          key={i}
                          {...getLineProps({
                            line
                          })}>
                          {line.map((token, key) => (
                            <span
                              key={key}
                              {...getTokenProps({
                                token
                              })}
                            />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              )
            },
            del({ children }) {
              return (
                <RoughNotation show type="strike-through">
                  {children}
                </RoughNotation>
              )
            },
            em({ children }) {
              return (
                <RoughNotation show type="underline">
                  {children}
                </RoughNotation>
              )
            },
            h2({ children }) {
              return (
                <h2 className="mt-12 mb-4 text-xl font-semibold text-black lg:text-2xl dark:text-white first:mt-0">
                  {children}
                </h2>
              )
            },
            h3({ children }) {
              return (
                <h3 className="mt-8 mb-4 text-lg font-semibold text-gray-900 lg:text-xl dark:text-gray-100 first:mt-0">
                  {children}
                </h3>
              )
            },
            h4({ children }) {
              return (
                <h4 className="mt-4 mb-2 text-base font-semibold text-gray-700 lg:text-lg dark:text-gray-300 first:mt-0">
                  {children}
                </h4>
              )
            },
            img(props) {
              const alt = String(props.alt)
              const src = String(props.src)

              const url = new URL(src)

              const height = (Number(url.searchParams.get('h')) || 200) / 2
              const width = (Number(url.searchParams.get('w')) || 200) / 2
              const type = url.searchParams.get('type')

              const [source] = src.split('?')

              return (
                <figure
                  className={clsx(
                    'flex flex-col items-center my-8',
                    type === 'chart' && '-mx-8'
                  )}>
                  <Zoom
                    overlayBgColorEnd="rgba(0, 0, 0, 0.8)"
                    overlayBgColorStart="rgba(0, 0, 0, 0)"
                    zoomMargin={64}>
                    <Image
                      alt={alt}
                      className={clsx(
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
            li({ children, index, ordered }) {
              return (
                <li className="relative my-2">
                  <span className="absolute flex items-center h-full mr-2 text-sm text-black select-none dark:text-white right-full">
                    {ordered ? index + 1 : '•'}
                  </span>
                  {children}
                </li>
              )
            },
            ol({ children }) {
              return <ol className="my-4 ml-8">{children}</ol>
            },
            p({ children }) {
              return <p className="my-4 first:mt-0 last:mb-0">{children}</p>
            },
            strong({ children }) {
              return (
                <RoughNotation show type="box">
                  {children}
                </RoughNotation>
              )
            },
            ul({ children }) {
              return <ul className="my-4 ml-8">{children}</ul>
            }
          }}
          remarkPlugins={[gfm, unwrapImages]}>
          {post.content}
        </Markdown>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { posts } = await client.request<Pick<Query, 'posts'>>(gql`
    {
      posts {
        slug
      }
    }
  `)

  const paths = posts.map(({ slug }) => ({
    params: {
      slug
    }
  }))

  return {
    fallback: false,
    paths
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}) => {
  const slug = params?.slug

  if (!slug) {
    return {
      notFound: true
    }
  }

  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { post } = await client.request<Pick<Query, 'post'>>(
    gql`
      query ($data: PostWhereUniqueInput!) {
        post(where: $data) {
          slug
          title
          date
          excerpt
          content
          image {
            height
            width
            url
          }
        }
      }
    `,
    {
      data: {
        slug
      }
    }
  )

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}

export default Blog
