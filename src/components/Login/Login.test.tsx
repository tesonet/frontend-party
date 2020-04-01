import React from 'react';
import { shallow } from 'enzyme';
import { Login, Props } from './Login';

const defaultProps: Props = {
  loginRequest: jest.fn(),
  error: null,
  authLoading: false
};

describe('Login', () => {
  describe('Happy State', () => {
    it('Contains correct components', () => {
      const wrapper = shallow(<Login {...defaultProps} />);
      const logo = wrapper.find('[data-test="logo"]');
      const loginForm = wrapper.find('[data-test="login-form"]');
      const userNameInput = wrapper.find('[data-test="username"]');
      const passwordInput = wrapper.find('[data-test="password"]');
      const submitButton = wrapper.find('[data-test="submit-login"]');
      expect(logo).toHaveLength(1);
      expect(loginForm).toHaveLength(1);
      expect(userNameInput).toHaveLength(1);
      expect(passwordInput).toHaveLength(1);
      expect(submitButton).toHaveLength(1);
    });
  });
  describe('Loading state', () => {
    const authLoadingProps = {
      ...defaultProps,
      authLoading: true
    };
    it('Contains a loader', () => {
      const wrapper = shallow(<Login {...authLoadingProps} />);
      const loader = wrapper.find('[dataTest="loader"]');

      expect(loader).toHaveLength(1);
    });
    it('Disables inputs and button', () => {
      const wrapper = shallow(<Login {...authLoadingProps} />);
      const userNameInput = wrapper.find('[data-test="username"]');
      const passwordInput = wrapper.find('[data-test="password"]');
      const submitButton = wrapper.find('[data-test="submit-login"]');

      expect(userNameInput.prop('disabled')).toBeTruthy();
      expect(passwordInput.prop('disabled')).toBeTruthy();
      expect(submitButton.prop('disabled')).toBeTruthy();
    });
  });
  describe('Error state', () => {
    const errorProps = {
      ...defaultProps,
      error: 'Wrong password!'
    };
    it('Contains error message', () => {
      const wrapper = shallow(<Login {...errorProps} />);
      const error = wrapper.find('[data-test="error"]');

      expect(error.text()).toEqual(errorProps.error);
    });
  });
});
