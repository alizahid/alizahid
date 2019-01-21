import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import ScrollToTop from 'react-router-scroll-top'

import { Header, Spinner } from './components'
import { api } from './lib'
import { Article, Blog, Goals, Home, Ideas, Page, Playground } from './scenes'

import store from './store'
import * as serviceWorker from './serviceWorker'

import './index.scss'

class Ali extends Component {
  state = {}

  async componentDidMount() {
    await api.init()

    this.setState({
      ready: true
    })
  }

  render() {
    const { ready } = this.state

    if (!ready) {
      return <Spinner full />
    }

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/playground" exact component={Playground} />
              <Route path="/ideas" exact component={Ideas} />
              <Route path="/goals" exact component={Goals} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/blog/:slug" component={Article} />
              <Route path="/:slug" component={Page} />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Ali />, document.getElementById('root'))

serviceWorker.unregister()
