import React from 'react';
import { Route } from 'react-router-dom';

import PrivateRoutes from './PrivateRoutes';
import Login from '../views/Login';

const Routes = () => (
  <div>
    <Route component={PrivateRoutes} />
    <Route exact path="/login" component={Login} />
  </div>
);

export default Routes;
