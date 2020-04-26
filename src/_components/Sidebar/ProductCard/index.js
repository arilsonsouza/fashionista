import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Icon from '@mdi/react'
import { mdiPlus, mdiMinus } from '@mdi/js'

import './product-card.scss'
import { slugify } from '../../../_helpers'

const ProductCard = ({ product, sidebar: { activeSidebar = null }, dispatch }) => {	
  const productPath = `/produto/${slugify(product.name, '-')}`

  return (
    <div className='product w-full h-full flex'>
      <div className='product__image h-full'>
        <Link to={productPath} className='w-full h-full flex justify-center items-center'>        
          { product.image ? <img 
            className='w-full h-full' 
            src={product.image} 
            alt={product.name}
            title={product.name}/>
            : <span className='no__image'>Imagem indisponível</span>
          }
        </Link>

        { activeSidebar === 'cart' && 
	        <button className='product__remove-btn'>
						Remover item
	        </button>
      	}
      </div>

      <div className='product__details flex'>
        <div className='product__description flex flex-column'>
          <Link to={productPath} className='w-full'> 
            <h4>{product.name}</h4>
          </Link>
          { activeSidebar === 'cart' && 
            <span className='produc-size'>
              Tam: PP
            </span> 
          }

          { activeSidebar === 'cart' && 
	          <div className='product__actions flex items-center'>
	            <button className='product__action flex items-center'>
	              <Icon path={mdiMinus}
					        size={.6}
					        horizontal
					        vertical
					        rotate={180}
				       	/>
	            </button>
	            <span className='product__quantity'>1</span>
	            <button className='product__action flex items-center'>
	              <Icon path={mdiPlus}
					        size={.6}
					        horizontal
					        vertical
					        rotate={180}
				       	/>
	            </button>
	          </div>
	        }
        </div>

        <div className='product__cost flex flex-column'>
          <span className='product__price'>{product.actual_price}</span>
          {product.installments && <span className='product__parcels'>{product.installments}</span> }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => { 
  const { sidebar } = state
  return {
    sidebar
  }
}

export default connect(mapStateToProps)(ProductCard) 
