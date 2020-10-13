import { NextPage } from 'next'
import React from 'react'

import {
  Link,
  Page,
  PostHeader,
  Screenshot,
  Screenshots
} from '../../components'

const Post: NextPage = () => (
  <Page
    description="It's been a long time since I posted anything. Time for a catch-up."
    subtitle="Corona Times"
    title="Blog">
    <PostHeader date="2020-06-24" slug="corona-times" title="Corona Times" />

    <div className="post">
      <p>
        It&#39;s been a challenging year. I got laid off, and while I was
        sorting my affairs, COVID-19 happens, flights got banned, and six months
        later, I&#39;m still here in Dubai.
      </p>
      <p>
        I had plans to put this downtime to good use. Work on my health goals
        and build some cool stuff. While I failed in the former, I think I
        succeeded in the latter.
      </p>

      <h3>Pandemic.li</h3>
      <img
        alt="Pandemic.li"
        className="floaty"
        height="200"
        src="/playground/pandemicli.png"
        width="200"
      />
      <p>
        Pandemic.li is a contact-tracing app for COVID-19 (and future pandemics,
        thus the generic name) with a heavy focus on privacy and security.
      </p>
      <p>
        Earlier this year, a friend of mine reached out to me, asking for help
        with a project he was working on with hopes of pitching it to the Irish
        government. He was involved with a group building a contact tracing app
        as the number of cases grew in Ireland. I volunteered, and we got
        started.
      </p>
      <p>
        Most of the app, written in React Native, had already been built by
        someone. We were rewriting the backend, updating the app to use new
        APIs, fixing bugs, and adding features.
      </p>
      <p>
        I wasn&#39;t a fan of the project structure and some architecture
        decisions, so I started building another app in parallel and would bring
        elements from the new app to the old one as a compromise.
      </p>
      <p>
        A few weeks later, the project died when the Irish government went with
        another app, which had a different approach to ours. The death of the
        app freed me up to work on my app fulltime.
      </p>
      <p>
        By then, I had almost built out all the features I thought were
        essential. A few countries had already deployed contact-tracing apps. So
        I pitched my app to the government of Pakistan to use as their official
        app. I spoke to several parties, including representatives of IT and
        health ministers. But they all insisted that I share data with them.
      </p>
      <p>
        Unfortunately, Apple and Google were rejecting COVID-19 apps published
        by individual developers, insisting that the apps come from government
        bodies, major healthcare institutions, or hospitals, which is why I
        needed government support. However, the data share was a major red flag
        since reports of people mobbing up on COVID-19 positive people came
        through.
      </p>
      <p>
        I was targetting a global audience and not just Pakistanis, which is why
        I didn&#39;t want to share my users&#39; data with the government. So I
        added end-to-end encryption to the app, which encrypted all user data,
        including contacts, places, meetings, and check-ins.
      </p>
      <p>
        However, since I had refused to share data with the government, they
        refused to publish the app for me. The code is sitting on my GitHub,
        unused.
      </p>
      <Screenshots>
        <Screenshot
          caption="Today view"
          image="/blog/corona-times/pandemicli-1.png"
        />
        <Screenshot
          caption="Places"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/pandemicli-3.png"
        />
        <Screenshot
          caption="Contacts"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/pandemicli-2.png"
        />
        <Screenshot
          caption="Profile"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/pandemicli-4.png"
        />
      </Screenshots>
      <p>
        You can learn more about it on the{' '}
        <Link href="https://pandemic.li">Pandemic.li website</Link>.
      </p>

      <h3>Video courses</h3>
      <p>
        I&#39;ve been trying my hand at recording video courses for my favorite
        tech like React, React Native, Node.js, TypeScript, and GraphQL.
      </p>
      <p>
        The first one I recorded was a React Native app. I built a comic reader
        with a bunch of cool features, such as pan-and-zoom. However, things got
        away from me, and I wasn&#39;t happy with the quality of the final
        product.
      </p>
      <p>
        So I&#39;ve started recording another, where I build a todo app.
        I&#39;ve been waiting for the next version of{' '}
        <Link external href="https://twitter.com/useclear">
          Clear
        </Link>
        , and it made more sense to create something similar, with more mass
        appeal. It&#39;s slightly advanced than your average todo app tutorial
        with Firebase authentication and data store, transitions, and a slick
        UI. I&#39;m very excited to publish this soon.
      </p>

      <h3>Helpling</h3>
      <img
        alt="Helpling"
        className="floaty"
        height="200"
        src="/playground/helpling.png"
        width="200"
      />
      <p>
        I built <Link href="https://helpling.app">Helpling</Link> in January
        this year as a web app. Inspired by a post that I saw on Imgur, where a
        guy had to wait a long time to buy a couch after moving into a new
        apartment because he couldn&#39;t afford to, I decided to build a
        platform where people could post things they needed, and others in their
        area could help out.
      </p>
      <p>
        I&#39;ve since taken the web app down and rebuilt into a mobile app and
        added a feature where people can also create offers. Before, you could
        only add requests for things you want. Now, if you have something
        you&#39;d like to give someone, you can create an offer.
      </p>
      <Screenshots>
        <Screenshot
          caption="Requests for help"
          image="/blog/corona-times/helpling-1.png"
        />
        <Screenshot
          caption="Offers to help"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/helpling-2.png"
        />
        <Screenshot
          caption="Request / offer"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/helpling-3.png"
        />
        <Screenshot
          caption="Chat"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/helpling-4.png"
        />
        <Screenshot
          caption="Profile"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/corona-times/helpling-5.png"
        />
      </Screenshots>
      <p>
        The app is in beta right now, and you can{' '}
        <Link external href="https://testflight.apple.com/join/PQSjkuHG">
          take it for a spin
        </Link>{' '}
        on iOS. Once the testing is complete, I&#39;ll publish it to App Store.
      </p>

      <h3>Pickle</h3>
      <img
        alt="Pickle"
        className="floaty"
        height="200"
        src="/playground/pickle.png"
        width="200"
      />
      <p>
        Two years ago, I was building some operations apps at my day job, and we
        needed to push some analytics data from the app somewhere. My first
        thought was Firebase Analytics, but the field limitations prevented me
        from doing that. For our customer apps, we were using Segment with
        Mixpanel, AppsFlyer, and Braze. But we decided not to push the ops data
        to those platforms.
      </p>
      <p>
        My second thought was that we could build a small analytics service for
        our in-house apps. So I started working on Pickle. The name came from
        the Rick and Morty episode, where Rick turns into a pickle.
      </p>
      <p>
        However, time constraints prevented me from building the service, and we
        just added a few APIs to our backend to store the data we needed,
        exporting it to Looker and BigQuery, and letting the BI team run with
        it.
      </p>
      <p>
        Last year, my colleague (who loved the idea) approached me, and we
        started working on Pickle as a standalone service. But we got busy with
        other things, and Rick died again.
      </p>
      <p>
        This year, with all the free time on my hands, I decided to rebuild
        Pickle from scratch with a different focus: small developers with low to
        medium volume websites and apps.
      </p>
      <p>
        I realized that with my limited resources, I couldn&#39;t compete with
        the big players like Braze, Google Analytics, Mixpanel. But what I could
        build and possibly turn into a business was a small service with cheap
        pricing for people like myself.
      </p>
      <p>
        I build a lot of apps, and analytics integration is not always easy. I
        usually integrate Segment and then push the data somewhere else. But if
        my app grows, things get very expensive, very quickly. I saw a gap and
        decided to build Pickle to fill it.
      </p>
      <p>
        I&#39;ve built a neat dashboard, two APIs (one for the frontend, and one
        to push data to the service), and now I&#39;m working on the SDKs. Once
        that&#39;s done, I&#39;ll launch the service. Fingers crossed for this
        one.
      </p>

      <hr />

      <p>
        It&#39;s been a busy and crazy year. I hope you&#39;ve been making the
        best of a difficult situation and doing great things. Please stay safe.
      </p>
    </div>
  </Page>
)

export default Post
