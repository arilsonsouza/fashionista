import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './details.scss'
import { cartActions } from '../../_actions'

const ProductDetails = ({ products: { items, totalItems, product }, dispatch }) => {  
  const [selectedSize, setSelectedSize] = useState('')
  const [sizeNotSelected, setSizeNotSelected] = useState(false)  
  
  const addProductToCart = () => {
    if (!selectedSize) {
      setSizeNotSelected(true)
      return
    }

    setSizeNotSelected(false)
    dispatch(cartActions.addItem({ ...product, selectedSize }))
  }

  return (
    <div className='container'>  
      { product &&
        <div className='w-full flex product__wrapper'>
          <figure className='product__image'>
            <img
              src={product.image}
              alt={product.name}
              title={product.name}
            />
          </figure>

          <div className='product__content'>
            <h3 className='product__name'>{product.name}</h3>
            <div className='product__pricing flex'>
              {product.on_sale && <span className='product__price product__price--regular-price'>
                {product.regular_price}
              </span> }
              <span className='product__price product__price--actual-price'>
                {product.actual_price}
              </span>
              <span className='product__price product__price--installments'>
                em até {product.installments}
              </span>
            </div>
            <div className='product__sizes flex flex-column'>
              <p className='product__sizes_label'>Escolha o tamanho</p>
              {sizeNotSelected && <p className='product__sizes__error'>É necessário escolher um tamanho</p> }

              <div className='product_size__options flex items-center w-full'>
                {product.sizes.filter(item => item.available === true).map(item => (
                  <label 
                    key={item.sku}
                    className="product__size-option-container">                    
                    <input 
                      type="radio" 
                      value={item.sku}
                      onChange={e => setSelectedSize(e.target.value)}
                      checked={selectedSize === item.sku}/>
                    <span className="product__size-checkmark">
                      {item.size}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className='product__actions w-full'>
              <button 
                onClick={addProductToCart}
                className='product__action__add-to-cart'>
                Adicionar à sacola
              </button>
            </div>
          </div>
        </div>
      }      
    </div>
  )
}

const mapStateToProps = (state) => {
  const { products } = state
  return {
    products    
  }
}

export default connect(mapStateToProps)(ProductDetails)
