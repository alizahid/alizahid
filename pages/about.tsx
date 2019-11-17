import Head from 'next/head'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { Header } from '../components'

const About: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
      </Head>

      <Header />

      <main>
        <img
          className="rounded-full h-48 mx-auto shadow my-8"
          src="/ali-zahid.jpg"
          alt="Ali Zahid"
        />
        <h1 className="text-xl font-semibold my-4">
          I have a patent on blowing minds with epic design.
        </h1>
        <p className="my-4">
          Hi. I&apos;m Ali Zahid. I love to build cool stuff. Check out my&nbsp;
          <Link href="/playground">
            <a className="text-primary">playground</a>
          </Link>
          .
        </p>
        <p className="my-4">
          I&apos;ve worked with large enterprises, government organizations,
          Academy and Emmy award winning filmmakers, esports teams, student
          groups, and everything in between, to help realize their ideas.
        </p>
        <p className="my-4">
          Are you looking for help building your next epic idea or
          product?&nbsp;
          <a className="text-primary" href="mailto:hi@designplox.co">
            Reach out
          </a>
          &nbsp;and see if we can work together.
        </p>
      </main>

      <footer className="flex flex-col lg:flex-row lg:items-center my-8">
        <span className="text-gray-600">You can find me on</span>
        <a
          className="flex items-center mt-4 lg:mt-0 lg:ml-4"
          href="https://github.com/alizahid">
          <img className="h-6 mr-2" src="/social/github.svg" alt="GitHub" />
          GitHub
        </a>
        <a
          className="flex items-center mt-4 lg:mt-0 lg:ml-4"
          href="https://twitter.com/alizahid0">
          <img className="h-6 mr-2" src="/social/twitter.svg" alt="Twitter" />
          Twitter
        </a>
        <a
          className="flex items-center mt-4 lg:mt-0 lg:ml-4"
          href="https://dribbble.com/alizahid">
          <img className="h-6 mr-2" src="/social/dribbble.svg" alt="Dribbble" />
          Dribbble
        </a>
      </footer>
    </>
  )
}

export default About
