import * as React from 'react';
import * as Redux from 'react-redux';

import { render, fireEvent, waitFor } from '@utils/tests';
import { LoginContainer } from './Login';

const mockDispatch = jest.fn();

const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');
useDispatchSpy.mockImplementation(() => mockDispatch);

describe('<LoginContainer />', () => {
  const initialState = { user: { isLoggedIn: false, isLoading: false } };

  it('should display empty form on initial render with active button', () => {
    const { container } = render(<LoginContainer />, { initialState });

    const usernameField = container.querySelector('input[name="username"]');
    expect(usernameField).toHaveValue('');
    const passwordField = container.querySelector('input[name="password"]');
    expect(passwordField).toHaveValue('');
    const submitButton = container.querySelector('button');
    expect(submitButton).not.toBeDisabled();
  });

  it('should dispatch an action with entered credentials', async () => {
    const { container } = render(<LoginContainer />, { initialState });

    const usernameField = container.querySelector('input[name="username"]');
    const passwordField = container.querySelector('input[name="password"]');
    const submitButton = container.querySelector('button');

    const username = 'username';
    const password = 'password';

    if (usernameField && passwordField && submitButton) {
      fireEvent.change(usernameField, { target: { value: username } });
      fireEvent.change(passwordField, { target: { value: password } });
      fireEvent.click(submitButton);
    }

    const expectedPayload = {
      payload: {
        username,
        password,
      },
    };

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(expect.objectContaining(expectedPayload));
    });
  });

  it('should render a disabled button when isLoading is truthy in redux state', () => {
    const loadingState = { user: { isLoggedIn: false, isLoading: true } };

    const { container } = render(<LoginContainer />, {
      initialState: loadingState,
    });

    const submitButton = container.querySelector('button');

    expect(submitButton).toBeDisabled();
  });
});
