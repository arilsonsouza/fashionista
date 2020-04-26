import { cartConstants } from '../_constants'

const addItem = (item) => ({ type: cartConstants.ADD_ITEM, item })

export const cartActions = {
  addItem
}