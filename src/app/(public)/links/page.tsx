import { type Metadata } from 'next'

import { LinkCard } from '~/components/link'
import { fetchLinks } from '~/queries/links'

export const metadata: Metadata = {
  description: "Things I've collected",
  title: 'Links × Ali Zahid',
}

export default async function Page() {
  const links = await fetchLinks()

  return (
    <main className="flex flex-1 flex-col gap-9">
      <h1 className="text-9">Links</h1>

      <section className="grid gap-8 lg:grid-cols-2">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </section>
    </main>
  )
}
