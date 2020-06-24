---
slug: corona-times
title: Corona times
excerpt: It's been a long time since I posted anything. Time for a catch-up.
tags: Life, Work
date: 2020-06-24T00:22:05.205Z
---

It's been a challenging year. I got laid off, and while I was sorting my affairs, COVID-19 happens, flights got banned, and six months later, I'm still here in Dubai.

I had plans to put this downtime to good use. Work on my health goals and build some cool stuff. While I failed in the former, I think I succeeded in the latter.

## Pandemic.li

[Pandemic.li](https://pandemic.li) is a contact-tracing app for COVID-19 (and future pandemics, thus the generic name) with a heavy focus on privacy and security.

Earlier this year, a friend of mine reached out to me, asking for help with a project he was working on with hopes of pitching it to the Irish government. He was involved with a group building a contact tracing app as the number of cases grew in Ireland. I volunteered, and we got started.

Most of the app, written in React Native, had already been built by someone. We were rewriting the backend, updating the app to use new APIs, fixing bugs, and adding features.

I wasn't a fan of the project structure and some architecture decisions, so I started building another app in parallel and would bring elements from the new app to the old one as a compromise.

A few weeks later, the project died when the Irish government went with another app, which had a different approach to ours. The death of the app freed me up to work on my app fulltime.

![](pandemicli.png)

By then, I had almost built out all the features I thought were essential. A few countries had already deployed contact-tracing apps. So I pitched my app to the government of Pakistan to use as their official app. I spoke to several parties, including representatives of IT and health ministers. But they all insisted that I share data with them.

By now, Apple and Google were rejecting COVID-19 apps published by individual developers, insisting that the apps come from government bodies, major healthcare institutions, or hospitals, which is why I needed government support. However, the data share was a major red flag since reports of people mobbing up on COVID-19 positive people came through.

I was targetting a global audience and not just Pakistanis, which is why I didn't want to share my users' data with the government. So I added end-to-end encryption to the app, which encrypted all user data, including contacts, places, meetings, and check-ins.

However, since I had refused to share data with the government, they refused to publish the app for me. The code is sitting on my GitHub, unused.

You can learn more about it on the [Pandemic.li website](https://pandemic.li).

## Video courses

I've been trying my hand at recording video courses for my favorite tech like React, React Native, Node.js, TypeScript, and GraphQL.

The first one I recorded was a React Native app. I built a comic reader with a bunch of cool features, such as pan-and-zoom. However, things got away from me, and I wasn't happy with the quality of the final product.

So I've started recording another, where I build a todo app. I've been waiting for the next version of [Clear](https://twitter.com/useclear), and it made more sense to create something similar, with more mass appeal. It's slightly advanced than your average todo app tutorial with Firebase authentication and data store, transitions, and a slick UI. I'm very excited to publish this soon.

## Helpling

I built [Helpling](https://helpling.app) in January this year as a web app. Inspired by a post that I saw on Imgur, where a guy had to wait a long time to buy a couch after moving into a new apartment because he couldn't afford to, I decided to build a platform where people could post things they needed, and others in their area could help out.

I've since taken the web app down and rebuilt into a mobile app and added a feature where people can also create offers. Before, you could only add requests for things you want. Now, if you have something you'd like to give someone, you can create an offer.

![](helpling.png)

The app is in beta right now, and you can [take it for a spin](https://testflight.apple.com/join/PQSjkuHG) on iOS. Once the testing is complete, I'll publish it to App Store.

## Pickle

Two years ago, I was building some operations apps at my day job, and we needed to push some analytics data from the app somewhere. My first thought was Firebase Analytics, but the field limitations prevented me from doing that. For our customer apps, we were using Segment with Mixpanel, AppsFlyer, and Braze. But we decided not to push the ops data to those platforms.

My second thought was that we could build a small analytics service for our in-house apps. So I started working on Pickle. The name came from the Rick and Morty episode, where Rick turns into a pickle.

However, time constraints prevented me from building the service, and we just added a few APIs to our backend to store the data we needed, exporting it to Looker and BigQuery, and letting the BI team run with it.

Last year, my colleague (who loved the idea) approached me, and we started working on Pickle as a standalone service. But we got busy with other things, and Rick died again.

This year, with all the free time on my hands, I decided to rebuild Pickle from scratch with a different focus: small developers with low to medium volume websites and apps.

I realized that with my limited resources, I couldn't compete with the big players like Braze, Google Analytics, Mixpanel. But what I could build and possibly turn into a business was a small service with cheap pricing for people like myself.

I build a lot of apps, and analytics integration is not always easy. I usually integrate Segment and then push the data somewhere else. But if my app grows, things get very expensive, very quickly. I saw a gap and decided to build Pickle to fill it.

I've built a neat dashboard, two APIs (one for the frontend, and one to push data to the service), and now I'm working on the SDKs. Once that's done, I'll launch the service. Fingers crossed for this one.

Check out some artwork.

![Landing page](pickle-1-landing.png)
![App list](pickle-2-apps.png)
![App dashboard](pickle-3-dashboard.png)
![Events overview](pickle-4-events.png)
![All events](pickle-5-events.png)

---

I'm running macOS Big Sur beta on my MacBook Pro, and I love the new design!

It's been a busy and fun year. I hope you've been doing great things. Please stay safe.
