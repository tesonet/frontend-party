import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../screens';

test('Show LoginScreen when no token', () => {
  const store = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
      login: {
        token: null,
      },

      servers: {
        servers: [
        ],
      },
    }),
  };

  const component = renderer.create(
    <Provider store={store}>
      <StaticRouter context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Show ServersScreen when token is present', () => {
  const store = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
      login: {
        token: 'f9731b590611a5a9377fbd02f247fcdf',
      },

      servers: {
        servers: [
        ],
      },
    }),
  };

  const component = renderer.create(
    <Provider store={store}>
      <StaticRouter context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
