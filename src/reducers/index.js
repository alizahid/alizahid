import { combineReducers } from 'redux'

import meta from './meta'
import projects from './projects'

export default combineReducers({
  meta,
  projects
})
