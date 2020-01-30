import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getIsAuthenticated} from '../../../modules/auth/selectors'

// eslint-disable-next-line react/prop-types
function PrivateRoute({component: Component, ...other}) {
  const isAuthenticated = useSelector(getIsAuthenticated)

  return (
    <Route
      {...other}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          // eslint-disable-next-line react/prop-types
          <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
      }
    />
  )
}

export default PrivateRoute
