import { NextPage } from 'next'
import React from 'react'

import { Image, Link, Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="I shut down my first app ever. A story of being outdone."
    subtitle="Goodbye, Metro"
    title="Blog">
    <PostHeader date="2019-02-06" slug="goodbye-metro" title="Goodbye, Metro" />

    <div className="post">
      <p>
        Last year, I built an app for the Dubai metro, tram, and monorail. It
        had all stations on a map, fare information, and news, which I never
        updated since the first release.
      </p>
      <Image
        caption="Metro"
        className="my-12"
        image="/blog/goodbye-metro/metro.png"
      />
      <p>
        Over time, I forgot about the app. The fares changed, stations got
        renamed, new things happened. But I never got a chance to update. It
        wasn&#39;t a very well built situation. The app pulled JSON from a
        server, cached it on the device. Checked for updates on start, but could
        fall back to cached data if no internet.
      </p>
      <p>
        Last week, as part of my effort to update older apps, I started updating
        it. Better UX, newer maps, updated data using Firestore; the works. But
        then I came across this app:{' '}
        <Link external href="https://www.mapway.com/apps/dubai-metro">
          Dubai Metro Interactive Map
        </Link>
        .
      </p>
      <Image
        caption="Dubai Metro Interactive Map"
        className="my-12"
        image="/blog/goodbye-metro/dubai-metro.png"
      />
      <p>
        I wasn&#39;t a huge fan of the UX, but it has a custom map, which I
        loved. I used real location coordinates to map the stations and lines,
        etc, but they followed the printed maps of Dubai metro for their layout.
        It was pretty cool.
      </p>
      <p>
        When I built Metro, it was because there were no apps which offered
        offline support, and most of them looked terrible. That wasn&#39;t the
        case anymore. So I added <em>shutting down useless apps</em> to my list
        of cleanup activities this year, and removed from both App Store and
        Google Play. It sucked, but it just made sense.
      </p>

      <hr />

      <h4>Learnings</h4>
      <ul>
        <li>
          Apps are easy to build, but hard to maintain! Especially ones that
          require paying attention to the news for updates and are about helping
          people plan their journeys. You can&#39;t have outdated information
          there.
        </li>
        <li>
          Maps UX is difficult to achieve. Look at the terrible icons I used on
          my map. I hated them, but it was the best I could do then. There was
          also a lot of markers flickering around the map whenever it resized
          (thanks Apple Maps!) when showing details about a station.
        </li>
        <li>
          Sometimes, it&#39;s easier to get rid of something than to waste more
          time on it. Now I can focus more on other apps, loads of which I have
          planned for this year.
        </li>
        <li>
          I need to improve my release process so I can do releases more often
          than once a year. And maybe only build apps that I really care about
          so I can update them regularly. Here&#39;s to building more useful and
          fun stuff in 2019.
        </li>
      </ul>
    </div>
  </Page>
)

export default Post
