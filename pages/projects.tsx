import fetch from 'isomorphic-unfetch'
import { NextPage } from 'next'
import React, { Fragment } from 'react'

import { Footer, Header } from '../components'
import { Project } from '../lib/types'

interface Props {
  projects: Project[]
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <Fragment>
      <Header description="My works and words" title="Ali Zahid" />
      <main>
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
              <p>{description}</p>
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

Projects.getInitialProps = async () => {
  const response = await fetch(process.env.uri + '/projects')

  const { projects } = await response.json()

  return {
    projects
  }
}

export default Projects
