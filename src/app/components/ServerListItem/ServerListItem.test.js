import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ServerListItem from './';

configure({ adapter: new Adapter() });

describe('<ServerList /> component', () => {
  const serverOne = {
    name: 'ServerOne',
    distance: '777'
  };

  const wrapper = shallow(<ServerListItem server={serverOne} />);

  it('Should show server name and distance', () => {
    expect(
      wrapper.contains(
        <div className="server-box">
          <div> ServerOne </div>
          <div> 777 km </div>
        </div>
      )
    ).toEqual(true);
  });
});
