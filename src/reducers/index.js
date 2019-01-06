import { combineReducers } from 'redux'

import meta from './meta'
import pages from './pages'
import projects from './projects'

export default combineReducers({
  meta,
  pages,
  projects
})
