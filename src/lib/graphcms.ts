import { GraphQLClient } from 'graphql-request'

export const graphcms = new GraphQLClient(process.env.GRAPH_CMS_URL)
