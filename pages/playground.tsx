import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import React, { Fragment } from 'react'
import Markdown from 'react-markdown'

import { Footer, Header } from '../components'
import { Project } from '../lib/types'

interface Props {
  projects: Project[]
}

const Playground: NextPage<Props> = ({ projects }) => {
  return (
    <Fragment>
      <Header description="My works" title="Ali Zahid" />
      <main>
        <h1>Playground</h1>
        {projects.map(({ description, links, name }, index) => (
          <article key={index}>
            <figure>
              <img
                src={`/static/projects/${name.toLowerCase()}.png`}
                alt={name}
              />
            </figure>
            <section>
              <h2>{name}</h2>
              <Markdown source={description} />
              <footer>
                {links.map(({ label, link }, index) => (
                  <a key={index} href={link}>
                    {label}
                  </a>
                ))}
              </footer>
            </section>
          </article>
        ))}
      </main>
      <Footer />
      <style jsx>{`
        article {
          align-items: center;
          display: flex;
          margin: 3em 0;
        }

        img {
          height: 4em;
          width: 4em;
        }

        section {
          flex: 1;
          margin-left: 2em;
        }

        h2 {
          font-size: 2em;
          margin: 0;
        }

        footer {
          display: flex;
        }

        a:not(:first-child) {
          margin-left: 1em;
        }
      `}</style>
    </Fragment>
  )
}

Playground.getInitialProps = async () => {
  const response = await fetch(process.env.uri + '/projects')

  const { projects } = await response.json()

  return {
    projects
  }
}

export default Playground
