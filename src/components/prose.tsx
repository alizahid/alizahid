import { ElementType, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  as?: ElementType
  children: ReactNode
  className?: string
}

export function Prose({ as = 'div', children, className }: Props) {
  const Component = as

  return (
    <Component
      className={twMerge(
        'prose prose-gray max-w-none prose-a:text-accent-11 prose-a:no-underline',
        className,
      )}
    >
      {children}
    </Component>
  )
}
