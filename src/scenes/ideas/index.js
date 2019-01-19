import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { connect } from 'react-redux'

import { getIdeas } from '../../actions'
import { Head, Spinner } from '../../components'

import './index.scss'

class Ideas extends Component {
  componentDidMount() {
    const { getIdeas } = this.props

    getIdeas()
  }

  renderLink = link => {
    const label = (() => {
      if (link.includes('itunes.apple')) {
        return 'App Store'
      } else if (link.includes('play.google')) {
        return 'Google Play'
      } else if (link.includes('github')) {
        return 'GitHub'
      } else return 'Web'
    })()

    return (
      <a key={link} href={link}>
        {label}
      </a>
    )
  }

  render() {
    const { about_ideas, ideas, loading } = this.props

    return (
      <main className="ideas">
        <Head title="Ideas" />
        {about_ideas && RichText.render(about_ideas)}
        {loading && <Spinner half />}
        {ideas.map(({ description, id, links, status, title }) => (
          <article key={id}>
            <h2>
              {title}
              <span>{status}</span>
            </h2>
            {RichText.render(description)}
            <footer>{links.map(this.renderLink)}</footer>
          </article>
        ))}
      </main>
    )
  }
}

const mapStateToProps = ({
  ideas: { ideas, loading },
  meta: {
    meta: { about_ideas }
  }
}) => ({
  about_ideas,
  ideas,
  loading
})

const mapDispatchToProps = dispatch => ({
  getIdeas: () => dispatch(getIdeas())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ideas)
