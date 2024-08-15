import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { type LinksQuery } from '~/types/hygraph'

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

export async function fetchLinks() {
  const { data } = await hygraph.query<LinksQuery>(LINKS, undefined)

  return data?.links ?? []
}

export type Links = Awaited<ReturnType<typeof fetchLinks>>
