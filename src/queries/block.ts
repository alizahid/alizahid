import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { BlockQuery } from '~/types/hygraph'

const POST = gql`
  query block($data: BlockWhereUniqueInput!) {
    block(where: $data) {
      content
    }
  }
`

export async function fetchBlock(slug: string) {
  const { data } = await hygraph.query<BlockQuery>(POST, {
    data: {
      slug,
    },
  })

  return data?.block
}
