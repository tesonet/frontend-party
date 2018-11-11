import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../../constants';
import enhance from './enhancer';

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => authenticated
            ? <Component {...props} />
            : <Redirect to={ROUTES.login} />
        }
    />
);

export default enhance(ProtectedRoute);
