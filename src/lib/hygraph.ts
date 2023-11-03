import { cacheExchange, Client, fetchExchange } from '@urql/core'

export const hygraph = new Client({
  exchanges: [cacheExchange, fetchExchange],
  url: process.env.HYGRAPH_URL,
})
