import { gql } from 'graphql-request'

import { hygraph } from '~/lib/hygraph'
import { LinksQuery } from '~/types/hygraph'

const LINKS = gql`
  query links {
    links(orderBy: updatedAt_DESC) {
      description
      id
      image
      tags
      title
      url
    }
  }
`

export const fetchLinks = async () => {
  const { links } = await hygraph.request<LinksQuery>(LINKS)

  return links
}
