---
slug: building-a-new-website-with-prismic
title: Building a new website with Prismic
excerpt: How I rebuilt my website using Prismic, a headless CMS, and React.
tags: Blog, React, Prismic
date: 2019-01-06T23:26:40.260Z
---

My old website was a static HTML site with two pages; the home page, and the playground, where I showcase some of my work.

Every time I made changes, I had to upload files over FTP. Remember FTP?

My main server is a MediaTemple DV, which I've been meaning to do away with for a while now. Between Digital Ocean and Heroku and Media Temple, I'm paying a considerable amount in monthly fees for my personal sites/projects.

The long term plan is to have [Flynn](https://flynn.io) on a Digital Ocean box for APIs, or even go serverless with [Now](https://zeit.co/now), and use Firebase more. This site is also hosted on [Now](https://alizahid-owmck49dl.now.sh/blog/building-a-new-website-with-prismic) right now!

Let's talk about what went into building this and why I chose [Prismic](https://prismic.io) as my headless CMS.

## Choosing a CMS

Initially, I was building a new blog for my dad. He's currently on a WordPress blog that I'm running on my MediaTemple DV. But it's very expensive in terms of resources to run and doesn't leave much room for other things.

At my day job, I've used [Contentful](https://www.contentful.com) extensively. It's pretty great but also costs a pretty penny.

So I set out to find one that gave me most control, had a well-designed dashboard, was easy to implement, and free.

I went over to [headlessCMS](https://headlesscms.org) and looked at the top options. I tried [Strapi](https://strapi.io), [Publii](https://getpublii.com), [Directus](https://directus.io), and [Cockpit](https://getcockpit.com). I was hoping to self-host but eventually decided against it. One less element in my serverless end goal.

I eventually stumbled upon Prismic and loved it instantly. There were some data model and UX annoyances, but I loved the editor. Most other options I checked really lacked there, but Prismic has a solid content editor.

## Choosing the frontend

I love [React](https://reactjs.org). I've built so many apps with React and React Native over the last couple of years. But I'm not a fan of Redux and general state management in React apps. And the fact that we have to bootstrap the whole thing ourselves, from state management to SASS. Because of the open nature of React, everyone has their own way of setting up their project structure.

I love [Ember](https://emberjs.com) even more. It's very opinionated but still open. It comes with a fantastic router and data library builtin. While I do like JSX better, Handlebars is all right in my book.

The choice came between the two, and eventually, React won. Prismic has a kit for React but doesn't for Ember. I figured it would make things easier.

Managing the blog state with React was tricky, but it worked out in the end.

## Building the app

It's been a while since I've worked on a web app. At my day job, I've been doing a lot of serverless backend with Node and Azure. For my personal projects, I usually build mobiles apps with React Native, and lately Firebase.

I really missed building things for the browser, so I dropped everything and started building this. I took some code that I wrote for my dad's blog, changed and added to suit my needs and I was done in less than a day. I worked crazy hours until I was finished.

Most of my time was spent designing and tweaking the data models in Prismic. Going back and forth between React code and Prismic to see what would be the best approach for things. There are a few fields I've added to my models which I haven't added to the frontend; saving those for later.

I started with an idealistic version for both the blog and the playground but started cutting things to make it easier for me. I had hero images for playground items but realized if I had to spend a lot of time creating those, it would prevent me from posting often. Blog posts also had hero images. I think they still do. Just not implemented. I plan on writing more this year, so went with what would be easiest and fastest.

## Learnings

- **Aim for maximum reusability for faster turnaround.** Old me would've tried to build a custom CMS so I had complete control over everything.
- **Explore and try new things.** I love the power and freedom that headless CMS gives you. I probably wouldn't have taken this approach unless I had used Contentful in the past. Gotta explore more!
- **Ship sooner.** I usually like to take my time building things, polishing them before shipping. But with this website, I built fast and shipped before my content was even ready. I'm writing this post a day or so after I published the site.
- **Write more.** Forget imposter syndrome, forget sounding stupid. Just write more.
- **Have a great year.**

### It's all open source

I love open source things. So most of my personal projects are also open source, including this new website. You can find the source on [my GitHub](https://github.com/alizahid/alizahid).
