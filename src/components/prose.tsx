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
        'prose prose-neutral prose-a:no-underline max-w-none dark:prose-invert prose-a:text-primary-600 prose-a:dark:text-primary-400',
        className,
      )}
    >
      {children}
    </Component>
  )
}
