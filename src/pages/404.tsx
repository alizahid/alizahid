import { type NextPage } from 'next'
import Head from 'next/head'

const NotFound: NextPage = () => (
  <>
    <Head>
      <title>Not found &#215; Ali Zahid</title>
    </Head>

    <main className="flex flex-col justify-center">
      <h2 className="text-2xl font-semibold">
        Looks like you&#39;re looking for something that doesn&#39;t exist.
      </h2>

      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        Are you sure you got the right link?
      </p>
    </main>
  </>
)

export default NotFound
