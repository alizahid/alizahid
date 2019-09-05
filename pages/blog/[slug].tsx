import fetch from 'isomorphic-unfetch'
import moment from 'moment'
import { NextPage } from 'next'
import Error from 'next/error'
import React, { Fragment } from 'react'
import Markdown from 'react-markdown'

import { Footer, Header } from '../../components'
import { imagePath } from '../../lib'
import { colors, layout } from '../../lib/styles'
import { Post } from '../../lib/types'

interface Props {
  post: Post
}

const Article: NextPage<Props> = ({ post }) => {
  if (!post) {
    return <Error statusCode={404} />
  }

  const { content, excerpt, published, slug, tags, title } = post

  return (
    <Fragment>
      <Header description={excerpt} title={title} />
      <main>
        <h1>{title}</h1>
        <p className="meta">
          <span>{moment(published).fromNow()}</span>
          <span>{tags.join(', ')}</span>
        </p>
        <figure className="hero">
          <img src={`/static/blog/${slug}/hero.png`} alt={title} />
          <figcaption>{excerpt}</figcaption>
        </figure>
        <Markdown
          source={content}
          renderers={{
            paragraph(props) {
              const { children } = props

              if (
                children &&
                children[0] &&
                children.length === 1 &&
                children[0].props &&
                children[0].props.src
              ) {
                return <figure className="image">{children}</figure>
              }

              return <p>{children}</p>
            }
          }}
          transformImageUri={path => imagePath(slug, path)}
        />
      </main>
      <Footer />
      <style jsx>{`
        .meta {
          color: ${colors.foregroundLight};
        }

        .meta span:not(:first-child) {
          margin-left: 1em;
        }

        .hero {
          display: block;
        }

        figcaption {
          color: ${colors.foregroundLight};
          line-height: 1.4;
          margin: 1em;
          text-align: center;
        }

        @media (min-width: 480px) {
          img {
            border-radius: 0.25em;
          }

          .hero {
            margin: 0 -10em;
            width: calc(${layout.width} - (${layout.gutter} * 2) + 20em);
          }

          .image {
            margin: 2em -5em;
            width: calc(${layout.width} - (${layout.gutter} * 2) + 10em);
          }
        }

        @media (max-width: 480px) {
          .hero {
            margin-left: calc(-${layout.gutter} / 2);
            width: 100vw;
          }
        }
      `}</style>
    </Fragment>
  )
}

Article.getInitialProps = async ({ query }) => {
  const { slug } = query

  const response = await fetch(process.env.uri + `/post?slug=${slug}`)

  const { post } = await response.json()

  return {
    post
  }
}

export default Article
