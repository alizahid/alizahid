import NextLink from 'next/link'
import React, { FunctionComponent } from 'react'

type Props = {
  external?: boolean
  href: string
}

export const Link: FunctionComponent<Props> = ({
  children,
  external,
  href
}) => {
  if (href.startsWith('/')) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    )
  }

  if (external) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    )
  }

  return <a href={href}>{children}</a>
}
