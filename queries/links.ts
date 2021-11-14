import { gql } from 'graphql-request'

import { graphcms } from '../lib/graphcms'
import { Query } from '../types/graph-cms'

const LINKS = gql`
  {
    links(orderBy: updatedAt_DESC) {
      id
      title
      description
      url
      image
      tags
    }
  }
`

export const fetchLinks = async () => {
  const { links } = await graphcms.request<Pick<Query, 'links'>>(LINKS)

  return links
}
