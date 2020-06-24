---
slug: building-a-new-website-with-mongo-db-atlas-stitch-and-next-js
title: Building a new website with MongoDB Atlas Stitch and Next.js
excerpt: I'm always trying to rebuild my blog with different tech to see what works best. This approach uses Stitch, Next.js and React.
tags: Blog, Next.js, MongoDB, React
date: 2019-09-16T18:02:30.566Z
---

I've rebuilt my blog three times this year and moved all posts to Medium because I can't decide on what I want/what's easiest for me. Medium was cool, but I wanted to use my own domain and Medium [recently](https://help.medium.com/hc/en-us/articles/115003053487-Custom-Domains-service-deprecation) killed that.

The first iteration was with [Prismic](https://prismic.io) and React. It was a grand project with a blog, my goals, and my playground. I soon realized that it was probably too ambitious, especially the goals. I work a lot and it's difficult to keep everything updated, so I decided to shutter that for the next rebuild.

Iteration 1.5 was to refactor the Prismic/React site with TypeScript and [`easy-peasy`](https://easy-peasy.now.sh) instead of JS and [Redux](https://redux.js.org).

The second iteration followed almost immediately, where I got rid of Prismic in favor of a custom static site generator with Markdown posts. It was nice, gave me way more control over my content, and worked beautifully. However, it wasn't flexible enough.

The third, and current, iteration came when I decided to play around with [MongoDB Stitch](https://www.mongodb.com/cloud/stitch). Over the last year and a half, I've used Azure Functions a lot. I've written about that in [another post](https://alizahid.dev/blog/surviving-azure-functions).

While we misused functions for that project, it made a lot of sense for a minimal blog app. So I set out to build the whole thing.

## Functions

I've been a MongoDB Atlas customer for a long time, and I've always wanted to try out Stitch, but just didn't know what to build with it. This gave me the perfect opportunity to try it out.

I wrote 9 functions to cover CRUD for posts and projects. It had a bit of a learning curve because the documentation isn't fantastic. But the end result was quite nice. Check out the [code on GitHub](https://github.com/alizahid/blog-functions).

### Setting up

The setup was fairly simple, although a little time-consuming. Everything has a provision/setup delay in MongoDB cloud and Stitch wasn't an exception.

1. Create a Stitch app and connect it to your cluster
2. Setup rules to allow access to your blog database
3. Create a service for the blog functions
4. Add your functions to the service

I considered creating separate functions that my service functions could call, but then I ended up with two sets of functions doing basically the same thing. I decided to just put all my code in my service functions.

### Authentication

While my posts and projects are public, updating and deleting them require authentication so only I can modify them. Each service function gives you a lot of control (but not enough) over how you want to authenticate. I created auth secrets for dangerous functions to prevent malicious actors from updating my blog. That was very simple.

## Blog

While my Prismic/React app was sufficient, it lacked server-side rendering and thus SEO. For this rebuild, I decided to go with [Next.js](https://nextjs.org) so I could have both. Check out the [code on GitHub](https://github.com/alizahid/alizahid). I used [`jsx-styled`](https://github.com/zeit/styled-jsx) for my component styling, which was my first experience with the package. Can't say I'm too happy with it, but that's another story.

It's deployed to multiple regions to make it faster in different parts of the world, something I didn't have with Render. They will only have servers in the US, which causes 2+ second delay for my requests. Luckily, the progressive web app made it faster. But now it's live rendered for dynamic pages and static pages for, well, static pages.

## Admin

This was the tricky part. Or rather, the part that prevented me from taking this approach. The reason I chose Prismic in the first place. I didn't want to build my own CMS. Why reinvent the wheel with a lot of effort if I can use another service. While Prismic's editor was fantastic, it didn't allow me the flexibility I desired.

I decided to bite the bullet and build a CMS using React. Check out the [code on GitHub](https://github.com/alizahid/blog-admin). Take it for a [spin](https://admin.alizahid.dev), if you want.

It's nice and minimal, although a bit rudimentary. I decided not to use a store so some changes do not reflect throughout the app. It looks amazing on my [LG UltraFine 5K](https://www.apple.com/ae/shop/product/HMUB2B/A/lg-ultrafine-5k-display) but not so much on my 15\" MacBook Pro. It's not responsive either, but that's by design.

It uses Markdown and a side-by-side preview so I can see what the content looks like as I write.

---

I'm quite happy with the new setup. One issue I have is with images. Since they're stored in the blog repo, I need to make sure I've added all the assets, pushed and deployed before I publish a new post. It's not the end of the world, and the work required to upload and host assets separately would be a hassle, I can live with it for now.

Another change could be to host the admin on Now instead of Render. Not entirely sure why I chose to host them separately. Convenience, perhaps?
