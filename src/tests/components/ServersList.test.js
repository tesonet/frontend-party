import React from 'react';
import { shallow } from 'enzyme';
import ServersList from '../../components/ServersList';

test('should render DashboardPage correctly', () => {
  const wrapper = shallow(<ServersList />);
  expect(wrapper).toMatchSnapshot();
});
