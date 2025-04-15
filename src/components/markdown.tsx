import { Info } from '@phosphor-icons/react/dist/ssr'
import { Code } from 'bright'
import Image from 'next/image'
import Link from 'next/link'
import Component, { type Components } from 'react-markdown'
import unwrapImages from 'rehype-unwrap-images'
import gfm from 'remark-gfm'
import { twMerge } from 'tailwind-merge'

type Props = {
	className?: string
	components?: Components
	content: string
}

export function Markdown({ className, components, content }: Props) {
	return (
		<div className={twMerge('space-y-4 text-pretty', className)}>
			<Component
				components={{
					a({ children, href }) {
						return (
							<Link
								className="font-medium outline-none focus-visible:bg-neutral-200"
								href={href ?? '/'}
							>
								{children}
							</Link>
						)
					},
					blockquote({ children }) {
						return (
							<blockquote className="flex items-center gap-2 bg-neutral-200 p-4 leading-tight">
								<Info className="size-5" />

								<div className="flex-1">{children}</div>
							</blockquote>
						)
					},
					code({ children }) {
						return <code className="bg-neutral-50 font-medium">{children}</code>
					},
					h1({ children }) {
						return <h1 className="font-bold text-4xl">{children}</h1>
					},
					h2({ children }) {
						return <h2 className="!mt-16 font-bold text-3xl">{children}</h2>
					},
					h3({ children }) {
						return <h3 className="!mt-6 font-bold text-2xl">{children}</h3>
					},
					img({ alt, src }) {
						const url = new URL(src ?? '')

						const height = (Number(url.searchParams.get('h')) || 200) / 2
						const width = (Number(url.searchParams.get('w')) || 200) / 2
						const type = url.searchParams.get('type')

						return (
							<figure className="!my-8 flex flex-col items-center gap-4">
								<Image
									alt={alt ?? ''}
									height={height}
									src={`https://media.graphassets.com/resize=width:1280${url.pathname}`}
									unoptimized
									width={width}
								/>

								<figcaption className="text-center text-neutral-600 text-sm">
									{alt}
								</figcaption>
							</figure>
						)
					},
					li({ children }) {
						return <li className="!my-2 pl-2">{children}</li>
					},
					ol({ children }) {
						return (
							<ol className="ml-8 list-decimal marker:text-neutral-600 marker:tabular-nums">
								{children}
							</ol>
						)
					},
					pre(props) {
						return (
							<Code
								{...props}
								className="!rounded-none text-sm"
								theme="github-dark"
							/>
						)
					},
					ul({ children }) {
						return <ul className="ml-8 list-disc">{children}</ul>
					},
					...components,
				}}
				rehypePlugins={[unwrapImages]}
				remarkPlugins={[gfm]}
			>
				{content}
			</Component>
		</div>
	)
}
