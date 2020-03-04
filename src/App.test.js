import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
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

const createComponent = store =>
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

describe('<App/>', () => {
  it('should have 1 Route when token equals null', () => {
    const component = createComponent(createStoreWithoutToken());
    const route = component.find('Route');

    expect(route).toHaveLength(1);
  });

  it('should have route with path "/" when token equals null', () => {
    const component = createComponent(createStoreWithoutToken());
    const route = component.find('Route[path="/"]');

    expect(route.exists()).toBeTruthy();
  });

  it('should have route with path "/home" when token not equals null', () => {
    const component = createComponent(createStoreWithToken());
    const route = component.find('Route[path="/home"]');

    expect(route.exists()).toBeTruthy();
  });
});
