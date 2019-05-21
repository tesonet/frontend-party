import * as React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Table from "./Table";

configure({ adapter: new Adapter() });

describe('Table component', () => {
  const items = [{ name: 'Lithuania', distance: 10 }, { name: 'Latvia', distance: 20 }];

  it('should render component correctly', () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should receive 2 servers', () => {
    const wrapper = mount(<Table servers={items} />);
    expect(wrapper.props().servers).toHaveLength(items.length);
  });

  it('should show 2 column names', () => {
    const wrapper = shallow(<Table servers={items} />);
    expect(wrapper.find('th').length).toBe(2);
  });
});