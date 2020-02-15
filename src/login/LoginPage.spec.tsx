import React from 'react';
import axiosMock from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer';
import LoginPage from './LoginPage';
import { act } from 'react-dom/test-utils';

jest.mock('axios', () => ({
  post: jest.fn(),
}));

describe('LoginPage', () => {
  it('should redirect to main route on successful login', async () => {
    (axiosMock.post as jest.Mock).mockResolvedValueOnce({
      data: {
        token: 'token',
      },
    });

    const history = createMemoryHistory();
    history.push('/login');

    const store = configureStore({ reducer: rootReducer });
    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </Provider>
    );

    const userNameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;

    await act(async () => {
      fireEvent.change(userNameInput, { target: { value: 'User1' } });
    });

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: 'Pass1' } });
    });

    await act(async () => {
      fireEvent.click(screen.getByText('Log In'));
    });

    expect(history.location.pathname).toBe('/');

    (axiosMock.post as jest.Mock).mockClear();
  });
});
