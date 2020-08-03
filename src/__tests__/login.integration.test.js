import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import LoginPage from '../pages/LoginPage';

const mockStore = configureStore([thunkMiddleware]);
const createStore = (state) => mockStore(state);
const URL = 'https://playground.tesonet.lt/v1/tokens';
const headers = { 'Content-Type': 'application/json' };

const defaultState = () => ({
  auth: {
    token: null,
    loggingIn: false,
    error: false,
  },
});

describe('Login test', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Provider store={createStore(defaultState)}>
        <LoginPage />
      </Provider>,
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('should have rendered', () => {
    expect(wrapped.find(LoginPage)).toBeTruthy();
  });

  it('should fetch with no errors using username and password', () => {
    wrapped.find('input[data-test="input-field"]').at(0).simulate('change', {
      target: { value: 'username' },
    });
    wrapped.find('input[data-test="input-field"]').at(1).simulate('change', {
      target: { value: 'password' },
    });

    wrapped.update();

    wrapped.find('form').simulate('submit');

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(URL, {
      body: '{"username":"username","password":"password"}',
      headers,
      method: 'POST',
    });
  });
});
