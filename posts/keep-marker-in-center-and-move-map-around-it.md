---
slug: keep-marker-in-center-and-move-map-around-it
title: Keep marker in center and move map around it
excerpt: A performance-oriented approach to let users pick their location on a map.
tags: React Native, Maps, User Experience
date: 2019-01-07T01:05:00.000Z
---

![What Deliveroo, Uber, and others do.](deliveroo-map-marker.gif)

## Concept

It's a classic user experience enhancer. How do you get users to pick their location?

Do you let them drag a map marker? Needs precision and causes fumbling.

Do they search for their building with autocomplete? Not all buildings are on Google Places.

The most common solution to this problem is, you put a marker in the middle of the map, and the user moves the map around it. It's smooth, easy, and requires very little effort.

How do you achieve that with React Native and React Native Maps, though, is what we're building today.

## Problems

- You can't use the `onRegionChange` event on the `MapView` component. It will try to update your state with each movement, rerendering several times per second, making it a laggy mess. That's not what we want.
- You also can't use `onRegionChangeComplete`. Sure, it fires only after the user has done panning around on the map, but that's also not ideal. The marker won't move until after the user stops.

## Solution

Use a fake marker, positioned in the center of the map. The user moves the map around it.

### Code

Check out the [GitHub repo](https://github.com/alizahid/location-picker-demo).

## Notes

- You will need to adjust the margins on your fake marker, depending on the size and style of your image. Tweak them until they are accurate.
- We need `pointerEvents` set to none on the fake marker to make sure the user taps through it on to the map.
- If you have more markers on the map, use similar images for all. The `Marker` component from React Native Maps is from Apple Maps or Google Maps, depending on your platform and setup, and will probably look different than your image.
