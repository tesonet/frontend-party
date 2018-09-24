import * as React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from './LoginForm';
import { Input } from '../Input/Input';

describe('<LoginForm />', () => {
  const onSubmit = jest.fn();
  const event = {
    preventDefault: jest.fn(),
  };

  it('renders', () => {
    const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders two inputs', () => {
    const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    expect(wrapper.find(Input)).toHaveLength(2);
  });

  it('calls onSubmit', () => {
    const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    const Form = wrapper.dive().find('form');
    Form.simulate('submit', event);
    expect(onSubmit).toBeCalled();
  });

  it('handles state change', () => {
    const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    const UsernameInputEvent = {
      currentTarget: {
        name: 'username',
        value: 'username',
      },
      preventDefault: jest.fn(),
    };
    wrapper.instance().handleChange(UsernameInputEvent);
    expect(wrapper.state().username).toEqual('username');
  });

  it('calls submit with correct values', () => {
    const wrapper = shallow(<LoginForm onSubmit={onSubmit} />);
    const stateValues = {
      username: 'username',
      password: 'password',
    };
    wrapper.setState(stateValues);
    const Form = wrapper.dive().find('form');
    Form.simulate('submit', event);
    expect(onSubmit).toBeCalledWith(stateValues);
  });
});
