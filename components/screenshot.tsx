import React, { FunctionComponent } from 'react'

interface Props {
  caption: string
  className?: string
  image: string
}

export const Screenshot: FunctionComponent<Props> = ({
  caption,
  className,
  image
}) => (
  <>
    <style jsx>{`
      div {
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
      }

      div .screenshot {
        position: absolute;
        transform: scale(0.9);
      }

      div .frame {
        pointer-events: none;
        z-index: 1;
      }

      @media (min-width: 1024px) {
        div {
          width: 24rem;
        }
      }
    `}</style>
    <figure className={className}>
      <div className="block mx-auto">
        <img alt={caption} className="screenshot" src={image} />
        <img className="frame" src="/frame.png" />
      </div>
      <figcaption className="text-trueGray-500 text-center mt-4 mx-4">
        {caption}
      </figcaption>
    </figure>
  </>
)

export const Screenshots: FunctionComponent = ({ children }) => (
  <div className="flex flex-col lg:flex-row my-8 overflow-x-auto">
    {children}
  </div>
)
