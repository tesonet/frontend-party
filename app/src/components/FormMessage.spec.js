import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FormMessage from './FormMessage';

describe('LoginForm', () => {
  const props = {
    type: 'error',
  };

  it('renders', () => {
    expect(shallow(<FormMessage {...props}>Message</FormMessage>))
      .to.have.length(1);
  });
});
