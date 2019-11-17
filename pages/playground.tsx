import axios from 'axios'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Body, Footer, Header } from '../components'
import { Project } from '../lib/types'

interface Props {
  projects: Project[]
}

const Playground: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Ali Zahid</title>
        <meta name="description" content="My works" />
      </Head>

      <Header />

      <main>
        <h1 className="text-5xl font-semibold">Playground</h1>
        {projects.map(({ description, links, name }, index) => (
          <article
            className="flex flex-col my-12 lg:flex-row lg:items-center"
            key={index}>
            <figure className="flex justify-center lg:block">
              <img
                className="h-20"
                src={`/projects/${name.toLowerCase()}.png`}
                alt={name}
              />
            </figure>
            <section className="flex-1 mt-8 lg:mt-0 lg:ml-8">
              <h2 className="text-3xl font-semibold  text-center lg:text-left">
                {name}
              </h2>
              <Body className="mb-0" body={description} slug="projects" />
              <footer>
                {links.map(({ label, link }, index) => (
                  <a
                    key={index}
                    className="text-primary ml-4 first:ml-0"
                    href={link}>
                    {label}
                  </a>
                ))}
              </footer>
            </section>
          </article>
        ))}
      </main>

      <Footer />
    </>
  )
}

Playground.getInitialProps = async () => {
  const {
    data: { projects }
  } = await axios(`${process.env.uri}/projects`)

  return {
    projects
  }
}

export default Playground
