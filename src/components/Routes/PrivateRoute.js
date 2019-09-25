import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AUTH_TOKEN_KEY } from '../../constants/token';
import storage from '../../utils/localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            storage.get(AUTH_TOKEN_KEY) ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default PrivateRoute;
