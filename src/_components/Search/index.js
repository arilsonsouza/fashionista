import React from 'react'

import './search.scss'
import { debounce } from '../../_helpers'
import { ProductCard } from '../'

const Search = () => {

  const handleChange = debounce(query => {
    console.log('handleChange', query)
  }, 500)

  return (
    <div className='search w-full h-full'>
      <div className='search__input w-full'>
        <input 
        	onChange={ e => handleChange(e.target.value)}
				  type='text'
				  placeholder='Pesquisar'
				  className='w-full'/>
      </div>

      <div className='results w-full h-full flex flex-column'>
      	<div className='result__count w-full'>
          <span>4 items</span>
      	</div>
      	
        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>

        <div className='result__item'>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default Search