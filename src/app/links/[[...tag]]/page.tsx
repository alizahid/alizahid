import { uniq } from 'lodash'
import { Metadata } from 'next'

import { LinksCard } from '~/components/links'
import { TagsCard } from '~/components/tags'
import { fetchLinks } from '~/queries/links'

export const metadata: Metadata = {
  title: 'Links × Ali Zahid',
}

{
  /* <Head>
<title>Links &#215; Ali Zahid</title>
<meta content="My bookmarks" name="description" />
<meta content="My bookmarks" property="og:description" />
<meta content="website" property="og:type" />
</Head> */
}

type Props = {
  searchParams: {
    tag: string
  }
}

export default async function Page({ searchParams }: Props) {
  const links = await fetchLinks()

  const tags = uniq(links.map(({ tags }) => tags).flat())

  return (
    <main>
      <h1 className="text-2xl font-bold lg:text-4xl">Links</h1>

      <section className="grid items-start gap-12 mt-12 lg:grid-cols-4">
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
