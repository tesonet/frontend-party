import React from 'react';
import { mount } from 'enzyme';
import Icon from './Icon';

describe('<Icon />', () => {
  const wrapped = mount(<Icon icon="user" />);

  it('should render', () => {
    expect(wrapped).toBeTruthy();
  });

  it('should match latest snapshot', () => {
    expect(wrapped.debug()).toMatchSnapshot();
  });

  it('should pass icon prop', () => {
    expect(wrapped.prop('icon')).toEqual('user');
  });
});
