import React, { useEffect } from 'react'
import {
  BrowserRouter as Router  
} from 'react-router-dom'
import { connect } from 'react-redux'

import {Navbar} from '../_components'
import { Sidebar } from '../_components'

import './app.scss'
import Routes from '../_routes'
import { alertActions } from '../_actions'

function App({alert, dispatch}) {

  useEffect(() => {
    // dispatch(alertActions.success('Redux setup successfully!'))
  }, [])

  return (
    <>
      <Router>
        <Navbar/>
        <Sidebar/>
        <main className='main'>
          <div className='container'>
            <div className='row'>
              { alert.message &&
                <div className='col-12'>
                  <div className={`alert ${alert.type}`}>
                    {alert.message}
                  </div>
                </div>
              }
            </div>

            <div className='row'>
              <Routes/>
            </div>
          </div>
        </main>
      </Router>
    </>
  )
}

const mapStateToProps = (state) => {
  const { alert } = state
  return {
    alert
  }
}

export default connect(mapStateToProps)(App)
