import React from 'react';
import { object } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            localStorage.getItem('token')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}
    />
);

ProtectedRoute.propTypes = {
    component: object,
    location: object
};

export default ProtectedRoute;
