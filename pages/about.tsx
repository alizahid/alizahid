import Head from 'next/head'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

const About: FunctionComponent = () => (
  <>
    <Head>
      <title>About / Ali Zahid</title>
      <meta content="About me" name="description" />
    </Head>

    <main>
      <section>
        <h1 className="text-5xl font-semibold leading-tight">
          I have a patent on blowing minds with epic design.
        </h1>
        <p className="my-4">
          Hi. I&apos;m Ali Zahid. I love to build cool stuff. Check out my{' '}
          <Link href="/playground">
            <a>playground</a>
          </Link>
          . And here&apos;s my{' '}
          <a href="https://www.dropbox.com/s/n38xqrlhn99aneq">resume</a>.
        </p>
        <p className="my-4">
          I&apos;ve worked with large enterprises, government organizations,
          Academy and Emmy award winning filmmakers, esports teams, student
          groups, and everything in between, to help realize their ideas.
        </p>
        <p className="my-4">
          Are you looking for help building your next epic idea or product?{' '}
          <a href="mailto:hi@designplox.co">Reach out</a> and see if we can work
          together.
        </p>
      </section>
      <section className="flex flex-col lg:flex-row lg:items-center mt-8">
        <span className="text-gray-600">You can find me on</span>
        <a
          className="flex items-center text-black mt-4 lg:mt-0 lg:ml-4"
          href="https://github.com/alizahid">
          <img alt="GitHub" className="h-6 mr-2" src="/social/github.svg" />
          GitHub
        </a>
        <a
          className="flex items-center text-black mt-4 lg:mt-0 lg:ml-4"
          href="https://twitter.com/alizahid0">
          <img alt="Twitter" className="h-6 mr-2" src="/social/twitter.svg" />
          Twitter
        </a>
        <a
          className="flex items-center text-black mt-4 lg:mt-0 lg:ml-4"
          href="https://dribbble.com/alizahid">
          <img alt="Dribbble" className="h-6 mr-2" src="/social/dribbble.svg" />
          Dribbble
        </a>
      </section>
    </main>
  </>
)

export default About
