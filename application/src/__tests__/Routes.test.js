import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import Routes from '../Routes';
import LoginPage from '../components/login/LoginPage';
import ServersPage from '../components/servers/ServersPage';
import PageNotFound from '../components/PageNotFound';
import store from '../Store';


test('should render PageNotFound on a 404 page',() => {

  const component = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/404']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    </Provider>
  );
  const tree = toJson(component);
  expect(component.contains(PageNotFound)).toBe(true);
})
