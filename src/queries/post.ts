import { gql } from 'graphql-request'

import { graphcms } from '~/lib/graphcms'
import { type Query } from '~/types/graph-cms'

const POST = gql`
  query ($data: PostWhereUniqueInput!) {
    post(where: $data) {
      slug
      title
      date
      excerpt
      content
      image {
        height
        width
        url
      }
    }
  }
`

export const fetchPost = async (slug: string) => {
  const { post } = await graphcms.request<Pick<Query, 'post'>>(POST, {
    data: {
      slug,
    },
  })

  return post
}
