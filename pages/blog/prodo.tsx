import { NextPage } from 'next'
import React from 'react'

import { Code, Image, Link, Page, PostHeader } from '../../components'
import blog from '../../data/blog.json'
import { Post } from '../../types'

const post = blog.find(({ slug }) => slug === 'prodo') as Post

const Blog: NextPage = () => (
  <Page description={post.excerpt} subtitle={post.title} title="Blog">
    <PostHeader date={post.date} slug={post.slug} title={post.title} />

    <div className="post">
      <p>
        So far, I&#39;ve kept my snippets in the macOS/iOS Notes app. I never
        realized the <em>collection</em> would grow so big that I&#39;d need a
        proper app. After I got disappointed by the design of the options
        available, I decided to take a crack at it myself.
      </p>
      <p>
        From the offset, I knew this had to be a primarily desktop app. I&#39;ve
        built some stuff with{' '}
        <Link external href="https://electronjs.org">
          Electron
        </Link>{' '}
        in the past, but never finished or published anything. I was excited to
        finally make something with Electron that I&#39;d get to publish and use
        myself. The final product, however, runs well in the browser, too.
      </p>

      <h3>Setup</h3>
      <p>
        I started with{' '}
        <Link external href="https://create-react-app.dev">
          <code>create-react-app</code>
        </Link>{' '}
        and added Electron to it. It took some effort to figure out the
        different nuisances of Electron, but I have a decent setup working now.
      </p>
      <h4>
        <code>electron-window-state</code>
      </h4>
      <p>
        I&#39;m using{' '}
        <Link external href="https://github.com/mawie81/electron-window-state">
          <code>electron-window-state</code>
        </Link>{' '}
        to manage the window state of my app. It remembers the size and position
        of my window, so I don&#39;t have to resize and reposition it every time
        I open the app.
      </p>
      <h4>
        <code>show:false</code>
      </h4>
      <p>
        Here&#39;s an interesting piece I found during my research; there&#39;s
        a small delay between the window opening and the React bundle loading
        and rendering. A{' '}
        <Link
          external
          href="https://blog.avocode.com/4-must-know-tips-for-building-cross-platform-electron-apps-f3ae9c2bffff">
          Medium article
        </Link>{' '}
        suggested I don&#39;t show the window until it&#39;s ready. I have
        loading states for different parts of the app, but the solution is
        supposed to make it seem more like a native app than an Electron app. I
        guess we&#39;ll find out more when I bundle the app and run it.
      </p>
      <h4>Firestore</h4>
      <p>
        I&#39;m using Firebase for authentication and data store. It&#39;s
        essential to make sure proper rules are in place or anyone can{' '}
        <Link external href="https://news.ycombinator.com/item?id=17424538">
          mess around
        </Link>{' '}
        with the data. Here are my settings. Feel free to take inspiration.
      </p>
      <Code
        className="mt-4"
        code={`rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /snippets/{snippetId} {
      allow read, update, delete: if request.auth.uid == resource.data.uid;
      allow create: if request.auth.uid != null;
    }
  }
}`}
        language="ruby"
      />

      <h3>Design</h3>
      <Image
        caption="I've kept the design very minimal to focus on the content."
        className="mt-4 mb-8"
        image="/blog/prodo/prodo.png"
      />
      <p>
        Each snippet has three main properties right now; title, content, and
        tags. All fields are searchable so you can find the snippet easily.
      </p>
      <p>
        With 30 snippets, the list is very performant. Mostly because it&#39;s
        the list item is just a link. Maybe in the future, I can add{' '}
        <Link external href="https://github.com/bvaughn/react-window">
          <code>react-window</code>
        </Link>{' '}
        for a virtualized list if it grows beyond a certain number where
        performance is affected.
      </p>
      <p>The colors are inspired by the VS Code dark theme.</p>

      <h3>Features</h3>
      <ul>
        <li>
          Login or register with an email and password. Or anonymously. You can
          link your account later with an email and password, so you don&#39;t
          lose your data if you logout or remove the app
        </li>
        <li>Create snippets with a title, content, and tags</li>
        <li>
          The tags only allow lowercase alphabets, numbers, and hyphens to keep
          things simple. Will this be controversial?
        </li>
        <li>Search snippets; lookup by title, content, or tags, all at once</li>
        <li>CRUD for snippets, obviously</li>
        <li>A collapsible sidebar so you have more space for your content</li>
        <li>
          Electron features such as dialogs which fallback gracefully in the
          browser
        </li>
      </ul>

      <h3>Todo?</h3>
      <ul>
        <li>
          Add end-to-end encryption, cause it&#39;s{' '}
          <span className="line-through text-gray-500">2019</span>{' '}
          {new Date().getFullYear()}
        </li>
        <li>Look into improving performance by reducing re-renders</li>
        <li>Prepare Electron for packaging</li>
        <li>Test with more snippets and an extensive list</li>
      </ul>

      <hr />

      <h4>Update 1</h4>
      <p>
        I&#39;ve added end-to-end encryption. When you register, you get a
        unique key that stays locally and never reaches the server which is used
        to encrypt all your snippets. I tried a key-less solution by encrypting
        with a combination of other fields, but all of them are available on the
        server. While that does mean your data is secure, I can still decrypt
        and view it because I have access to Firestore and knowledge of the
        hashing mechanism. In the end, the best method was to use a key you can
        save so I can never see your data.
      </p>

      <hr />

      <h4>Update 2</h4>
      <p>
        I built the app with Electron and it&#39;s a whopping 400mb! I need to
        play around with the config to bring down the size of the app since
        i&#39;s ridiculous for the complexity of the app. Perhaps I can just
        load the webpage in Electron remotely? I think the main culprit is
        Firebase. Maybe I can switch to the CDN version instead of a locally
        installed dependency?
      </p>

      <hr />

      <p>
        As usual, all the projects I build are open source. You can find the
        Prodo source code on{' '}
        <Link href="https://github.com/alizahid/prodo">GitHub</Link>. You can
        also take it for a <Link href="https://prodo.onrender.com">spin</Link>.
      </p>
    </div>
  </Page>
)

export default Blog
