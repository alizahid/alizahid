import { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  className?: string
}

export function Paper({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'relative mx-auto flex h-[297mm] w-[210mm] flex-col text-pretty bg-[#fff] print:h-auto print:min-h-screen print:w-auto print:bg-transparent',
        className,
      )}
    >
      {children}
    </div>
  )
}
