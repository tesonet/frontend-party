import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const ProtectedRouter = ({component: Component, withAuth, routePath, ...rest}) => {
    return (
        <Route
            path={routePath}
            {...rest}
            render={(props) => (
            localStorage.getItem('token') !== "null" ?
                <Component {...props}/> :
                <Redirect to="/"/>
        )}
               />
    )
}

export default ProtectedRouter