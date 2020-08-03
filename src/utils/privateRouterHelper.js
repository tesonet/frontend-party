import React from 'react';
import { Redirect } from 'react-router-dom';
import { getStorageToken } from './localStorage';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  getStorageToken('token') ? <Component {...rest} /> : <Redirect to="/login" />
);
