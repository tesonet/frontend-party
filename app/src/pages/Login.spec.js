import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Login } from './Login';
import LoginForm from '../components/LoginForm';

describe('Login', () => {
  it('renders', () => {
    const props = {
      authentication: { authenticated: false },
      signinUser: () => {},
    };
    expect(shallow(<Login {...props} />))
      .to.have.length(1);
  });

  it('has a LoginForm component, when not authenticated', () => {
    const props = {
      authentication: { authenticated: false },
      signinUser: () => {},
    };
    expect(shallow(<Login {...props} />).find(LoginForm)).to.have.length(1);
  });

  it('has doesn\'t have LoginForm component, when authenticated', () => {
    const props = {
      authentication: { authenticated: true },
      signinUser: () => {},
    };
    expect(shallow(<Login {...props} />).find(LoginForm)).to.have.length(0);
  });
});
