import React from 'react';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureMockStore();

describe('LoginForm', () => {
  const initialState = {
    authentication: {
      authLoading: false,
      authSucces: false,
      authFailure: false,
    },
  };
  it('should contain empty username, password input', () => {
    const { getByTestId } = render(
      <Provider store={mockStore(initialState)}><LoginForm /></Provider>,
    );
    const usernameField = getByTestId('username');
    expect(usernameField).toHaveValue('');
    const passwordField = getByTestId('password');
    expect(passwordField).toHaveValue('');
  });

  it('should disable submit button when status is loading', () => {
    const state = {
      authentication: {
        authLoading: true,
        authSucces: false,
        authFailure: false,
      },
    };
    const { getByTestId } = render(
      <Provider store={mockStore(state)}><LoginForm /></Provider>,
    );
    const submitButton = getByTestId('auth-submit-button');
    expect(submitButton).toBeDisabled();
  });

  it('should show error message when auth failed', () => {
    const state = {
      authentication: {
        authLoading: false,
        authSucces: false,
        authFailure: true,
      },
    };
    const { getByTestId } = render(
      <Provider store={mockStore(state)}><LoginForm /></Provider>,
    );
    const errorMessage = getByTestId('auth-error');
    expect(errorMessage).toBeVisible();
  });
});
