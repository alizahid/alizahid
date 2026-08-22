import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { type HomeQuery } from '~/types/hygraph'

const HOME = gql`
  query home {
    block(where: { slug: "about" }) {
      content
    }
    posts(orderBy: date_DESC, first: 4) {
      date
      excerpt
      slug
      title
      image {
        height
        url(
          transformation: {
            image: { resize: { height: 192, width: 192, fit: crop } }
          }
        )
        width
      }
    }
    projects(orderBy: order_ASC, first: 4) {
      content
      name
      slug
      image {
        height
        url(transformation: { image: { resize: { width: 96 } } })
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
    throw new Error('Data not found')
  }

  return data
}
