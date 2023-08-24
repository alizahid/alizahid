import { gql } from 'graphql-request'

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
  const { projects } = await hygraph.request<ProjectsQuery>(PROJECTS)

  return projects
}
