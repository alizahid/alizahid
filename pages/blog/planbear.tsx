import { NextPage } from 'next'
import React from 'react'

import {
  Image,
  Link,
  Page,
  PostHeader,
  Screenshot,
  Screenshots
} from '../../components'
import blog from '../../data/blog.json'
import { Post } from '../../types'

const post = blog.find(({ slug }) => slug === 'planbear') as Post

const Blog: NextPage = () => (
  <Page description={post.excerpt} subtitle={post.title} title="Blog">
    <PostHeader date={post.date} slug={post.slug} title={post.title} />

    <div className="post">
      <h3>The very distant past</h3>
      <p>
        I moved to Dubai in the fall of 2013. I was 22 at the time, and all my
        colleagues were 30+ and married with families. It became clear that
        I&#39;d have to look elsewhere to make new friends.
      </p>
      <p>
        It turns out Dubai is a very lonely place. Most people are here
        temporarily, on their way to the next destination. It&#39;s a very
        transient city. So relationships don&#39;t last very long either.
      </p>
      <p>
        In 2014, I participated in a hackathon hosted at the Microsoft offices
        in Dubai Internet City. By that time, I had thought about building
        PlanBear, but hadn&#39;t gotten around to it. The hackathon was the
        perfect opportunity to dive into it.
      </p>
      <p>
        I met a student from NYU Abu Dhabi, Asyrique, at the hackathon, and we
        got to work on the app. I have no talent for logo design, but I designed
        one anyway.
      </p>
      <Image
        caption="The original PlanBear logo; a horrible abomination"
        className="my-8"
        image="/blog/planbear/original-logo.png"
      />
      <p>
        We both worked back and forth on the backend and mobile app. The backend
        was Node with Express, and the app was Ember with Cordova. Meteor was
        the hot new thing at the time, and my partner started experimenting
        while I built a functional prototype.
      </p>
      <p>
        The premise was simple. You choose a type and create a plan. For a
        movie, for the beach, etc. People nearby would request to join your
        plan. Tada.
      </p>
      <p>
        We bombed at the hackathon, though. One of the judges mentioned us at
        the end of the award ceremony saying why people would use PlanBear when
        you have Meetup. More on this later.
      </p>
      <p>
        Over the next couple of months, I refined the idea and designed a new
        logo. I&#39;m really proud of this piece of art.
      </p>
      <Image
        caption="The new and improved, and current, PlanBear logo"
        className="my-8"
        image="/blog/planbear/logo.png"
      />
      <p>
        We went to another hackathon next year and improved the app. We got a
        bigger team this time; Asyrique brought some of his friends from school
        to help with marketing. We added features and fixed bugs.
      </p>
      <p>
        Of course, we bombed again. Nobody was interested in social apps. The
        winner was a workplace and meetings tool and the runner up a healthcare
        app. Can&#39;t compete with those.
      </p>

      <h3>The distance past</h3>
      <p>
        Following that, I put the app on pause. I forgot all about it until a
        year later, the judge who trashed the app at the first hackathon reached
        out to me about buying the app. What a turn of events.
      </p>
      <p>
        He had an investor who was interested in buying small apps and turning
        them around. But when I told them I wanted (only) $20,000 for it, they
        decided it was too expensive to buy it. Instead, they chose to rename
        the app and start it up again with me as CTO. The investor came on board
        as CEO, the judge as COO, and we found a marketing guy.
      </p>
      <p>
        We added a lot of features and changed the app to make it for exclusive
        parties instead of public plans. You had to verify yourself with email
        and a phone number and all that jazz.
      </p>
      <p>
        A few weeks later, the app was ready. But the marketing guy fell out,
        and now we had an app with no execution plan. The other two guys lost
        interest, and I lost time. Following that, I put the idea on hold
        indefinitely.
      </p>
      <p>
        The idea excited me, though. And some of the elements later became part
        of <Link href="https://beangry.co">Boar</Link>. I have a fascination
        with social apps and have taken a crack at many different ideas over the
        years.
      </p>

      <h3>Present</h3>
      <p>
        Over the last couple of weeks, I started working on PlanBear again. It
        began as an experiment with GraphQL, React Native, TypeScript. Before I
        knew it, I had a functional app on my hands.
      </p>
      <Screenshots>
        <Screenshot
          caption="List of plans"
          image="/blog/planbear/screenshot-1.png"
        />
        <Screenshot
          caption="Comments on a plan"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/planbear/screenshot-3.png"
        />
        <Screenshot
          caption="Creating a plan"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/planbear/screenshot-2.png"
        />
      </Screenshots>
      <h4>Features</h4>
      <p>The app looks slick and has a lot of cool features.</p>
      <ul>
        <li>
          Create a plan, with optional maximum participants and expiry, so you
          have time to organize
        </li>
        <li>People nearby can request to join your plans</li>
        <li>All accepted members can comment and see other accepted members</li>
        <li>Only the plan owner can accept and remove members</li>
        <li>Once the plan is over, people can rate other members</li>
        <li>
          You can only create plans for up to 10 days in the future; this
          isn&#39;t Meetup!
        </li>
      </ul>

      <hr />

      <p>
        It&#39;s not finished and probably will never be. It&#39;s another one
        of my experiments and may never see the light of the App Store. But the
        good news is, like all my experiments, it&#39;s open-source. You can
        find the code on <Link href="https://github.com/planbear">GitHub</Link>.
      </p>
    </div>
  </Page>
)

export default Blog
