import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { connect } from 'react-redux'

import { getProjects } from '../../actions'
import { Head, Spinner } from '../../components'

import './index.scss'

class Playground extends Component {
  componentDidMount() {
    const { getProjects } = this.props

    getProjects()
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
    const { about_playground, projects, loading } = this.props

    return (
      <main className="playground">
        <Head title="Playground" />
        {about_playground && RichText.render(about_playground)}
        {loading && <Spinner />}
        {projects.map(
          ({ background, color, content, id, initials, links, title }) => (
            <article key={id}>
              <figure
                style={{
                  background,
                  color
                }}
              >
                <figcaption>{initials}</figcaption>
              </figure>
              <div>
                <h2>{title}</h2>
                {RichText.render(content)}
                <footer>{links.map(this.renderLink)}</footer>
              </div>
            </article>
          )
        )}
      </main>
    )
  }
}

const mapStateToProps = ({
  projects: { projects, loading },
  meta: {
    meta: { about_playground }
  }
}) => ({
  about_playground,
  projects,
  loading
})

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground)
