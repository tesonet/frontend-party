import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AUTH_TOKEN_KEY } from '../constants/token';
import storage from '../utils/localStorage';

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            storage.get(AUTH_TOKEN_KEY) ? <Redirect to="/" /> : <Component {...props} />
        }
    />
);

PublicRoute.propTypes = {
    component: PropTypes.func.isRequired
};

export default PublicRoute;
