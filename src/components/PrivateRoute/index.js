/* eslint-disable */
import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'

function PrivateRoute({component: Component, ...rest}) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
      }
    />
  )
}

export default PrivateRoute
