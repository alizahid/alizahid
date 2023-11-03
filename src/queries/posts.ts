import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { PostsQuery, SlugsQuery } from '~/types/hygraph'

const POSTS = gql`
  query posts {
    posts(orderBy: date_DESC) {
      date
      excerpt
      slug
      title
      image {
        height
        url(transformation: { image: { resize: { width: 600 } } })
        width
      }
    }
  }
`

export const fetchPosts = async () => {
  const { data } = await hygraph.query<PostsQuery>(POSTS, undefined)

  return data?.posts ?? []
}

const SLUGS = gql`
  query slugs {
    posts {
      slug
    }
  }
`

export const fetchSlugs = async () => {
  const { data } = await hygraph.query<SlugsQuery>(SLUGS, undefined)

  return data?.posts ?? []
}
