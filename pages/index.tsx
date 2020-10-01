import Head from 'next/head'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'

import { Footer, Header } from '../components'

const Home: FunctionComponent = () => (
  <>
    <Head>
      <title>Ali Zahid</title>
      <meta content="About me" name="description" />
    </Head>

    <main className="min-h-screen bg-white flex flex-col justify-center p-8 lg:p-20">
      <Header title="Hello" />

      <div className="flex flex-1 flex-col lg:flex-row items-center my-20">
        <section className="lg:mr-12 order-2 lg:order-1">
          <h2 className="text-6xl font-semibold leading-tight mt-8">
            I have a patent on blowing minds with epic design.
          </h2>
          <p className="text-2xl mt-4">
            Hi. I&apos;m Ali Zahid. I love to build cool stuff. Check out my{' '}
            <Link href="/playground">
              <a>playground</a>
            </Link>
            . And here&apos;s my{' '}
            <a href="https://www.dropbox.com/s/n38xqrlhn99aneq">resume</a>.
          </p>
          <p className="text-2xl mt-4">
            I&apos;ve worked with large enterprises, government organizations,
            Academy and Emmy award-winning filmmakers, esports teams, student
            groups, and everything in between, to help realize their ideas.
          </p>
          <p className="text-2xl mt-4">
            Are you looking for help building your next epic idea or product?{' '}
            <a href="mailto:ali.zahid@live.com">Reach out</a> and see if we can
            work together.
          </p>
        </section>
        <img className="h-64 w-64 rounded-full order-1" src="/ali-zahid.jpg" />
      </div>

      <Footer />
    </main>
  </>
)

export default Home
