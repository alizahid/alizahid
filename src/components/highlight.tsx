import { type ReactNode } from 'react'
import { RoughNotation } from 'react-rough-notation'

type Props = {
  children: ReactNode
  show?: boolean
}

export function Highlight({ children, show }: Props) {
  return (
    <RoughNotation color="var(--color-amber-200)" show={show} type="highlight">
      {children}
    </RoughNotation>
  )
}
