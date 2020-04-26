import { cartConstants } from '../_constants'

let initialState = localStorage.getItem('cart')

if (initialState) {
  initialState = JSON.parse(initialState)
} else {
  initialState = {
    items: [],
    count: 0
  }
}

export const cart = (state = initialState, action) => {
  switch (action.type) {
  case cartConstants.ADD_ITEM: 
    const items = [...state.items, action.item]
    const count = items.length
    const updatedState = {
      items,
      count
    }    
    localStorage.setItem('cart', JSON.stringify(updatedState))
    return updatedState
  default:
    return state
  }
}
