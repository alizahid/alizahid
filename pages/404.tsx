import Head from 'next/head'
import React, { FunctionComponent } from 'react'

import { Footer, Header } from '../components'

const NotFound: FunctionComponent = () => (
  <>
    <Head>
      <title>404 / Ali Zahid</title>
      <meta content="Not found" name="description" />
    </Head>

    <main className="min-h-screen flex flex-col justify-center p-8 lg:p-12">
      <Header title="404" />

      <div className="my-12">
        <h2 className="text-6xl font-semibold leading-tight mt-8">
          Looks like you&apos;re looking for something that doesn&apos;t exist.
        </h2>
        <p className="mt-4 text-2xl">Are you sure you got the right link?</p>
      </div>

      <Footer />
    </main>
  </>
)

export default NotFound
