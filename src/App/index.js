import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import './App.css'
import Routes from '../_routes'
import { alertActions } from '../_actions'

function App({alert, dispatch}) {

  useEffect(() => {
    dispatch(alertActions.success('Redux setup successfully!'))
  }, [])

  return (
    <>
      { alert.message &&
        <div className={`alert ${alert.type}`}>
          {alert.message}
        </div>
      }
      <Routes/>
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
