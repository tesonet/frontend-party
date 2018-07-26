import React from 'react';
import ServersContainer from './ServersContainer';
import ServersView from './ServersView';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ServersContainer />);
});

afterEach(() => {
  wrapper.unmount();
  wrapper = null;
});

it('renders without crashing', () => {
  expect(wrapper).toHaveLength(1);
});

it('renders <ServersView />', () => {
  expect(wrapper.find(ServersView)).toHaveLength(1);
});
