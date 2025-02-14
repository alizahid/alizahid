import Link from 'next/link'

import { Icon } from './icon'

export function Footer() {
	const links = [
		{
			href: 'https://github.com/alizahid',
			icon: <Icon className="size-5" name="github" />,
			label: 'GitHub',
		},
		{
			href: 'https://twitter.com/alizah1d',
			icon: <Icon className="size-5" name="twitter" />,
			label: 'Twitter',
		},
		{
			href: 'https://linkedin.com/in/alizahid',
			icon: <Icon className="size-5" name="linkedin" />,
			label: 'LinkedIn',
		},
	]

	return (
		<footer className="flex items-start justify-between gap-4">
			<div className="text-neutral-600 text-sm">
				&#169; {new Date().getFullYear()} &#215; Ali Zahid
			</div>

			<div className="flex items-center gap-4">
				{links.map((link) => (
					<Link
						className="text-neutral-800 outline-none hover:text-neutral-900 focus-visible:bg-neutral-200"
						href={link.href}
						key={link.href}
					>
						{link.icon}

						<span className="-m-1 absolute size-1 overflow-hidden">
							{link.label}
						</span>
					</Link>
				))}
			</div>
		</footer>
	)
}
