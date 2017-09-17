import React from 'react';
import {mount} from 'enzyme';

import {ThemeContainer} from '../test-utils';
import TextInput from './TextInput';


describe('TextInput', () => {
  it('should render a proper bootstrap input', () => {
    const wrapper = mount(
      <ThemeContainer>
        <TextInput />
      </ThemeContainer>,
    );
    expect(wrapper.find('input.form-control').length).toBe(1);
  });


  it('should render a proper bootstrap input when input addon prop is given', () => {
    const addon = <span className='input-group-addon'>X</span>;
    const wrapper = mount(
      <ThemeContainer>
        <TextInput leftInputGroupAddon={addon} />
      </ThemeContainer>,
    );
    expect(wrapper.find('.input-group > .input-group-addon').length).toBe(1);
    expect(wrapper.find('.input-group > .input-group-addon').contains(addon)).toBeTruthy();
    expect(wrapper.find('.input-group input.form-control').length).toBe(1);
  });
});
