import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import {
  Button,
} from 'react-bootstrap';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  const props = {
    handleSubmit: () => {},
  };

  it('renders', () => {
    expect(shallow(<LoginForm {...props} />)).to.have.length(1);
  });

  it('has a from element', () => {
    expect(shallow(<LoginForm {...props} />).find('form')).to.have.length(1);
  });

  it('has a logo', () => {
    expect(shallow(<LoginForm {...props} />).find('img')).to.have.length(1);
  });

  it('has a two Field elements', () => {
    expect(shallow(<LoginForm {...props} />).find(Field)).to.have.length(2);
  });

  it('has a Button with text "Log In"', () => {
    expect(shallow(<LoginForm {...props} />).find(Button)).to.have.length(1);
    expect(shallow(<LoginForm {...props} />).find(Button).props().children)
      .to.be.equal('Log In');
  });
});
