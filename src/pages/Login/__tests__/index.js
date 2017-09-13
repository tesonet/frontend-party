import React from 'react';
import { shallow, mount } from 'enzyme';

import { LoginComponent as Login } from '../index';

describe('login page', () => {
  it('should render', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger login action on form submit', () => {
    const props = {
      isUserLoggedIn: false,
      authActions: {
        login: jest.fn(),
      },
    };

    const wrapper = mount(<Login {...props} />);
    wrapper.find('button').simulate('click');
    expect(props.authActions.login.mock.calls.length).toBe(1);
  });

  it('should redirect to servers if already logged in', () => {
    const props = {
      isUserLoggedIn: true,
      history: {
        push: jest.fn(),
      },
    };

    mount(<Login {...props} />);
    expect(props.history.push.mock.calls).toEqual([['/servers']]);
  });
});
