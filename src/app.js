// @flow
import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import store from 'store';

import 'fonts/index.css';

import routes from 'routes';
import PrivateRoute from 'routes/PrivateRoute';

import Auth from 'screens/Auth';
import ServerList from 'screens/ServerList';
import NotFound from 'screens/NotFound';

const App = () => (
    <Provider store={store}>
        <Router>
            <Auth path={routes.auth} />
            <PrivateRoute
                path={routes.home}
                component={ServerList}
            />
            <NotFound default />
        </Router>
    </Provider>
);

export default App;
