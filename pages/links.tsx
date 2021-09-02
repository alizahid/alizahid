import { gql, GraphQLClient } from 'graphql-request'
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
  const tags = useMemo(() => links.map(({ tags }) => tags).flat(), [])

  return (
    <>
      <Head>
        <title>Links / Ali Zahid</title>
        <meta content="My bookmarks" name="description" />
        <meta content="My bookmarks" property="og:description" />
        <meta content="website" property="og:type" />
      </Head>

      <main>
        <h1 className="text-2xl font-semibold">Links</h1>

        <section className="flex flex-col mt-12 lg:items-start lg:flex-row">
          <TagsCard className="lg:w-40" tags={tags} />
          <LinksCard links={links} className="flex-1 mt-12 lg:mt-0 lg:ml-12" />
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = new GraphQLClient(process.env.GRAPH_CMS_URL)

  const { links } = await client.request<Pick<Query, 'links'>>(gql`
    {
      links {
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
