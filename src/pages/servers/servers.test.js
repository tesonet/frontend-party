import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import Servers from './index';

const serverArray = [
  {
    name: 'aa',
    distance: 34,
  },
  {
    name: 'aaa',
    distance: 4,
  },
];
const store = createMockStore({
  servers: {
    servers: serverArray,
  },
});

it('Servers should match snapshot', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Servers
        getServers={() => {}}
        servers={serverArray}
      />
    </Provider>,
  );
  expect(wrapper).toMatchSnapshot();
});
