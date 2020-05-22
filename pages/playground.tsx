import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { RichText } from 'prismic-reactjs'
import React from 'react'

import { content } from '../lib'
import { Project } from '../types'

interface Props {
  projects: Project[]
}

const Playground: NextPage<Props> = ({ projects }) => (
  <>
    <Head>
      <title>Playground / Ali Zahid</title>
      <meta content="My works" name="description" />
    </Head>

    <main>
      <h1 className="text-5xl font-semibold">Playground</h1>
      {projects.map(({ content, image, links, title }, index) => (
        <article
          className="flex flex-col mt-12 lg:flex-row lg:items-center"
          key={index}>
          <figure>
            <img alt={title} className="h-20 w-20" src={image} />
          </figure>
          <section className="flex-1 mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-3xl font-semibold mb-4 leading-none">
              {title}
            </h2>
            <RichText render={content} />
            <footer className="flex flex-wrap -mx-2 -mb-2 mt-2 leading-none">
              {links.map(({ label, link }, index) => (
                <a
                  className="bg-primary text-sm text-white p-3 font-medium rounded m-2 hover:text-white"
                  href={link}
                  key={index}>
                  {label}
                </a>
              ))}
            </footer>
          </section>
        </article>
      ))}
    </main>
  </>
)

export const getServerSideProps: GetServerSideProps = async () => {
  const projects = await content.projects()

  return {
    props: {
      projects
    }
  }
}

export default Playground
