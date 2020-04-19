import React from 'react'

import './cart.scss'
import { ProductCard } from '../'
import { floatToCurrency } from '../../_helpers'

const Cart = () => {
  return (
    <div className='cart w-full h-full flex flex-column justify-between'>      	
      <div className='cart__items'>
        <div className='cart__item'>
        	<ProductCard/>
      	</div>

	      <div className='cart__item'>
	        <ProductCard/>
	      </div>

	      <div className='cart__item'>
	        <ProductCard/>
	      </div>
	     
      </div>

      <div className='cart__price flex justify-center w-full'>
        <span>Subtotal - {floatToCurrency(459.70)}</span>
      </div>
    </div>
  )
}

export default Cart