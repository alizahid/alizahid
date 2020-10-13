import { NextPage } from 'next'
import React from 'react'

import { Image, Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="WoWdb is a mobile World of Warcraft database. It's built with React, React Native, Fastify, MongoDB, and hosted on Render."
    subtitle="Building WoWdb"
    title="Blog">
    <PostHeader
      date="2019-01-17"
      slug="building-wowdb"
      title="Building WoWdb"
    />

    <div className="post">
      <p>
        I built <em>Mr. Bigglesworth</em>, an app that would let you search for{' '}
        <a
          href="http://worldofwarcraft.com"
          rel="noopener noreferrer"
          target="_blank">
          World of Warcraft
        </a>{' '}
        content and view{' '}
        <a href="http://wowhead.com" rel="noopener noreferrer" target="_blank">
          Wowhead
        </a>{' '}
        comments for them. It was based on an{' '}
        <a
          href="https://wow.gamepedia.com/Mr._Bigglesworth"
          rel="noopener noreferrer"
          target="_blank">
          in-game cat
        </a>
        .
      </p>
      <p>
        It was a pretty simple solution. I wrote a script in Node.js, which
        would use the{' '}
        <a
          href="https://develop.battle.net"
          rel="noopener noreferrer"
          target="_blank">
          Blizzard APIs
        </a>{' '}
        to fetch data. Which I then transferred to my{' '}
        <a
          href="https://www.mongodb.com/cloud/atlas"
          rel="noopener noreferrer"
          target="_blank">
          MongoDB Atlas
        </a>{' '}
        database. I also wrote an API in Node.js, which would search through the
        items, quests, achievements, etc, and return to the mobile app, along
        with comments from Wowhead. The mobile app was built with React Native.
      </p>
      <p>It was a decent setup but had its drawbacks.</p>

      <h3>Problems</h3>
      <ul>
        <li>
          Search was a poor experience; MongoDB text search is rather limited,
          and has no typo tolerance or scoring algorithm. So any searches for
          <em>guldan</em> would return nothing because the data stored is
          <em>Gul&#39;dan</em>.
        </li>
        <li>
          App Store and Google Play reviews were bad. Their main grief was that
          it only lets you search and view Wowhead comments, and not see details
          about the objects. Which, to be fair, was the intended and marketed
          purpose of the app.
        </li>
        <li>
          Because the data fetching and updating was a manual process, I
          hadn&#39;t updated it since I first released the app over a year ago.
          WoW releases new content all the time, and some data just wasn&#39;t
          there to be searched.
        </li>
      </ul>
      <p>
        In 2019, I plan to retire some of my old apps that have no installs or
        don&#39;t make sense anymore. And focus more on the ones that do.
      </p>
      <p>
        As part of this restoration effort, I decided to rebuild{' '}
        <em>Bigglesworth</em> with a few changes.
      </p>

      <h3>Changes</h3>
      <ul>
        <li>
          Let users see details about items, mounts, quests, etc. As much as I
          can get from the Blizzard APIs.
        </li>
        <li>Better, faster search with typo tolerance.</li>
        <li>
          Because I couldn&#39;t find someone who could do a{' '}
          <em>Mr. Bigglesworth</em> icon for me cheaply, I decided to rebrand
          the app to <em>WoWdb</em>. I chose that capitalization as to not
          conflict with <a href="https://wowdb.com">WoWDB</a>, a competitor to
          Wowhead.
        </li>
      </ul>

      <h3>Finding the right infrastructure</h3>
      <p>A major hurdle to the ideal setup was my infrastructure.</p>
      <p>
        I was hosting the API on{' '}
        <a href="http://heroku.com" rel="noopener noreferrer" target="_blank">
          Heroku
        </a>
        , which would connect to MongoDB and fetch data, search, and hit up
        Wowhead for comments. It was fast and it worked. But that was it. It was
        expensive, so I was still doing the data updates manually, and rarely.
      </p>
      <p>
        Recently,{' '}
        <a
          href="https://cloud.google.com/scheduler"
          rel="noopener noreferrer"
          target="_blank">
          Google Cloud introduced Cloud Scheduler
        </a>
        , and it was cheap. I looked into it. But before I could finalize it, I
        came across{' '}
        <a href="https://render.com" rel="noopener noreferrer" target="_blank">
          Render
        </a>
        . Suddenly, so many new doors opened.
      </p>
      <p>
        To improve search, I wanted to use Algolia. But my project didn&#39;t
        fit their criteria for open-source and had enough data to cost $500 a
        month. Which, WoWdb being a side project, I just didn&#39;t wanna spend.
        So I decided to write my own little service just for search.
      </p>
      <h4>The ideal setup</h4>
      <p>
        I sat down and started to draw out what the ideal setup would be like.
        My requirements were simple.
      </p>
      <ul>
        <li>A place to host the REST API</li>
        <li>A microservice for search</li>
        <li>A weekly cronjob for updating data</li>
        <li>Hosting for a single page React landing page</li>
      </ul>
      <p>
        Luckily, Render offered everything in one place. Cronjobs,
        microservices, static site hosting. And cheap, too!
      </p>
      <ul>
        <li>$5 a month for web and microservice each</li>
        <li>$2 a month for cronjobs</li>
        <li>Free static sites</li>
      </ul>
      <p>Now that I could build everything in one place, I got to work.</p>

      <h3>Rebuilding</h3>
      <Image
        caption="WoWdb architecture"
        className="my-12"
        image="/blog/building-wowdb/architecture.png"
      />
      <p>
        First, I rewrote the data miner. Blizzard recently sunsetted their old
        APIs. So I had to fix my script to fetch from the new API. Improvements
        were also made. Decided to add spells, a missing collection of data, to
        the miner.
      </p>
      <p>
        Then I wrote the new search microservice. It loads all data from MongoDB
        and uses{' '}
        <a
          href="https://github.com/jeancroy/FuzzySearch"
          rel="noopener noreferrer"
          target="_blank">
          FuzzySearch
        </a>{' '}
        to run queries. I also tried the more popular{' '}
        <a href="http://fusejs.io" rel="noopener noreferrer" target="_blank">
          Fuse
        </a>
        , but couldn&#39;t get decent performance. Not sure if it was my
        configuration or just the sheer size of my dataset; roughly 550k
        records. Average search time with Fuse was 1 second. It was a mere 100
        milliseconds with Fuzzy!
      </p>
      <p>
        When this effort started and before I had decided to run everything on
        Render, I updated the Heroku app with a v2 API. But soon realized it was
        a mistake because things were changing considerably and it would simply
        be cleaner to leave the Heroku app as-is and drop all v1 code and deploy
        v2 straight to Render.
      </p>
      <p>
        The new API removed search from it. It just passed the query to the
        microservice and returned the data to the client. Refactored a ton of
        code. Just general improvements and learnings since last year when I
        first wrote it.
      </p>
      <p>
        The mobile app was probably the largest change. New views, bug fixes,
        design, etc. Building the detail views for items, mounts, achievements,
        etc, was the trickiest part. A lot of time and testing went into that.
        It was pretty much a complete rewrite. Which I always love!
      </p>
      <p>
        I&#39;m quite pleased with the results. It&#39;s a very neat setup.
        Everything is updated to the latest version of everything. It was
        incredibly fun to work on. But it&#39;s still not perfect.
      </p>

      <hr />

      <p>There are still a few improvements that can be made.</p>
      <ul>
        <li>
          Render currently only hosts services in the US west. My MongoDB Atlas
          cluster is in Ireland. Most of the app&#39;s potential users are also
          in the EU. The latency is a huge problem right now. Luckily, it&#39;s
          on their roadmap to add support for EU and other regions. But until
          then, it&#39;s a bit slow in the rest of the world.
        </li>
        <li>
          Blizzard APIs have limited data and even fewer attributes than would
          be truly useful. Wowhead, on the other hand, data mines the game files
          and has way more data than I can get from Blizzard APIs. Perhaps in
          the future, I could crawl Wowhead instead. But that&#39;s a slippery
          slope and a conversation for later.
        </li>
        <li>
          I lost my Android signing key! Luckily, I had the app enrolled in
          Google Play Signing, and their support team was very helpful in
          helping me update my key. The Android update should be live over the
          next few days. The iOS update is already available on the App Store.
        </li>
        <li>
          I want to redesign the visuals of the app, to match the{' '}
          <a
            href="https://worldofwarcraft.com/en-gb/battle-for-azeroth"
            rel="noopener noreferrer"
            target="_blank">
            Battle for Azeroth website
          </a>
          . I think it&#39;s fantastic artwork, which people will really
          appreciate. I redesigned{' '}
          <a href="https://misty-bfa.onrender.com">my guild&#39;s website</a>{' '}
          last year from the{' '}
          <a href="https://misty-legion.onrender.com">Legion design</a> and it
          was a hit.
        </li>
      </ul>

      <hr />

      <p>
        Head on over and check out the{' '}
        <a href="https://wowdb.app">updated app</a>. As always, my side projects
        are completely open-source. You can find the{' '}
        <a href="https://github.com/wowdb">code on GitHub</a>.
      </p>
    </div>
  </Page>
)

export default Post
