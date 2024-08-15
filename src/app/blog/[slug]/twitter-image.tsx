import Image, { dimensions } from './opengraph-image'

export const twitter = {
  contentType: 'image/png',
  id: 'twitter',
  size: dimensions.twitter,
}

export function generateImageMetadata() {
  return [twitter]
}

export default Image
