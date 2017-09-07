import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routes from '../index.js';
import configureStore from 'redux-mock-store';

describe('Routes work as expected',() => {
  it('renders login page if user is not authenticated',() => {
    const state = {
      LoginReducer: {
        token: false,
        userAuthenticated: false
      }
    }

    const mockStore = configureStore();
    const store = mockStore(state);

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Provider>
    );

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('.loginPage').length).toEqual(1);
    expect(component.find('.serversPage').length).toEqual(0);

  });

  it('renders servers page if user is authenticated',() => {
    const state = {
      LoginReducer: {
        token: true,
        userAuthenticated: true
      },
      ServersReducer: {
        errorMessage: false,
        servers: []
      }
    }

    const mockStore = configureStore();
    const store = mockStore(state);

    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Provider>
    );

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
    expect(component.find('.loginPage').length).toEqual(0);
    expect(component.find('.serversPage').length).toEqual(1);

  })
})
