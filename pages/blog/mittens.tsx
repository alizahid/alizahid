import { NextPage } from 'next'
import React from 'react'

import { Image, Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="Mittens brings you push notifications from GitHub."
    subtitle="Mittens"
    title="Blog">
    <PostHeader date="2019-03-10" slug="mittens" title="Mittens" />

    <div className="post">
      <p>
        I started working on Mittens last year. I kept missing notifications
        from GitHub. Due to the volume of emails, I had filtered GitHub
        notifications out of my inbox. However, I was always late to the party.
        I was missing out on pull requests and issues unless someone also let me
        know on Slack.
      </p>
      <p>
        When I started building Mittens, there was no right way to fetch
        notifications; there still isn&#39;t. However, at least we have
        something cheaper and scalable.
      </p>
      <p>
        The first version of Mittens was a React Native app, backed by a Node
        API hosted on Heroku. It wasn&#39;t the best system, but it worked. I
        wrote the API to keep it as light as possible so that it could fetch
        user notifications every minute, which would be an improvement over
        other paid apps on the App Store that usually check every 10 minutes for
        notifications.
      </p>
      <p>
        I got busy with other stuff, as it always happens, and forgot about
        Mittens for a while. Until last month, when I was doing an app release
        for February. I know this post is late, but the app wasn&#39;t.
      </p>
      <p>
        The new version of Mittens is much better, although I still think
        there&#39;s room for improvement. It&#39;s still React Native, but I
        only published on the App Store for the moment. The backend is still
        Node, but now uses Firebase extensively; Firebase for authentication,
        Firestore for storing data, Cloud Functions for auth and fetching
        notifications, and Cloud Messaging for push notifications.
      </p>
      <Image
        caption="Mittens architecture"
        className="my-12"
        image="/blog/mittens/architecture.png"
      />

      <hr />

      <p>
        The code, as usual, is publicly available on{' '}
        <a href="https://github.com/mittens">GitHub</a>.
      </p>
      <p>
        Take it for a spin, and let me know what you think:{' '}
        <a href="https://itunes.apple.com/us/app/mittens/id1453383568">
          Mittens on the App Store
        </a>
        .
      </p>
    </div>
  </Page>
)

export default Post
