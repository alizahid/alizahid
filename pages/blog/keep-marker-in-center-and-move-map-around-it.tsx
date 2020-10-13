import { NextPage } from 'next'
import React from 'react'

import { Link, Page, PostHeader, Screenshot } from '../../components'

const Post: NextPage = () => (
  <Page
    description="A performance-oriented approach to let users pick their location on a map."
    subtitle="Location picker with React Native"
    title="Blog">
    <PostHeader
      date="2019-01-07"
      slug="keep-marker-in-center-and-move-map-around-it"
      title="Location picker with React Native"
    />

    <div className="post">
      <Screenshot
        caption="What Deliveroo, Uber, and others do."
        image="/blog/keep-marker-in-center-and-move-map-around-it/deliveroo-map-marker.gif"
      />

      <h3>Concept</h3>
      <p>
        It&#39;s a classic user experience enhancer. How do you get users to
        pick their location?
      </p>
      <p>
        Do you let them drag a map marker? Needs precision and causes fumbling.
      </p>
      <p>
        Do they search for their building with autocomplete? Not all buildings
        are on Google Places.
      </p>
      <p>
        The most common solution to this problem is, you put a marker in the
        middle of the map, and the user moves the map around it. It&#39;s
        smooth, easy, and requires very little effort.
      </p>
      <p>
        How do you achieve that with React Native and React Native Maps, though,
        is what we&#39;re building today.
      </p>

      <h3>Problems</h3>
      <ul>
        <li>
          You can&#39;t use the <code>onRegionChange</code> event on the{' '}
          <code>MapView</code> component. It will try to update your state with
          each movement, rerendering several times per second, making it a laggy
          mess. That&#39;s not what we want.
        </li>
        <li>
          You also can&#39;t use <code>onRegionChangeComplete</code>. Sure, it
          fires only after the user has done panning around on the map, but
          that&#39;s also not ideal. The marker won&#39;t move until after the
          user stops.
        </li>
      </ul>

      <h3>Solution</h3>
      <p>
        Use a fake marker, positioned at the center of the map. The user moves
        the map around it.
      </p>
      <h4>Code</h4>
      <p>
        Check out the{' '}
        <Link href="https://github.com/alizahid/location-picker-demo">
          GitHub repo
        </Link>
        .
      </p>

      <h3>Notes</h3>
      <ul>
        <li>
          You will need to adjust the margins on your fake marker, depending on
          the size and style of your image. Tweak them until they are accurate.
        </li>
        <li>
          We need <code>pointerEvents</code> set to none on the fake marker to
          make sure the user taps through it on to the map.
        </li>
        <li>
          If you have more markers on the map, use similar images for all. The{' '}
          <code>Marker</code> component from React Native Maps is from Apple
          Maps or Google Maps, depending on your platform and setup, and will
          probably look different than your image.
        </li>
      </ul>
    </div>
  </Page>
)

export default Post
