import React from 'react';
import ServersListItemView from './ServersListItemView';

it('renders without crashing', () => {
  const wrapper = shallow(<ServersListItemView />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(ServersListItemView.defaultProps).toEqual({ name: null, distance: null });
});

it('renders nothing when no props are given', () => {
  const wrapper = shallow(<ServersListItemView />);
  expect(wrapper.type()).toBeNull();
});

it('renders country name and distance', () => {
  const props = { name: 'Country', distance: 123 };
  const wrapper = shallow(<ServersListItemView { ...props } />);
  expect(wrapper.text()).toContain(props.name);
  expect(wrapper.text()).toContain(props.distance);
});
