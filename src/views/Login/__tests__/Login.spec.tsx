import * as React from 'react';
import * as Enzyme from 'enzyme';
import {Login} from '../';

describe('<Login />', () => {
  const setup = () => Enzyme.shallow(<Login />);

  it('should mount', () => {
    expect(setup().exists()).toBe(true);
  });

  it('should have 2 inputs and a login button', () => {
    const wrapper = setup();
    expect(wrapper.find('input').length).toBe(2);
    expect(wrapper.find('button').length).toBe(1);
  });
});
