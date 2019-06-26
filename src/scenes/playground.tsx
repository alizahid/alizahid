import React, { FunctionComponent, useEffect } from 'react'
// @ts-ignore
import { RichText } from 'prismic-reactjs'

import { Spinner, Title } from '../components'
import { useStoreActions, useStoreState } from '../store'

import './playground.scss'

const Playground: FunctionComponent = () => {
  const { fetch } = useStoreActions(actions => actions.projects)
  const { projects, loading } = useStoreState(state => state.projects)

  useEffect(() => {
    if (projects.length === 0) {
      fetch()
    }
  }, [projects, fetch])

  return (
    <main className="playground">
      <Title>Playground</Title>
      {loading && <Spinner />}
      {projects.map(({ content, image, links, slug, title }) => (
        <article key={slug}>
          <figure>
            <img src={image} alt={title} />
          </figure>
          <div className="details">
            <h2>{title}</h2>
            {RichText.render(content)}
            <div className="links">
              {links.map(({ label, link }, index) => (
                <a key={index} href={link}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </main>
  )
}

export default Playground
