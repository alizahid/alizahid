import { gql } from '@urql/core'

import { hygraph } from '~/lib/hygraph'
import { ProjectsQuery } from '~/types/hygraph'

const PROJECTS = gql`
  query projects {
    projects(orderBy: order_ASC) {
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

export const fetchProjects = async () => {
  const { data } = await hygraph.query<ProjectsQuery>(PROJECTS, undefined)

  return data?.projects ?? []
}
