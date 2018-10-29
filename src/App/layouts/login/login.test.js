import React from 'react';
import renderer from 'react-test-renderer';
import Login from './login';

it('renders correctly', () => {
  const LoginPage = renderer
    .create(<Login />)
    .toJSON();
  expect(LoginPage).toMatchSnapshot();
});