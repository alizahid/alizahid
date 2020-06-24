import frontMatter from 'front-matter'
import { readdir, readFile } from 'fs-extra'
import { orderBy } from 'lodash'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { join } from 'path'
import React from 'react'
import Markdown from 'react-markdown'

import { Project, ProjectAttributes, ProjectLink } from '../types'

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
      {projects.map(({ body, links, slug, title }, index) => (
        <article
          className="flex flex-col mt-12 lg:flex-row lg:items-center"
          key={index}>
          <figure>
            <img
              alt={title}
              className="h-20 w-20"
              src={`/playground/${slug}.png`}
            />
          </figure>
          <section className="flex-1 mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-3xl font-semibold mb-4 leading-none">
              {title}
            </h2>
            <article className="project">
              <Markdown source={body} />
            </article>
            <footer className="flex flex-wrap -mx-2 -mb-2 mt-2 leading-none">
              {links.map(({ label, link }, index) => (
                <a
                  className="bg-red-500 text-sm text-white p-3 font-medium rounded m-2 hover:text-white"
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

export const getStaticProps: GetStaticProps = async () => {
  const path = join(process.cwd(), 'projects')

  const files = await readdir(path)

  const projects: Project[] = []

  for await (const file of files) {
    const content = await readFile(join(path, file), 'utf8')

    const data = frontMatter<ProjectAttributes>(content)

    const links: ProjectLink[] = Object.entries(data.attributes)
      .filter(([key]) => key.includes('link_'))
      .map(([type, link]) => ({
        label:
          type === 'link_app_store'
            ? 'App Store'
            : type === 'link_demo'
            ? 'Demo'
            : type === 'link_github'
            ? 'GitHub'
            : type === 'link_google_play'
            ? 'Google Play'
            : 'Web',
        link: String(link)
      }))

    const project: Project = {
      body: data.body,
      links,
      order: data.attributes.order,
      slug: data.attributes.slug,
      title: data.attributes.title
    }

    projects.push(project)
  }

  return {
    props: {
      projects: orderBy(projects, 'order', 'asc')
    }
  }
}

export default Playground
