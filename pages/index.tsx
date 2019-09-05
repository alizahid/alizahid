import fetch from 'isomorphic-unfetch'
import moment from 'moment'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { Fragment } from 'react'

import { Footer, Header } from '../components'
import { colors, layout } from '../lib/styles'
import { Post } from '../lib/types'

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Fragment>
      <Header description="My works and words" title="Ali Zahid" />
      <main>
        {posts.map(({ excerpt, published, slug, title }, index) => (
          <Link key={index} href={`/blog/${slug}`}>
            <a>
              <article>
                <img src={`/static/blog/${slug}/hero.png`} alt={title} />
                <h2>{title}</h2>
                <p>{excerpt}</p>
                <span>{moment(published).fromNow()}</span>
              </article>
            </a>
          </Link>
        ))}
      </main>
      <Footer />
      <style jsx>{`
        a {
          color: ${colors.foreground};
        }

        a:hover h2 {
          color: ${colors.primary};
        }

        article {
          margin: 3em 0;
        }

        h2 {
          font-size: 1.5em;
          margin: 0;
          transition: 0.3s;
        }

        img {
          display: block;
          margin: 1em 0;
        }

        span {
          color: ${colors.foregroundLight};
        }

        @media (min-width: 480px) {
          img {
            border-radius: 0.25em;
          }
        }

        @media (max-width: 480px) {
          img {
            margin-left: -${layout.gutter};
            max-width: 100vw;
            width: 100vw;
          }
        }
      `}</style>
    </Fragment>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch(process.env.uri + '/posts')

  const { posts } = await response.json()

  return {
    posts
  }
}

export default Home
