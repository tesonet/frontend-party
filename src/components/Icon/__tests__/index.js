import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from '../index';

it('should render', () => {
  const wrapper = shallow(<Icon name={'bank'} />);
  expect(wrapper).toMatchSnapshot();
});
