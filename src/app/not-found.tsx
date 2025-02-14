import { House } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Not found × Ali Zahid',
}

export default function NotFound() {
	return (
		<ThemeProvider attribute="class">
			<main className="flex min-h-screen max-w-4xl flex-col items-start justify-center gap-6 text-pretty p-8">
				<Link href="/">
					<House className="size-16" weight="duotone" />
				</Link>

				<h2 className="font-bold text-4xl">
					Looks like you&#39;re looking for something that doesn&#39;t exist.
				</h2>

				<p className="text-neutral-600 text-xl">
					Are you sure you got the right link?
				</p>
			</main>
		</ThemeProvider>
	)
}
