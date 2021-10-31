import { gql, GraphQLClient } from 'graphql-request'
import uniq from 'lodash/uniq'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { useMemo } from 'react'

import { LinksCard } from '../components/links'
import { TagsCard } from '../components/tags'
import { Link, Query } from '../types'

type Props = {
  links: Array<Link>
}

const Links: NextPage<Props> = ({ links }) => {
  const tags = useMemo(
    () => uniq(links.map(({ tags }) => tags).flat()),
    [links]
  )

  return (
    <>
      <Head>
        <title>Links &#215; Ali Zahid</title>
        <meta content="My bookmarks" name="description" />
        <meta content="My bookmarks" property="og:description" />
        <meta content="website" property="og:type" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold lg:text-4xl">Links</h1>

        <section className="grid items-start gap-12 mt-12 lg:grid-cols-4">
          <TagsCard tags={tags} />
          <LinksCard className="lg:col-span-3" links={links} />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { links } = await client.request<Pick<Query, 'links'>>(gql`
    {
      links(orderBy: updatedAt_DESC) {
        id
        title
        description
        url
        image
        tags
      }
    }
  `)

  return {
    props: {
      links
    }
  }
}

export default Links
