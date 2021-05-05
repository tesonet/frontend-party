import React from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { isAuthenticated } from '../../libs/auth'

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps> | React.ComponentType
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated()) {
          return <Component {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default PrivateRoute
