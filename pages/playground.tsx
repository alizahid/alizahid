import { NextPage } from 'next'
import React, { ReactNode } from 'react'

import { Link, Page, Project } from '../components'
import playground from '../data/playground.json'

const description = (name: string): ReactNode => {
  switch (name) {
    case 'Pandemic.li':
      return (
        <>
          <p>
            Pandemic.li is a privacy-focused contact tracing app for COVID-19.
          </p>
          <p className="mt-2">
            You can use it to track your symptoms, the people you meet, and the
            places you visit.
          </p>
          <p className="mt-2">
            All your data is end-to-end encrypted and safe from any prying eyes.
          </p>
        </>
      )

    case 'Helpling':
      return (
        <>
          <p>
            Helpling is a place to help you find people who are less fortunate
            or in dire circumstanes and see how you can help out.
          </p>
          <p className="mt-2">
            People can make requests for things; food, money, physical goods,
            and invites.
          </p>
          <p className="mt-2">
            Whether they need warm food on a cold night, some cash to travel to
            see family, a new couch or mattress, or an job interview; you can
            step in and help them.
          </p>
        </>
      )

    case 'Bother':
      return (
        <p>
          Bother is an anonymous social network for sharing things that bother
          you. It&#39;s the cuter successor to{' '}
          <Link href="https://www.producthunt.com/posts/boar">Boar</Link>,
          rebuilt from scratch.
        </p>
      )

    case 'Simplish':
      return (
        <>
          <p>Beautiful to do lists and Kanban boards.</p>
          <p className="mt-2">
            To do lists, Kanban boards, drag-and-drop, elegant design.
          </p>
        </>
      )

    case 'Mittens':
      return (
        <>
          <p>Mittens brings you push notifications from GitHub.</p>
          <p className="mt-2">
            The app is built with React Native and Firebase for authentication,
            serverless functions, and push notifications. step in and help them.
          </p>
        </>
      )

    case 'MovieMate':
      return (
        <>
          <p>
            MovieMate lets you find which people have worked on films together.
          </p>
          <p className="mt-2">
            The API is built with Express and uses{' '}
            <Link external href="https://www.themoviedb.org">
              TMDB
            </Link>{' '}
            for data, and Redis for caching. The web app is built with React and
            the mobile app is built with React Native.
          </p>
        </>
      )

    case 'Slinky':
      return (
        <>
          <p>
            Slinky is a light-weight and responsive navigation menu plugin for
            jQuery.
          </p>
          <p className="mt-2">
            It&#39;s quite popular on GitHub, with over 600 stars. I&#39;m quite
            proud of that!
          </p>
        </>
      )

    case 'WoWdb':
      return (
        <>
          <p>
            WoWdb is a World of Warcraft database in your pocket. It lets you
            search for items, quests, achievements, mounts, and more, and view
            details and stats and{' '}
            <Link external href="https://wowhead.com">
              Wowhead
            </Link>{' '}
            comments for everything in the game.
          </p>
          <p className="mt-2">
            <Link href="/blog/building-wowdb">Read more</Link> about the
            architecture on my blog.
          </p>
          <p className="mt-2">
            WoWdb is built using Fastify, MongoDB, React Native, and{' '}
            <Link external href="https://github.com/jeancroy/FuzzySearch">
              Fuzzy
            </Link>{' '}
            for search.
          </p>
        </>
      )

    case 'Willa':
      return (
        <>
          <p>Willa is a simple and beautiful expense tracking app.</p>
        </>
      )
  }
}

const Playground: NextPage = () => (
  <Page
    className="flex flex-col lg:flex-row my-20"
    description="My works"
    title="Playground">
    <section className="flex-1">
      {playground.left.map((project) => (
        <Project key={project.name} links={project.links} name={project.name}>
          {description(project.name)}
        </Project>
      ))}
    </section>
    <section className="flex-1 mt-16 lg:mt-0 lg:ml-16">
      {playground.right.map((project) => (
        <Project key={project.name} links={project.links} name={project.name}>
          {description(project.name)}
        </Project>
      ))}
    </section>
  </Page>
)

export default Playground
