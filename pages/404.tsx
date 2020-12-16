import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header } from '../components'

const NotFound: NextPage = () => (
  <>
    <Head>
      <title>404 / Ali Zahid</title>
    </Head>

    <Header title="404" />

    <main className="flex flex-col justify-center">
      <h2 className="text-6xl font-semibold leading-tight">
        Looks like you&#39;re looking for something that doesn&#39;t exist.
      </h2>
      <p className="mt-4 text-xl">Are you sure you got the right link?</p>
    </main>

    <Footer />
  </>
)

export default NotFound
