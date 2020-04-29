import React from 'react';
import { Redirect } from 'react-router-dom';

export const checkAuth = Component => props => {
  const token = localStorage.getItem('token');

  return token ? <Component {...props} /> : <Redirect to='/' />;
};

export const getToken = () => localStorage.getItem('token');
