import { type Metadata } from 'next'

import { LinkCard } from '~/components/link'
import { fetchLinks } from '~/queries/links'

export const metadata: Metadata = {
  title: 'Links × Ali Zahid',
}

export default async function Page() {
  const links = await fetchLinks()

  return (
    <main className="flex flex-grow flex-col gap-9">
      <h1 className="text-9 font-bold">Links</h1>

      <div className="flex flex-col gap-8 md:hidden">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>

      <div className="hidden grid-cols-2 gap-8 md:grid">
        {[0, 1].map((column) => (
          <div className="flex flex-col gap-8" key={column}>
            {links
              .filter((link, index) => index % 2 === column)
              .map((link) => (
                <LinkCard key={link.id} link={link} />
              ))}
          </div>
        ))}
      </div>
    </main>
  )
}
