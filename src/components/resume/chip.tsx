import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

export function Chip({ children, className }: Props) {
  return (
    <span className={twMerge('rounded-2 px-[6px] py-[2px] text-2', className)}>
      {children}
    </span>
  )
}
