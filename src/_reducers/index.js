import { combineReducers } from 'redux'

import { alert } from './alert'
import { sidebar } from './sidebar'

const rootReducer = combineReducers({  
  alert,
  sidebar
})

export default rootReducer
