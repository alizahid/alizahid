---
slug: prodo
title: Prodo
excerpt: Prodo is a name I used for an SMS API I built years ago. But that never panned out, so I repurposed it when I built a snippet manager last weekend.
tags: React, Electron
date: 2019-09-29T16:09:02.086Z
---

So far, I've kept my snippets in the macOS/iOS Notes app. I never realized the _collection_ would grow so big that I'd need a proper app. After I got disappointed by the design of the options available, I decided to take a crack at it myself.

From the offset, I knew this had to be a primarily desktop app. I've built some stuff with [Electron](https://electronjs.org) in the past, but never finished or published anything. I was excited to finally make something with Electron that I'd get to publish and use myself. The final product, however, runs well in the browser, too.

## Setup

I started with [`create-react-app`](https://create-react-app.dev) and added Electron to it. It took some effort to figure out the different nuisances of Electron, but I have a decent setup working now.

### `electron-window-state`

I'm using [`electron-window-state`](https://github.com/mawie81/electron-window-state) to manage the window state of my app. It remembers the size and position of my window, so I don't have to resize and reposition it every time I open the app.

### `show:false`

Here's an interesting piece I found during my research; there's a small delay between the window opening and the React bundle loading and rendering. A [Medium article](https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron-apps-f3ae9c2bffff) suggested I don't show the window until it's ready. I have loading states for different parts of the app, but the solution is supposed to make it seem more like a native app than an Electron app. I guess we'll find out more when I bundle the app and run it.

### Firestore

I'm using Firebase for authentication and data store. It's essential to make sure proper rules are in place or anyone can [mess around](https://news.ycombinator.com/item?id=17424538) with the data. Here are my settings.

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /snippets/{snippetId} {
      allow read, update, delete: if request.auth.uid == resource.data.uid;
      allow create: if request.auth.uid != null;
    }
  }
}
```

## Design

![I've kept the design very minimal to focus on the content.](prodo.png)

Each snippet has three main properties right now; title, content, and tags. All fields are searchable so you can find the snippet easily.

With 30 snippets, the list is very performant. Mostly because it's the list item is just a link. Maybe in the future, I can add [`react-window`](https://github.com/bvaughn/react-window) for a virtualized list if it grows beyond a certain number where performance is affected.

The colors are inspired by the VS Code dark theme.

## Features

- Login or register with an email and password. Or anonymously. You can link your account later with an email and password, so you don't lose your data if you logout or remove the app
- Create snippets with a title, content, and tags
- The tags only allow lowercase alphabets, numbers, and hyphens to keep things simple. Will this be controversial?
- Search snippets; lookup by title, content, or tags, all at once
- CRUD for snippets, obviously
- A collapsible sidebar so you have more space for your content
- Electron features such as dialogs which fallback gracefully in the browser

## Todo?

- Add end-to-end encryption, cause it's 2019
- Look into improving performance by reducing re-renders
- Prepare Electron for packaging
- Test with more snippets and an extensive list

---

### Update 1

I've added end-to-end encryption. When you register, you get a unique key that stays locally and never reaches the server which is used to encrypt all your snippets. I tried a key-less solution by encrypting with a combination of other fields, but all of them are available on the server. While that does mean your data is secure, I can still decrypt and view it because I have access to Firestore and knowledge of the hashing mechanism. In the end, the best method was to use a key you can save so I can never see your data.

### Update 2

I built the app with Electron and it's a whopping 400mb! I need to play around with the config to bring down the size of the app since it's ridiculous for the complexity of the app. Perhaps I can just load the webpage in Electron remotely? I think the main culprit is Firebase. Maybe I can switch to the CDN version instead of a locally installed dependency?

---

As usual, all the projects I build are open source. You can find the Prodo source code on [GitHub](https://github.com/alizahid/prodo). You can also take it for a [spin](https://prodo.onrender.com).
