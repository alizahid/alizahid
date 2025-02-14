import '~/styles/main.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { mono, sans } from '~/assets/fonts'

export const metadata: Metadata = {
	description: 'Tech lead, Product developer, Full-stack engineer',
	metadataBase: new URL('https://alizahid.dev'),
	openGraph: {
		type: 'website',
	},
	title: 'Ali Zahid × Tech lead, Product developer, Full-stack engineer',
}

type Props = {
	children: ReactNode
}

export default function Layout({ children }: Props) {
	return (
		<html
			className={twMerge(sans.variable, mono.variable)}
			lang="en"
			suppressHydrationWarning
		>
			<body>
				{children}

				<Analytics />
			</body>
		</html>
	)
}
