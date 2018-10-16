import * as React from 'react';
import { shallow } from 'enzyme';

import ServersPage from './servers-page';

const props = {
  isAuthenticated: true,
  servers: [{ distance: 10, name: 'n1' }, { distance: 12, name: 'n2' }],
};

describe('ServerPage component:', () => {
  it('Should render', () => {
    const wrapper = shallow(<ServersPage.WrappedComponent {...props} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.length).toEqual(1);
  });

  it('Should render without servers', () => {
    const wrapper = shallow(
      <ServersPage.WrappedComponent {...props} servers={[]} />,
      {
        disableLifecycleMethods: true,
      },
    );
    expect(wrapper.find('[data-test-id="server-entry"]').length).toEqual(0);
  });

  it('Should render with servers', () => {
    const wrapper = shallow(<ServersPage.WrappedComponent {...props} />, {
      disableLifecycleMethods: true,
    });
    expect(wrapper.find('[data-test-id="server-entry"]').length).toEqual(2);
  });

  it('Should render no servers when not authenticated', () => {
    const wrapper = shallow(
      <ServersPage.WrappedComponent {...props} isAuthenticated={false} />,
      {
        disableLifecycleMethods: true,
      },
    );
    expect(wrapper.find('[data-test-id="server-entry"]').length).toEqual(0);
  });
});
