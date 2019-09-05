import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment, FunctionComponent } from 'react'

import { colors } from '../lib/styles'
import Head from './_head'

interface Props {
  description: string
  title: string
}

const Header: FunctionComponent<Props> = ({ description, title }) => {
  const { route } = useRouter()

  return (
    <Fragment>
      <Head description={description} title={title} />
      <header>
        <Link href="/">
          <a>
            <img
              src={`/static/${Date.now() % 2 === 0 ? 'square' : 'circle'}.svg`}
            />
          </a>
        </Link>
        <nav>
          <Link href="/projects">
            <a className={`${route === '/projects' ? 'active' : ''}`}>
              Projects
            </a>
          </Link>
          <Link href="/about">
            <a className={`${route === '/about' ? 'active' : ''}`}>About</a>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin: 2em 0;
        }

        img {
          height: 3em;
        }

        nav {
          align-items: center;
          display: flex;
        }

        nav a {
          color: ${colors.foregroundLight};
        }

        nav a:hover {
          color: ${colors.foreground};
        }

        nav a:not(:first-child) {
          margin-left: 1em;
        }

        nav a.active {
          color: ${colors.primary};
        }
      `}</style>
    </Fragment>
  )
}

export default Header
