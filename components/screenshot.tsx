import React, { FunctionComponent } from 'react'

type Props = {
  caption: string
  className?: string
  image: string
}

export const Screenshot: FunctionComponent<Props> = ({
  caption,
  className,
  image
}) => (
  <figure className={`mt-8 lg:mt-0 first:mt-0 lg:ml-8 first:ml-0 ${className}`}>
    <div className="flex items-center justify-center relative w-full lg:w-96 mx-auto">
      <img alt={caption} className="absolute transform scale-90" src={image} />
      <img className="pointer-events-none z-10" src="/frame.png" />
    </div>
    <figcaption className="text-gray-500 text-center mt-4 mx-4">
      {caption}
    </figcaption>
  </figure>
)

export const Screenshots: FunctionComponent = ({ children }) => (
  <div className="flex flex-col lg:flex-row my-8 overflow-x-auto">
    {children}
  </div>
)
