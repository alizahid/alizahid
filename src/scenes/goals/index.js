import React, { Component } from 'react'
import { RichText } from 'prismic-reactjs'
import { connect } from 'react-redux'

import { getGoals } from '../../actions'
import { Head, Spinner } from '../../components'

import './index.scss'

class Goals extends Component {
  componentDidMount() {
    const { getGoals } = this.props

    getGoals()
  }

  render() {
    const { about_goals, goals, loading } = this.props

    return (
      <main className="goals">
        <Head title="Goals" />
        {about_goals && RichText.render(about_goals)}
        {loading && <Spinner half />}
        {goals.map(({ description, id, deadline, title, updates }) => (
          <article key={id}>
            <h2>{title}</h2>
            {RichText.render(description)}
            {updates.length > 0 && (
              <div>
                <h3>Updates</h3>
                {updates.map(({ content, time }, index) => (
                  <section key={index}>
                    {RichText.render(content)}
                    <footer>
                      <span title={time.format('LLLL')}>{time.fromNow()}</span>
                    </footer>
                  </section>
                ))}
              </div>
            )}
            {deadline && (
              <footer>
                <span title={deadline.format('LLLL')}>
                  Deadline {deadline.fromNow()}
                </span>
              </footer>
            )}
          </article>
        ))}
      </main>
    )
  }
}

const mapStateToProps = ({
  goals: { goals, loading },
  meta: {
    meta: { about_goals }
  }
}) => ({
  about_goals,
  goals,
  loading
})

const mapDispatchToProps = dispatch => ({
  getGoals: () => dispatch(getGoals())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goals)
