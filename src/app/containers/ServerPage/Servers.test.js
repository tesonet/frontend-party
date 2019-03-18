import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Spinner from '../../components/Spinner';
import ServerList from '../../components/ServerList';
import { ServerPage } from './';

configure({ adapter: new Adapter() });

describe('<ServerPage /> container', () => {
  const centrifyingDiv = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  it('Should have <Spinner /> component when fetching', () => {
    let wrapper = shallow(
      <ServerPage history="randomProp" servers={[]} isFetching={true} />
    );

    expect(
      wrapper.contains(
        <div style={centrifyingDiv}>
          <Spinner spinnerType="serverSpinner" />
        </div>
      )
    ).toEqual(true);
  });

  it('Should have server <ServerList /> component after fetch', () => {
    let wrapper = shallow(
      <ServerPage
        history="randomProp"
        servers={['a', 'b']}
        isFetching={false}
      />
    );

    expect(
      wrapper.contains(
        <div style={centrifyingDiv}>
          <ServerList servers={['a', 'b']} />
        </div>
      )
    ).toEqual(true);
  });
});
