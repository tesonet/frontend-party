import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import App from './App';
import ServersContainer, { ROUTE_PATH as serversRoute } from './containers/Servers/ServersContainer';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

it(`renders a <ServersContainer /> when visiting ${serversRoute}`, () => {
  const wrapper = mount(<Router initialEntries={ [serversRoute] }><App /></Router>);
  expect(wrapper.find(ServersContainer)).toHaveLength(1);
});
