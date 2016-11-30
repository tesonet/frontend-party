import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import InputWithIcon from './InputWithIcon';

describe('LoginForm', () => {
  const props = {
    icon: 'music',
    type: 'text',
    placeholder: 'La la la 🎵 🎵 🎵',
  };

  it('renders', () => {
    expect(shallow(<InputWithIcon {...props} />))
      .to.have.length(1);
  });
});
