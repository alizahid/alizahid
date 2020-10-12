import { NextPage } from 'next'
import React from 'react'

import { Page, Post } from '../../components'

const Blog: NextPage = () => (
  <Page description="My words" title="Blog">
    <Post date="2020-06-24" slug="corona-times" title="Corona times">
      <p>
        It&apos;s been a long time since I posted anything. Time for a catch-up.
      </p>
    </Post>
    <Post date="2019-09-29" slug="prodo" title="Prodo">
      <p>
        Prodo is a name I used for an SMS API I built years ago. But that never
        panned out, so I repurposed it when I built a snippet manager last
        weekend.
      </p>
    </Post>
    <Post date="2019-09-18" slug="planbear" title="PlanBear">
      <p>
        I first built PlanBear with Ember and Cordova during a Hackathon.
        It&apos;s like Meetup for smaller and more spontaneous plans.
      </p>
    </Post>
    <Post
      date="2019-09-16"
      slug="building-a-new-website-with-mongo-db-atlas-stitch-and-next-js"
      title="Building a website with Stitch and Next">
      <p>
        I&apos;m always trying to rebuild my blog with different tech to see
        what works best. This approach uses Stitch, Next.js and React.
      </p>
    </Post>
    <Post
      date="2019-07-03"
      slug="surviving-azure-functions"
      title="Surviving Azure Functions">
      <p>My year with Azure Functions and how I survived.</p>
    </Post>
    <Post date="2019-05-19" slug="bijli" title="Bijli">
      <p>The past, present, and future of one of my oldest ideas.</p>
    </Post>
    <Post date="2019-05-17" slug="last-two-months" title="Last two months">
      <p>
        What I&apos;ve been up to for the last two months and why I&apos;ve
        abandoned all my goals.
      </p>
    </Post>
    <Post date="2019-03-10" slug="mittens" title="Mittens">
      <p>Mittens brings you push notifications from GitHub.</p>
    </Post>
    <Post date="2019-02-06" slug="goodbye-metro" title="Goodbye, Metro">
      <p>I shut down my first app ever. A story of being outdone.</p>
    </Post>
    <Post
      date="2019-02-03"
      slug="setting-up-a-new-react-native-project"
      title="Starting with React Native">
      <p>
        Setting up a React Native projects with CocoaPods can be tricky. Here
        are some of my tricks so you can avoid Xcode hell.
      </p>
    </Post>
    <Post date="2019-01-17" slug="building-wowdb" title="Building WoWdb">
      <p>
        WoWdb is a mobile World of Warcraft database. It&apos;s built with
        React, React Native, Fastify, MongoDB, and hosted on Render.
      </p>
    </Post>
    <Post
      date="2019-01-07"
      slug="keep-marker-in-center-and-move-map-around-it"
      title="Location picker with React Native">
      <p>
        A performance-oriented approach to let users pick their location on a
        map.
      </p>
    </Post>
    <Post
      date="2019-01-06"
      slug="building-a-new-website-with-prismic"
      title="Building a website with Prismic">
      <p>How I rebuilt my website using Prismic, a headless CMS, and React.</p>
    </Post>
  </Page>
)

export default Blog
