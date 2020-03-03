import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { shallow, mount, render } from 'enzyme';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';

const mockStore = configureMockStore([thunk]);
const createStoreWithoutToken = () =>
  mockStore({
    auth: {
      token: null,
    },
  });

const createStoreWithToken = () =>
  mockStore({
    auth: {
      token: 1,
    },
    servers: {
      servers: [],
    },
  });

const createComponentWithoutToken = () =>
  mount(
    <Provider store={createStoreWithoutToken()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

const createComponentWithToken = () =>
  mount(
    <Provider store={createStoreWithToken()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

describe('<App/>', () => {
  it('should have 1 Route when token equals null', () => {
    const component = createComponentWithoutToken();
    const route = component.find('Route');

    expect(route.length).toBe(1);
  });

  it('should have route with path "/" when token equals null', () => {
    const component = createComponentWithoutToken();
    const route = component.find('Route[path="/"]');

    expect(route.length).toBe(1);
  });

  it('should not have route with path "/home" when token equals null', () => {
    const component = createComponentWithoutToken();
    const route = component.find('Route[path="/home"]');

    expect(route.length).toBe(0);
  });

  it('should have route with path "/home" when token not equals null', () => {
    const component = createComponentWithToken();
    const route = component.find('Route[path="/home"]');

    expect(route.length).toBe(1);
  });

  it('should have 1 route when token not equals null', () => {
    const component = createComponentWithToken();
    const route = component.find('Route');

    expect(route.length).toBe(1);
  });
});
