import React from 'react';
import Input from '../Input';

it('renders without crashing', () => {
  const wrapper = shallow(<Input />);
  expect(wrapper).toHaveLength(1);
});

it('has reasonable defaultProps', () => {
  expect(Input.defaultProps).toEqual({
    type: 'text',
    name: '',
    value: '',
    placeholder: '',
    icon: null,
    error: null,
    onChange: expect.any(Function)
  });
});

it('matches the snapshot', () => {
  const wrapper = shallow(<Input
    error="An error occurred"
    name="username"
    value=""
    placeholder="Username"
    icon={ <span className="oi oi-person" /> }
  />);

  expect(wrapper).toMatchSnapshot();
});
