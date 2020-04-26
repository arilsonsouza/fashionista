import { combineReducers } from 'redux'

import { alert } from './alert'
import { sidebar } from './sidebar'
import { products } from './products'
import { cart } from './cart'

const rootReducer = combineReducers({  
  products,
  cart,
  alert,
  sidebar
})

export default rootReducer
