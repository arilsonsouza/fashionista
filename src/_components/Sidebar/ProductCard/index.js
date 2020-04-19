import React from 'react'
import { connect } from 'react-redux'
import Icon from '@mdi/react'
import { mdiPlus, mdiMinus } from '@mdi/js'

import './product-card.scss'
import { floatToCurrency } from '../../../_helpers'

const ProductCard = ({ sidebar: { activeSidebar = null }, dispatch }) => {	
  return (
    <div className='product w-full flex'>
      <div className='product__image'>
        <a href='#' className='w-full'>
          <img className='w-full h-full' src='https://ph-cdn3.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-bordo-assimetrico-com-alcas_277169_600_1.jpg' alt=''/>
        </a>

        { activeSidebar == 'cart' && 
	        <button className='product__remove-btn'>
						Remover item
	        </button>
      	}
      </div>

      <div className='product__details flex'>
        <div className='product__description flex flex-column'>
          <a href='#'>
            <h4>vestido bordo assimetrico</h4>
          </a>
          <span className='produc-size'>
						Tam: PP
          </span>

          { activeSidebar == 'cart' && 
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
          <span className='product__price'>{floatToCurrency(159.90)}</span>
          <span className='product__parcels'>3x {floatToCurrency(53.30)}</span>
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
