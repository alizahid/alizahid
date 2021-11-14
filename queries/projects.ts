import { gql } from 'graphql-request'

import { graphcms } from '../lib/graphcms'
import { Query } from '../types/graph-cms'

const PROJECTS = gql`
  {
    projects(orderBy: order_ASC) {
      slug
      name
      content
      featured
      image {
        height
        width
        url(transformation: { image: { resize: { width: 128 } } })
      }
      links
    }
  }
`

export const fetchProjects = async () => {
  const { projects } = await graphcms.request<Pick<Query, 'projects'>>(PROJECTS)

  const featured = projects.filter(({ featured }) => featured === true)
  const other = projects.filter(({ featured }) => featured !== true)

  return {
    featured,
    other
  }
}
