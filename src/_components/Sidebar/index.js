import React from 'react'
import { connect } from 'react-redux'
import Icon from '@mdi/react'
import { mdiArrowLeft } from '@mdi/js'

import './sidebar.scss'

import { Search, Cart } from '../' 

import { sidebarActions } from '../../_actions'

const Sidebar = ({ sidebar: { activeSidebar = null }, dispatch }) => {
	
  return (
  	<div className={`sidebar ${activeSidebar ? 'sidebar--open' : 'sidebar--close'}`}>
  		<div className='sidebar__body-overlay'
				 onClick={() => dispatch(sidebarActions.hideSideBar())}
  		></div>
	    <div className='sidebar__content-wrapper'>
	      <header className='sidebar__header'>
	        <button className='sidebar__button'
	          onClick={() => dispatch(sidebarActions.hideSideBar())}
	        >
	          <Icon path={mdiArrowLeft}
			        size={1}
			        horizontal
			        vertical
			        rotate={180}
			       />
	        </button>
	        <div className='sidebar__title'>
						Sacola (3)
	        </div>
	      </header>
	      <div className='sidebar__content'>
	        { activeSidebar === 'cart' ? <Cart/> : <Search/>  }
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

export default connect(mapStateToProps)(Sidebar) 