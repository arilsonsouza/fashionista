import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import './search.scss'
import { debounce } from '../../_helpers'
import { ProductCard } from '../'

const Search = ({ products: { items } }) => {
  const [searchedProducts, setsearchedProducts] = useState([])
  const [searchQuery, setsearchQuery] = useState('')
  const [resultsCount, setresultsCount] = useState(0)

  useEffect(() => {
    const results = items.filter(
      (product) =>
        product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    )

    setresultsCount(results.length)
    setsearchedProducts(results)
  }, [searchQuery])

  const handleChange = debounce((query) => {
    if (query.length >= 3) {
      setsearchQuery(query)
    } else if (!query) {
      setsearchedProducts([])
      setresultsCount(0)
    }
  }, 500)

  return (
    <div className="search w-full h-full">
      <div className="search__input w-full">
        <input
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Pesquisar"
          className="w-full"
        />
      </div>

      <div className="results w-full h-full flex flex-column">
        <div className="result__count w-full">
          <span>{resultsCount} items</span>
        </div>
        {resultsCount > 0 ? (
          searchedProducts.map((product, index) => (
            <div
              className="result__item"
              key={`${product.color_slug}-${index}`}
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="w-full flex flex-1 items-center justify-center no__results__found">
            <span>Nenhum item encontrado :\</span>
          </div>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { products } = state
  return {
    products,
  }
}

export default connect(mapStateToProps)(Search)
