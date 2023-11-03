import { gql } from '@urql/core'

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
  const { data } = await hygraph.query<LinksQuery>(LINKS, undefined)

  return data?.links ?? []
}
