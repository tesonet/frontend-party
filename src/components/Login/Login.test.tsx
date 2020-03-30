import React from 'react';
import { shallow } from 'enzyme';
import { Login } from './Login';

describe('Login', () => {
  describe('UI', () => {
    it('Contains correct components', () => {
      const wrapper = shallow(<Login />);
      const logo = wrapper.find('[data-test="logo"]');
      const loginForm = wrapper.find('[data-test="login-form"]');
      const userNameInput = wrapper.find('[data-test="username"]');
      const passwordInput = wrapper.find('[data-test="password"]');
      expect(logo).toHaveLength(1);
      expect(loginForm).toHaveLength(1);
      expect(userNameInput).toHaveLength(1);
      expect(passwordInput).toHaveLength(1);
    });
  });
});
