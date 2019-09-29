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
        {posts.map(({ excerpt, published, slug, tags, title }, index) => (
          <Link key={index} href={`/blog/${slug}`}>
            <a>
              <article>
                <img src={`/static/blog/${slug}/hero.png`} alt={title} />
                <h2>{title}</h2>
                <p>{excerpt}</p>
                <footer>
                  <span>
                    {moment(Number(published.$date.$numberLong)).fromNow()}
                  </span>
                  <span>{tags.sort().join(', ')}</span>
                </footer>
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

        img {
          display: block;
          margin: 1em 0;
        }

        h2 {
          font-size: 1.5em;
          margin: 1em 0 0;
          transition: 0.3s;
        }

        footer {
          line-height: 1.6;
        }

        footer span:not(:first-child) {
          margin-left: 1em;
        }

        span {
          color: ${colors.foregroundLight};
        }

        @media (min-width: ${layout.width}) {
          img {
            border-radius: 0.25em;
          }
        }

        @media (max-width: ${layout.width}) {
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
