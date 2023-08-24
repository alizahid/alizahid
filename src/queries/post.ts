import { gql } from 'graphql-request'

import { hygraph } from '~/lib/hygraph'
import { PostQuery } from '~/types/hygraph'

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
    }
  }
`

export const fetchPost = async (slug: string) => {
  const { post } = await hygraph.request<PostQuery>(POST, {
    data: {
      slug,
    },
  })

  return post
}
