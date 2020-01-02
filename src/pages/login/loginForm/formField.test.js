import React from 'react';
import { shallow } from 'enzyme';
import FormField from './formField';

it('should match snapshot', () => {
  const wrapper = shallow(
    <FormField icon="username" name="name" type="type" />,
  );
  expect(wrapper).toMatchSnapshot();
});
