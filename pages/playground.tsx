import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import { Page, Project } from '../components'

const Playground: NextPage = () => (
  <Page
    className="flex flex-col lg:flex-row my-20"
    description="My works"
    title="Playground">
    <section className="flex-1">
      <Project
        links={[
          {
            label: 'Web',
            link: 'https://pandemic.li'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/pandemicli'
          }
        ]}
        name="Pandemic.li">
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
      </Project>
      <Project
        links={[
          {
            label: 'Web',
            link: 'https://helpling.app'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/khairat'
          }
        ]}
        name="Helpling">
        <p>
          Helpling is a place to help you find people who are less fortunate or
          in dire circumstanes and see how you can help out.
        </p>
        <p className="mt-2">
          People can make requests for things; food, money, physical goods, and
          invites.
        </p>
        <p className="mt-2">
          Whether they need warm food on a cold night, some cash to travel to
          see family, a new couch or mattress, or an job interview; you can step
          in and help them.
        </p>
      </Project>
      <Project
        links={[
          {
            label: 'Web',
            link: 'https://bother.app'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/bother'
          }
        ]}
        name="Bother">
        <p>
          Bother is an anonymous social network for sharing things that bother
          you. It&apos;s the cuter successor to{' '}
          <a href="https://www.producthunt.com/posts/boar">Boar</a>, rebuilt
          from scratch.
        </p>
      </Project>
    </section>
    <section className="flex-1 mt-16 lg:mt-0 lg:ml-16">
      <Project
        links={[
          {
            label: 'Web',
            link: 'https://mittens.app'
          },
          {
            label: 'App Store',
            link: 'https://itunes.apple.com/us/app/mittens/id1453383568'
          },
          {
            label: 'Google Play',
            link: 'https://play.google.com/store/apps/details?id=app.mittens'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/mittens'
          }
        ]}
        name="Mittens">
        <p>Mittens brings you push notifications from GitHub.</p>
        <p className="mt-2">
          The app is built with React Native and Firebase for authentication,
          serverless functions, and push notifications. step in and help them.
        </p>
      </Project>
      <Project
        links={[
          {
            label: 'Web',
            link: 'https://wowdb.app'
          },
          {
            label: 'App Store',
            link: 'https://itunes.apple.com/us/app/wowdb/id1366381234'
          },
          {
            label: 'Google Play',
            link:
              'https://play.google.com/store/apps/details?id=com.designplox.wowhead'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/wowdb'
          }
        ]}
        name="MovieMate">
        <p>
          MovieMate lets you find which people have worked on films together.
        </p>
        <p className="mt-2">
          The API is built with Express and uses{' '}
          <a href="https://www.themoviedb.org" rel="noreferrer" target="_blank">
            TMDB
          </a>{' '}
          for data, and Redis for caching. The web app is built with React and
          the mobile app is built with React Native.
        </p>
      </Project>
      <Project
        links={[
          {
            label: 'Demo',
            link: 'https://slinky.js.org'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/alizahid/slinky'
          }
        ]}
        name="Slinky">
        <p>
          Slinky is a light-weight and responsive navigation menu plugin for
          jQuery.
        </p>
        <p className="mt-2">
          It&apos;s quite popular on GitHub, with over 600 stars. I&apos;m quite
          proud of that!
        </p>
      </Project>
      <Project
        links={[
          {
            label: 'Web',
            link: 'https://wowdb.app'
          },
          {
            label: 'App Store',
            link: 'https://itunes.apple.com/us/app/wowdb/id1366381234'
          },
          {
            label: 'Google Play',
            link:
              'https://play.google.com/store/apps/details?id=com.designplox.wowhead'
          },
          {
            label: 'GitHub',
            link: 'https://github.com/wowdb'
          }
        ]}
        name="WoWdb">
        <p>
          WoWdb is a World of Warcraft database in your pocket. It lets you
          search for items, quests, achievements, mounts, and more, and view
          details and stats and{' '}
          <a href="https://wowhead.com" rel="noreferrer" target="_blank">
            Wowhead
          </a>{' '}
          comments for everything in the game.
        </p>
        <p className="mt-2">
          <Link href="/blog/building-wowdb">
            <a>Read more</a>
          </Link>{' '}
          about the architecture on my blog.
        </p>
        <p className="mt-2">
          WoWdb is built using Fastify, MongoDB, React Native, and{' '}
          <a
            href="https://github.com/jeancroy/FuzzySearch"
            rel="noreferrer"
            target="_blank">
            Fuzzy
          </a>{' '}
          for search.
        </p>
      </Project>
    </section>
  </Page>
)

export default Playground
