import Link from 'next/link'
import React, { Fragment, FunctionComponent } from 'react'

import { Header } from '../components'
import { colors, layout } from '../lib/styles'

const About: FunctionComponent = () => {
  return (
    <Fragment>
      <Header description="About Ali Zahid" title="About" />
      <img className="hero" src="/static/ali-zahid.jpg" alt="Ali Zahid" />
      <h1>I have a patent on blowing minds with epic design.</h1>
      <p>
        Hi. I'm Ali Zahid. I love to build cool stuff. Check out my&nbsp;
        <Link href="/projects">
          <a>playground</a>
        </Link>
        .
      </p>
      <p>
        I've worked with large enterprises, government organizations, Academy
        and Emmy award winning filmmakers, esports teams, student groups, and
        everything in between, to help realize their ideas.
      </p>
      <p>
        Are you looking for help building your next epic idea or product?&nbsp;
        <a href="mailto:hi@designplox.co">Reach out</a> and see if we can work
        together.
      </p>
      <footer>
        You can find me on
        <a href="https://github.com/alizahid" className="github">
          GitHub
        </a>
        <a href="https://twitter.com/alizahid0" className="twitter">
          Twitter
        </a>
        <a href="https://dribbble.com/alizahid" className="dribbble">
          Dribbble
        </a>
      </footer>
      <style jsx>{`
        .hero {
          border-radius: 100%;
          display: block;
          height: 10em;
          margin: 0 auto 2em;
        }

        footer {
          margin: 2em 0;
        }

        footer a {
          align-items: center;
          color: ${colors.foreground};
          display: flex;
        }

        footer a:before {
          background-position: center;
          background-repeat: no-repeat;
          background-size: 2em;
          content: '';
          height: 2em;
          margin-right: 0.5em;
          width: 2em;
        }

        .dribbble:before {
          background-image: url('/static/social/dribbble.svg');
        }

        .github:before {
          background-image: url('/static/social/github.svg');
        }

        .twitter:before {
          background-image: url('/static/social/twitter.svg');
        }

        @media (min-width: ${layout.width}) {
          footer {
            align-items: center;
            display: flex;
            margin: 2em 0;
          }

          footer a {
            margin-left: 1em;
          }
        }

        @media (max-width: ${layout.width}) {
          footer {
            display: flex;
            flex-direction: column;
          }

          footer a {
            margin-top: 1em;
          }
        }
      `}</style>
    </Fragment>
  )
}

export default About
