import { productConstants } from '../_constants'
import { ProductService } from '../_services'

const getProducts = () => {
  return async dispatch => {    
    const { data } = await ProductService.getProducts()
    const totalItems = data.length
    dispatch({ type: productConstants.FETCH_PRODUCTS, products: data, totalItems })
  }  
}

export const productActions = {
  getProducts
}