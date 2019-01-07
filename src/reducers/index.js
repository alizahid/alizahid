import { combineReducers } from 'redux'

import meta from './meta'
import pages from './pages'
import posts from './posts'
import projects from './projects'

export default combineReducers({
  meta,
  pages,
  posts,
  projects
})
