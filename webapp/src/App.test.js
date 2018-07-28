import React from 'react';
import App from './App';
import ServersContainer from './containers/Servers/ServersContainer';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toHaveLength(1);
});

it('renders a <ServersContainer />', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ServersContainer)).toHaveLength(1);
});
