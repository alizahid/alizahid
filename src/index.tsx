import React, { FunctionComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { StoreProvider } from 'easy-peasy'
import ReactDOM from 'react-dom'
// @ts-ignore
import ScrollToTop from 'react-router-scroll-top'

import * as serviceWorker from './serviceWorker'

import { Header } from './components'
import { About, Article, Blog, Playground } from './scenes'
import { store } from './store'

import './index.scss'

const Ali: FunctionComponent = () => {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
          <Route path="/" exact component={Blog} />
          <Route path="/blog/:slug" component={Article} />
          <Route path="/playground" component={Playground} />
          <Route path="/about" component={About} />
        </ScrollToTop>
      </BrowserRouter>
    </StoreProvider>
  )
}

ReactDOM.render(<Ali />, document.getElementById('root'))

serviceWorker.unregister()
