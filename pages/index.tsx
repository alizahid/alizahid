import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import { Page } from '../components'

const Home: NextPage = () => (
  <Page
    className="flex flex-col lg:flex-row items-center"
    description="About me"
    title="Hello">
    <section className="lg:mr-12 order-2 lg:order-1">
      <h2 className="text-6xl font-semibold leading-tight mt-8">
        I have a patent on blowing minds with epic design.
      </h2>
      <p className="mt-4">
        Hi. I&apos;m Ali Zahid. I love to build cool stuff. Check out my{' '}
        <Link href="/playground">
          <a>playground</a>
        </Link>
        . And here&apos;s my{' '}
        <a href="https://www.dropbox.com/s/n38xqrlhn99aneq">resume</a>.
      </p>
      <p className="mt-4">
        I&apos;ve worked with large enterprises, government organizations,
        Academy and Emmy award-winning filmmakers, esports teams, student
        groups, and everything in between, to help realize their ideas.
      </p>
      <p className="mt-4">
        Are you looking for help building your next epic idea or product?{' '}
        <a href="mailto:ali.zahid@live.com">Reach out</a> and see if we can work
        together.
      </p>
    </section>
    <img className="h-48 w-48 rounded-full order-1" src="/ali-zahid.jpg" />
  </Page>
)

export default Home
