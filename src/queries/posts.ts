import { gql } from 'graphql-request'

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
  const { posts } = await hygraph.request<PostsQuery>(POSTS)

  return posts
}

const SLUGS = gql`
  query slugs {
    posts {
      slug
    }
  }
`

export const fetchSlugs = async () => {
  const { posts } = await hygraph.request<SlugsQuery>(SLUGS)

  return posts
}
