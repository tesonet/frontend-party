import * as React from 'react';
import LoginForm from '../../../components/form/LoginForm';
import { shallow, mount } from 'enzyme';
import history from '../../../utils/history';
import { ILoginState } from '../../../interfaces';
import '../../../utils/mocalStorage';

describe('LoginForm component', () => {
  it('Sets localStorage item if logged in successfully', async () => {
    const wrapper = shallow(<LoginForm/>);

    wrapper.instance().setState({
      username: 'tesonet',
      password: 'partyanimal'
    });

    const event: Event = new Event('submit', { cancelable: true });

    await (wrapper.instance() as any).handleSubmit(event);
    expect(!!localStorage.getItem('apitoken')).toBeTruthy();
  });

  it('Redirects to List view if logged in successfully', async () => {
    const wrapper = shallow(<LoginForm/>);

    wrapper.instance().setState({
      username: 'tesonet',
      password: 'partyanimal'
    });

    const event: Event = new Event('submit', { cancelable: true });

    await (wrapper.instance() as any).handleSubmit(event);
    expect(!!localStorage.getItem('apitoken') && history.location.pathname === '/list').toBeTruthy();
  });

  it('Changes state when the input is changed', async () => {
    const wrapper = mount(<LoginForm/>);
    const usernameInput = wrapper.find('input[name="username"]');
    const passwordInput = wrapper.find('input[name="password"]');

    (usernameInput.instance() as any).value = "test";
    usernameInput.simulate('change');

    (passwordInput.instance() as any).value = "pass";
    passwordInput.simulate('change');

    const { username, password } = (wrapper.instance().state as ILoginState);
    expect(username === "test" && password === "pass").toBeTruthy();
  });
});
