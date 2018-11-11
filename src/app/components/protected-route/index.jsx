import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { PATH_BY_ID } from '../../constants';
import enhance from './enhancer';

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={props => authenticated
            ? <Component {...props} />
            : <Redirect to={PATH_BY_ID.LOGIN} />
        }
    />
);

export default enhance(ProtectedRoute);
