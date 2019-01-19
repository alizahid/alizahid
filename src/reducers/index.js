import { combineReducers } from 'redux'

import goals from './goals'
import ideas from './ideas'
import meta from './meta'
import pages from './pages'
import posts from './posts'
import projects from './projects'

export default combineReducers({
  goals,
  ideas,
  meta,
  pages,
  posts,
  projects
})
