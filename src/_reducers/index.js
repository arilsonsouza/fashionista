import { combineReducers } from 'redux'

import { alert } from './alert'
import { sidebar } from './sidebar'
import { products } from './products'

const rootReducer = combineReducers({  
  products,
  alert,
  sidebar
})

export default rootReducer
