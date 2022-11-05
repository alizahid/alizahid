import { gql } from 'graphql-request'

import { graphcms } from '~/lib/graphcms'
import { type Query } from '~/types/graph-cms'

const POSTS = gql`
  {
    posts(orderBy: date_DESC) {
      slug
      title
      date
      excerpt
      image {
        height
        width
        url(transformation: { image: { resize: { width: 600 } } })
      }
    }
  }
`

export const fetchPosts = async () => {
  const { posts } = await graphcms.request<Pick<Query, 'posts'>>(POSTS)

  return posts
}

const SLUGS = gql`
  {
    posts {
      slug
    }
  }
`

export const fetchSlugs = async () => {
  const { posts } = await graphcms.request<Pick<Query, 'posts'>>(SLUGS)

  return posts
}
