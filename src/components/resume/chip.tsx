import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
	children: ReactNode
	className?: string
}

export function Chip({ children, className }: Props) {
	return (
		<span className={twMerge('text-sm leading-none', className)}>
			{children}
		</span>
	)
}
