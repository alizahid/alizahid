import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Header, Spinner } from './components'
import { api } from './lib'
import { Article, Blog, Home, Page, Playground } from './scenes'

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
      return <Spinner fullscreen />
    }

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/playground" exact component={Playground} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/blog/:slug" component={Article} />
              <Route path="/:slug" component={Page} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Ali />, document.getElementById('root'))

serviceWorker.unregister()
