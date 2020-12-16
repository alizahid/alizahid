import React, { FunctionComponent } from 'react'

type Props = {
  caption: string
  className?: string
  image: string
}

export const Image: FunctionComponent<Props> = ({
  caption,
  className,
  image
}) => (
  <figure className={`my-8 ${className}`}>
    <img alt={caption} className="block mx-auto rounded-lg" src={image} />
    <figcaption className="text-gray-500 text-center mt-4 mx-4">
      {caption}
    </figcaption>
  </figure>
)
