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
            <h2>{name}</h2>
            <p>{description}</p>
            <footer>
              {links.map(({ label, link }, index) => (
                <a key={index} href={link}>
                  {label}
                </a>
              ))}
            </footer>
          </article>
        ))}
      </main>
      <Footer />
      <style jsx>{`
        article {
          margin: 3em 0;
        }

        h2 {
          font-size: 2em;
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