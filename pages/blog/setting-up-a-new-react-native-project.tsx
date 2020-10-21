import { NextPage } from 'next'
import React from 'react'

import { Code, Link, Page, PostHeader } from '../../components'
import blog from '../../data/blog.json'
import { Post } from '../../types'

const post = blog.find(
  ({ slug }) => slug === 'setting-up-a-new-react-native-project'
) as Post

const Blog: NextPage = () => (
  <Page description={post.excerpt} subtitle={post.title} title="Blog">
    <PostHeader date={post.date} slug={post.slug} title={post.title} />

    <div className="post">
      <p>
        <strong>Note</strong>: This guide doesn&#39;t make sense after React
        Native 0.60, which comes with incredible CocoaPods support.
      </p>

      <hr />

      <p>
        I&#39;ve been bitten by Xcode quite a fair bit. While I can handle
        native Android / Java development, my Objective C / Swift / Xcode
        experience is limited to pasting snippets and archiving projects. With
        React Native, I had to add CocoaPods to that list of skills.
      </p>
      <p>
        With Android, you&#39;ve got a great build system in Gradle. Everything
        is defined in a human-readable file. And I love the control and
        transparency that offers.
      </p>
      <p>
        With Xcode, it&#39;s classic Apple. I barely understand the underlying
        elements of the build system. Everything is shrouded in mystery of
        header files and plists and unreadable formats. CocoaPods brings some
        sanity to that.
      </p>
      <p>
        It took me a long time to find a <code>Podfile</code> configuration that
        works for me. The biggest culprit was the React Native dependencies. If
        you had to include a project in your app that relied on React Native,
        and you didn&#39;t have the React Native dependencies in your{' '}
        <code>Podfile</code>, it would install a very old version of React
        Native, which would fail to build.
      </p>
      <p>
        So, here&#39;s my <code>Podfile</code>.
      </p>
      <Code
        className="my-4"
        code={`platform :ios, '9.0'

target 'ProjectName' do
  pod 'React', path: '../node_modules/react-native'
  pod 'yoga', path: '../node_modules/react-native/ReactCommon/yoga'

  pod 'DoubleConversion', podspec: '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
  pod 'Folly', podspec: '../node_modules/react-native/third-party-podspecs/Folly.podspec'
  pod 'glog', podspec: '../node_modules/react-native/third-party-podspecs/glog.podspec'

  pod 'CodePush', path: '../node_modules/react-native-code-push'
  pod 'RNAnalytics', path: '../node_modules/@segment/analytics-react-native'
  pod 'RNGestureHandler', path: '../node_modules/react-native-gesture-handler'
  pod 'SentryReactNative', path: '../node_modules/react-native-sentry'
end

post_install do |installer|
  targets_to_ignore = %w[React yoga]

  installer.pods_project.targets.each do |target|
    target.remove_from_project if targets_to_ignore.include? target.name
  end
end`}
        language="ruby"
      />
      <p>The first five includes are the standard React Native dependencies.</p>
      <ul>
        <li>React is React Native itself</li>
        <li>
          <code>yoga</code> is the layout engine
        </li>
        <li>
          <code>DoubleConversion</code>, <code>Folly</code>, and{' '}
          <code>glog</code> are Google libraries that React Native requires
        </li>
      </ul>
      <p>
        The rest are examples of my project dependencies. CodePush, Segment,
        Gesture Handler (for React Navigation), and Sentry. You will have your
        own set of dependencies.
      </p>
      <p>
        The last snippet is the magic formula. It removes all React and yoga
        targets from the Pods project. Because they&#39;re already added to the
        base project, duplicates will throw errors at build time. But you gotta
        have them in the Pods project because libraries like Sentry relies on
        them.
      </p>
      <p>
        Sometimes, your project might need a React subspec added explicitly. Eg,{' '}
        <code>react-native-maps</code> requires the <code>RCTImage</code>{' '}
        subspec, otherwise, it won&#39;t build. So your Podfile will look like
        this.
      </p>
      <Code
        className="my-4"
        code="pod 'React', path: '../node_modules/react-native', subspecs: %w[RCTImage]"
        language="ruby"
      />
      <p>
        Now that the elephant is dealt with (I hope), here&#39;s a guide to
        setup a native project cleanly.
      </p>

      <h3>Prerequisites</h3>
      <ul>
        <li>
          <Link external href="https://nodejs.org/en">
            Node and NPM
          </Link>{' '}
          /{' '}
          <Link external href="https://yarnpkg.com/lang/en">
            Yarn
          </Link>{' '}
          (preferred)
        </li>
        <li>
          <Link external href="https://developer.apple.com/xcode">
            Xcode
          </Link>{' '}
          and / or{' '}
          <Link external href="https://developer.android.com/studio">
            Android Studio
          </Link>
        </li>
        <li>
          <Link external href="https://facebook.github.io/watchman">
            Watchman
          </Link>
        </li>
        <li>
          <Link
            external
            href="https://facebook.github.io/react-native/docs/understanding-cli">
            React Native CLI
          </Link>
        </li>
        <li>
          Editor of your choice:{' '}
          <Link external href="https://code.visualstudio.com">
            Visual Studio Code
          </Link>{' '}
          (preferred) /{' '}
          <Link external href="https://atom.io">
            Atom
          </Link>
        </li>
      </ul>

      <h3>Guide</h3>
      <ol>
        <li>
          <code>react-native init ProjectName</code>
        </li>
        <li>
          <code>cd ios &amp;&amp; pod init &amp;&amp; cd ..</code>
        </li>
        <li>
          <code>yarn add react-native-sentry</code> (or whatever library you
          want to add)
        </li>
        <li>
          <code>react-native link react-native-sentry</code>
        </li>
        <li>
          Edit your Podfile and replace with the one above, keeping things you
          need and removing things you don&#39;t
        </li>
        <li>
          <code>cd ios &amp;&amp; pod update</code> (or <code>pod install</code>
          )
        </li>
        <li>
          <code>open ProjectName.xcworkspace</code>
        </li>
        <li>Run on device or simulator</li>
      </ol>
      <p>That&#39;s pretty much it.</p>

      <hr />

      <h4>A few notes</h4>
      <ul>
        <li>
          When creating a new project, do use pascal case to define the project
          name. It&#39;s cleaner to have an Xcode or Android Studio project
          called
          <code>ProjectName</code> rather than <code>projectname</code>, etc.
        </li>
        <li>
          When adding new libraries and linking them, link by name. Depending on
          what you&#39;ve changed, it can sometimes duplicate linking,
          especially on Android
        </li>
        <li>
          <code>yarn start --reset-cache</code> is your friend if you&#39;ve
          added new packages, but it won&#39;t refresh. Especially ones that
          involve Babel, such as <code>react-native-dotenv</code>
        </li>
        <li>Get building, James!</li>
      </ul>
    </div>
  </Page>
)

export default Blog
