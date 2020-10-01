import frontMatter from 'front-matter'
import { readdir, readFile } from 'fs-extra'
import { orderBy } from 'lodash'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { join } from 'path'
import React from 'react'
import Markdown from 'react-markdown'

import { Footer, Header } from '../components'
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

    <main className="min-h-screen bg-white flex flex-col justify-center p-8 lg:p-20">
      <Header title="Playground" />

      <div className="my-20">
        {projects.map(({ body, links, slug, title }) => (
          <article
            className="flex flex-col lg:flex-row items-center mt-12 first:mt-0"
            key={slug}>
            <figure>
              <img
                alt={title}
                className="h-20 w-20"
                src={`/playground/${slug}.png`}
              />
            </figure>
            <section className="flex-1 mt-8 lg:mt-0 lg:ml-8">
              <h2 className="text-5xl font-semibold leading-tight">{title}</h2>
              <article className="project">
                <Markdown source={body} />
              </article>
              <footer className="mt-4">
                {links.map(({ label, link }) => (
                  <a
                    className="font-medium text-lg ml-4 first:ml-0"
                    href={link}
                    key={label}>
                    {label}
                  </a>
                ))}
              </footer>
            </section>
          </article>
        ))}
      </div>

      <Footer />
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
