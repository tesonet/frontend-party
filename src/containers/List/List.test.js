import * as React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import List from "./List";
import Table from '../../components/Table/Table';

configure({ adapter: new Adapter() });
jest.mock('../../services/ServersService', () => ({ GetServers: jest.fn() }));

describe('List page', () => {
  it('should render page correctly', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render logout button', () => {
    const wrapper = shallow(<List />);
    const value = wrapper.find('.list-logout').length;
    expect(value).toBe(1);
  });

  it('should render table', () => {
    const wrapper = shallow(<Table />);
    const value = wrapper.find('table').length;
    expect(value).toBe(1);
  });

  it('should render logo', () => {
    const wrapper = shallow(<List />);
    const value = wrapper.find('.list-logo').length;
    expect(value).toEqual(1);
  })

});