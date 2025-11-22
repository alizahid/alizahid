import { dimensions } from './opengraph-image'

export const twitter = {
  contentType: 'image/png',
  id: 'twitter',
  size: dimensions.twitter,
}

export function generateImageMetadata() {
  return [twitter]
}

// biome-ignore lint/performance/noBarrelFile: go away
export { default } from './opengraph-image'
