import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Component from './PrivateRoutesComponent';

test('Dont show private content when no token is found', () => {
  const component = renderer.create(
    <StaticRouter context={{}}>
      <Component token={false} location={{ pathname: '/' }} />
    </StaticRouter>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Show private content when no token is found', () => {
  const store = {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => ({
      login: {
        token: 'token',
      },
      servers: {
        items: [],
      },
    }),
  };
  const component = renderer.create(
    <Provider store={store}>
      <StaticRouter context={{}}>
        <Component token={'token'} location={{ pathname: '/' }} />
      </StaticRouter>
    </Provider>,
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
