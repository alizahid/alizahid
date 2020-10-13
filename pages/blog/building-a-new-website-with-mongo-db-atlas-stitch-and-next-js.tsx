import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

import { Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="I'm always trying to rebuild my blog with different tech to see what works best. This approach uses Stitch, Next.js and React."
    subtitle="Building a website with Stitch and Next"
    title="Blog">
    <PostHeader
      date="2019-09-16"
      slug="building-a-new-website-with-mongo-db-atlas-stitch-and-next-js"
      title="Building a website with Stitch and Next"
    />

    <div className="post">
      <p>
        I&#39;ve rebuilt my blog three times this year and moved all posts to
        Medium because I can&#39;t decide on what I want / what&#39;s easiest
        for me. Medium was cool, but I wanted to use my own domain and Medium{' '}
        <a
          href="https://help.medium.com/hc/en-us/articles/115003053487-Custom-Domains-service-deprecation"
          rel="noreferrer"
          target="_blank">
          recently
        </a>{' '}
        killed that.
      </p>
      <p>
        The first iteration was with{' '}
        <a href="https://prismic.io" rel="noreferrer" target="_blank">
          Prismic
        </a>{' '}
        and React. It was a grand project with a blog, my goals, and my
        playground. I soon realized that it was probably too ambitious,
        especially the goals. I work a lot and it&#39;s difficult to keep
        everything updated, so I decided to shutter that for the next rebuild.
      </p>
      <p>
        Iteration 1.5 was to refactor the Prismic / React site with TypeScript
        and{' '}
        <a href="https://easy-peasy.now.sh" rel="noreferrer" target="_blank">
          <code>easy-peasy</code>
        </a>{' '}
        instead of JS and{' '}
        <a href="https://redux.js.org" rel="noreferrer" target="_blank">
          Redux
        </a>
        .
      </p>
      <p>
        The second iteration followed almost immediately, where I got rid of
        Prismic in favor of a custom static site generator with Markdown posts.
        It was nice, gave me way more control over my content, and worked
        beautifully. However, it wasn&#39;t flexible enough.
      </p>
      <p>
        The third, and current, iteration came when I decided to play around
        with{' '}
        <a
          href="https://www.mongodb.com/cloud/stitch"
          rel="noreferrer"
          target="_blank">
          MongoDB Stitch
        </a>
        . Over the last year and a half, I&#39;ve used Azure Functions a lot.
        I&#39;ve written about that in{' '}
        <Link href="/blog/surviving-azure-functions">
          <a>another post</a>
        </Link>
        .
      </p>
      <p>
        While we misused functions for that project, it made a lot of sense for
        a minimal blog app. So I set out to build the whole thing.
      </p>

      <h3>Functions</h3>
      <p>
        I&#39;ve been a MongoDB Atlas customer for a long time, and I&#39;ve
        always wanted to try out Stitch, but just didn&#39;t know what to build
        with it. This gave me the perfect opportunity to try it out.
      </p>
      <p>
        I wrote 9 functions to cover CRUD for posts and projects. It had a bit
        of a learning curve because the documentation isn&#39;t fantastic. But
        the end result was quite nice. Check out the{' '}
        <a href="https://github.com/alizahid/blog-functions">code on GitHub</a>.
      </p>
      <h4>Setting up</h4>
      <p>
        The setup was fairly simple, although a little time-consuming.
        Everything has a provision / setup delay in MongoDB cloud and Stitch
        wasn&#39;t an exception.
      </p>
      <ul>
        <li>Create a Stitch app and connect it to your cluster</li>
        <li>Setup rules to allow access to your blog database</li>
        <li>Create a service for the blog functions</li>
        <li>Add your functions to the service</li>
      </ul>
      <p>
        I considered creating separate functions that my service functions could
        call, but then I ended up with two sets of functions doing basically the
        same thing. I decided to just put all my code in my service functions.
      </p>
      <h4>Authentication</h4>
      <p>
        While my posts and projects are public, updating and deleting them
        require authentication so only I can modify them. Each service function
        gives you a lot of control (but not enough) over how you want to
        authenticate. I created auth secrets for dangerous functions to prevent
        malicious actors from updating my blog. That was very simple.
      </p>

      <h3>Blog</h3>
      <p>
        While my Prismic / React app was sufficient, it lacked server-side
        rendering and thus SEO. For this rebuild, I decided to go with{' '}
        <a href="https://nextjs.org" rel="noreferrer" target="_blank">
          Next.js
        </a>{' '}
        so I could have both. Check out the{' '}
        <a href="https://github.com/alizahid/alizahid">code on GitHub</a>. I
        used{' '}
        <a
          href="https://github.com/zeit/styled-jsx"
          rel="noreferrer"
          target="_blank">
          <code>jsx-styled</code>
        </a>{' '}
        for my component styling, which was my first experience with the
        package. Can&#39;t say I&#39;m too happy with it, but that&#39;s another
        story.
      </p>
      <p>
        It&#39;s deployed to multiple regions to make it faster in different
        parts of the world, something I didn&#39;t have with Render. They will
        only have servers in the US, which causes 2+ second delay for my
        requests. Luckily, the progressive web app made it faster. But now
        it&#39;s live rendered for dynamic pages and static pages for, well,
        static pages.
      </p>

      <h3>Admin</h3>
      <p>
        This was the tricky part. Or rather, the part that prevented me from
        taking this approach. The reason I chose Prismic in the first place. I
        didn&#39;t want to build my own CMS. Why reinvent the wheel with a lot
        of effort if I can use another service. While Prismic&#39;s editor was
        fantastic, it didn&#39;t allow me the flexibility I desired.
      </p>
      <p>
        I decided to bite the bullet and build a CMS using React. Check out the{' '}
        <a href="https://github.com/alizahid/blog-admin">code on GitHub</a>.
        Take it for a <a href="https://admin.alizahid.dev">spin</a>, if you
        want.
      </p>
      <p>
        It&#39;s nice and minimal, although a bit rudimentary. I decided not to
        use a store so some changes do not reflect throughout the app. It looks
        amazing on my{' '}
        <a
          href="https://www.apple.com/ae/shop/product/HMUB2B/A/lg-ultrafine-5k-display"
          rel="noreferrer"
          target="_blank">
          desktop screen
        </a>{' '}
        but not so much on my 15&quot; MacBook Pro. It&#39;s not responsive
        either, but that&#39;s by design.
      </p>
      <p>
        It uses Markdown and a side-by-side preview so I can see what the
        content looks like as I write.
      </p>
      <hr />
      <p>
        I&#39;m quite happy with the new setup. One issue I have is with images.
        Since they&#39;re stored in the blog repo, I need to make sure I&#39;ve
        added all the assets, pushed and deployed before I publish a new post.
        It&#39;s not the end of the world, and the work required to upload and
        host assets separately would be a hassle, I can live with it for now.
      </p>
      <p>
        Another change could be to host the admin on Now instead of Render. Not
        entirely sure why I chose to host them separately. Convenience, perhaps?
      </p>
    </div>
  </Page>
)

export default Post
