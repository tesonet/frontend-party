import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders login form', () => {

  const result = render(<App />);
  const username = result.container.querySelector('#username');
  const password = result.container.querySelector('#password');
  const button = result.container.querySelector('#login-button');

  expect(username).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});