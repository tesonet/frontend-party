import * as React from 'react';
import { shallow } from 'enzyme';
import { Input, IconWrapper } from './Input';

describe('<Input />', () => {
  it('renders', () => {
    const wrapper = shallow(<Input type="text" />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<Input type="text" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders icon', () => {
    const wrapper = shallow(<Input type="text" />);
    expect(wrapper.find(IconWrapper).exists()).toBeFalsy();
    const fakeIcon = <div>icon</div>;
    wrapper.setProps({
      icon: fakeIcon,
    });
    expect(wrapper.find(IconWrapper).exists()).toBeTruthy();
  });
});
