import React from 'react';
import { shallow } from 'enzyme';

import ServerList from '../ServerList';

const withFormik = jest.fn(); // eslint-disable-line no-unused-vars

describe('ServerList component', () => {
  const token = 'auth-token-12345';
  const list = [];
  const props = {
    store: {
      getState: () => ({
        auth: {
          token,
          isLoading: false,
          error: null,
        },
        serverList: { list },
      }),
      subscribe: jest.fn(),
      dispatch: jest.fn(),
    },
    retrieveServerList: jest.fn(),
    push: jest.fn(),
    logout: jest.fn(),
    token,
    list,
  };

  it('should render the ServerList component.', () => {
    const renderedComponent = shallow(<ServerList {...props} />).dive();

    expect(renderedComponent).toMatchSnapshot();
  });
});
