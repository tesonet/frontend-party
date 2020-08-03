import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  // Input = ({ icon, type, placeholder, value, onChange, required })
  let wrapped = shallow(<Input icon="user" type="text" value="test" onChange={() => { }} />);

  it('should render', () => {
    expect(wrapped).toBeTruthy();
  });

  it('should match latest snapshot', () => {
    expect(wrapped.debug()).toMatchSnapshot();
  });

  it('should have value passed to input', () => {
    expect(wrapped.find('input').prop('value')).toEqual('test');
  });

  it('should simulate an on change event', () => {
    const mockCallback = jest.fn();
    wrapped = shallow(<Input icon="user" type="text" value="test" onChange={mockCallback} />).find('input').simulate('change');
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
