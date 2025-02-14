import type { Metadata } from 'next'

import { LinkCard } from '~/components/link'
import { fetchLinks } from '~/queries/links'

export const metadata: Metadata = {
	title: 'Links × Ali Zahid',
}

export default async function Page() {
	const links = await fetchLinks()

	return (
		<main className="flex flex-grow flex-col gap-16">
			<h1 className="font-bold text-6xl">Links</h1>

			<div className="-mx-8 grid gap-8 lg:mx-0 lg:grid-cols-2">
				{links.map((link) => (
					<LinkCard key={link.id} link={link} />
				))}
			</div>
		</main>
	)
}
