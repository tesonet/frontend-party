import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, routePath, ...rest }) => {
  return (
    <Route
      path={routePath}
      {...rest}
      render={(props) => (
        localStorage.getItem('token') !== 'null' ?
          <Component {...props}/> :
          <Redirect to="/"/>
      )}
    />
  )
}

export default ProtectedRoute