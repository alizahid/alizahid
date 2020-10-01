---
slug: building-wowdb
title: Building WoWdb
excerpt: WoWdb is a mobile World of Warcraft database. It's built with React, React Native, Fastify, MongoDB, and hosted on Render.
tags: React Native, Search, World of Warcraft
date: 2019-01-17T16:13:00.000Z
---

I built _Mr. Bigglesworth_, an app that would let you search for [World of Warcraft](http://worldofwarcraft.com) content and view [Wowhead](http://wowhead.com) comments for them. It was based on an [in-game cat](https://wow.gamepedia.com/Mr._Bigglesworth).

It was a pretty simple solution. I wrote a script in Node.js, which would use the [Blizzard APIs](https://develop.battle.net) to fetch data. Which I then transferred to my [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) database. I also wrote an API in Node.js, which would search through the items, quests, achievements, etc, and return to the mobile app, along with comments from Wowhead. The mobile app was built with React Native.

It was a decent setup but had its drawbacks.

## Problems

- Search was a poor experience; MongoDB text search is rather limited, and has no typo tolerance or scoring algorithm. So any searches for _guldan_ would return nothing because the data stored is _Gul'dan_.
- App Store and Google Play reviews were bad. Their main grief was that it only lets you search and view Wowhead comments, and not see details about the objects. Which, to be fair, was the intended and marketed purpose of the app.
- Because the data fetching and updating was a manual process, I hadn't updated it since I first released the app over a year ago. WoW releases new content all the time, and some data just wasn't there to be searched.

In 2019, I plan to retire some of my old apps that have no installs or don't make sense anymore. And focus more on the ones that do.

As part of this restoration effort, I decided to rebuild _Bigglesworth_ with a few changes.

## Changes

- Let users see details about items, mounts, quests, etc. As much as I can get from the Blizzard APIs.
- Better, faster search with typo tolerance.
- Because I couldn't find someone who could do a _Mr. Bigglesworth_ icon for me cheaply, I decided to rebrand the app to _WoWdb_. I chose that capitalization as to not conflict with [WoWDB](https://wowdb.com), a competitor to Wowhead.

## Finding the right infrastructure

A major hurdle to the ideal setup was my infrastructure.

I was hosting the API on [Heroku](http://heroku.com), which would connect to MongoDB and fetch data, search, and hit up Wowhead for comments. It was fast and it worked. But that was it. It was expensive, so I was still doing the data updates manually, and rarely.

Recently, [Google Cloud introduced Cloud Scheduler](https://cloud.google.com/scheduler), and it was cheap. I looked into it. But before I could finalize it, I came across [Render](https://render.com). Suddenly, so many new doors opened.

To improve search, I wanted to use Algolia. But my project didn't fit their criteria for open-source and had enough data to cost \$500 a month. Which, WoWdb being a side project, I just didn't wanna spend. So I decided to write my own little service just for search.

### The ideal setup

I sat down and started to draw out what the ideal setup would be like. My requirements were simple.

- A place to host the REST API
- A microservice for search
- A weekly cronjob for updating data
- Hosting for a single page React landing page

Luckily, Render offered everything in one place. Cronjobs, microservices, static site hosting. And cheap, too!

- \$5 a month for web and microservice each
- \$2 a month for cronjobs
- Free static sites

Now that I could build everything in one place, I got to work.

## Rebuilding

![](architecture.png)

First, I rewrote the data miner. Blizzard recently sunsetted their old APIs. So I had to fix my script to fetch from the new API. Improvements were also made. Decided to add spells, a missing collection of data, to the miner.

Then I wrote the new search microservice. It loads all data from MongoDB and uses [FuzzySearch](https://github.com/jeancroy/FuzzySearch) to run queries. I also tried the more popular [Fuse](http://fusejs.io), but couldn't get decent performance. Not sure if it was my configuration or just the sheer size of my dataset; roughly 550k records. Average search time with Fuse was 1 second. It was a mere 100 milliseconds with Fuzzy!

When this effort started and before I had decided to run everything on Render, I updated the Heroku app with a v2 API. But soon realized it was a mistake because things were changing considerably and it would simply be cleaner to leave the Heroku app as-is and drop all v1 code and deploy v2 straight to Render.

The new API removed search from it. It just passed the query to the microservice and returned the data to the client. Refactored a ton of code. Just general improvements and learnings since last year when I first wrote it.

The mobile app was probably the largest change. New views, bug fixes, design, etc. Building the detail views for items, mounts, achievements, etc, was the trickiest part. A lot of time and testing went into that. It was pretty much a complete rewrite. Which I always love!

I'm quite pleased with the results. It's a very neat setup. Everything is updated to the latest version of everything. It was incredibly fun to work on. But it's still not perfect.

---

There are still a few improvements that can be made.

- Render currently only hosts services in the US west. My MongoDB Atlas cluster is in Ireland. Most of the app's potential users are also in the EU. The latency is a huge problem right now. Luckily, it's on their roadmap to add support for EU and other regions. But until then, it's a bit slow in the rest of the world.
- Blizzard APIs have limited data and even fewer attributes than would be truly useful. Wowhead, on the other hand, data mines the game files and has way more data than I can get from Blizzard APIs. Perhaps in the future, I could crawl Wowhead instead. But that's a slippery slope and a conversation for later.
- I lost my Android signing key! Luckily, I had the app enrolled in Google Play Signing, and their support team was very helpful in helping me update my key. The Android update should be live over the next few days. The iOS update is already available on the App Store.
- I want to redesign the visuals of the app, to match the [Battle for Azeroth website](https://worldofwarcraft.com/en-gb/battle-for-azeroth). I think it's fantastic artwork, which people will really appreciate. I redesigned [my guild's website](https://misty-bfa.onrender.com) last year from the [Legion design](https://misty-legion.onrender.com) and it was a hit.

Head on over and check out the [updated app](https://wowdb.app). As always, my side projects are completely open-source. You can find the [code on GitHub](https://github.com/wowdb).
