import * as React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const preloadedState = {};

export const render = (
  ui: React.ReactElement,
  { initialState = preloadedState, store = mockStore(initialState), ...renderOptions } = {},
) => {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
