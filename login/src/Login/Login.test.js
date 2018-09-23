import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
});
it('check default state', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.state().redirect).toBe(false);
  expect(wrapper.state().username).toBe('');
  expect(wrapper.state().password).toBe('');
  expect(wrapper.state().token).toBe('');
  expect(wrapper.state().type).toBe('password');
});
describe('Username input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#username').simulate('change', {target: {id: 'username', value: 'testUser'}});
  expect(wrapper.state('username')).toEqual('testUser');
  })
})
describe('Password input', () => {
  it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('#password').simulate('change', {target: {id: 'password', value: 'randompass'}});
  expect(wrapper.state('password')).toEqual('randompass');
  })
})




