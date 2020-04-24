import { productConstants } from '../_constants'

export const products = (state = {items: [], totalItems: 0}, action) => {
  switch (action.type) {
  case productConstants.FETCH_PRODUCTS:
    console.log('FETCH_PRODUCTS: ', action)    
    return {
      type: 'fetch-products',
      items: action.products,
      totalItems: action.totalItems
    } 
  default:
    return state
  }
}
