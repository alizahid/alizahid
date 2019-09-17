import React, { Fragment, FunctionComponent } from 'react'

import { colors, layout } from '../lib/styles'

const Footer: FunctionComponent = () => {
  const date = new Date()

  let year = date.getFullYear()

  if (date.getMonth() > 10) {
    year++
  }

  return (
    <Fragment>
      <footer>
        <span>
          &copy; {year} / Powered by{' '}
          <a href="https://www.mongodb.com/cloud/stitch">Stitch</a> and&nbsp;
          <a href="https://nextjs.org/">Next</a>
        </span>
        <nav>
          <a className="github" href="https://github.com/alizahid" />
          <a className="twitter" href="https://twitter.com/alizahid0" />
          <a className="dribbble" href="https://dribbble.com/alizahid" />
        </nav>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          margin: 2em 0;
        }

        footer a {
          color: ${colors.foreground};
        }

        span {
          color: ${colors.foregroundLight};
          font-size: 0.875em;
        }

        nav {
          align-items: center;
          display: flex;
        }

        nav a {
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100%;
          filter: grayscale(1);
          opacity: 0.5;
          height: 1.5em;
          width: 1.5em;
        }

        nav a:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        nav a:not(:first-child) {
          margin-left: 1em;
        }

        .dribbble {
          background-image: url('/static/social/dribbble.svg');
        }

        .github {
          background-image: url('/static/social/github.svg');
        }

        .twitter {
          background-image: url('/static/social/twitter.svg');
        }

        @media (min-width: ${layout.width}) {
          footer {
            align-items: center;
            justify-content: space-between;
          }

          nav a {
            height: 1em;
            width: 1em;
          }
        }

        @media (max-width: ${layout.width}) {
          footer {
            display: flex;
            flex-direction: column;
          }

          nav {
            margin-top: 1em;
          }
        }
      `}</style>
    </Fragment>
  )
}

export default Footer
