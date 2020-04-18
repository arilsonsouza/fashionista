import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.scss'

export const Navbar = () => (
  <header className='header'>
  	<nav className='navbar'>
  		<div className='container'>
  		  <Link to='/' className='navbar__brand'>
         Fashionista
        </Link>

        <ul className='navbar__items'>
          <li className='navbar__item'>
            <button className='btn'>
              <i className='fa fa-search'></i>
            </button>
          </li>
          <li className='navbar__item'>
            <button className='btn'>
              <i className='fa fa-shopping-cart'></i>
            	<span className='navbar__badge'>1</span>
            </button>

          </li>
        </ul>
      </div>
  	</nav>
  </header>
)
