import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiShoppingOutline, mdiMagnify } from '@mdi/js'

import './navbar.scss'

import { sidebarActions } from '../../_actions'

const Navbar = ({ dispatch }) => {

  const handleAction = (action, sidebar) => dispatch(action(sidebar))

  return (
    <header className='header w-full'>
    	<nav className='navbar w-full flex'>
    		<div className='container flex justify-between items-center'>
    		  <Link to='/' className='navbar__brand'>
           Fashionista
          </Link>

          <ul className='navbar__items flex'>
            <li className='navbar__item'>
              <button className='btn'
                onClick={() => handleAction(sidebarActions.showSidebarCart, 'search')}
              >
                <Icon path={mdiMagnify}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                />
              </button>
            </li>
            <li className='navbar__item'>
              <button className='btn'
                onClick={() => handleAction(sidebarActions.showSidebarCart, 'cart')}
              >
                <Icon path={mdiShoppingOutline}
                  size={1}
                  horizontal
                  vertical
                  rotate={180}
                />
              	<span className='navbar__badge'>1</span>
              </button>

            </li>
          </ul>
        </div>
    	</nav>
    </header>
  )
}


const mapStateToProps = (state) => { 
  const { sidebar } = state
  return {
    sidebar
  }
}

export default connect(mapStateToProps)(Navbar) 