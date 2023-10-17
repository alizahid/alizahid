import { uniq } from 'lodash'
import { Metadata } from 'next'

import { Links } from '~/components/links'
import { Tags } from '~/components/tags'
import { fetchLinks } from '~/queries/links'

export const metadata: Metadata = {
  description: "Things I've collected",
  metadataBase: new URL('https://alizahid.dev'),
  openGraph: {
    type: 'website',
  },
  title: 'Links × Ali Zahid',
}

type Props = {
  searchParams: {
    tag: string
  }
}

export default async function Page({ searchParams }: Props) {
  const links = await fetchLinks()

  const tags = uniq(links.flatMap(({ tags }) => tags))

  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-2xl font-black lg:text-4xl">Links</h1>

      <section className="flex flex-col lg:flex-row gap-12">
        <Tags active={searchParams.tag} className="lg:w-40" tags={tags} />

        <Links active={searchParams.tag} links={links} />
      </section>
    </main>
  )
}
