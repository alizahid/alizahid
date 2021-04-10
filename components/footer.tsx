import React, { FunctionComponent } from 'react'

import { SocialLinks } from './misc'

type Props = {
  className?: string
}

export const Footer: FunctionComponent<Props> = ({ className }) => (
  <footer className={className}>
    <SocialLinks />
  </footer>
)
