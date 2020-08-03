import React from 'react';
import { mount } from 'enzyme';
import Logo from './Logo';

describe('<Logo />', () => {
  const wrapped = mount(<Logo type="login" />);

  it('should render', () => {
    expect(wrapped).toBeTruthy();
  });

  it('should match latest snapshot', () => {
    expect(wrapped.debug()).toMatchSnapshot();
  });

  it('should have type passed', () => {
    expect(wrapped.prop('type')).toBeTruthy();
  });
});
