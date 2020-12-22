import NextImage from 'next/image'
import React, { FunctionComponent } from 'react'

type Props = {
  caption: string
  className?: string
  height?: number
  image: string
  width?: number
}

export const Image: FunctionComponent<Props> = ({
  caption,
  className,
  height,
  image,
  width
}) => (
  <figure className={`my-8 ${className}`}>
    {height && width ? (
      <NextImage
        alt={caption}
        className="block mx-auto rounded-lg"
        height={height}
        src={image}
        width={width}
      />
    ) : (
      <img alt={caption} className="block mx-auto rounded-lg" src={image} />
    )}
    <figcaption className="text-gray-500 text-center text-sm mt-2 mx-4">
      {caption}
    </figcaption>
  </figure>
)
