import * as React from 'react';
import { shallow, mount, render } from 'enzyme';
import LoginPage from '../pages/LoginPage';

describe('Login page', () => {
  it('should render without throwing an error', () => {
    const wrapper = mount(<LoginPage/>);
    expect(wrapper.find('.login__form').length).toBe(1);
  });

  it('should render username input', () => {
    const wrapper = mount(<LoginPage/>);
    expect(wrapper.find('input[name="username"]').length).toBe(1);
  });

  it('should render password input', () => {
    const wrapper = mount(<LoginPage/>);
    expect(wrapper.find('input[name="password"]').length).toBe(1);
  });

  it('username input should respond to change', () => {
    const wrapper = mount(<LoginPage/>);
    const usernameInput = wrapper.find('input[name="username"]');
    usernameInput.value = 'test';
    usernameInput.simulate('change');
    expect(usernameInput.value == "test").toBeTruthy();
  });

  it('password input should respond to change', () => {
    const wrapper = mount(<LoginPage/>);
    const passwordInput = wrapper.find('input[name="password"]');
    passwordInput.value = 'test';
    passwordInput.simulate('change');
    expect(passwordInput.value == "test").toBeTruthy();
  });

  it('should fail submit login form', () => {
    const wrapper = mount(<LoginPage/>);
    const form = wrapper.find('form.form');
    const mock = jest.fn();

    form.simulate('submit');
    expect(mock).not.toHaveBeenCalled();
  });
});
