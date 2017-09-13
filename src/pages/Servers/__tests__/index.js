import React from 'react';
import { shallow, mount } from 'enzyme';

import { ServersComponent as Servers } from '../index';

describe('servers page', () => {
  it('should render', () => {
    const props = {
      servers: [
        { name: 'server1', distance: 20 },
        { name: 'server2', distance: 30 },
        { name: 'server3', distance: 40 },
      ],
    };

    const wrapper = shallow(<Servers {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should dispatch "loadServers" action on mount', () => {
    const props = {
      servers: [],
      serversActions: {
        loadServers: jest.fn(),
      },
    };

    mount(<Servers {...props} />);
    expect(props.serversActions.loadServers.mock.calls.length).toBe(1);
  });

  it('should dispatch logout action on logout click', () => {
    const props = {
      servers: [],
      authActions: {
        logout: jest.fn(),
      },
    };

    const wrapper = shallow(<Servers {...props} />);
    wrapper.find('.servers__logout').simulate('click');
    expect(props.authActions.logout.mock.calls.length).toBe(1);
  });
});
