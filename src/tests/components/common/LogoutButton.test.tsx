import * as React from 'react';
import LogoutButton from '../../../components/common/LogoutButton';
import { shallow } from 'enzyme';
import '../../../utils/mocalStorage';

describe('LogoutButton component', () => {
  it('Outputs children', () => {
    const wrapper = shallow(<LogoutButton>Logout</LogoutButton>);
    expect(wrapper.text()).toEqual('Logout');
  });

  it('Removes localStorage "apitoken" when clicked', () => {
    const wrapper = shallow(<LogoutButton/>);
    localStorage.setItem('apitoken', 'test');
    wrapper.simulate('click');
    expect(!!localStorage.getItem('apitoken')).toBeFalsy();
  });

  it('Outputs className to the className', () => {
    const wrapper = shallow(<LogoutButton className="test"/>);
    expect(wrapper.hasClass('test')).toBeTruthy();
  });
});
