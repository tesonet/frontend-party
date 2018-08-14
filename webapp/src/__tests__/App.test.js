import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import App from '../App';
import ServersContainer, { ROUTE_PATH as serversRoute } from '../containers/Servers/ServersContainer';
import LoginContainer, { ROUTE_PATH as loginRoute } from '../containers/Auth/Login/LoginContainer';

jest.mock('../hoc/publicRoute');
jest.mock('../hoc/privateRoute');
jest.mock('../utils/api');

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

it('redirects to <LoginContainer /> by default', () => {
  const wrapper = mount(<Router initialEntries={ ['/'] }><App /></Router>);
  expect(wrapper.find(LoginContainer)).toHaveLength(1);
});

it(`renders a <ServersContainer /> when visiting ${serversRoute}`, () => {
  const wrapper = mount(<Router initialEntries={ [serversRoute] }><App /></Router>);
  expect(wrapper.find(ServersContainer)).toHaveLength(1);
});

it(`renders a <LoginContainer /> when visiting ${loginRoute}`, () => {
  const wrapper = mount(<Router initialEntries={ [loginRoute] }><App /></Router>);
  expect(wrapper.find(LoginContainer)).toHaveLength(1);
});
