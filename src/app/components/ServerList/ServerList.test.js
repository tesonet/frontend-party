import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ServerList from './';
import ServerListItem from '../ServerListItem';

configure({ adapter: new Adapter() });

describe('<ServerListItem /> component', () => {
  const servers = [
    {
      name: 'ServerOne',
      distance: '777'
    },
    {
      name: 'ServerTwo',
      distance: '778'
    }
  ];
  const wrapper = shallow(<ServerList servers={servers} />);

  it('Should show column names', () => {
    expect(
      wrapper.contains(
        <div className="cols-title server-box">
          <div>Server</div>
          <div>Distance</div>
        </div>
      )
    ).toEqual(true);
  });

  it('Should create a list of two servers', () => {
    expect(wrapper.find(ServerListItem)).toHaveLength(2);
  });
});
