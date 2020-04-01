import React from 'react';
import { shallow } from 'enzyme';
import { ServersList, Props } from './ServersList';

const defaultProps: Props = {
  isLoading: false,
  getServersListRequest: jest.fn(),
  servers: [
    {
      name: 'Lithuania #78',
      distance: 700
    },
    {
      name: 'Lithuania #31',
      distance: 555
    },
    {
      name: 'Lithuania #59',
      distance: 1327
    },
    {
      name: 'Lithuania #80',
      distance: 1937
    },
    {
      name: 'Germany #25',
      distance: 1435
    }
  ]
};

describe('Servers list', () => {
  describe('Loading state', () => {
    const loadingProps = {
      ...defaultProps,
      isLoading: true,
      servers: []
    }
    it('Contains correct components', () => {
      const wrapper = shallow(<ServersList {...loadingProps} />);
      const loader = wrapper.find('[dataTest="loader"]');
      expect(loader).toHaveLength(1);
    });
  });

  describe('Loaded state ', () => {
    it('Contains correct components', () => {
      const wrapper = shallow(<ServersList {...defaultProps} />);
      const serversHeader = wrapper.find('[data-test="servers-header"]');
      const servers = wrapper.find('[data-test="server-row"]');
      expect(serversHeader).toHaveLength(1);
      expect(servers).toHaveLength(defaultProps.servers.length);
    });
  });
});
