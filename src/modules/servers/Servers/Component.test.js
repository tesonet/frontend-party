import React from 'react';
import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { withStyletron } from '../../../lib/test-utils';
import Servers from './Component';

configure({ adapter: new Adapter() });

const context = { styletron: { injectRawDeclaration: () => {} } };

describe('Servers', () => {
  it('Component renders corectly', () => {
    const ServersWithProviders = withStyletron(Servers);
    const component = renderer.create(
      <ServersWithProviders servers={[]} onClickLogout={() => {}} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('All elements are rendered', () => {
    const props = {
      servers: [
        { name: 'Server1', distance: 100 },
        { name: 'Server2', distance: 100 },
      ],
      onClickLogout: () => {},
    };
    const servers = shallow(<Servers {...props} />, {
      context,
    });
    const items = servers.find('Item');
    expect(items).toHaveLength(2);
  });

  it('Logout callback is triggered', done => {
    shallow(<Servers servers={[]} onClickLogout={done} />, {
      context,
    })
      .find({ bsStyle: 'link' })
      .simulate('click');
  });
});
