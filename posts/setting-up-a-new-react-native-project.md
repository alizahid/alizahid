---
slug: setting-up-a-new-react-native-project
title: Setting up a new React Native project
excerpt: Setting up a React Native projects with CocoaPods can be tricky. Here are some of my tricks so you can avoid Xcode hell.
tags: React Native, Guide
date: 2019-02-03T11:14:00.000Z
---

**Note**: This guide doesn't make sense after React Native 0.60, which comes with incredible CocoaPods support.

---

I've been bitten by Xcode quite a fair bit. While I can handle native Android / Java development, my Objective C / Swift / Xcode experience is limited to pasting snippets and archiving projects. With React Native, I had to add CocoaPods to that list of skills.

With Android, you've got a great build system in Gradle. Everything is defined in a human-readable file. And I love the control and transparency that offers.

With Xcode, it's classic Apple. I barely understand the underlying elements of the build system. Everything is shrouded in mystery of header files and plists and unreadable formats. CocoaPods brings some sanity to that.

It took me a long time to find a Podfile configuration that works for me. The biggest culprit was the React Native dependencies. If you had to include a project in your app that relied on React Native, and you didn't have the React Native dependencies in your Podfile, it would install a very old version of React Native, which would fail to build.

So, here's my Podfile.

```
platform :ios, '9.0'

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
end
```

The first five includes are the standard React Native dependencies.

- React is React Native itself
- `yoga` is the layout engine
- `DoubleConversion`, `Folly`, and `glog` are Google libraries that React Native requires

The rest are examples of my project dependencies. CodePush, Segment, Gesture Handler (for React Navigation), and Sentry. You will have your own set of dependencies.

The last snippet is the magic formula. It removes all React and yoga targets from the Pods project. Because they're already added to the base project, duplicates will throw errors at build time. But you gotta have them in the Pods project because libraries like Sentry relies on them.

Sometimes, your project might need a React subspec added explicitly. Eg, `react-native-maps` requires the `RCTImage` subspec, otherwise, it won't build. So your Podfile will look like this.

```
pod 'React', path: '../node_modules/react-native', subspecs: %w[RCTImage]
```

Now that the elephant is dealt with (I hope), here's a guide to setup a native project cleanly.

## Prerequisites

- [Node and NPM](https://nodejs.org/en) / [Yarn](https://yarnpkg.com/lang/en) (preferred)
- [Xcode](https://developer.apple.com/xcode) and / or [Android Studio](https://developer.android.com/studio)
- [Watchman](https://facebook.github.io/watchman)
- [React Native CLI](https://facebook.github.io/react-native/docs/understanding-cli)
- Editor of your choice: [Visual Studio Code](https://code.visualstudio.com) (preferred) / [Atom](https://atom.io)

## Guide

1. `react-native init ProjectName`
2. `cd ios && pod init && cd ..`
3. `yarn add react-native-sentry` (or whatever library you want to add)
4. `react-native link react-native-sentry`
5. Edit your Podfile and replace with the one above, keeping things you need and removing things you don't
6. `cd ios && pod update` (or `pod install`)
7. `open ProjectName.xcworkspace`
8. Run on device or simulator

That's pretty much it.

### A few notes

- When creating a new project, do use pascal case to define the project name. It's cleaner to have an Xcode or Android Studio project called `ProjectName` rather than `projectname`, etc.
- When adding new libraries and linking them, link by name. Depending on what you've changed, it can sometimes duplicate linking, especially on Android
- `yarn start --reset-cache` is your friend if you've added new packages, but it won't refresh. Especially ones that involve Babel, such as `react-native-dotenv`
- Get building, James!
