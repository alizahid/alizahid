import { NextPage } from 'next'
import React from 'react'

import { Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="What I've been up to for the last two months and why I've abandoned all my goals."
    subtitle="Last two months"
    title="Blog">
    <PostHeader
      date="2019-05-17"
      slug="last-two-months"
      title="Last two months"
    />

    <div className="post">
      <p>The last two months have been a bit crazy.</p>
      <p>
        I was supposed to take some time off work and recharge since last year
        was hectic. But the timing didn&#39;t work out, and I ended up burning
        myself out.
      </p>
      <p>
        I&#39;m kind of back with new energy, however, without the break that I
        still need.
      </p>
      <p>A lot of exciting stuff has happened over the last couple of weeks.</p>

      <h3>TypeScript</h3>
      <p>
        I finally got around to learning TypeScript. I am absolutely in love.
        I&#39;ve built a few prototypes and experiments with React / React
        Native and TypeScript. I&#39;ve yet to use TypeScript in a serverside
        project, but that&#39;s happening soon.
      </p>

      <h3>GraphQL</h3>
      <p>
        I&#39;ve also been experimenting with GraphQL lately. I&#39;m not quite
        fully there yet, but it&#39;s been interesting. Which means I have no
        idea what I&#39;m doing so far.
      </p>
      <p>
        At work, we&#39;re rebuilding one of our products soon. I&#39;ve
        planning to use the latest and greatest tech; TypeScript, GraphQL,
        PostgreSQL (it&#39;s cool again, right?), Kubernetes (why not?), React,
        and Relay. Out of these, I&#39;ve never worked with Relay before, so
        looking forward to that.
      </p>

      <h3>Experiments</h3>
      <p>
        I now realize my goal of publishing an app every month was far too
        ambitious. Between work and recharging myself, there isn&#39;t enough
        time to build, publish, and maintain quality apps. And I don&#39;t want
        to clutter my App Store account with garbage. With that said, my new
        strategy is to build apps and open-source them. Each experiment using a
        different bunch of technologies that I want to learn or play with,
        preferably new stuff.
      </p>

      <h3>Diving</h3>
      <p>
        I went scuba diving for the first time. It was a fantastic but rocky
        experience. Took me several minutes and a small panic attack before I
        could stabilize my breathing with the regulator. Would recommend,
        though.
      </p>

      <h3>Furniture</h3>
      <p>
        After years of eyeing it, I finally bought a{' '}
        <a
          href="https://www.hermanmiller.com/en_eur/products/seating/office-chairs/aeron-chairs"
          rel="noopener noreferrer"
          target="_blank">
          Herman Miller Aeron chair
        </a>
        . Along with a height-adjustable desk. The desk is massive and can house
        both my PC and MacBook setups, which is convenient.
      </p>
      <p>
        I think that covers the significant updates. I&#39;ll be sharing more
        details about the experiments in different posts soon.
      </p>
    </div>
  </Page>
)

export default Post
