import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { type PostQuery } from '~/types/hygraph'

const POST = gql`
  query post($data: PostWhereUniqueInput!) {
    post(where: $data) {
      content
      date
      excerpt
      slug
      title
      image {
        height
        url(transformation: { image: { resize: { width: 1280 } } })
        width
      }
      icon: image {
        height
        url(
          transformation: {
            image: { resize: { height: 512, width: 512, fit: crop } }
          }
        )
        width
      }
    }
  }
`

export async function fetchPost(slug: string) {
  const { data } = await hygraph.query<PostQuery>(POST, {
    data: {
      slug,
    },
  })

  return data?.post
}
