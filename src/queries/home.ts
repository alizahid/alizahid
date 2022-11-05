import { gql } from 'graphql-request'

import { graphcms } from '~/lib/graphcms'
import { type Query } from '~/types/graph-cms'

const HOME = gql`
  {
    asset(where: { id: "cknafmzfk07zo0c61dqx7gq3h" }) {
      url
    }
    posts(orderBy: date_DESC, first: 3) {
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
    projects(where: { featured: true }) {
      slug
      name
      content
      image {
        height
        width
        url(transformation: { image: { resize: { width: 128 } } })
      }
      links
    }
  }
`

export const fetchHome = async () => {
  const data = await graphcms.request<
    Pick<Query, 'asset' | 'posts' | 'projects'>
  >(HOME)

  return data
}
