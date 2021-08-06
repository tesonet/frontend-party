import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import useUserAuthentication from '../useUserAuthentication';
import useLocalStorage from '../useLocalStorage';
import userReducer from '../../store/user/reducer';

jest.mock('../useLocalStorage');

describe('useUserAuthentication', () => {
  it.each([
    ['should set user as not authenticated if token is unavailable', null, false],
    ['should set user as authenticated if token is available', '455465', true],
  ])('%s', (description, token, expectedIsAuthenticated) => {
    useLocalStorage.mockImplementation(() => ({
      value: token,
    }));

    const store = createStore(combineReducers({
      user: userReducer,
    }));

    const wrapper = ({ children }) => (
      <Provider store={store}>
        {children}
      </Provider>
    );

    const { result } = renderHook(() => useUserAuthentication(), { wrapper });

    expect(result.current.isAuthenticated).toStrictEqual(expectedIsAuthenticated);
  });
});
