import '~/styles/resume.css'

import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

export function Document({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'flex flex-col gap-8 p-8 font-resume print:block print:gap-0 print:p-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
