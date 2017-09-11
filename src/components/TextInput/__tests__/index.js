import React from 'react';
import { shallow } from 'enzyme';
import { TextInput } from '../index';

it('should render', () => {
  const wrapper = shallow(<TextInput name={'bank'} />);
  expect(wrapper).toMatchSnapshot();
});
