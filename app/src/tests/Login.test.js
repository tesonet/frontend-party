import React from 'react';
import Login from '../components/Login';
import renderer from 'react-test-renderer';

it('Login renders correctly', () => {
  const tree = renderer
    .create(<Login.WrappedComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});