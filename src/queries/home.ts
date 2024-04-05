import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { HomeQuery } from '~/types/hygraph'

const HOME = gql`
  query home {
    block(where: { slug: "about" }) {
      content
    }
    posts(orderBy: date_DESC, first: 6) {
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
    projects(orderBy: order_ASC, first: 4) {
      content
      name
      slug
      image {
        height
        url(transformation: { image: { resize: { width: 128 } } })
        width
      }
      links {
        link
        label
      }
    }
  }
`

export async function fetchHome() {
  const { data } = await hygraph.query<HomeQuery>(HOME, undefined)

  if (!data) {
    throw new Error()
  }

  return data
}
