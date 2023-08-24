import { uniq } from 'lodash'
import { Metadata } from 'next'

import { LinksCard } from '~/components/links'
import { TagsCard } from '~/components/tags'
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
      <h1 className="text-2xl font-bold lg:text-4xl">Links</h1>

      <section className="grid items-start gap-12 lg:grid-cols-4">
        <TagsCard active={searchParams.tag} tags={tags} />

        <LinksCard
          active={searchParams.tag}
          className="lg:col-span-3"
          links={links}
        />
      </section>
    </main>
  )
}
