import { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

import { Link, Page } from '../components'

const Home: NextPage = () => (
  <Page
    className="flex flex-col lg:flex-row items-center"
    description="About me"
    title="Hello">
    <section className="flex-1 order-2 lg:order-1">
      <h2 className="text-6xl font-semibold leading-tight">
        I have a patent on blowing minds with epic design.
      </h2>
      <p className="mt-4">
        Hi. I&#39;m Ali Zahid. I love to build cool stuff. Check out my{' '}
        <Link href="/playground">playground</Link>. And here&#39;s my{' '}
        <Link href="/resume.pdf">resume</Link>.
      </p>
      <p className="mt-2">
        I&#39;ve worked with large enterprises, government organizations,
        Academy and Emmy award-winning filmmakers, esports teams, student
        groups, and everything in between, to help realize their ideas.
      </p>
      <p className="mt-2">
        Are you looking for help building your next epic idea or product?{' '}
        <Link href="mailto:ali.zahid@live.com">Reach out</Link> and see if we
        can work together.
      </p>
    </section>
    <figure className="order-1 mb-8 lg:mb-0 lg:ml-8">
      <Image
        alt="Ali Zahid"
        className="rounded-full"
        height={200}
        priority
        src="/ali-zahid.jpg"
        width={200}
      />
    </figure>
  </Page>
)

export default Home
