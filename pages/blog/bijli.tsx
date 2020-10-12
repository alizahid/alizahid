import { NextPage } from 'next'
import React from 'react'

import { Page, PostHeader, Screenshot } from '../../components'

const Post: NextPage = () => (
  <Page
    description="The past, present, and future of one of my oldest ideas."
    subtitle="Bijli"
    title="Blog">
    <PostHeader date="2019-05-19" slug="bijli" title="Bijli" />

    <div className="post">
      <h3>Past</h3>
      <p>
        Nine years ago, during my second year of university, I came up with an
        idea to document all instances of crime in Karachi. Muggings, target
        killing, bomb blasts, were fairly regular at the time. It was called
        CityMap.
      </p>
      <p>
        The teacher who taught the course that I built this app for, however,
        scared me off. He claimed that people behind the crimes wouldn&#39;t
        look lightly on this database, and by publishing this, I might put
        myself in danger. I was 20 at the time, and that was enough warning for
        me to back off.
      </p>
      <p>
        A year later, much to my dismay, someone else built and published the
        app. It went massively viral; almost 200k likes on Facebook by the time
        the anonymous creator abandoned the app.
      </p>
      <p>
        For my final year project, I picked it up again. I added some cool new
        features; you could now navigate around affected areas by looking at
        alternative routes and updates and navigation by text message. It was
        before cellular data became cheap in Pakistan, and everyone was either
        using SMS or BBM.
      </p>
      <p>
        Back then, I hadn&#39;t started building mobile apps. So all this was
        for the web. I also created a small SMS API that would use an Android
        device to send out messages because I couldn&#39;t afford Twilio.
      </p>
      <p>
        I got a good grade, and I forgot about CityMap (what an original name!),
        but the concept always stayed very dear to me.
      </p>

      <h3>Present</h3>
      <p>
        Fast forward to 2017. I had just left my job in Dubai and was planning
        to settle back home when I realized that Karachi has a lot of highly
        disruptive and frequent power outages. There isn&#39;t power for
        everyone, and the power companies deal with that by scheduling outages
        called load shedding. I&#39;m not sure if it&#39;s a technique known
        outside of the country (or other similar countries).
      </p>
      <p>
        To work around the outages, I tried to find any schedules that the
        companies might have posted online. The plan was to do things that
        needed power when it was available, charge my devices, do npm install,
        while there was power and leave physical activities for the rest.
      </p>
      <p>
        However, it turns out that some areas are more affected than others, and
        some places only have power for a few hours a day. Publicizing that data
        would be bad PR for the power companies, so nobody did it.
      </p>

      <hr />

      <p>
        So I built <a href="https://bijli.co">Bijli</a>.
      </p>
      <p>
        It was a crowd-sourced app; people would drop a pin on a map when the
        power would go out in an area, and they&#39;d get a notification an hour
        later asking if it&#39;s back now.
      </p>
      <p>
        It went viral on Twitter and other local news. People loved it. I loved
        it because I wanted things to be more transparent and information more
        accessible. It&#39;s a theme with all my ideas/apps. Unfortunately, it
        wasn&#39;t sustainable.
      </p>
      <p>
        Most people who reported power outages would forget about updating and
        go back to Netflix (I&#39;m assuming) the moment power came back in
        their area. The concept was fresh, but the data was stale. Soon after,
        app ratings started dropping. Execution of phase one was a failure.
      </p>

      <hr />

      <p>
        Phase two was ambitious. I tinkered with several ideas; two of them made
        (some?) sense.
      </p>
      <p>
        While I&#39;m not very familiar with hardware and have only tinkered
        with Raspberry Pi, but the idea was to build some kits which would ping
        my APIs continuously unless they couldn&#39;t, which meant the power was
        out. I&#39;d install these kits on power transformers all around the
        city.
      </p>
      <p>
        I was excited by this approach, but it didn&#39;t pan out for several
        reasons.
      </p>
      <ul>
        <li>Building and maintaining the kits would be expensive</li>
        <li>The risk of sabotage or theft of said kits was high</li>
        <li>Possible legal implications of messing with public property</li>
        <li>
          Lack of real knowledge and experience with a large scale hardware
          deployment
        </li>
      </ul>

      <hr />

      <p>
        The alternative was to get an API or some schedule from the power
        companies directly, which I could then map out in the app. That&#39;s
        when things got interesting.
      </p>
      <p>
        I asked many people for their help; former classmates who were working
        at said power companies, contacts of my father&#39;s, people on Twitter,
        to help me get in touch with the right people who could help me.
      </p>
      <p>
        Initially, it was frustrating to see nobody else cared about this. I
        wanted to empower people with data, and the lack of empathy was
        surprising. A fair number of similar thoughts occurred to me — the
        classic grind burnout.
      </p>
      <p>
        Eventually, someone put me in touch with someone in upper management,
        and we scheduled a meeting.
      </p>
      <p>
        A few days before the meeting, my dad casually asked if I wanted to meet
        the owner of the group which owned the largest power company in Karachi.
        I agreed.
      </p>
      <p>
        The next day, we went over to the guy&#39;s place. We had coffee and
        carrot cake, talked about politics and the economy. I told him about my
        idea. He didn&#39;t much care about it. His concern was data like that
        might not look favorable for the company. I just wanted to know when to
        keep my phone charged. I told him I was meeting someone at the power
        company tomorrow to see what kind of data they could provide me.
      </p>
      <p>
        On my way back, the other guy emailed to postpone the meeting
        indefinitely. The conspiracy theorist in me had a field day with his
        timing. The Big Power didn&#39;t want the common man to mess up their
        oppression. With a chuckle, I abandoned Bijli.
      </p>

      <h3>Present</h3>
      <p>
        I still want to build a map-based app that gives users information.
        I&#39;ve decided to merge CityMap and Bijli into one, keeping the name
        and the crowd-sourced approach.
      </p>
      <div className="flex flex-col lg:flex-row my-16">
        <Screenshot
          caption="List of plans"
          image="/blog/bijli/bijli-v2-1.png"
        />
        <Screenshot
          caption="Comments on a plan"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/bijli/bijli-v2-3.png"
        />
        <Screenshot
          caption="Creating a plan"
          className="mt-8 lg:mt-0 lg:ml-8"
          image="/blog/bijli/bijli-v2-2.png"
        />
      </div>
      <p>
        The items are one of two major types; positive and negative, with
        multiple categories, possibly dynamic, within each. Users can up or down
        vote to show if an item is legitimate or not, with negative rating items
        falling off the map. They&#39;ll also be able to report things straight
        away if it looks fishy.
      </p>

      <hr />

      <p>
        I will probably never publish this version of Bijli, but the source code
        will be available on GitHub soon.
      </p>
    </div>
  </Page>
)

export default Post
