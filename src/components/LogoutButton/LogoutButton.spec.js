import * as React from 'react';
import { shallow } from 'enzyme';
import { LogoutButton, LogoutWrapper } from './LogoutButton';

describe('<LogoutButton />', () => {
  it('renders', () => {
    const wrapper = shallow(<LogoutButton onClick={jest.fn()} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('matches snapshot', () => {
    const wrapper = shallow(<LogoutButton onClick={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onClick', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<LogoutButton onClick={onClick} />);
    const button = wrapper.find(LogoutWrapper);
    button.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
