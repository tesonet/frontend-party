import React from 'react';
import Header from '../Header';

it('renders without crashing', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toHaveLength(1);
});

it('matches the snapshot', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
