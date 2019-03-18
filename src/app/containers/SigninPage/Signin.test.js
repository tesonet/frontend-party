import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import logoLight from '../../../assets/logo-light.png';
import { SigninPage } from './';

configure({ adapter: new Adapter() });

const wrapper = shallow(
  <SigninPage onLoginRequest={jest.fn(() => Promise.resolve())} />
);

describe('<SigninPage /> container', () => {
  it('Should have logo', () => {
    expect(
      wrapper.contains(
        <div className="centrify-logo">
          <img src={logoLight} alt="Light logo" className="testio-logo" />
        </div>
      )
    ).toEqual(true);
  });

  describe('When the form is submitted', () => {
    wrapper.find('#username').simulate('change', {
      target: { name: 'username', value: 'test@gmail.com' }
    });

    wrapper
      .find('#password')
      .simulate('change', { target: { name: 'password', value: 'cats' } });

    wrapper.find('#loginForm').simulate('submit', { preventDefault() {} });

    it('should change the username state', () => {
      expect(wrapper.state().username).toEqual('test@gmail.com');
    });

    it('should change the password state', () => {
      expect(wrapper.state().password).toEqual('cats');
    });
  });
});
