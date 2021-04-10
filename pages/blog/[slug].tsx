import 'react-medium-image-zoom/dist/styles.css'

import clsx from 'clsx'
import { format, isSameYear, parseISO } from 'date-fns'
import { gql, GraphQLClient } from 'graphql-request'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/oceanicNext'
import React from 'react'
import Markdown from 'react-markdown'
import Zoom from 'react-medium-image-zoom'

import { Post } from '../../types'

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
        <title>{post.title} / Blog / Ali Zahid</title>
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
        <img
          alt={post.title}
          className="rounded-lg bg-gray-100 dark:bg-gray-900"
          height={900}
          src={post.image.url}
          width={1800}
        />

        <h1 className="text-2xl font-semibold mt-4">{post.title}</h1>
        <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
          {post.excerpt}
        </div>
        <div className="text-sm mt-2">
          {format(date, isSameYear(date, new Date()) ? 'MMMM d' : 'MMMM d, y')}
        </div>

        <Markdown
          className="mt-12 text-sm text-gray-700 dark:text-gray-300"
          renderers={{
            code({ language, value }) {
              return (
                <Highlight
                  {...defaultProps}
                  code={value}
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
                        'rounded-lg p-4 overflow-auto',
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
            heading({ children, level }) {
              if (level === 2) {
                return (
                  <h2 className="text-xl font-medium text-black dark:text-white mt-12 mb-4 first:mt-0">
                    {children}
                  </h2>
                )
              }

              if (level === 3) {
                return (
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-8 mb-4 first:mt-0">
                    {children}
                  </h3>
                )
              }

              if (level === 4) {
                return (
                  <h3 className="text-base font-medium text-gray-700 dark:text-gray-300 mt-4 mb-2 first:mt-0">
                    {children}
                  </h3>
                )
              }

              return <div>foo</div>
            },
            image({ alt, src }) {
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
                    <img
                      alt={alt}
                      className={clsx(
                        'rounded-lg',
                        type === 'chart' && 'bg-white'
                      )}
                      height={height}
                      src={source}
                      width={width}
                    />
                  </Zoom>

                  <figcaption className="text-black dark:text-white mt-4 text-center">
                    {alt}
                  </figcaption>
                </figure>
              )
            },
            inlineCode({ value }) {
              return (
                <code className="font-medium text-black dark:text-white">
                  {value}
                </code>
              )
            },
            link({ children, href }) {
              const isExternal = href.startsWith('https')

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
            list({ children, ordered }) {
              if (ordered) {
                return <ol className="ml-8 my-4">{children}</ol>
              }

              return <ul className="ml-8 my-4">{children}</ul>
            },
            listItem({ children, index, ordered }) {
              return (
                <li className="my-2 relative">
                  <span className="select-none text-black dark:text-white absolute right-full mr-2 h-full flex items-center">
                    {ordered ? index + 1 : '•'}
                  </span>
                  {children}
                </li>
              )
            },
            paragraph({ children }) {
              if (children.length === 1 && children[0].type.name === 'image') {
                return children
              }

              return <p className="my-4 first:mt-0 last:mb-0">{children}</p>
            }
          }}>
          {post.content}
        </Markdown>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { posts } = await client.request<{
    posts: Post[]
  }>(gql`
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

  const { post } = await client.request(
    gql`
      query($data: PostWhereUniqueInput!) {
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
