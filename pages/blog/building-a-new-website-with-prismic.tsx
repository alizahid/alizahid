import { NextPage } from 'next'
import React from 'react'

import { Link, Page, PostHeader } from '../../components'

const Post: NextPage = () => (
  <Page
    description="How I rebuilt my website using Prismic, a headless CMS, and React."
    subtitle="Building a website with Prismic"
    title="Blog">
    <PostHeader
      date="2019-01-06"
      slug="building-a-new-website-with-prismic"
      title="Building a website with Prismic"
    />

    <div className="post">
      <p>
        My old website was a static HTML site with two pages; the home page, and
        the playground, where I showcase some of my work.
      </p>
      <p>
        Every time I made changes, I had to upload files over FTP. Remember FTP?
      </p>
      <p>
        My main server is a MediaTemple DV, which I&#39;ve been meaning to do
        away with for a while now. Between Digital Ocean and Heroku and Media
        Temple, I&#39;m paying a considerable amount in monthly fees for my
        personal sites / projects.
      </p>
      <p>
        The long term plan is to have{' '}
        <Link external href="https://flynn.io">
          Flynn
        </Link>{' '}
        on a Digital Ocean box for APIs, or even go serverless with{' '}
        <Link external href="https://vercel.com">
          Vercel
        </Link>
        , and use Firebase more. This site is also hosted on{' '}
        <Link href="/blog/building-a-new-website-with-prismic">Vercel</Link>{' '}
        right now!
      </p>
      <p>
        Let&#39;s talk about what went into building this and why I chose{' '}
        <Link external href="https://prismic.io">
          Prismic
        </Link>{' '}
        as my headless CMS.
      </p>

      <h3>Choosing a CMS</h3>
      <p>
        Initially, I was building a new blog for my dad. He&#39;s currently on a
        WordPress blog that I&#39;m running on my MediaTemple DV. But it&#39;s
        very expensive in terms of resources to run and doesn&#39;t leave much
        room for other things.
      </p>
      <p>
        At my day job, I&#39;ve used{' '}
        <Link external href="https://www.contentful.com">
          Contentful
        </Link>{' '}
        extensively. It&#39;s pretty great but also costs a pretty penny.
      </p>
      <p>
        So I set out to find one that gave me most control, had a well-designed
        dashboard, was easy to implement, and free.
      </p>
      <p>
        I went over to{' '}
        <Link external href="https://headlesscms.org">
          headlessCMS
        </Link>{' '}
        and looked at the top options. I tried{' '}
        <Link external href="https://strapi.io">
          Strapi
        </Link>
        ,{' '}
        <Link external href="https://getpublii.com">
          Publii
        </Link>
        ,{' '}
        <Link external href="https://directus.io">
          Directus
        </Link>
        , and{' '}
        <Link external href="https://getcockpit.com">
          Cockpit
        </Link>
        . I was hoping to self-host but eventually decided against it. One less
        element in my serverless end goal.
      </p>
      <p>
        I eventually stumbled upon Prismic and loved it instantly. There were
        some data model and UX annoyances, but I loved the editor. Most other
        options I checked really lacked there, but Prismic has a solid content
        editor.
      </p>

      <h3>Choosing the frontend</h3>
      <p>
        I love{' '}
        <Link external href="https://reactjs.org">
          React
        </Link>
        . I&#39;ve built so many apps with React and React Native over the last
        couple of years. But I&#39;m not a fan of Redux and general state
        management in React apps. And the fact that we have to bootstrap the
        whole thing ourselves, from state management to SASS. Because of the
        open nature of React, everyone has their own way of setting up their
        project structure.
      </p>
      <p>
        I love{' '}
        <Link external href="https://emberjs.com">
          Ember
        </Link>{' '}
        even more. It&#39;s very opinionated but still open. It comes with a
        fantastic router and data library builtin. While I do like JSX better,
        Handlebars is all right in my book.
      </p>
      <p>
        The choice came between the two, and eventually, React won. Prismic has
        a kit for React but doesn&#39;t for Ember. I figured it would make
        things easier.
      </p>
      <p>
        Managing the blog state with React was tricky, but it worked out in the
        end.
      </p>

      <h3>Building the app</h3>
      <p>
        It&#39;s been a while since I&#39;ve worked on a web app. At my day job,
        I&#39;ve been doing a lot of serverless backend with Node and Azure. For
        my personal projects, I usually build mobiles apps with React Native,
        and lately Firebase.
      </p>
      <p>
        I really missed building things for the browser, so I dropped everything
        and started building this. I took some code that I wrote for my
        dad&#39;s blog, changed and added to suit my needs and I was done in
        less than a day. I worked crazy hours until I was finished.
      </p>
      <p>
        Most of my time was spent designing and tweaking the data models in
        Prismic. Going back and forth between React code and Prismic to see what
        would be the best approach for things. There are a few fields I&#39;ve
        added to my models which I haven&#39;t added to the frontend; saving
        those for later.
      </p>
      <p>
        I started with an idealistic version for both the blog and the
        playground but started cutting things to make it easier for me. I had
        hero images for playground items but realized if I had to spend a lot of
        time creating those, it would prevent me from posting often. Blog posts
        also had hero images. I think they still do. Just not implemented. I
        plan on writing more this year, so went with what would be easiest and
        fastest.
      </p>

      <h3>Learnings</h3>
      <ul>
        <li>
          <strong>Aim for maximum reusability for faster turnaround.</strong>{' '}
          Old me would&#39;ve tried to build a custom CMS so I had complete
          control over everything.
        </li>
        <li>
          <strong>Explore and try new things.</strong> I love the power and
          freedom that headless CMS gives you. I probably wouldn&#39;t have
          taken this approach unless I had used Contentful in the past. Gotta
          explore more!
        </li>
        <li>
          <strong>Ship sooner.</strong> I usually like to take my time building
          things, polishing them before shipping. But with this website, I built
          fast and shipped before my content was even ready. I&#39;m writing
          this post a day or so after I published the site.
        </li>
        <li>
          <strong>Write more.</strong> Forget imposter syndrome, forget sounding
          stupid. Just write more.
        </li>
        <li>
          <strong>Have a great year.</strong>
        </li>
      </ul>

      <hr />

      <h4>It&#39;s all open source</h4>
      <p>
        I love open source things. So most of my personal projects are also open
        source, including this new website. You can find the source on{' '}
        <Link href="https://github.com/alizahid/alizahid">my GitHub</Link>.
      </p>
    </div>
  </Page>
)

export default Post
