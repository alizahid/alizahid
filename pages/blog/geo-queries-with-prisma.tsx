import { NextPage } from 'next'
import React from 'react'

import { Code, Link, Page, PostHeader } from '../../components'
import blog from '../../data/blog.json'
import { Post } from '../../types'

const post = blog.find(({ slug }) => slug === 'geo-queries-with-prisma') as Post

const Blog: NextPage = () => (
  <Page description={post.excerpt} subtitle={post.title} title="Blog">
    <PostHeader date={post.date} slug={post.slug} title={post.title} />

    <div className="post">
      <p>
        I haven&#39;t used relational databases in years since I switched to
        MongoDB. The freeform structure of document-based databases gave me so
        much freedom, and I rode that high until last year when I came across
        Prisma.
      </p>
      <p>
        Back then, Prisma was still in beta and had so many limitations that
        prevented me from using it any production system, even my side projects.
        Fortunately, that&#39;s changed with version 2.
      </p>
      <p>
        Prisma is now my defacto standard for all side projects. It&#39;s still
        missing a few things I&#39;d like (bulk insert, extending migrations),
        but almost everything you&#39;d need to build a project is now there.
      </p>

      <h3>What is Prisma?</h3>
      <p>
        What could be called an oversimplification, Prisma is an ORM framework.
        However, with all its extra{' '}
        <Link external href="https://github.com/prisma/studio">
          bells
        </Link>{' '}
        and{' '}
        <Link external href="https://github.com/prisma/prisma-client-js">
          whistles
        </Link>
        , it goes beyond that and does more. It&#39;s my favorite backend tool
        right now.
      </p>

      <h3>What about geo queries?</h3>
      <p>
        I was recently building{' '}
        <Link href="https://homemadefood.xyz">Homemade</Link> and needed to show
        users any chefs near them. With MongoDB, this would&#39;ve been
        incredibly easy. Just pop in a 2D index and fetch based on coordinates.
        But PostgreSQL has{' '}
        <Link external href="https://postgis.net">
          PostGIS
        </Link>
        , which isn&#39;t as fast or easy to work with as MongoDB&#39;s GeoJSON,
        but it&#39;s no spring chicken either.
      </p>
      <p>
        However, the kicker is that Prisma doesn&#39;t yet support native types.
        This means that you can&#39;t define <code>Point</code> or{' '}
        <code>Geometry</code> types in your schema and then run queries on those
        fields.
      </p>
      <p>
        Luckily, I have an easy workaround. It doesn&#39;t involve any{' '}
        <code>ALTER</code> statements to your database or fake{' '}
        <code>String</code> fields in your Prisma schema. However, I haven&#39;t
        benchmarked it and don&#39;t know how well it&#39;ll perform under
        production loads.
      </p>

      <h3>What are we building?</h3>
      <p>
        Our app has a list of chefs that each deliver near them in a preset
        radius. When a user opens the app, we&#39;ll show them all chefs nearby
        within delivery distance.
      </p>
      <p>
        To start, we&#39;ll create a sample Prisma schema we can use for our
        example.
      </p>
      <Code
        className="my-4"
        code={`datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model Post {
  id Int @id @default(autoincrement())

  body      String
  latitude  Float
  longitude Float
  radius    Int

  createdAt DateTime @default(now())
  updatedAt DateTime @default(now()) @updatedAt
}`}
        language="typescript"
      />
      <p>
        Our <code>Chef</code> model has <code>latitude</code> and{' '}
        <code>longitude</code> defined as <code>Float</code> to run any
        operations on them if needed. This is not ideal as PostGIS uses its own
        data type where the coordinates are stored in a single field, but
        it&#39;s a decent workaround. And <code>radius</code> is an{' '}
        <code>Int</code> for kilometers.
      </p>

      <hr />

      <p>
        Next, we install PostGIS on our database. Assuming you develop on macOS
        like me, here are the steps.
      </p>
      <ol>
        <li>
          Install PostGIS with <code>brew install postgis</code> in your
          terminal.
        </li>
        <li>
          Install the extension on your database with{' '}
          <code>CREATE EXTENSION postgis</code>. You might want or need other
          extensions like <code>postgis_topology</code>, so get those, too.{' '}
          <Link external href="http://postgis.net/install">
            More here
          </Link>
          .
        </li>
        <li>And you&#39;re ready to roll!</li>
      </ol>

      <hr />

      <p>
        Now run your Prisma migrations and get your database populated and add
        some dummy data to start testing.
      </p>
      <p>
        Since Prisma won&#39;t let you run geo queries, you&#39;ll have to add
        one extra query to your fetch function.
      </p>
      <p>Let&#39;s say this is how you fetch a list of chefs right now.</p>
      <Code
        className="my-4"
        code="const chefs = await prisma.chef.findMany()"
        language="typescript"
      />
      <p>
        We&#39;re gonna switch it around a bit and get the best of both worlds;
        geo queries with <code>$queryRaw</code> and the actual data with Prisma.
        It&#39;ll look something like this.
      </p>
      <Code
        className="my-4"
        code={`const query = await prisma.$queryRaw<{ id: number }[]>(
  \`SELECT id, items FROM "Chef" WHERE ST_DWithin(ST_MakePoint(longitude, latitude), ST_MakePoint(\${longitude}, \${latitude})::geography, radius * 1000)\`
)

const chefs = await db.chef.findMany({
  where: {
    id: {
      in: query.map(({ id }) => id)
    }
  }
})`}
        language="typescript"
      />

      <hr />

      <p>And we&#39;re done! Let&#39;s break down what just happened.</p>
      <ol>
        <li>
          Fetch your coordinates and radius from the user. Ensure you sanitize
          all input properly since we&#39;re passing the data into a raw query
          and bypassing Prisma&#39;s sanitizer. Radius is in meters, so
          don&#39;t forget to multiply it by 1,000 if your input is in
          kilometers.
        </li>
        <li>
          In our raw query, we&#39;re creating two geo points with{' '}
          <code>ST_MakePoint</code>; one for the chef location and another for
          input. We&#39;re then checking if our input location falls within a
          circle with the center as the chef&#39;s location and{' '}
          <code>radius</code> as the chef&#39;s delivery radius. Finally,
          we&#39;ll return only the <code>id</code> of the chefs that our query
          selects.
        </li>
        <li>
          Call Prisma to fetch the chefs by passing the ids we got back from our
          raw query. This allows us to use all Prisma features like
          relationships and serialization vs. if we had just used the raw query
          to fetch all data. This one is up to you. You can just return all
          columns from the raw query and send back to the client, or you can do
          what I did.
        </li>
      </ol>

      <hr />

      <p>
        That was it. Most{' '}
        <Link
          external
          href="https://github.com/prisma/prisma/issues/1798#issuecomment-604855924">
          workarounds
        </Link>{' '}
        I&#39;ve found for running geo queries with Prisma require you to
        manually add <code>geometry</code> fields and then set them as{' '}
        <code>String</code> in your Prisma schema and finally run raw queries
        anyway. This method allows you to avoid all that extra work. However, it
        does come with a slight hit to performance because we&#39;re creating
        two new points to run our operations on every query instead of one.
      </p>
      <p>
        Until Prisma expands their support for native types, this is an
        excellent workaround as it doesn&#39;t involve any extra work to get
        PostGIS up and running. Some database providers (like{' '}
        <Link external href="https://render.com/">
          Render
        </Link>
        ) already have many extensions preinstalled on their PostgreSQL
        databases, including PostGIS. Without custom migration scripts, you can
        deploy this with a lot more ease than you would if you had to alter your
        database.
      </p>
    </div>
  </Page>
)

export default Blog
