import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import { withReduxForm } from '@Common';

import LoginPage from '../LoginPage';
import useLogin from '../hooks/useLogin';
import { useLocalStorage, useRedirect, useUserAuthentication } from '../../../hooks';
import { LOGIN_FORM, USERNAME, PASSWORD } from '../../../config/constants';

jest.mock('../utils/validateLoginForm', () => {});
jest.mock('../hooks/useLogin');
jest.mock('../../../hooks/useLocalStorage');
jest.mock('../../../hooks/useRedirect');
jest.mock('../../../hooks/useUserAuthentication');

const renderLoginPageWithLoginAction = () => {
  const errorHandler = {
    hideError: jest.fn(),
    showError: jest.fn(),
  };

  const initialValues = {
    [USERNAME]: 'tesonet',
    [PASSWORD]: 'randomPassword',
  };

  const Component = withReduxForm(
    LoginPage,
    { form: LOGIN_FORM, initialValues },
    { errorHandler },
  );
  render(<Component />);

  const loginButton = screen.getByText('Login');

  fireEvent.click(loginButton);

  return initialValues;
};

const mockHooks = () => {
  const token = '1465465AS';

  const loginActionMock = jest.fn(() => token);
  useLogin.mockImplementation(() => ({
    loaded: true,
    sendAction: loginActionMock,
  }));

  const updateKey = jest.fn();
  useLocalStorage.mockImplementation(() => ({
    updateKey,
  }));
  const toMain = jest.fn();
  useRedirect.mockImplementation(() => ({
    toMain,
  }));

  const updateUserAuthentication = jest.fn();
  useUserAuthentication.mockImplementation(() => ({
    updateUserAuthentication,
  }));

  return {
    token,
    loginActionMock,
    updateKey,
    toMain,
    updateUserAuthentication,
  };
};

describe('LoginPage', () => {
  it('should mark send login action', () => {
    const { loginActionMock } = mockHooks();
    const formValues = renderLoginPageWithLoginAction();

    expect(loginActionMock).toHaveBeenCalledWith(formValues[USERNAME], formValues[PASSWORD]);
  });

  it('should update token', async () => {
    const { updateKey, token } = mockHooks();
    await renderLoginPageWithLoginAction();

    await waitFor(() => expect(updateKey).toHaveBeenCalledWith(token));
  });

  it('should mark user as authenticated', async () => {
    const { updateUserAuthentication } = mockHooks();
    await renderLoginPageWithLoginAction();

    await waitFor(() => expect(updateUserAuthentication).toHaveBeenCalledWith(true));
  });

  it('should redirect user to main', async () => {
    const { toMain } = mockHooks();
    await renderLoginPageWithLoginAction();

    await waitFor(() => expect(toMain).toBeCalled());
  });
});
