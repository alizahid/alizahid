import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

import { Footer, Header } from '../components'

const NotFound: NextPage = () => (
  <>
    <Head>
      <title>404 / Ali Zahid</title>
    </Head>

    <main className="flex flex-col justify-center">
      <Header className="mb-12" />

      <h2 className="text-2xl font-semibold">
        Looks like you&#39;re looking for something that doesn&#39;t exist.
      </h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Are you sure you got the right link?
      </p>

      <Footer className="mt-12" />
    </main>
  </>
)

export default NotFound
