import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../libs/auth'
// import { setAppError } from '../../actions/app'
// import { redirectToLoginPage } from '../../errorHandler'
import { useActions } from '../../hooks/useActions'
import { setLoginError } from '../../actions/auth'

interface PrivateRouteProps {
  component: any
  path: string
  exact?: boolean
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const actions = useActions({ setLoginError })
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated()) {
          return <Component {...props} />
        } else {
          actions.setLoginError()
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default PrivateRoute
