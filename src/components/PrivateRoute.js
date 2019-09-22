import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem('authToken') ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default PrivateRoute;
