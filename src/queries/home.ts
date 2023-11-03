import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { HomeQuery } from '~/types/hygraph'

const HOME = gql`
  query home {
    asset(where: { id: "cknafmzfk07zo0c61dqx7gq3h" }) {
      url
    }
    posts(orderBy: date_DESC, first: 3) {
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
    projects(where: { featured: true }) {
      content
      featured
      links
      name
      slug
      image {
        height
        url(transformation: { image: { resize: { width: 128 } } })
        width
      }
    }
  }
`

export const fetchHome = async () => {
  const { data } = await hygraph.query<HomeQuery>(HOME, undefined)

  if (!data) {
    throw new Error()
  }

  return data
}
