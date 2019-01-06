import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { connect } from 'react-redux'

import { Head, Spinner } from '../../components'

import './index.scss'

class Home extends Component {
  render() {
    const {
      loading,
      meta: { about, social }
    } = this.props

    return (
      <main className="home">
        <Head />
        {loading && <Spinner />}
        {about && <section>{RichText.render(about)}</section>}
        {social && (
          <section className="social">
            <p>You can find me on</p>
            <nav>
              <a className="twitter" href={social.twitter} title="Twitter">
                Twitter
              </a>
              <a className="github" href={social.github} title="GitHub">
                GitHub
              </a>
              <a className="dribbble" href={social.dribbble} title="Dribbble">
                Dribbble
              </a>
            </nav>
          </section>
        )}
      </main>
    )
  }
}

const mapStateToProps = ({ meta: { meta, loading } }) => ({
  meta,
  loading
})

export default connect(mapStateToProps)(Home)
