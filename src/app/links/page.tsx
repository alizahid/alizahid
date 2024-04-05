import { Metadata } from 'next'

import { LinkCard } from '~/components/link'
import { fetchLinks } from '~/queries/links'

export const metadata: Metadata = {
  description: "Things I've collected",
  title: 'Links × Ali Zahid',
}

export default async function Page() {
  const links = await fetchLinks()

  return (
    <main className="flex flex-col gap-12">
      <h1 className="text-4xl font-bold">Links</h1>

      <section className="grid gap-8 lg:grid-cols-2">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </section>
    </main>
  )
}
